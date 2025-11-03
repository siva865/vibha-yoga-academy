import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";

// 🔸 Import your local images
import templeImg from "../assets/Images/temple.jpeg"; // Swami photo
import bgImg from "../assets/Images/bg.jpeg"; // Background image for Home

export default function Home() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(true);
  const [showBenefits, setShowBenefits] = useState(false);

  // 🔸 Auto-close popup after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // 🔸 Fix white-space issue
  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.overflowX = "hidden";
    return () => {
      document.body.style.margin = "";
      document.body.style.padding = "";
      document.body.style.overflowX = "";
    };
  }, []);

  return (
    <section
      className="relative flex flex-col items-center justify-center text-center w-full min-h-screen px-4 py-16 sm:py-20 overflow-hidden"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 🔸 Animated Gradient Overlay */}
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-[#A20001]/30 via-[#FFCA00]/30 to-[#A20001]/30"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 15,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{
          backgroundSize: "300% 300%",
        }}
      ></motion.div>

      {/* 🔸 Swami Photo Popup */}
      <AnimatePresence>
        {showPopup && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPopup(false)}
            ></motion.div>

            {/* Popup */}
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 px-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative bg-white p-6 rounded-2xl shadow-2xl text-center max-w-sm w-full">
                {/* ❌ Close button */}
                <button
                  onClick={() => setShowPopup(false)}
                  className="absolute top-3 right-3 text-gray-600 hover:text-red-600 transition"
                >
                  <X size={24} />
                </button>

                {/* Photo */}
                <img
                  src={templeImg}
                  alt="Arulmigu Marudhappar Swami"
                  className="w-64 h-64 object-cover rounded-xl mx-auto shadow-lg border-4 border-yellow-400"
                />

                {/* Text */}
                <p className="mt-4 text-lg font-semibold text-[#A20001] leading-snug">
                  Arulmigu Marudhappar Swami,
                  <br />
                  Sivagangai, Tamil Nadu
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* 🔸 Main Content Box */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-[#FFCA00]/10 p-8 rounded-2xl border-l-4 border-[#A20001] shadow-lg max-w-3xl z-10"
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#A20001]"
        >
          Hello! This is{" "}
          <span className="text-[#FFCA00]">Vibha Yoga Academy</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1.2 }}
          className="text-base sm:text-lg text-[#A20001] leading-relaxed mb-8"
        >
          (Since 1999) serving in the field of Yoga for Health and Peace.
          <br />
          The Founder is a trainer of Sivananda Yoga with years of vast
          experience and practice. <br />
          <br />
          We hope you are well and doing exercise/yoga regularly. <br />
          We are taking Yoga Classes with personal attention and group classes.
          <br />
          <br />
          If you are interested in participating in the training which can be
          conducted at your convenience at your home or any designated place.
        </motion.p>

        {/* 🔸 Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/service")}
            className="px-8 py-3 bg-[#A20001] text-[#FFCA00] rounded-full font-semibold shadow-md hover:bg-[#FFCA00] hover:text-[#A20001] transition duration-300"
          >
            View Services
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowBenefits(true)}
            className="px-8 py-3 bg-[#FFCA00] text-[#A20001] rounded-full font-semibold shadow-md hover:bg-[#A20001] hover:text-[#FFCA00] transition duration-300"
          >
            Benefits
          </motion.button>
        </motion.div>
      </motion.div>

      {/* 🔸 Benefits Popup Modal */}
      <AnimatePresence>
        {showBenefits && (
          <>
            <motion.div
              className="fixed inset-0 bg-[#A20001]/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowBenefits(false)}
            ></motion.div>

            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center px-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
            >
              <div className="bg-[#FFCA00] p-8 rounded-2xl shadow-2xl text-center w-full max-w-md relative">
                <h2 className="text-2xl font-bold text-[#A20001] mb-4">
                  Benefits of Yoga
                </h2>
                <ul className="text-[#A20001] text-left mb-6 list-disc list-inside leading-relaxed">
                  <li>Improves flexibility, balance, and posture.</li>
                  <li>
                    Reduces stress and anxiety through mindful breathing.
                  </li>
                  <li>Boosts energy and enhances mental clarity.</li>
                  <li>Promotes overall well-being and inner peace.</li>
                </ul>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowBenefits(false)}
                  className="px-6 py-2 bg-[#A20001] text-[#FFCA00] rounded-full font-semibold shadow-md hover:bg-[#FFCA00] hover:text-[#A20001] transition duration-300"
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
