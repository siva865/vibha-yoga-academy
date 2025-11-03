// src/Components/Contact.jsx
import { motion } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const phone = "9940098980";
  const whatsapp = "9962272688";
  const message = encodeURIComponent(
    "Hello! I would like to know more about your yoga classes."
  );
  const mapLink = "https://maps.app.goo.gl/hxudWZwStq7pv6Xx8";

  return (
    <div className="min-h-screen bg-[#FAE3AC] flex flex-col items-center justify-center px-6 py-16">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-[#A20001] mb-10 text-center"
      >
        Contact <span className="text-[#A20001]">Vibha Yoga Academy</span>
      </motion.h2>

      {/* Info Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-white/80 p-8 rounded-2xl shadow-xl w-full max-w-4xl text-center border-2 border-[#FFCA00]"
      >
        <h3 className="text-2xl font-semibold text-[#A20001] mb-6">
          Get in Touch
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">
          {/* Address */}
          <div className="flex flex-col items-center">
            <FaMapMarkerAlt className="text-[#A20001] text-4xl mb-3" />
            <p className="font-medium text-lg leading-relaxed max-w-xs text-[#A20001]">
              F1, No.16, 1st Street, Postal Audit Colony, <br />
              Virugambakkam, Chennai - 600 092.
            </p>
            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A20001] font-semibold mt-3 hover:text-[#FFCA00]"
            >
              View on Google Map
            </a>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center">
            <FaPhoneAlt className="text-[#A20001] text-4xl mb-3" />
            <a
              href={`tel:${phone}`}
              className="text-lg text-[#A20001] font-semibold hover:text-[#FFCA00] transition-all"
            >
              {phone}
            </a>
            <p className="text-[#A20001] mt-1">Call Us</p>
          </div>

          {/* WhatsApp */}
          <div className="flex flex-col items-center">
            <FaWhatsapp className="text-[#A20001] text-4xl mb-3" />
            <a
              href={`https://wa.me/${whatsapp}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-[#A20001] font-semibold hover:text-[#FFCA00] transition-all"
            >
              {whatsapp}
            </a>
            <p className="text-[#A20001] mt-1">WhatsApp Us</p>
          </div>
        </div>
      </motion.div>

      {/* Embedded Google Map */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-10 w-full max-w-4xl rounded-2xl overflow-hidden shadow-lg border-4 border-[#A20001]"
      >
        <iframe
          title="Vibha Yoga Academy Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.274222520273!2d80.19619407507591!3d13.04952319080835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267dbb1f1f18b%3A0x4bb9d4fef43e3e72!2sPostal%20Audit%20Colony%2C%20Virugambakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600092!5e0!3m2!1sen!2sin!4v1730178800000!5m2!1sen!2sin"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          className="border-none w-full h-[400px]"
        ></iframe>
      </motion.div>
    </div>
  );
}
