import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/Images/logo.jpeg"; // 🔸 your local logo path

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-4 sm:px-6 md:px-10 py-4 bg-white text-[#014F99] shadow-lg fixed w-full top-0 z-50">
      {/* 🔹 Logo and Academy Name */}
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-start space-y-1"
      >
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Vibha Yoga Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-md border-2 border-[#014F99]"
          />
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-wide leading-tight">
            VIBHA YOGA ACADEMY
          </h1>
        </div>
        <p className="text-[10px] sm:text-sm md:text-base text-[#F16824] font-medium tracking-widest ml-1">
          YOGAASANA | PRANAYAMA | DHYANA
        </p>
      </motion.div>

      {/* 🔹 Desktop Menu */}
      <div className="hidden md:flex space-x-8 lg:space-x-10 font-semibold text-base lg:text-lg">
        {["Home", "About", "Services", "Testimonials", "Gallery", "Contact"].map(
          (item) => (
            <motion.a
              key={item}
              href={`/${item.toLowerCase()}`}
              className="relative group text-[#014F99] transition-all duration-300"
            >
              {item}
              {/* Hover underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#F16824] transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          )
        )}
      </div>

      {/* 🔹 Mobile Menu Button */}
      <button
        className="md:hidden text-4xl text-[#014F99] focus:outline-none"
        onClick={() => setOpen(!open)}
      >
        {open ? <FiX /> : <FiMenu />}
      </button>

      {/* 🔹 Mobile Menu Animation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 70, damping: 15 }}
            className="absolute top-0 left-0 w-4/5 h-screen bg-white flex flex-col items-start p-8 space-y-6 md:hidden shadow-2xl"
          >
            {[
              "Home",
              "About",
              "Services",
              "Testimonials",
              "Gallery",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-[#014F99] text-xl font-semibold hover:text-[#F16824] transition-all duration-300"
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
