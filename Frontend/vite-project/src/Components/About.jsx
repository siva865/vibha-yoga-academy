import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import marudhamuthu from "../assets/Images/marudhamuththu.jpeg";
import sivananda from "../assets/Images/sivanandha.jpeg";
import vishnu from "../assets/Images/vishnu.jpeg";

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#FAE3AC] min-h-screen flex flex-col justify-center items-center px-6 py-16">
      {/* 🔸 OUR MENTORS SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="w-full max-w-6xl text-center mb-20"
      >
        <h2 className="text-4xl font-bold text-[#A20001] mb-12">Our Mentors</h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          {/* Mentor 1 */}
          <motion.div
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-[#A20001] rounded-3xl p-8 shadow-2xl border-4 border-[#FFCA00] w-full max-w-xs sm:max-w-sm md:max-w-md flex flex-col items-center hover:shadow-3xl transition-all duration-300"
          >
            <motion.img
              src={sivananda}
              alt="Swami Sivananda"
              className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-full border-4 border-[#FFCA00] shadow-lg mb-6 hover:rotate-2 transition-transform duration-500"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            />
            <h3 className="text-2xl font-bold text-[#FFCA00] mb-2">
              Swami Sivananda
            </h3>
            <p className="text-[#FFCA00]/90 text-lg">1887 – 1963</p>
          </motion.div>

          {/* Mentor 2 */}
          <motion.div
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-[#A20001] rounded-3xl p-8 shadow-2xl border-4 border-[#FFCA00] w-full max-w-xs sm:max-w-sm md:max-w-md flex flex-col items-center hover:shadow-3xl transition-all duration-300"
          >
            <motion.img
              src={vishnu}
              alt="Swami Vishnu Devananda"
              className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-full border-4 border-[#FFCA00] shadow-lg mb-6 hover:-rotate-2 transition-transform duration-500"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            />
            <h3 className="text-2xl font-bold text-[#FFCA00] mb-2">
              Swami Vishnu Devananda
            </h3>
            <p className="text-[#FFCA00]/90 text-lg">1927 – 1993</p>
          </motion.div>
        </div>
      </motion.div>

      {/* 🔸 ABOUT MARUDHAMUTHU SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl w-full flex flex-col md:flex-row items-center md:items-start gap-12 mb-20"
      >
        {/* LEFT: IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
            <img
              src={marudhamuthu}
              alt="Yoga Acharya N.K. Marudhamuthu"
              className="rounded-3xl shadow-2xl border-4 border-[#FFCA00] max-w-md w-full object-cover hover:shadow-3xl transition-all duration-500"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              
            >
            
            </motion.div>
          </motion.div>
        </motion.div>

        {/* RIGHT: TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full md:w-1/2 space-y-6 text-[#A20001]"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#A20001] text-center md:text-left">
            About Vibha Yoga Academy
          </h2>

          <p className="text-lg leading-relaxed text-justify">
            <b>Hari Om</b>
          </p>

          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              <b className="text-[#A20001]">
                Profile of Yoga Acharya N.K. Marudhamuthu
              </b>
            </p>

            <p>
              <b>Professional Qualifications :</b>
              <br />
              Yoga Teachers Training Course (TTC) – Kerala
              <br />
              Advanced Teachers Training Course (ATTC) – Kerala
              <br />
              Sadhana Intensive Course (SIC) – Himalayas
              <br />
              Conducted by International Sivananda Yoga Vedanta Dhanvantri
              Ashram, Kerala & Himalayas.
            </p>

            <p>
              <b>Experiences :</b>
              <br />
              23 Years of wide teaching experience to various people.
            </p>

            {/* Clients Box */}
            <div className="bg-[#A20001] rounded-2xl p-6 text-[#FFCA00] shadow-inner border-2 border-[#FFCA00] hover:shadow-lg transition-all duration-300">
              <p className="font-semibold text-lg mb-3">Clients Include:</p>
              <p className="leading-relaxed">
                <b>Schools:</b> The Mother's School - Kodambakkam, AVM
                Rajeswari School - Virugambakkam, Lady Andal School - Chetpet,
                Hiranandani Upscale School - OMR, Mahalakshmi Vidya Mandir -
                Pammal.
                <br />
                <b>Corporates:</b> Orchid Chemicals Pvt. Ltd., Rex Rotary India
                Pvt. Ltd.
                <br />
                <b>Multinational:</b> Nokia, Hyundai, British Airways.
                <br />
                <b>Hospitals:</b> TTK Hospital, Chennai (Indira Nagar).
                <br />
                <b>Hotels:</b> Asiana Hotel, OMR, Taj Mount Road.
                <br />
                <b>VVIPs, VIPs, Families</b> and more...
              </p>
            </div>

            {/* Achievements Box */}
            <div className="bg-[#A20001] rounded-2xl p-6 text-[#FFCA00] shadow-inner border-2 border-[#FFCA00] hover:shadow-lg transition-all duration-300">
              <b className="font-semibold text-lg">Important Achievements :</b>
              <br />
              Performed in SUN TV, Kalaignar TV & Raj TV.
              <br />
              Articles published in Economic Times, Anna Nagar Times & Global
              Adjustments Magazine.
              <br />
              Helped participants overcome chronic ailments.
              <br />
              Students trained so far: 23,000+
              <br />
              Man hours in Yoga training: 10 lakh hours.
              <br />
              Conducting National Level Yoga Competitions twice a year for the
              past 14 years.
              <p className="mt-6 italic text-lg border-t border-[#FFCA00] pt-4">
                "Health is Wealth, Peace of Mind is Happiness, Yoga Shows the
                Way." <br />— Swami Vishnu Devananda
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* 🔸 VISHNU BHARATH SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        whileHover={{ y: -5 }}
        className="max-w-6xl w-full bg-[#A20001] rounded-3xl shadow-2xl p-8 md:p-12 border-t-4 border-[#FFCA00] text-[#FFCA00] hover:shadow-3xl transition-all duration-300"
      >
        <h3 className="text-3xl font-semibold text-[#FFCA00] mb-6 text-center md:text-left">
          Vishnu Bharath Yoga KalaiKoodam
        </h3>

        <div className="space-y-4 text-lg leading-relaxed text-justify">
          <p>
            Vishnu Bharath Yoga KalaiKoodam was founded in <b>1998</b> with the
            intention of spreading the values of yoga throughout Tamil Nadu. The
            Founder is a disciple of <b>Swami Sivananda</b> and{" "}
            <b>Swami Vishnu Devananda</b>, trained in the Himalayas. The goal of
            this organisation is to enhance health and longevity for all through
            the practice of yoga.
          </p>

          <p>
            Regular yoga competitions are conducted where children from both
            government and private schools participate. Presently, we are
            conducting classes for Individuals, Corporates, Schools, and Colleges
            at our Centre in Arumbakkam and also doorstep classes for elite
            individuals.
          </p>

          <p>
            We are planning to expand our learning to more schools and colleges.
            Please call us for a discussion to conduct Yoga Classes for groups in
            your institution. We have Sivananda Ashram-trained Yoga teachers
            ready to guide you.
          </p>
        </div>

        <p className="text-right font-semibold mt-8">
          Regards,
          <br />
          <span className="text-[#FFCA00] text-xl">
            Yoga Acharya N.K. MARUDHAMUTHU
          </span>
        </p>
      </motion.div>
    </div>
  );
}
