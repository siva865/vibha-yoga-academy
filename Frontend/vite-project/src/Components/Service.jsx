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

  // 🆕 UPDATED: Course-specific options with prices
  const onlineAstanga30DaysWeekly = [
    "Weekly: 03 classes (40 Minutes) - ₹18000",
    "Weekly: 02 classes (60 Minutes) - ₹18000",
  ];

  const onlineAstanga12DaysWeekly = [
    "Weekly: 03 classes (40 Minutes) - ₹6000",
    "Weekly: 02 classes (60 Minutes) - ₹6000",
  ];

  const onlineTTCWeekly = [
    "Weekly: 03 classes (40 Minutes) - ₹24000",
    "Weekly: 02 classes (60 Minutes) - ₹24000",
  ];

  const onlineAdvancedTTCWeekly = [
    "Weekly: 03 classes (40 Minutes) - ₹30000",
    "Weekly: 02 classes (60 Minutes) - ₹30000",
  ];

  const painReliefWeekly = [
    "Weekly: 03 classes (40 Minutes) - ₹6000",
    "Weekly: 02 classes (60 Minutes) - ₹6000",
  ];

  const diabetesWeekly = [
    "Weekly: 03 classes (40 Minutes) - ₹6000",
    "Weekly: 02 classes (60 Minutes) - ₹6000",
  ];

  const childrenAdvancedWeekly = [
    "Weekly: 03 classes (40 Minutes) - ₹6000",
    "Weekly: 02 classes (60 Minutes) - ₹6000",
  ];

  const boneStrengtheningWeekly = [
    "Weekly: 03 classes (40 Minutes) - ₹6000",
    "Weekly: 02 classes (60 Minutes) - ₹6000",
  ];

  const weightReductionWeekly = [
    "Weekly: 03 classes (40 Minutes) - ₹6000",
    "Weekly: 02 classes (60 Minutes) - ₹6000",
  ];

  const generalWeeklyTypes = [
    "Weekly: 03 classes (40 Minutes)",
    "Weekly: 02 classes (60 Minutes)",
  ];

  const categories = [
    "Adults (14+ years) — ₹3600",
    "Kids (4–14 years) — ₹1500",
    "Kids (6 months) — ₹6000",
  ];

  const sivanandaWeekly = [
    "Weekly: 03 classes (60 Minutes)",
    "Weekly: 02 classes (90 Minutes)",
  ];

  const sivanandaCategory = [
    "Adults (14+ years) — ₹6000",
    "Kids (4–14 years) — ₹3600",
  ];

  const doorstepWeekly = [
    "Weekly: 03 classes (60 Minutes) - ₹12000",
    "Weekly: 02 classes (60 Minutes) - ₹8000",
  ];

  // 🆕 NEW: Modal states for each course
  const [showGeneralModal, setShowGeneralModal] = useState(false);
  const [showSivanandaModal, setShowSivanandaModal] = useState(false);
  const [showDoorstepModal, setShowDoorstepModal] = useState(false);
  const [showOnlineAstanga30Modal, setShowOnlineAstanga30Modal] = useState(false);
  const [showOnlineAstanga12Modal, setShowOnlineAstanga12Modal] = useState(false);
  const [showOnlineTTCModal, setShowOnlineTTCModal] = useState(false);
  const [showOnlineAdvancedTTCModal, setShowOnlineAdvancedTTCModal] = useState(false);
  const [showPainReliefModal, setShowPainReliefModal] = useState(false);
  const [showDiabetesModal, setShowDiabetesModal] = useState(false);
  const [showChildrenAdvancedModal, setShowChildrenAdvancedModal] = useState(false);
  const [showBoneStrengtheningModal, setShowBoneStrengtheningModal] = useState(false);
  const [showWeightReductionModal, setShowWeightReductionModal] = useState(false);

  const [selectedService, setSelectedService] = useState("");

  // 🆕 NEW: Form states for each course
  const [generalForm, setGeneralForm] = useState({
    name: "",
    email: "",
    phone: "",
    timing: timings[0],
    weekly: generalWeeklyTypes[0],
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

  const [doorstepForm, setDoorstepForm] = useState({
    name: "",
    email: "",
    phone: "",
    timing: timings[0],
    weekly: doorstepWeekly[0],
    address: "",
  });

  // 🆕 NEW: Form states for specific courses
  const [onlineAstanga30Form, setOnlineAstanga30Form] = useState({
    name: "",
    email: "",
    phone: "",
    timing: timings[0],
    weekly: onlineAstanga30DaysWeekly[0],
  });

  const [onlineAstanga12Form, setOnlineAstanga12Form] = useState({
    name: "",
    email: "",
    phone: "",
    timing: timings[0],
    weekly: onlineAstanga12DaysWeekly[0],
  });

  const [onlineTTCForm, setOnlineTTCForm] = useState({
    name: "",
    email: "",
    phone: "",
    timing: timings[0],
    weekly: onlineTTCWeekly[0],
  });

  const [onlineAdvancedTTCForm, setOnlineAdvancedTTCForm] = useState({
    name: "",
    email: "",
    phone: "",
    timing: timings[0],
    weekly: onlineAdvancedTTCWeekly[0],
  });

  const [painReliefForm, setPainReliefForm] = useState({
    name: "",
    email: "",
    phone: "",
    timing: timings[0],
    weekly: painReliefWeekly[0],
  });

  const [diabetesForm, setDiabetesForm] = useState({
    name: "",
    email: "",
    phone: "",
    timing: timings[0],
    weekly: diabetesWeekly[0],
  });

  const [childrenAdvancedForm, setChildrenAdvancedForm] = useState({
    name: "",
    email: "",
    phone: "",
    timing: timings[0],
    weekly: childrenAdvancedWeekly[0],
  });

  const [boneStrengtheningForm, setBoneStrengtheningForm] = useState({
    name: "",
    email: "",
    phone: "",
    timing: timings[0],
    weekly: boneStrengtheningWeekly[0],
  });

  const [weightReductionForm, setWeightReductionForm] = useState({
    name: "",
    email: "",
    phone: "",
    timing: timings[0],
    weekly: weightReductionWeekly[0],
  });

  const [formError, setFormError] = useState("");

  // 🟢 Handle Book Now - UPDATED with all courses
  const handleBookNow = (title) => {
    setSelectedService(title);

    switch (title) {
      case "Sivananda Beginners Yoga":
        setShowSivanandaModal(true);
        break;
      case "Doorstep Yoga (Chennai Only)":
        setShowDoorstepModal(true);
        break;
      case "Online Astanga Yoga 30 Days Course":
        setShowOnlineAstanga30Modal(true);
        break;
      case "Online Astanga Yoga 12 Days Course":
        setShowOnlineAstanga12Modal(true);
        break;
      case "Online Teacher Training Course":
        setShowOnlineTTCModal(true);
        break;
      case "Online Advanced Teacher Training Course":
        setShowOnlineAdvancedTTCModal(true);
        break;
      case "Pain Relief Yoga":
        setShowPainReliefModal(true);
        break;
      case "Diabetes Yoga Classes":
        setShowDiabetesModal(true);
        break;
      case "Children's Advanced Yoga":
        setShowChildrenAdvancedModal(true);
        break;
      case "Bone Strengthening Yoga":
        setShowBoneStrengtheningModal(true);
        break;
      case "Weight Reduction Course":
        setShowWeightReductionModal(true);
        break;
      case "Online Astanga Yoga for Kids":
        window.open(razorpayLink, "_blank");
        break;
      default:
        setShowGeneralModal(true);
    }
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
      weekly: generalWeeklyTypes[0],
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

  // 🟢 Doorstep Yoga Form Submit
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

  // 🆕 NEW: Form submit handlers for specific courses
  const handleOnlineAstanga30Submit = (e) => {
    e.preventDefault();
    const { name, email, phone, timing, weekly } = onlineAstanga30Form;
    if (!name.trim() || !email.trim() || !phone.trim()) {
      setFormError("Please fill all the fields.");
      return;
    }
    const message = `Online Astanga Yoga 30 Days Course Booking\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nSchedule: ${weekly}\nPreferred Timing: ${timing}`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encoded}`, "_blank");
    setShowOnlineAstanga30Modal(false);
    setOnlineAstanga30Form({
      name: "",
      email: "",
      phone: "",
      timing: timings[0],
      weekly: onlineAstanga30DaysWeekly[0],
    });
  };

  const handleOnlineAstanga12Submit = (e) => {
    e.preventDefault();
    const { name, email, phone, timing, weekly } = onlineAstanga12Form;
    if (!name.trim() || !email.trim() || !phone.trim()) {
      setFormError("Please fill all the fields.");
      return;
    }
    const message = `Online Astanga Yoga 12 Days Course Booking\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nSchedule: ${weekly}\nPreferred Timing: ${timing}`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encoded}`, "_blank");
    setShowOnlineAstanga12Modal(false);
    setOnlineAstanga12Form({
      name: "",
      email: "",
      phone: "",
      timing: timings[0],
      weekly: onlineAstanga12DaysWeekly[0],
    });
  };

  const handleOnlineTTCSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, timing, weekly } = onlineTTCForm;
    if (!name.trim() || !email.trim() || !phone.trim()) {
      setFormError("Please fill all the fields.");
      return;
    }
    const message = `Online Teacher Training Course Booking\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nBatch: ${weekly}\nPreferred Timing: ${timing}`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encoded}`, "_blank");
    setShowOnlineTTCModal(false);
    setOnlineTTCForm({
      name: "",
      email: "",
      phone: "",
      timing: timings[0],
      weekly: onlineTTCWeekly[0],
    });
  };

  const handleOnlineAdvancedTTCSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, timing, weekly } = onlineAdvancedTTCForm;
    if (!name.trim() || !email.trim() || !phone.trim()) {
      setFormError("Please fill all the fields.");
      return;
    }
    const message = `Online Advanced Teacher Training Course Booking\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nBatch: ${weekly}\nPreferred Timing: ${timing}`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encoded}`, "_blank");
    setShowOnlineAdvancedTTCModal(false);
    setOnlineAdvancedTTCForm({
      name: "",
      email: "",
      phone: "",
      timing: timings[0],
      weekly: onlineAdvancedTTCWeekly[0],
    });
  };

  const handlePainReliefSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, timing, weekly } = painReliefForm;
    if (!name.trim() || !email.trim() || !phone.trim()) {
      setFormError("Please fill all the fields.");
      return;
    }
    const message = `Pain Relief Yoga Booking\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nSchedule: ${weekly}\nPreferred Timing: ${timing}`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encoded}`, "_blank");
    setShowPainReliefModal(false);
    setPainReliefForm({
      name: "",
      email: "",
      phone: "",
      timing: timings[0],
      weekly: painReliefWeekly[0],
    });
  };

  const handleDiabetesSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, timing, weekly } = diabetesForm;
    if (!name.trim() || !email.trim() || !phone.trim()) {
      setFormError("Please fill all the fields.");
      return;
    }
    const message = `Diabetes Yoga Classes Booking\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nSchedule: ${weekly}\nPreferred Timing: ${timing}`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encoded}`, "_blank");
    setShowDiabetesModal(false);
    setDiabetesForm({
      name: "",
      email: "",
      phone: "",
      timing: timings[0],
      weekly: diabetesWeekly[0],
    });
  };

  const handleChildrenAdvancedSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, timing, weekly } = childrenAdvancedForm;
    if (!name.trim() || !email.trim() || !phone.trim()) {
      setFormError("Please fill all the fields.");
      return;
    }
    const message = `Children's Advanced Yoga Booking\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nSchedule: ${weekly}\nPreferred Timing: ${timing}`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encoded}`, "_blank");
    setShowChildrenAdvancedModal(false);
    setChildrenAdvancedForm({
      name: "",
      email: "",
      phone: "",
      timing: timings[0],
      weekly: childrenAdvancedWeekly[0],
    });
  };

  const handleBoneStrengtheningSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, timing, weekly } = boneStrengtheningForm;
    if (!name.trim() || !email.trim() || !phone.trim()) {
      setFormError("Please fill all the fields.");
      return;
    }
    const message = `Bone Strengthening Yoga Booking\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nSchedule: ${weekly}\nPreferred Timing: ${timing}`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encoded}`, "_blank");
    setShowBoneStrengtheningModal(false);
    setBoneStrengtheningForm({
      name: "",
      email: "",
      phone: "",
      timing: timings[0],
      weekly: boneStrengtheningWeekly[0],
    });
  };

  const handleWeightReductionSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, timing, weekly } = weightReductionForm;
    if (!name.trim() || !email.trim() || !phone.trim()) {
      setFormError("Please fill all the fields.");
      return;
    }
    const message = `Weight Reduction Course Booking\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nSchedule: ${weekly}\nPreferred Timing: ${timing}`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encoded}`, "_blank");
    setShowWeightReductionModal(false);
    setWeightReductionForm({
      name: "",
      email: "",
      phone: "",
      timing: timings[0],
      weekly: weightReductionWeekly[0],
    });
  };

  // 🆕 NEW: Reusable Modal Component
  const Modal = ({ show, onClose, title, children, onSubmit }) => {
    if (!show) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black/50" onClick={onClose} />
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 w-full max-w-lg bg-white rounded-2xl p-6 shadow-2xl max-h-[90vh] overflow-y-auto"
        >
          <h3 className="text-2xl font-bold text-[#A20001] mb-2">{title}</h3>
          <p className="text-sm text-gray-600 mb-4">
            Fill the form below to send your booking details on WhatsApp.
          </p>

          <form onSubmit={onSubmit} className="space-y-3 text-left">
            {children}
          </form>
        </motion.div>
      </div>
    );
  };

  // 🆕 NEW: Reusable Form Fields Component
  const FormFields = ({ form, setForm, weeklyOptions, showCategory = false, showAddress = false }) => (
    <>
      <input
        value={form.name}
        onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
        className="w-full border rounded-md px-3 py-2"
        placeholder="Full Name"
        required
      />
      <input
        value={form.email}
        onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
        className="w-full border rounded-md px-3 py-2"
        placeholder="Email"
        required
      />
      <input
        value={form.phone}
        onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
        className="w-full border rounded-md px-3 py-2"
        placeholder="Phone"
        required
      />

      {showAddress && (
        <textarea
          value={form.address}
          onChange={(e) => setForm((p) => ({ ...p, address: e.target.value }))}
          className="w-full border rounded-md px-3 py-2"
          placeholder="Full Address in Chennai"
          rows="3"
          required
        />
      )}

      <select
        value={form.weekly}
        onChange={(e) => setForm((p) => ({ ...p, weekly: e.target.value }))}
        className="w-full border rounded-md px-3 py-2"
      >
        {weeklyOptions.map((t, i) => (
          <option key={i}>{t}</option>
        ))}
      </select>

      {showCategory && (
        <select
          value={form.category}
          onChange={(e) => setForm((p) => ({ ...p, category: e.target.value }))}
          className="w-full border rounded-md px-3 py-2"
        >
          {categories.map((c, i) => (
            <option key={i}>{c}</option>
          ))}
        </select>
      )}

      <select
        value={form.timing}
        onChange={(e) => setForm((p) => ({ ...p, timing: e.target.value }))}
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
          onClick={() => {
            setShowGeneralModal(false);
            setShowSivanandaModal(false);
            setShowDoorstepModal(false);
            setShowOnlineAstanga30Modal(false);
            setShowOnlineAstanga12Modal(false);
            setShowOnlineTTCModal(false);
            setShowOnlineAdvancedTTCModal(false);
            setShowPainReliefModal(false);
            setShowDiabetesModal(false);
            setShowChildrenAdvancedModal(false);
            setShowBoneStrengtheningModal(false);
            setShowWeightReductionModal(false);
          }}
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
    </>
  );

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

      {/* === MODALS FOR EACH COURSE === */}

      {/* General Modal */}
      <Modal
        show={showGeneralModal}
        onClose={() => setShowGeneralModal(false)}
        title={`${selectedService} Booking`}
        onSubmit={handleGeneralSubmit}
      >
        <FormFields
          form={generalForm}
          setForm={setGeneralForm}
          weeklyOptions={generalWeeklyTypes}
          showCategory={true}
        />
      </Modal>

      {/* Sivananda Modal */}
      <Modal
        show={showSivanandaModal}
        onClose={() => setShowSivanandaModal(false)}
        title="Sivananda Beginners Yoga Course"
        onSubmit={handleSivanandaSubmit}
      >
        <FormFields
          form={sivanandaForm}
          setForm={setSivanandaForm}
          weeklyOptions={sivanandaWeekly}
          showCategory={true}
        />
      </Modal>

      {/* Doorstep Modal */}
      <Modal
        show={showDoorstepModal}
        onClose={() => setShowDoorstepModal(false)}
        title="Doorstep Yoga (Chennai Only)"
        onSubmit={handleDoorstepSubmit}
      >
        <FormFields
          form={doorstepForm}
          setForm={setDoorstepForm}
          weeklyOptions={doorstepWeekly}
          showAddress={true}
        />
      </Modal>

      {/* Online Astanga 30 Days Modal */}
      <Modal
        show={showOnlineAstanga30Modal}
        onClose={() => setShowOnlineAstanga30Modal(false)}
        title="Online Astanga Yoga 30 Days Course - ₹18000"
        onSubmit={handleOnlineAstanga30Submit}
      >
        <FormFields
          form={onlineAstanga30Form}
          setForm={setOnlineAstanga30Form}
          weeklyOptions={onlineAstanga30DaysWeekly}
        />
      </Modal>

      {/* Online Astanga 12 Days Modal */}
      <Modal
        show={showOnlineAstanga12Modal}
        onClose={() => setShowOnlineAstanga12Modal(false)}
        title="Online Astanga Yoga 12 Days Course - ₹6000"
        onSubmit={handleOnlineAstanga12Submit}
      >
        <FormFields
          form={onlineAstanga12Form}
          setForm={setOnlineAstanga12Form}
          weeklyOptions={onlineAstanga12DaysWeekly}
        />
      </Modal>

      {/* Online TTC Modal */}
      <Modal
        show={showOnlineTTCModal}
        onClose={() => setShowOnlineTTCModal(false)}
        title="Online Teacher Training Course - ₹24000"
        onSubmit={handleOnlineTTCSubmit}
      >
        <FormFields
          form={onlineTTCForm}
          setForm={setOnlineTTCForm}
          weeklyOptions={onlineTTCWeekly}
        />
      </Modal>

      {/* Online Advanced TTC Modal */}
      <Modal
        show={showOnlineAdvancedTTCModal}
        onClose={() => setShowOnlineAdvancedTTCModal(false)}
        title="Online Advanced Teacher Training Course - ₹30000"
        onSubmit={handleOnlineAdvancedTTCSubmit}
      >
        <FormFields
          form={onlineAdvancedTTCForm}
          setForm={setOnlineAdvancedTTCForm}
          weeklyOptions={onlineAdvancedTTCWeekly}
        />
      </Modal>

      {/* Pain Relief Modal */}
      <Modal
        show={showPainReliefModal}
        onClose={() => setShowPainReliefModal(false)}
        title="Pain Relief Yoga - ₹6000"
        onSubmit={handlePainReliefSubmit}
      >
        <FormFields
          form={painReliefForm}
          setForm={setPainReliefForm}
          weeklyOptions={painReliefWeekly}
        />
      </Modal>

      {/* Diabetes Modal */}
      <Modal
        show={showDiabetesModal}
        onClose={() => setShowDiabetesModal(false)}
        title="Diabetes Yoga Classes - ₹6000"
        onSubmit={handleDiabetesSubmit}
      >
        <FormFields
          form={diabetesForm}
          setForm={setDiabetesForm}
          weeklyOptions={diabetesWeekly}
        />
      </Modal>

      {/* Children's Advanced Modal */}
      <Modal
        show={showChildrenAdvancedModal}
        onClose={() => setShowChildrenAdvancedModal(false)}
        title="Children's Advanced Yoga - ₹6000"
        onSubmit={handleChildrenAdvancedSubmit}
      >
        <FormFields
          form={childrenAdvancedForm}
          setForm={setChildrenAdvancedForm}
          weeklyOptions={childrenAdvancedWeekly}
        />
      </Modal>

      {/* Bone Strengthening Modal */}
      <Modal
        show={showBoneStrengtheningModal}
        onClose={() => setShowBoneStrengtheningModal(false)}
        title="Bone Strengthening Yoga - ₹6000"
        onSubmit={handleBoneStrengtheningSubmit}
      >
        <FormFields
          form={boneStrengtheningForm}
          setForm={setBoneStrengtheningForm}
          weeklyOptions={boneStrengtheningWeekly}
        />
      </Modal>

      {/* Weight Reduction Modal */}
      <Modal
        show={showWeightReductionModal}
        onClose={() => setShowWeightReductionModal(false)}
        title="Weight Reduction Course - ₹6000"
        onSubmit={handleWeightReductionSubmit}
      >
        <FormFields
          form={weightReductionForm}
          setForm={setWeightReductionForm}
          weeklyOptions={weightReductionWeekly}
        />
      </Modal>
    </section>
  );
}