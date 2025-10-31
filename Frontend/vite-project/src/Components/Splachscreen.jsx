// src/components/LogoAnimation.jsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/Images/logo.jpeg"; // adjust path if needed

export default function LogoAnimation({ onFinish }) {
  const [showSplash, setShowSplash] = useState(true);
  const location = useLocation();

  // splash screen hide after 5 sec
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
      if (onFinish) onFinish();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  // if splash visible
  if (showSplash) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#014F99] z-50">
        <motion.img
          src={logo}
          alt="Yoga Logo"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: [1, 1.3, 1], opacity: 1 }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="w-36 h-36 md:w-52 md:h-52 rounded-full border-4 border-white shadow-2xl"
        />
      </div>
    );
  }

  // after splash hidden → show small animated logo (navbar use or page change)
  return (
    <motion.img
      key={location.pathname} // re-animate on every route change
      src={logo}
      alt="Vibha Yoga Logo"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: [1, 1.15, 1], opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="w-10 h-10 md:w-12 md:h-12 rounded-full shadow-md border-2 border-white"
    />
  );
}
