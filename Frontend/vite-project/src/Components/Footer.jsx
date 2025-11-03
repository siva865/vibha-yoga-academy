import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#A20001] text-[#FFCA00] text-center py-12">
      <div className="container mx-auto px-6 flex flex-col items-center space-y-6">
        {/* Academy Title */}
        <h2 className="text-2xl md:text-3xl font-bold tracking-wide">
          Vibha Yoga Academy
        </h2>

        {/* Mission / Short Description */}
        <p className="max-w-2xl text-sm md:text-base leading-relaxed opacity-90">
          At Vibha Yoga Academy, we guide individuals on a journey of inner
          peace, balance, and wellness through <strong>Yogaasana</strong>,{" "}
          <strong>Pranayama</strong>, and <strong>Dhyana</strong>. Join us to
          awaken your mind and body with harmony and awareness.
        </p>

        {/* Social Media Links */}
        <div className="flex space-x-8 mt-4">
          <a
            href="https://www.facebook.com/share/1DV2iH1Trv/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-white transition-all duration-300 transform hover:scale-110"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.instagram.com/vibhayogaacademy?igsh=d2wyMzdlNDIwdnVo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-white transition-all duration-300 transform hover:scale-110"
          >
            <FaInstagram />
          </a>

          <a
            href="https://youtube.com/@vibhayogaacademy?si=dM9NyWe8On2RVJdD"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-white transition-all duration-300 transform hover:scale-110"
          >
            <FaYoutube />
          </a>

          <a
            href="https://wa.me/919962272688?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20yoga%20classes."
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-white transition-all duration-300 transform hover:scale-110"
          >
            <FaWhatsapp />
          </a>

          <a
            href="mailto:vibhayogaacademy@gmail.com"
            className="text-3xl hover:text-white transition-all duration-300 transform hover:scale-110"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Divider Line */}
        <div className="w-16 h-[2px] bg-[#FFCA00] my-4"></div>

        {/* Address and Contact Info */}
        <div className="text-sm md:text-base opacity-90">
          <p>
            F1, No.16, 1st Street, Postal Audit Colony, Virugambakkam, Chennai -
            600 092
          </p>
          <p className="mt-1">📞 99400 98980 | 📱 99622 72688 (WhatsApp)</p>
        </div>

        {/* Copyright */}
        <p className="text-xs md:text-sm opacity-80 mt-4">
          © {new Date().getFullYear()} Vibha Yoga Academy — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
