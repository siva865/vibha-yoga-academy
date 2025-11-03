import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X, Edit, Trash2, PlusCircle } from "lucide-react";
import axios from "axios";

import img1 from "../assets/Images/img1.jpeg";
import img2 from "../assets/Images/img2.jpeg";
import img3 from "../assets/Images/img3.jpeg";
import img4 from "../assets/Images/img4.jpeg";
import img5 from "../assets/Images/img5.jpeg";
import img6 from "../assets/Images/img6.jpeg";
import img7 from "../assets/Images/img7.jpeg";
import img8 from "../assets/Images/img8.jpeg";
import img9 from "../assets/Images/img9.jpeg";
import img10 from "../assets/Images/img10.jpeg";
import img11 from "../assets/Images/img11.jpeg";
import img12 from "../assets/Images/img12.jpeg";
import img13 from "../assets/Images/img13.jpeg";
import img14 from "../assets/Images/img14.jpeg";
import img15 from "../assets/Images/img15.jpeg";
import img16 from "../assets/Images/img16.jpeg";
import img17 from "../assets/Images/img17.jpeg";
import img18 from "../assets/Images/img18.jpeg";

export default function Gallery() {
  const staticImages = [
    img1, img2, img3, img4, img5, img6, img7,
    img8, img9, img10, img11, img12, img13,
    img14, img15, img17, img16, img18
  ];

  const [videos, setVideos] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editingVideo, setEditingVideo] = useState(null);
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);

  const isAdmin = !!localStorage.getItem("token");

  // ✅ Extract YouTube video ID safely (handles both formats)
  const extractYouTubeId = (url = "") => {
    try {
      if (url.includes("youtu.be/")) return url.split("youtu.be/")[1].split("?")[0];
      if (url.includes("v=")) return url.split("v=")[1].split("&")[0];
      return url;
    } catch {
      return "";
    }
  };

  // 🔹 Fetch all YouTube videos
  const fetchVideos = async () => {
    try {
      const res = await axios.get("https://vibha-yoga-academy.onrender.com/api/links");
      setVideos(res.data);
    } catch (err) {
      console.error("Error fetching videos:", err);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  // 🔹 Add or Edit video
  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  try {
    const token = localStorage.getItem("token");
    const config = { headers: { Authorization: `Bearer ${token}` } };

    if (editingVideo) {
      await axios.put(
        `https://vibha-yoga-academy.onrender.com/api/link/${editingVideo._id}`,
        { title, url: link },
        config
      );
      alert("✅ Video updated successfully!");
    } else {
      await axios.post(
        "https://vibha-yoga-academy.onrender.com/api/links",
        { title, url: link },
        config
      );
      alert("✅ Video added successfully!");
    }

    setShowForm(false);
    setEditingVideo(null);
    setTitle("");
    setLink("");
    fetchVideos();
  } catch (err) {
    alert("❌ Error saving video.");
  } finally {
    setLoading(false);
  }
};

  // 🔹 Delete video

  const handleDelete = async (id) => {
  if (window.confirm("Are you sure you want to delete this video?")) {
    try {
      const token = localStorage.getItem("token");
      const config = { headers: { Authorization: `Bearer ${token}` } };
      await axios.delete(`https://vibha-yoga-academy.onrender.com/api/link/${id}`, config);
      alert("🗑️ Video deleted!");
      fetchVideos();
    } catch (err) {
      alert("❌ Delete failed.");
    }
  }
};


  // 🔹 Start editing
  const handleEdit = (video) => {
    setEditingVideo(video);
    setTitle(video.title);
    setLink(video.url);
    setShowForm(true);
  };

  return (
    <div className="min-h-screen bg-[#FAE3AC] flex flex-col items-center justify-center px-4 md:px-8 py-20">
      {/* 🔹 Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-[#A20001] mb-12 text-center"
      >
        Our <span className="text-[#A20001]">Yoga Gallery</span>
      </motion.h2>

      {/* 🔹 Add Video (Admin only) */}
      {isAdmin && (
        <button
          onClick={() => setShowForm(true)}
          className="mb-8 flex items-center gap-2 bg-[#A20001] text-[#FFCA00] px-4 py-2 rounded-xl font-semibold hover:bg-[#FFCA00] hover:text-[#A20001] transition"
        >
          <PlusCircle size={22} />
          Add New Video
        </button>
      )}

      {/* 🔹 Combined Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-7xl">
        {/* 🔸 Static Images */}
        {staticImages.map((src, index) => (
          <motion.div
            key={`img-${index}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="relative overflow-hidden rounded-3xl shadow-2xl group cursor-pointer"
            onClick={() => setSelectedImage(src)}
          >
            <img
              src={src}
              alt={`Yoga pose ${index + 1}`}
              className="w-full h-64 md:h-80 object-cover transform group-hover:scale-110 transition-all duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-[#A20001]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
              <p className="text-[#FFCA00] text-lg md:text-xl font-semibold">
                Yoga Moment {index + 1}
              </p>
            </div>
          </motion.div>
        ))}

        {/* 🔸 YouTube Videos */}
        {videos.map((video, index) => (
          <motion.div
            key={`vid-${index}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="relative overflow-hidden rounded-3xl shadow-2xl group bg-black"
          >
            <iframe
              className="w-full h-64 md:h-80"
              src={`https://www.youtube.com/embed/${extractYouTubeId(video.url)}`}
              title={video.title}
              allowFullScreen
            ></iframe>

            <div className="absolute inset-0 bg-[#A20001]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center">
              <p className="text-[#FFCA00] text-lg md:text-xl font-semibold">
                {video.title}
              </p>

              {/* Admin Edit/Delete */}
              {isAdmin && (
                <div className="flex gap-4 mt-3">
                  <button
                    onClick={() => handleEdit(video)}
                    className="bg-[#FFCA00] text-[#A20001] px-3 py-1 rounded-lg font-bold hover:bg-white transition"
                  >
                    <Edit size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(video._id)}
                    className="bg-red-600 text-white px-3 py-1 rounded-lg font-bold hover:bg-red-700 transition"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* ------------------- IMAGE POPUP ------------------- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative bg-white rounded-2xl overflow-hidden shadow-2xl max-w-3xl w-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 150 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 bg-[#A20001] hover:bg-[#FFCA00] text-white hover:text-black rounded-full p-2 transition"
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </button>
              <img
                src={selectedImage}
                alt="Yoga full view"
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ------------------- VIDEO ADD/EDIT FORM ------------------- */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowForm(false)}
          >
            <motion.div
              className="relative bg-white rounded-2xl p-6 w-[90%] sm:w-[400px] shadow-xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-3 right-3 text-gray-600 hover:text-black"
              >
                <X size={24} />
              </button>

              <h2 className="text-2xl font-bold text-[#A20001] mb-4 text-center">
                {editingVideo ? "Edit Video" : "Add New Video"}
              </h2>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Video Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="border p-2 rounded-lg"
                />
                <input
                  type="text"
                  placeholder="YouTube Link"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  required
                  className="border p-2 rounded-lg"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#A20001] text-[#FFCA00] py-2 rounded-lg font-bold hover:bg-[#FFCA00] hover:text-[#A20001] transition"
                >
                  {loading ? "Saving..." : editingVideo ? "Update" : "Add"}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
