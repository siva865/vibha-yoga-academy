import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import logoLeft from "../assets/Images/logo.jpeg";
import logoRight from "../assets/Images/logo2.jpeg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // ✅ Check login state from localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsLoggedIn(true);
  }, []);

  // 🔹 Handle Admin Login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        username,
        password,
      });

      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        setIsLoggedIn(true);
        setShowLogin(false);
        alert("✅ Login Successful!");
      } else {
        setError("Invalid credentials");
      }
    } catch (err) {
      setError("Login failed. Please try again.");
    }
  };

  // 🔹 Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    alert("👋 Logged out successfully!");
  };

  return (
    <nav className="flex items-center justify-between px-4 sm:px-6 md:px-10 py-4 bg-[#A20001] text-[#FFCA00] fixed w-full top-0 z-50">
      {/* 🔹 Left Section */}
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex items-center justify-center space-x-3"
      >
        <img
          src={logoLeft}
          alt="Left Logo"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-[#FFCA00] object-cover"
        />

        <div className="flex flex-col items-center text-center leading-tight">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-wide text-[#FFCA00]">
            VIBHA YOGA ACADEMY
          </h1>
          <p className="text-[10px] sm:text-xs md:text-sm text-[#FFCA00] font-medium tracking-widest">
            YOGAASANA | PRANAYAMA | DHYANA
          </p>
        </div>

        <img
          src={logoRight}
          alt="Right Logo"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-[#FFCA00] object-cover"
        />
      </motion.div>

      {/* 🔹 Desktop Menu */}
      <div className="hidden md:flex space-x-8 lg:space-x-10 font-semibold text-base lg:text-lg">
        {["Home", "About", "Services", "Testimonials", "Gallery", "Contact"].map(
          (item) => (
            <motion.a
              key={item}
              href={`/${item.toLowerCase()}`}
              className="relative group text-[#FFCA00] transition-all duration-300"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FFCA00] transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          )
        )}
        {/* 🔐 Login / Logout Button */}
        {!isLoggedIn ? (
          <button
            onClick={() => setShowLogin(true)}
            className="bg-[#FFCA00] text-[#A20001] px-4 py-2 rounded-lg font-bold hover:bg-white transition"
          >
            Login
          </button>
        ) : (
          <button
            onClick={handleLogout}
            className="bg-white text-[#A20001] px-4 py-2 rounded-lg font-bold hover:bg-[#FFCA00] hover:text-[#A20001] transition"
          >
            Logout
          </button>
        )}
      </div>

      {/* 🔹 Mobile Menu Button */}
      <button
        className="md:hidden text-4xl text-[#FFCA00] focus:outline-none"
        onClick={() => setOpen(!open)}
      >
        {open ? <FiX /> : <FiMenu />}
      </button>

      {/* 🔹 Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 70, damping: 15 }}
            className="absolute top-0 left-0 w-4/5 h-screen bg-[#A20001] flex flex-col items-start p-8 space-y-6 md:hidden"
          >
            {["Home", "About", "Services", "Testimonials", "Gallery", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-[#FFCA00] text-xl font-semibold hover:text-[#FFCA00] transition-all duration-300"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </a>
              )
            )}
            {!isLoggedIn ? (
              <button
                onClick={() => {
                  setShowLogin(true);
                  setOpen(false);
                }}
                className="bg-[#FFCA00] text-[#A20001] px-4 py-2 rounded-lg font-bold hover:bg-white transition"
              >
                Admin Login
              </button>
            ) : (
              <button
                onClick={() => {
                  handleLogout();
                  setOpen(false);
                }}
                className="bg-white text-[#A20001] px-4 py-2 rounded-lg font-bold hover:bg-[#FFCA00] transition"
              >
                Logout
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🔹 Login Popup */}
      <AnimatePresence>
        {showLogin && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl p-8 w-[90%] sm:w-[400px] shadow-xl text-center"
            >
              <h2 className="text-2xl font-bold text-[#A20001] mb-4">Admin Login</h2>
              {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
              <form onSubmit={handleLogin} className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Username"
                  className="border p-2 rounded-lg"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="border p-2 rounded-lg"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="bg-[#A20001] text-[#FFCA00] py-2 rounded-lg font-bold"
                >
                  Login
                </button>
              </form>
              <button
                onClick={() => setShowLogin(false)}
                className="mt-4 text-sm text-gray-500 hover:text-gray-700"
              >
                Cancel
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
