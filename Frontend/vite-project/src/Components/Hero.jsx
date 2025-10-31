import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [showBenefits, setShowBenefits] = useState(false);

  return (
    <section className="relative flex flex-col items-center justify-center text-center w-full px-4 py-16 sm:py-20 bg-gradient-to-br from-[#F7F9FC] via-white to-[#F7F9FC] overflow-hidden">
      {/* 🔸 Animated Gradient Overlay */}
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-[#F16824]/20 via-[#014F99]/20 to-[#F16824]/20"
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

      {/* 🔸 Main Content Box */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-white/90 p-8 rounded-2xl shadow-lg max-w-3xl border-l-4 border-[#F16824]"
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#014F99]"
        >
          Hello! This is{" "}
          <span className="text-[#F16824]">Vibha Yoga Academy</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1.2 }}
          className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8"
        >
          (Since 1999) serving in the field of Yoga for Health and Peace. <br />
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
            className="px-8 py-3 bg-[#F16824] text-white rounded-full font-semibold shadow-md hover:bg-[#014F99] transition duration-300"
          >
            View Services
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowBenefits(true)}
            className="px-8 py-3 bg-[#014F99] text-white rounded-full font-semibold shadow-md hover:bg-[#F16824] transition duration-300"
          >
            Benefits
          </motion.button>
        </motion.div>
      </motion.div>

      {/* 🔸 Benefits Popup Modal */}
      <AnimatePresence>
        {showBenefits && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowBenefits(false)}
            ></motion.div>

            {/* Popup Box */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center px-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
            >
              <div className="bg-white p-8 rounded-2xl shadow-2xl text-center w-full max-w-md relative">
                <h2 className="text-2xl font-bold text-[#014F99] mb-4">
                  Benefits of Yoga
                </h2>
                <ul className="text-gray-700 text-left mb-6 list-disc list-inside leading-relaxed">
                  <li>Improves flexibility, balance, and posture.</li>
                  <li>Reduces stress and anxiety through mindful breathing.</li>
                  <li>Boosts energy and enhances mental clarity.</li>
                  <li>Promotes overall well-being and inner peace.</li>
                </ul>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowBenefits(false)}
                  className="px-6 py-2 bg-[#F16824] text-white rounded-full font-semibold shadow-md hover:bg-[#014F99] transition duration-300"
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
