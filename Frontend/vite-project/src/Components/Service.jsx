// src/Components/Service.jsx
import React, { useState } from "react";
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
  const whatsappNumber = "9962239888";

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
      title: "Children's Advanced Yoga",
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

  const timings = [
    "05:15 a.m. to 06:15 a.m.",
    "06:15 a.m. to 07:15 a.m.",
    "07:15 a.m. to 08:15 a.m.",
    "08:15 a.m. to 09:15 a.m.",
    "09:30 a.m. to 10:30 a.m.",
    "04:00 p.m. to 05:00 p.m.",
    "05:15 p.m. to 06:15 p.m.",
    "06:15 p.m. to 07:15 p.m.",
    "07:15 p.m. to 08:15 p.m.",
  ];

  const weeklyTypes = [
    "Weekly: 03 classes (40 Minutes)",
    "Weekly:  02 classes (60 Minutes)",
  ];

  const categories = [
    "Adults (14+ years) — ₹3600",
    "Kids (4–14 years) — ₹1500",
    "Kids (6 months) — ₹6000",
  ];

  const sivanandaWeekly = [
    "Weekly: 03 classes (60 Minutes)",
    "Weekly:  02 classes (90 Minutes)",
  ];

  const sivanandaCategory = [
    "Adults (14+ years) — ₹6000",
    "Kids (4–14 years) — ₹3600",
  ];

  // 🆕 NEW: Doorstep Yoga Pricing Options
  const doorstepWeekly = [
    "Weekly: 03 classes (60 Minutes) - ₹12000",
    "Weekly: 02 classes (60 Minutes) - ₹8000",
  ];

  const [showGeneralModal, setShowGeneralModal] = useState(false);
  const [showSivanandaModal, setShowSivanandaModal] = useState(false);
  const [showDoorstepModal, setShowDoorstepModal] = useState(false); // 🆕 NEW STATE
  const [selectedService, setSelectedService] = useState("");

  const [generalForm, setGeneralForm] = useState({
    name: "",
    email: "",
    phone: "",
    timing: timings[0],
    weekly: weeklyTypes[0],
    category: categories[0],
  });

  const [sivanandaForm, setSivanandaForm] = useState({
    name: "",
    email: "",
    phone: "",
    timing: timings[0],
    weekly: sivanandaWeekly[0],
    category: sivanandaCategory[0],
  });

  // 🆕 NEW: Doorstep Yoga Form State
  const [doorstepForm, setDoorstepForm] = useState({
    name: "",
    email: "",
    phone: "",
    timing: timings[0],
    weekly: doorstepWeekly[0],
    address: "", // 🆕 NEW: Address field for doorstep service
  });

  const [formError, setFormError] = useState("");

  // 🟢 Handle Book Now - UPDATED
  const handleBookNow = (title) => {
    if (title === "Sivananda Beginners Yoga") {
      setSelectedService(title);
      setShowSivanandaModal(true);
      return;
    }
    if (title === "Doorstep Yoga (Chennai Only)") {
      setSelectedService(title);
      setShowDoorstepModal(true); // 🆕 NEW: Show doorstep modal
      return;
    }
    if (title === "Online Astanga Yoga for Kids") {
      window.open(razorpayLink, "_blank");
      return;
    }

    setSelectedService(title);
    setShowGeneralModal(true);
  };

  // 🟢 General Form Submit
  const handleGeneralSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, timing, weekly, category } = generalForm;
    if (!name.trim() || !email.trim() || !phone.trim()) {
      setFormError("Please fill all the fields.");
      return;
    }
    const message = `${selectedService} Booking\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nWeekly: ${weekly}\nCategory: ${category}\nPreferred Timing: ${timing}`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encoded}`, "_blank");
    setShowGeneralModal(false);
    setGeneralForm({
      name: "",
      email: "",
      phone: "",
      timing: timings[0],
      weekly: weeklyTypes[0],
      category: categories[0],
    });
  };

  // 🟢 Sivananda Form Submit
  const handleSivanandaSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, timing, weekly, category } = sivanandaForm;
    if (!name.trim() || !email.trim() || !phone.trim()) {
      setFormError("Please fill all the fields.");
      return;
    }
    const message = `Sivananda Beginners Yoga Course Booking\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nWeekly: ${weekly}\nCategory: ${category}\nPreferred Timing: ${timing}`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encoded}`, "_blank");
    setShowSivanandaModal(false);
    setSivanandaForm({
      name: "",
      email: "",
      phone: "",
      timing: timings[0],
      weekly: sivanandaWeekly[0],
      category: sivanandaCategory[0],
    });
  };

  // 🆕 NEW: Doorstep Yoga Form Submit
  const handleDoorstepSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, timing, weekly, address } = doorstepForm;
    if (!name.trim() || !email.trim() || !phone.trim() || !address.trim()) {
      setFormError("Please fill all the fields including address.");
      return;
    }
    const message = `Doorstep Yoga (Chennai Only) Booking\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}\nPackage: ${weekly}\nPreferred Timing: ${timing}`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encoded}`, "_blank");
    setShowDoorstepModal(false);
    setDoorstepForm({
      name: "",
      email: "",
      phone: "",
      timing: timings[0],
      weekly: doorstepWeekly[0],
      address: "",
    });
  };

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

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-[#A20001] p-8 rounded-3xl shadow-lg border-t-4 border-[#FFCA00] flex flex-col items-center text-center transition-all"
          >
            {s.icon}
            <h3 className="text-2xl font-semibold text-[#FFCA00] mb-3">
              {s.title}
            </h3>
            <p className="text-[#FFCA00] whitespace-pre-line mb-6">{s.desc}</p>
            <button
              onClick={() => handleBookNow(s.title)}
              className="bg-[#FFCA00] text-[#A20001] px-6 py-2 rounded-full font-semibold hover:bg-[#A20001] hover:text-[#FFCA00] border-2 border-[#FFCA00] transition-all"
            >
              Book Now
            </button>
          </motion.div>
        ))}
      </div>

      {/* === GENERAL FORM MODAL === */}
      {showGeneralModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowGeneralModal(false)}
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 w-full max-w-lg bg-white rounded-2xl p-6 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-[#A20001] mb-2">
              {selectedService} Booking
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Fill the form below to send your booking details on WhatsApp.
            </p>

            <form onSubmit={handleGeneralSubmit} className="space-y-3 text-left">
              <input
                value={generalForm.name}
                onChange={(e) =>
                  setGeneralForm((p) => ({ ...p, name: e.target.value }))
                }
                className="w-full border rounded-md px-3 py-2"
                placeholder="Full Name"
              />
              <input
                value={generalForm.email}
                onChange={(e) =>
                  setGeneralForm((p) => ({ ...p, email: e.target.value }))
                }
                className="w-full border rounded-md px-3 py-2"
                placeholder="Email"
              />
              <input
                value={generalForm.phone}
                onChange={(e) =>
                  setGeneralForm((p) => ({ ...p, phone: e.target.value }))
                }
                className="w-full border rounded-md px-3 py-2"
                placeholder="Phone"
              />

              <select
                value={generalForm.weekly}
                onChange={(e) =>
                  setGeneralForm((p) => ({ ...p, weekly: e.target.value }))
                }
                className="w-full border rounded-md px-3 py-2"
              >
                {weeklyTypes.map((t, i) => (
                  <option key={i}>{t}</option>
                ))}
              </select>

              <select
                value={generalForm.category}
                onChange={(e) =>
                  setGeneralForm((p) => ({ ...p, category: e.target.value }))
                }
                className="w-full border rounded-md px-3 py-2"
              >
                {categories.map((c, i) => (
                  <option key={i}>{c}</option>
                ))}
              </select>

              <select
                value={generalForm.timing}
                onChange={(e) =>
                  setGeneralForm((p) => ({ ...p, timing: e.target.value }))
                }
                className="w-full border rounded-md px-3 py-2"
              >
                {timings.map((t, i) => (
                  <option key={i}>{t}</option>
                ))}
              </select>

              {formError && <p className="text-sm text-red-600">{formError}</p>}

              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setShowGeneralModal(false)}
                  className="px-4 py-2 rounded-full border"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-full bg-[#A20001] text-[#FFCA00] font-semibold"
                >
                  Send to WhatsApp
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* === SIVANANDA FORM MODAL === */}
      {showSivanandaModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowSivanandaModal(false)}
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 w-full max-w-lg bg-white rounded-2xl p-6 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-[#A20001] mb-2">
              Sivananda Beginners Yoga Course
            </h3>
          

            <form onSubmit={handleSivanandaSubmit} className="space-y-3 text-left">
              <input
                value={sivanandaForm.name}
                onChange={(e) =>
                  setSivanandaForm((p) => ({ ...p, name: e.target.value }))
                }
                className="w-full border rounded-md px-3 py-2"
                placeholder="Full Name"
              />
              <input
                value={sivanandaForm.email}
                onChange={(e) =>
                  setSivanandaForm((p) => ({ ...p, email: e.target.value }))
                }
                className="w-full border rounded-md px-3 py-2"
                placeholder="Email"
              />
              <input
                value={sivanandaForm.phone}
                onChange={(e) =>
                  setSivanandaForm((p) => ({ ...p, phone: e.target.value }))
                }
                className="w-full border rounded-md px-3 py-2"
                placeholder="Phone"
              />

              <select
                value={sivanandaForm.weekly}
                onChange={(e) =>
                  setSivanandaForm((p) => ({ ...p, weekly: e.target.value }))
                }
                className="w-full border rounded-md px-3 py-2"
              >
                {sivanandaWeekly.map((t, i) => (
                  <option key={i}>{t}</option>
                ))}
              </select>

              <select
                value={sivanandaForm.category}
                onChange={(e) =>
                  setSivanandaForm((p) => ({ ...p, category: e.target.value }))
                }
                className="w-full border rounded-md px-3 py-2"
              >
                {sivanandaCategory.map((c, i) => (
                  <option key={i}>{c}</option>
                ))}
              </select>

              <select
                value={sivanandaForm.timing}
                onChange={(e) =>
                  setSivanandaForm((p) => ({ ...p, timing: e.target.value }))
                }
                className="w-full border rounded-md px-3 py-2"
              >
                {timings.map((t, i) => (
                  <option key={i}>{t}</option>
                ))}
              </select>

              {formError && <p className="text-sm text-red-600">{formError}</p>}

              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setShowSivanandaModal(false)}
                  className="px-4 py-2 rounded-full border"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-full bg-[#A20001] text-[#FFCA00] font-semibold"
                >
                  Send to WhatsApp
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* 🆕 NEW: DOORSTEP YOGA MODAL */}
      {showDoorstepModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowDoorstepModal(false)}
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 w-full max-w-lg bg-white rounded-2xl p-6 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-[#A20001] mb-2">
              Doorstep Yoga (Chennai Only)
            </h3>
           
            <form onSubmit={handleDoorstepSubmit} className="space-y-3 text-left">
              <input
                value={doorstepForm.name}
                onChange={(e) =>
                  setDoorstepForm((p) => ({ ...p, name: e.target.value }))
                }
                className="w-full border rounded-md px-3 py-2"
                placeholder="Full Name"
                required
              />
              <input
                value={doorstepForm.email}
                onChange={(e) =>
                  setDoorstepForm((p) => ({ ...p, email: e.target.value }))
                }
                className="w-full border rounded-md px-3 py-2"
                placeholder="Email"
                required
              />
              <input
                value={doorstepForm.phone}
                onChange={(e) =>
                  setDoorstepForm((p) => ({ ...p, phone: e.target.value }))
                }
                className="w-full border rounded-md px-3 py-2"
                placeholder="Phone"
                required
              />

              {/* 🆕 NEW: Address Field */}
              <textarea
                value={doorstepForm.address}
                onChange={(e) =>
                  setDoorstepForm((p) => ({ ...p, address: e.target.value }))
                }
                className="w-full border rounded-md px-3 py-2"
                placeholder="Full Address in Chennai"
                rows="3"
                required
              />

              <select
                value={doorstepForm.weekly}
                onChange={(e) =>
                  setDoorstepForm((p) => ({ ...p, weekly: e.target.value }))
                }
                className="w-full border rounded-md px-3 py-2"
              >
                {doorstepWeekly.map((t, i) => (
                  <option key={i}>{t}</option>
                ))}
              </select>

              <select
                value={doorstepForm.timing}
                onChange={(e) =>
                  setDoorstepForm((p) => ({ ...p, timing: e.target.value }))
                }
                className="w-full border rounded-md px-3 py-2"
              >
                {timings.map((t, i) => (
                  <option key={i}>{t}</option>
                ))}
              </select>

              {formError && <p className="text-sm text-red-600">{formError}</p>}

              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setShowDoorstepModal(false)}
                  className="px-4 py-2 rounded-full border"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-full bg-[#A20001] text-[#FFCA00] font-semibold"
                >
                  Send to WhatsApp
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </section>
  );
}