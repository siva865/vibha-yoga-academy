// src/Components/Service.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaLeaf,
  FaHeartbeat,
  FaChild,
  FaDumbbell,
  FaUserMd,
  FaHome,
  FaFemale,
  FaRunning,
  FaHandsHelping,
  FaSpa,
} from "react-icons/fa";

export default function Service() {
  const razorpayLink = "https://pages.razorpay.com/pl_RaSEciMAIWbGnw/view";

  const services = [
    {
      title: "Sivananda Beginners Yoga",
      desc: "Learn the foundations of classical Sivananda Yoga — perfect for newcomers seeking balance, flexibility, and mindfulness.",
      icon: <FaLeaf className="text-[#FFCA00] text-4xl mb-4" />,
    },
    {
      title: "Regular Yoga Course",
      desc: "Ongoing sessions for regular practitioners to deepen posture alignment, breathing, and meditation habits.",
      icon: <FaRunning className="text-[#FFCA00] text-4xl mb-4" />,
    },
    {
      title: "Weight Reduction Course",
      desc: "Specially structured yoga techniques to burn fat naturally and tone your body through consistent practice.",
      icon: <FaDumbbell className="text-[#FFCA00] text-4xl mb-4" />,
    },
    {
      title: "Diabetes Yoga Classes",
      desc: "Scientific yoga postures and breathing techniques designed to help control and balance blood sugar levels.",
      icon: <FaHeartbeat className="text-[#FFCA00] text-4xl mb-4" />,
    },
    {
      title: "Bone Strengthening Yoga",
      desc: "Yoga for joint mobility, bone density, and muscular endurance — perfect for maintaining long-term health.",
      icon: <FaHandsHelping className="text-[#FFCA00] text-4xl mb-4" />,
    },
    {
      title: "Pain Relief Yoga",
      desc: "Therapeutic yoga sessions for neck, back, and body pain relief using safe, guided postures and pranayama.",
      icon: <FaUserMd className="text-[#FFCA00] text-4xl mb-4" />,
    },
    {
      title: "Children’s Advanced Yoga",
      desc: "Fun yet powerful yoga classes to improve flexibility, concentration, and self-confidence among children.",
      icon: <FaChild className="text-[#FFCA00] text-4xl mb-4" />,
    },
    {
      title: "Ladies & Housewives Basic Course",
      desc: "Gentle and restorative sessions focusing on stress relief, hormonal balance, and self-care for women.",
      icon: <FaFemale className="text-[#FFCA00] text-4xl mb-4" />,
    },
    {
      title: "General Yoga Classes",
      desc: "Holistic yoga practice combining asanas, pranayama, and relaxation for all levels and ages.",
      icon: <FaSpa className="text-[#FFCA00] text-4xl mb-4" />,
    },
    {
      title: "Doorstep Yoga (Chennai Only)",
      desc: "Learn and practice yoga from the comfort of your home — personal sessions conducted at your location.",
      icon: <FaHome className="text-[#FFCA00] text-4xl mb-4" />,
    },
    // 🌟 Newly Added Astanga Yoga Services
    {
      title: "Online Astanga Yoga for Kids",
      desc: "Engaging and mindful sessions that help children build strength, focus, and flexibility through fun Astanga practices.",
      icon: <FaChild className="text-[#FFCA00] text-4xl mb-4" />,
    },
    {
      title: "Online Astanga Yoga 12 Days Course",
      desc: "A structured 12-day online course to experience the benefits of traditional Astanga Yoga from home.",
      icon: <FaSpa className="text-[#FFCA00] text-4xl mb-4" />,
    },
    {
      title: "Online Astanga Yoga 30 Days Course",
      desc: "Deepen your Astanga Yoga practice with this immersive 30-day guided online training for complete mind-body harmony.",
      icon: <FaLeaf className="text-[#FFCA00] text-4xl mb-4" />,
    },
    {
      title: "Online Teacher Training Course",
      desc: "Certified online TTC program covering yoga philosophy, anatomy, asanas, and teaching techniques — ideal for aspiring instructors.",
      icon: <FaHandsHelping className="text-[#FFCA00] text-4xl mb-4" />,
    },
    {
      title: "Online Advanced Teacher Training Course",
      desc: "Advanced-level TTC to master sequencing, adjustments, and deep philosophy for professional yoga teachers.",
      icon: <FaUserMd className="text-[#FFCA00] text-4xl mb-4" />,
    },
  ];

  return (
    <section className="pt-24 pb-16 px-6 min-h-screen bg-[#FAE3AC] text-center">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-[#A20001] mb-10"
      >
        Our <span className="text-[#A20001]">Classes</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-[#A20001] max-w-2xl mx-auto mb-12 text-lg"
      >
        Explore a variety of yoga classes tailored for beginners, intermediate,
        and advanced learners.
        <br />
        Choose what suits your lifestyle and health goals best.
      </motion.p>

      {/* Service Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-[#A20001] p-8 rounded-3xl shadow-lg hover:shadow-2xl border-t-4 border-[#FFCA00] flex flex-col items-center text-center transition-all duration-500"
          >
            {s.icon}
            <h3 className="text-2xl font-semibold text-[#FFCA00] mb-3">
              {s.title}
            </h3>
            <p className="text-[#FFCA00] text-base mb-6">{s.desc}</p>
            <button
              onClick={() => window.open(razorpayLink, "_blank")}
              className="bg-[#FFCA00] text-[#A20001] px-6 py-2 rounded-full font-semibold hover:bg-[#A20001] hover:text-[#FFCA00] border-2 border-[#FFCA00] transition-all duration-300"
            >
              Book Now
            </button>
          </motion.div>
        ))}
      </div>

      {/* Course Levels */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="max-w-4xl mx-auto mt-16 bg-[#A20001] rounded-2xl p-8 border-l-4 border-[#FFCA00] shadow-md"
      >
        <h3 className="text-2xl font-bold text-[#FFCA00] mb-3">
          Course Levels
        </h3>
        <p className="text-[#FFCA00] text-lg">
          <span className="font-semibold">Beginners</span> – Learn basics and foundational poses.
          <br />
          <span className="font-semibold">Intermediate</span> – Enhance flexibility and control through progressive postures.
          <br />
          <span className="font-semibold">Advanced</span> – Master balance, endurance, and advanced breathing practices.
          <br />
          <span className="font-semibold">Regular</span> – Continuous classes for maintaining health and peace.
        </p>
      </motion.div>
    </section>
  );
}
