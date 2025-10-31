// src/Components/About.jsx
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import marudhamuthu from "../assets/Images/marudhamuthu.jpeg"; // ✅ Correct import path

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-white to-[#f9fafb] min-h-screen flex flex-col justify-center items-center px-6 py-16">
      {/* MAIN CONTAINER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl w-full flex flex-col md:flex-row items-center md:items-start gap-12"
      >
        {/* ------------------ LEFT: IMAGE SECTION ------------------ */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            src={marudhamuthu}
            alt="Yoga Acharya N.K. Marudhamuthu"
            className="rounded-3xl shadow-2xl border-4 border-[#F16824] max-w-md w-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* ------------------ RIGHT: TEXT SECTION ------------------ */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 space-y-6 text-gray-800"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#014F99] text-center md:text-left">
            About Vibha Yoga Academy
          </h2>

          <p className="text-lg leading-relaxed text-justify">
            <b>Hari Om</b>
          </p>

          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              <b className="text-[#F16824]">Profile of Yoga Acharya N.K. Marudhamuthu</b>
            </p>

            <p>
              <b>Professional Qualifications :</b><br />
              Yoga Teachers Training Course (TTC) – Kerala<br />
              Advanced Teachers Training Course (ATTC) – Kerala<br />
              Sadhana Intensive Course (SIC) – Himalayas<br />
              These courses were conducted by the International Sivananda Yoga Vedanta Dhanvantri Ashram, Kerala & Himalayas.
            </p>

            <p>
              <b>Experiences :</b><br />
              23 Years of wide teaching experience to various people.
            </p>

            <div className="bg-[#F9F4EF] rounded-2xl p-4 shadow-inner border border-[#F16824]/20">
              <p className="font-semibold text-[#014F99]">Clients Include:</p>
              <p>
                <b>Schools:</b> The Mother’s School - Kodambakkam, AVM Rajeswari School - Virugambakkam, Lady Andal School - Chetpet, Hiranandani Upscale School - OMR, Mahalakshmi Vidya Mandir - Pammal.<br />
                <b>Corporates:</b> Orchid Chemicals Pvt. Ltd., Rex Rotary India Pvt. Ltd.<br />
                <b>Multinational:</b> Nokia, Hyundai, British Airways.<br />
                <b>Hospitals:</b> TTK Hospital, Chennai (Indira Nagar).<br />
                <b>Hotels:</b> Asiana Hotel, OMR (Malabar Hotel Pvt. Ltd.), Taj Mount, Mount Road.<br />
                <b>VVIPs, VIPs, Families</b> and more...
              </p>
            </div>

            <p>
              <b>Important Achievements :</b><br />
              Performed in SUN TV, Kalaignar TV & Raj TV.<br />
              Articles published in Economic Times, Anna Nagar Times & Global Adjustments Magazine.<br />
              Helped participants overcome chronic ailments.<br />
              Approx. students trained so far: 23,000+<br />
              Approx. man hours in Yoga training: 10 lakh hours.<br />
              Conducting National Level Yoga Competitions twice a year for the past 14 years.
            </p>

            <p className="italic text-[#014F99] text-center md:text-left">
              “Health is Wealth, Peace of Mind is Happiness, Yoga Shows the Way.”  
              <br />— Swami Vishnu Devananda
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* ------------------ SECOND SECTION ------------------ */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="max-w-6xl mt-16 bg-white rounded-3xl shadow-lg p-8 md:p-12 border-t-4 border-[#F16824]"
      >
        <h3 className="text-3xl font-semibold text-[#014F99] mb-4 text-center md:text-left">
          Vishnu Bharath Yoga KalaiKoodam
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed text-justify">
          Vishnu Bharath Yoga KalaiKoodam was founded in <b>1998</b> with the intention of spreading
          the values of yoga throughout Tamil Nadu. The Founder is a disciple of
          <b> Swami Sivananda</b> and <b>Swami Vishnu Devananda</b>, trained in the Himalayas.  
          The goal of this organisation, now run by a charitable trust, is to enhance health and longevity for all through the practice of yoga.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed text-justify mt-4">
          Regular yoga competitions are conducted where children from both government and private schools participate.
          Presently, we are conducting classes for Individuals, Corporates, Schools, and Colleges at our Centre in Arumbakkam and also doorstep classes for elite individuals.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed text-justify mt-4">
          We are planning to expand our learning to more schools and colleges.  
          We would appreciate it if you could call us for a discussion to conduct Yoga Classes for groups in your school or college.  
          We have Sivananda Ashram-trained Yoga teachers ready to guide you.
        </p>

        <p className="text-right font-semibold mt-6">
          Regards,<br />
          <span className="text-[#F16824]">Yoga Acharya N.K. MARUDHAMUTHU</span>
        </p>
      </motion.div>
    </div>
  );
}
