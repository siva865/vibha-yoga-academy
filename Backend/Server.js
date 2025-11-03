import express from "express";
import Razorpay from "razorpay";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// ==================== 🔗 MONGO CONNECTION ====================
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Error:", err));

// ==================== 🎥 LINK SCHEMA ====================
const linkSchema = new mongoose.Schema({
  title: String,
  url: String,
  uploadedAt: { type: Date, default: Date.now },
});

const Link = mongoose.model("Link", linkSchema);

// ==================== 💳 RAZORPAY ====================
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET_ID,
});

app.post("/api/create-order", async (req, res) => {
  try {
    const { amount } = req.body;
    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    };

    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ==================== 🔒 ADMIN LOGIN SYSTEM ====================
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  if (username === process.env.ADMIN_USER && password === process.env.ADMIN_PASS) {
    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: "2h" });
    res.json({ success: true, token });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

function verifyToken(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(403).json({ message: "No token provided" });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: "Invalid or expired token" });
    req.user = decoded;
    next();
  });
}

// ==================== 🎥 YOUTUBE LINKS CRUD ====================

// 🟢 CREATE (Upload new link) - Admin only
app.post("/api/upload", verifyToken, async (req, res) => {
  try {
    const { title, url } = req.body;
    if (!title || !url) {
      return res.status(400).json({ success: false, message: "Title and URL are required" });
    }

    const newLink = new Link({ title, url });
    await newLink.save();
    res.json({ success: true, message: "Link uploaded successfully", data: newLink });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 🟢 CREATE (Public - upload new link for frontend)
app.post("/api/links", async (req, res) => {
  try {
    const { title, url } = req.body;
    if (!title || !url) {
      return res.status(400).json({ success: false, message: "Title and URL are required" });
    }

    const newLink = new Link({ title, url });
    await newLink.save();
    res.json({ success: true, message: "Link added successfully", data: newLink });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 🟡 UPDATE (Edit existing link) - Admin only
app.put("/api/link/:id", verifyToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { title, url } = req.body;
    const updated = await Link.findByIdAndUpdate(
      id,
      { title, url },
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ success: false, message: "Link not found" });
    res.json({ success: true, message: "Link updated successfully", data: updated });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 🔴 DELETE (Remove a link) - Admin only
app.delete("/api/link/:id", verifyToken, async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Link.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ success: false, message: "Link not found" });
    res.json({ success: true, message: "Link deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// ⚪ GET (Public - all links)
app.get("/api/links", async (req, res) => {
  try {
    const links = await Link.find().sort({ uploadedAt: -1 });
    res.json(links);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ==================== ROOT ====================
app.get("/", (req, res) => {
  res.send("Yoga School Backend + Razorpay + Admin Login + YouTube CRUD Running...");
});

// ==================== SERVER ====================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
