"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion"; // Import Framer Motion
import Image from "next/image";
import reg from '@/assets/Reg.jpeg';

const RegistrationForm = () => {
  const searchParams = useSearchParams();
  const selectedSport = searchParams.get('sport') || "Kickbox"; // Default to "Kickbox" if none is provided

  const [formData, setFormData] = useState({
    sport: selectedSport,
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerChildren = {
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <div className="relative flex flex-col lg:flex-row items-center lg:items-start text-white py-20 mb-6 x-8 lg:px-16 mx-auto rounded-xl justify-center overflow-hidden bg-black">
      {/* Background Image - INSIDE the Component */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={reg}
          layout="fill"
          objectFit="cover"
          alt="Registration Background"
          className=""
        />
      </div>

      {/* Overlay to Darken the Image */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content inside the same container */}
      <motion.div
        className="relative w-[100%] md:w-[90%] bg-[#00060E]/90 p-4 md:p-10 rounded-xl shadow-lg flex flex-col lg:flex-row items-center lg:items-start justify-between"
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
        viewport={{ once: true }}
      >
        {/* Left Section */}
        <motion.div
          className="lg:w-[50%] gap-6 pt-6 lg:pt-10"
          variants={fadeInUp}
        >
          <h2 className="font-black text-primary mb-4 font-orbion text-[25px] sm:text-[30px] md:text-[30px] lg:text-[40px] xl:text-[45px]">
            PŘIDEJ SE K NÁM!
          </h2>
          <p className="text-[15px] sm:text-[16px] md:text-[15px] lg:text-[20px] font-sans">
            📌 Vyber si trénink a posuň své dovednosti na novou úroveň.
          </p>
          <p className="text-[15px] sm:text-[16px] md:text-[15px] lg:text-[20px] font-sans">
            🔥 Trénuj, zlepši kondici a staň se součástí skvělé komunity.
          </p>
          <p className="text-[15px] sm:text-[16px] md:text-[15px] lg:text-[20px] font-sans">
            📞 Kontaktuj nás a rezervuj si první trénink ještě dnes!
          </p>
        </motion.div>

        {/* Right Section - Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="w-full lg:w-[50%] p-6 lg:p-10 rounded-xl space-y-4"
          variants={fadeInUp}
        >
          <label className="block font-black text-[16px] font-orbion">Sport</label>
          <select
            name="sport"
            value={formData.sport}
            onChange={handleChange}
            className="w-full p-4 border border-transparent font-sans rounded-xl bg-[#1A1A1A] text-white focus:ring-0 focus:outline-none hover:shadow-[0_0_15px_3px_var(--tw-shadow-color)] focus:shadow-[0_0_15px_3px_var(--tw-shadow-color)] shadow-primary transition duration-300 ease-in-out"
          >
            <option value="Kickbox">Kickbox</option>
            <option value="Thaibox">Thaibox</option>
            <option value="Grappling">Grappling</option>
            <option value="Děti Kickbox">Děti (8-14) Kickbox</option>
            <option value="Kondiční Kickbox">Kondiční Kickbox</option>
            <option value="Pokročilí">Pokročilí</option>
            <option value="Kruhový Trénink">Kruhový trénink</option>
          </select>

          <label className="block font-black text-[16px] font-orbion pt-4">Jméno a Příjmení</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Zadejte jméno"
            className="w-full p-3 font-sans border border-transparent rounded-xl bg-[#1A1A1A] text-white focus:ring-0 focus:outline-none focus:shadow-[0_0_15px_3px_var(--tw-shadow-color)] shadow-primary transition duration-300 ease-in-out"
          />

          <label className="block font-black text-[16px] font-orbion pt-4">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Zadejte email"
            className="w-full p-3 border font-sans border-transparent rounded-xl bg-[#1A1A1A] text-white focus:ring-0 focus:outline-none focus:shadow-[0_0_15px_3px_var(--tw-shadow-color)] shadow-primary transition duration-300 ease-in-out"
          />

          <label className="block font-black text-[16px] font-orbion pt-4">Telefonní číslo</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="752 331 915"
            className="w-full p-3 border font-sans border-transparent rounded-xl bg-[#1A1A1A] text-white focus:ring-0 focus:outline-none focus:shadow-[0_0_15px_3px_var(--tw-shadow-color)] shadow-primary transition duration-300 ease-in-out"
          />
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-primary font-sans text-white font-black text-[14px] xl:text-[18px] py-3 mt-4 rounded-xl hover:bg-opacity-80 transition"
            >
              Submit
            </button>
          </div>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default RegistrationForm;