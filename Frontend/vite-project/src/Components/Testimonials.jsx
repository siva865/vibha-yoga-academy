// src/Components/Testimonials.jsx
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Priya Ramesh",
      text: "Joining Vibha Yoga Academy completely changed my lifestyle. The instructors are kind, patient, and very knowledgeable. I feel calmer and more focused every day.",
    },
    {
      name: "Karthik Subramani",
      text: "Excellent yoga sessions! The energy in each class is amazing and I’ve noticed a big improvement in my flexibility and mental clarity.",
    },
    {
      name: "Divya Suresh",
      text: "I love how the classes balance physical practice with mindfulness. The environment is peaceful and perfect for self-growth.",
    },
    {
      name: "Arun Kumar",
      text: "Very professional and friendly trainers. The breathing exercises and meditation techniques helped me overcome stress and sleep better.",
    },
    {
      name: "Sneha Raj",
      text: "One of the best yoga centers in Chennai! The trainers genuinely care about each student’s progress and always motivate us to do our best.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E8F3FA] to-[#ffffff] flex flex-col items-center justify-center px-6 py-16">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-[#014F99] mb-10 text-center"
      >
        What Our Students Say
      </motion.h2>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-[#E9EAEC] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
          >
            <p className="text-gray-700 italic mb-4">“{t.text}”</p>
            <h4 className="text-[#014F99] font-semibold text-lg">{t.name}</h4>
            <div className="mt-3 text-[#F16824] text-sm font-medium">
              ★★★★★
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
