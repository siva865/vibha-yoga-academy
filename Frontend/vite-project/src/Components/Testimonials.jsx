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
    {
      name: "Lakshmi Iyer",
      text: "I joined during my postnatal phase and the gentle sessions helped me recover both physically and mentally. Truly grateful for the care and guidance.",
    },
    {
      name: "Rahul Nair",
      text: "Every session leaves me refreshed and positive. The way they teach Pranayama and meditation is just brilliant!",
    },
    {
      name: "Anjali Sharma",
      text: "The instructors ensure every student feels comfortable. My posture and confidence have both improved tremendously.",
    },
    {
      name: "Meera Chandran",
      text: "I love the mix of traditional yoga and modern techniques here. The peaceful environment makes me look forward to every session!",
    },
    {
      name: "Sathish Kumar",
      text: "Highly recommended! Whether you’re a beginner or experienced, Vibha Yoga Academy provides a space to grow, heal, and transform.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E8F3FA] to-[#ffffff] flex flex-col items-center justify-center px-6 py-20">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-[#014F99] mb-12 text-center leading-snug"
      >
        What Our <span className="text-[#F16824]">Students Say</span>
      </motion.h2>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center flex flex-col justify-between"
          >
            <p className="text-gray-700 italic mb-6 leading-relaxed">
              “{t.text}”
            </p>
            <div>
              <h4 className="text-[#014F99] font-semibold text-lg mb-2">
                {t.name}
              </h4>
              <div className="text-[#F16824] text-base font-medium">
                ★★★★★
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-12 text-gray-600 text-center text-lg max-w-2xl"
      >
        Our students are at the heart of everything we do — every story is a
        reflection of growth, balance, and transformation.
      </motion.p>
    </div>
  );
}


