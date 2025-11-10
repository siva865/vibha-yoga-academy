import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

// --- Configuration (from user) ---
const razorpayLink = "https://pages.razorpay.com/pl_RaSEciMAIWbGnw/view";
const whatsappNumber = "9962239888"; // assumed India - we'll prefix +91 when opening WhatsApp

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

const serviceConfigs = {
  "General Yoga Classes": {
    weeklyOptions: [
      "Weekly: 03 classes (40 Minutes)",
      "Weekly: 02 classes (60 Minutes)",
    ],
    categories: [
      "Adults (14+ years) — ₹3600",
      "Kids (4–14 years) — ₹1500",
      "Kids (6 months) — ₹6000",
    ],
    showCategory: true,
    showAddress: false,
  },
  "Sivananda Beginners Yoga": {
    weeklyOptions: [
      "Weekly: 03 classes (60 Minutes)",
      "Weekly: 02 classes (90 Minutes)",
    ],
    categories: ["Adults (14+ years) — ₹6000", "Kids (4–14 years) — ₹3600"],
    showCategory: true,
    showAddress: false,
  },
  "Doorstep Yoga (Chennai Only)": {
    weeklyOptions: [
      "Weekly: 03 classes (60 Minutes) - ₹12000",
      "Weekly: 02 classes (60 Minutes) - ₹8000",
    ],
    categories: [],
    showCategory: false,
    showAddress: true,
  },
  "Online Astanga Yoga 30 Days Course": {
    weeklyOptions: [
      "Weekly: 03 classes (40 Minutes) - ₹18000",
      "Weekly: 02 classes (60 Minutes) - ₹18000",
    ],
    categories: [],
    showCategory: false,
    showAddress: false,
  },
  "Online Astanga Yoga 12 Days Course": {
    weeklyOptions: [
      "Weekly: 03 classes (40 Minutes) - ₹6000",
      "Weekly: 02 classes (60 Minutes) - ₹6000",
    ],
    categories: [],
    showCategory: false,
    showAddress: false,
  },
  "Online Teacher Training Course": {
    weeklyOptions: [
      "Weekly: 03 classes (40 Minutes) - ₹24000",
      "Weekly: 02 classes (60 Minutes) - ₹24000",
    ],
    categories: [],
    showCategory: false,
    showAddress: false,
  },
  "Online Advanced Teacher Training Course": {
    weeklyOptions: [
      "Weekly: 03 classes (40 Minutes) - ₹30000",
      "Weekly: 02 classes (60 Minutes) - ₹30000",
    ],
    categories: [],
    showCategory: false,
    showAddress: false,
  },
  "Pain Relief Yoga": {
    weeklyOptions: [
      "Weekly: 03 classes (40 Minutes) - ₹6000",
      "Weekly: 02 classes (60 Minutes) - ₹6000",
    ],
    categories: [],
    showCategory: false,
    showAddress: false,
  },
  "Diabetes Yoga Classes": {
    weeklyOptions: [
      "Weekly: 03 classes (40 Minutes) - ₹6000",
      "Weekly: 02 classes (60 Minutes) - ₹6000",
    ],
    categories: [],
    showCategory: false,
    showAddress: false,
  },
  "Children's Advanced Yoga": {
    weeklyOptions: [
      "Weekly: 03 classes (40 Minutes) - ₹6000",
      "Weekly: 02 classes (60 Minutes) - ₹6000",
    ],
    categories: [],
    showCategory: false,
    showAddress: false,
  },
  "Bone Strengthening Yoga": {
    weeklyOptions: [
      "Weekly: 03 classes (40 Minutes) - ₹6000",
      "Weekly: 02 classes (60 Minutes) - ₹6000",
    ],
    categories: [],
    showCategory: false,
    showAddress: false,
  },
  "Weight Reduction Course": {
    weeklyOptions: [
      "Weekly: 03 classes (40 Minutes) - ₹6000",
      "Weekly: 02 classes (60 Minutes) - ₹6000",
    ],
    categories: [],
    showCategory: false,
    showAddress: false,
  },
  "Regular Yoga Course": {
    weeklyOptions: [
      "Weekly: 03 classes (40 Minutes) - ₹6000",
      "Weekly: 02 classes (60 Minutes) - ₹6000",
    ],
    categories: [],
    showCategory: false,
    showAddress: false,
  },
  "Ladies & Housewives Basic Course": {
    weeklyOptions: [
      "Weekly: 03 classes (40 Minutes) - ₹6000",
      "Weekly: 02 classes (60 Minutes) - ₹6000",
    ],
    categories: [],
    showCategory: false,
    showAddress: false,
  },
  "Online Astanga Yoga for Kids": {
    weeklyOptions: [
      "Weekly: 03 classes (40 Minutes) - ₹6000",
      "Weekly: 02 classes (60 Minutes) - ₹6000",
    ],
    categories: [],
    showCategory: false,
    showAddress: false,
  },
};

