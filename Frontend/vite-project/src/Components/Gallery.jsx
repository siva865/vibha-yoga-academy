// src/Components/Gallery.jsx
import { motion } from "framer-motion";
import img1 from "../assets/Images/img1.jpeg";
import img2 from "../assets/Images/img2.jpeg";
import img3 from "../assets/Images/img3.jpeg";
import img4 from "../assets/Images/img4.jpeg";
import img5 from "../assets/Images/img5.jpeg";
import img6 from "../assets/Images/img6.jpeg";
import img7 from "../assets/Images/img7.jpeg";

export default function Gallery() {
  const images = [img1, img2, img3, img4, img5, img6, img7];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#ffffff] to-[#E8F3FA] flex flex-col items-center justify-center px-6 py-20">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-[#014F99] mb-12 text-center"
      >
        Our <span className="text-[#F16824]">Yoga Gallery</span>
      </motion.h2>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative overflow-hidden rounded-3xl shadow-2xl group cursor-pointer"
          >
            {/* Image */}
            <img
              src={src}
              alt={`Yoga pose ${index + 1}`}
              className="w-full h-80 object-cover transform group-hover:scale-115 transition-all duration-700 ease-in-out"
            />

            {/* Overlay effect */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
              <p className="text-white text-xl font-semibold">
                Yoga Moment {index + 1}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