// --- Animations ---
const pageVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { when: "beforeChildren", staggerChildren: 0.08 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
const modalVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

export default function YogaBookingPage() {
  const [selectedService, setSelectedService] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    timing: timings[0],
    weekly: "",
    category: "",
    address: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // set default weekly when service changes
    if (selectedService) {
      const config = serviceConfigs[selectedService] || serviceConfigs["General Yoga Classes"];
      setFormData((f) => ({ ...f, weekly: config.weeklyOptions[0] || "", category: config.categories[0] || "" }));
    }
  }, [selectedService]);

  const validate = () => {
    const e = {};
    if (!formData.name.trim()) e.name = "Name is required";
    if (!formData.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = "Invalid email";
    if (!formData.phone.trim()) e.phone = "Phone is required";
    else if (!/^\d{10,}$/.test(formData.phone.replace(/\D/g, ""))) e.phone = "Enter a valid phone number (min 10 digits)";

    const config = serviceConfigs[selectedService] || serviceConfigs["General Yoga Classes"];
    if (config && config.showAddress && !formData.address.trim()) e.address = "Address is required for doorstep services";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const openModalFor = (title) => {
    // Special case: open razorpay link directly for certain service
    if (title === "Online Astanga Yoga for Kids") {
      window.open(razorpayLink, "_blank");
      return;
    }

    setSelectedService(title);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => setSelectedService(null), 200);
  };

  const handleChange = (k, v) => setFormData((f) => ({ ...f, [k]: v }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // construct WhatsApp message
    const config = serviceConfigs[selectedService] || serviceConfigs["General Yoga Classes"];
    const msgLines = [];
    msgLines.push(`${selectedService} Booking`);
    msgLines.push("\n");
    msgLines.push(`Name: ${formData.name}`);
    msgLines.push(`Email: ${formData.email}`);
    msgLines.push(`Phone: ${formData.phone}`);
    msgLines.push(`Schedule: ${formData.weekly}`);
    if (config && config.showCategory) msgLines.push(`Category: ${formData.category}`);
    if (config && config.showAddress) msgLines.push(`Address: ${formData.address}`);
    msgLines.push(`Preferred Timing: ${formData.timing}`);

    const message = encodeURIComponent(msgLines.join("\n"));
    // prefix country code 91
    const wa = `https://wa.me/91${whatsappNumber}?text=${message}`;

    window.open(wa, "_blank");
    closeModal();
  };

  return (
    <div className="min-h-screen p-6" style={{ background: "#FAE3AC" }}>
      <motion.div initial="hidden" animate="visible" variants={pageVariants}>
        <motion.h1
          variants={cardVariants}
          className="text-3xl md:text-4xl font-bold mb-4 text-[#A20001]"
          style={{ textAlign: "center" }}
        >
          Our Services 
        </motion.h1>


        <motion.div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl p-6 shadow-lg"
              style={{ background: "#A20001" }}
            >
              <div className="flex flex-col items-start h-full">
                <div>{s.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-[#FFCA00]">{s.title}</h3>
                <p className="text-sm mb-4 text-[#FFCA00]/90">{s.desc}</p>

                <div className="mt-auto w-full flex justify-between items-center">
                  <button
                    onClick={() => openModalFor(s.title)}
                    className="px-4 py-2 rounded-lg font-medium text-[#A20001] bg-[#FFCA00] hover:opacity-90 transition"
                  >
                    Book Now
                  </button>
                  {/* If the service has a Razorpay special note, show small badge */}
                  {s.title === "Online Astanga Yoga for Kids" && (
                    <span className="text-xs ml-2 px-2 py-1 rounded-full bg-white/20 text-[#FFCA00]">Pay Online</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {isOpen && selectedService && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Backdrop */}
              <div className="absolute inset-0" onClick={closeModal} />

              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="relative max-w-2xl w-full mx-4 rounded-2xl p-6 shadow-2xl"
                style={{ background: "#FAE3AC", border: '4px solid #A20001' }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-[#A20001]">Book: {selectedService}</h2>
                    <p className="text-sm text-[#A20001]/80">Fill the details below to book your slot.</p>
                  </div>
                  <button onClick={closeModal} className="text-lg font-bold text-[#A20001]">✕</button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#A20001]">Name *</label>
                      <input
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className={`mt-1 block w-full rounded-md p-2 border ${errors.name ? 'border-red-500' : 'border-[#A20001]'} bg-white`}
                        placeholder="Your full name"v
                      />
                      {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#A20001]">Email *</label>
                      <input
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className={`mt-1 block w-full rounded-md p-2 border ${errors.email ? 'border-red-500' : 'border-[#A20001]'} bg-white`}
                        placeholder="you@example.com"
                      />
                      {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#A20001]">Phone *</label>
                      <input
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className={`mt-1 block w-full rounded-md p-2 border ${errors.phone ? 'border-red-500' : 'border-[#A20001]'} bg-white`}
                        placeholder="9876543210"
                      />
                      {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#A20001]">Preferred Timing</label>
                      <select
                        value={formData.timing}
                        onChange={(e) => handleChange("timing", e.target.value)}
                        className="mt-1 block w-full rounded-md p-2 border border-[#A20001] bg-white"
                      >
                        {timings.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Weekly + Category + Address conditional fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#A20001]">Schedule / Package</label>
                      <select
                        value={formData.weekly}
                        onChange={(e) => handleChange("weekly", e.target.value)}
                        className="mt-1 block w-full rounded-md p-2 border border-[#A20001] bg-white"
                      >
                        {(serviceConfigs[selectedService] || serviceConfigs["General Yoga Classes"]).weeklyOptions.map((w) => (
                          <option key={w} value={w}>{w}</option>
                        ))}
                      </select>
                    </div>

                    {serviceConfigs[selectedService] && serviceConfigs[selectedService].showCategory && (
                      <div>
                        <label className="block text-sm font-medium text-[#A20001]">Category / Price</label>
                        <select
                          value={formData.category}
                          onChange={(e) => handleChange("category", e.target.value)}
                          className="mt-1 block w-full rounded-md p-2 border border-[#A20001] bg-white"
                        >
                          {serviceConfigs[selectedService].categories.map((c) => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                      </div>
                    )}

                    {serviceConfigs[selectedService] && serviceConfigs[selectedService].showAddress && (
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-[#A20001]">Address (Chennai Only) *</label>
                        <input
                          value={formData.address}
                          onChange={(e) => handleChange("address", e.target.value)}
                          className={`mt-1 block w-full rounded-md p-2 border ${errors.address ? 'border-red-500' : 'border-[#A20001]'} bg-white`}
                          placeholder="Full house address for doorstep session"
                        />
                        {errors.address && <p className="text-xs text-red-600 mt-1">{errors.address}</p>}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center space-x-3 pt-2">
                    <button
                      type="submit"
                      className="px-5 py-2 rounded-lg font-semibold bg-[#A20001] text-[#FFCA00] hover:opacity-90 transition"
                    >
                      Send via WhatsApp
                    </button>

                    <button type="button" onClick={closeModal} className="px-4 py-2 rounded-lg border border-[#A20001] text-[#A20001]">Cancel</button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
