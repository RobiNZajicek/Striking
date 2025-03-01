"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import reg from '@/assets/Reg.jpeg';

const schedule = [
  { time: '16:00', pondeli: '', utery: 'Děti Kickbox', streda: '', ctvrtek: '', patek: 'Děti Kickbox', sobota: '', nedele: '' },
  { time: '17:00', pondeli: '', utery: 'Kondiční Kickbox', streda: '', ctvrtek: '', patek: 'Kondiční Kickbox', sobota: 'Grappling', nedele: '' },
  { time: '18:00', pondeli: 'Thaibox', utery: 'Kickbox', streda: '', ctvrtek: 'Thaibox', patek: 'Kickbox', sobota: '', nedele: 'Kruhový Trénink' },
  { time: '19:00', pondeli: 'Pokročilí', utery: '', streda: '', ctvrtek: '', patek: '', sobota: '', nedele: '' }
];

const trainingColors = {
  'Kickbox': 'lg:border-l-4 border-l-2 border-green-500 pl-2 w-32',
  'Thaibox': 'lg:border-l-4 border-l-2 border-red-500 pl-2 w-32',
  'Kondiční Kickbox': 'lg:border-l-4 border-l-2 border-blue-500 pl-2 w-32',
  'Děti Kickbox': 'lg:border-l-4 border-l-2 border-green-500 pl-2 w-32',
  'Pokročilí': 'lg:border-l-4 border-l-2 border-purple-500 pl-2 w-32',
  'Grappling': 'lg:border-l-4 border-l-2 border-yellow-500 pl-2 w-32',
  'Kruhový Trénink': 'lg:border-l-4 border-l-2 border-primary pl-2 w-32'
};

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

  const [selectedTraining, setSelectedTraining] = useState(null);

  useEffect(() => {
    if (selectedTraining) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedTraining]);

  const handleClick = (e, training) => {
    setSelectedTraining(training);
  };

  // Map days to their Czech equivalents with diacritics
  const daysInCzech = {
    pondeli: 'Pondělí',
    utery: 'Úterý',
    streda: 'Středa',
    ctvrtek: 'Čtvrtek',
    patek: 'Pátek',
    sobota: 'Sobota',
    nedele: 'Neděle'
  };

  const staggerChildren = {
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <div className="relative flex flex-col lg:flex-row items-center lg:items-start text-white py-20 mb-6 x-8 lg:px-16 mx-auto rounded-xl justify-center overflow-hidden bg-black font-sans">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image src={reg} layout="fill" objectFit="cover" alt="Registration Background" />
      </div>

      {/* Overlay to Darken the Image */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <motion.div
        className="relative w-[100%] md:w-[90%] bg-[#00060E]/90 p-4 md:p-10 rounded-xl shadow-lg flex flex-col lg:flex-row items-stretch gap-8"
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
        viewport={{ once: true }}
      >
        {/* Left Section */}
        <motion.div
          className="w-full lg:w-[50%] gap-6 pt-6 lg:pt-10 flex flex-col"
          variants={fadeInUp}
        >
          <h2 className="font-black text-primary mb-0 font-sans text-[25px] sm:text-[30px] md:text-[30px] lg:text-[40px] xl:text-[45px]">
            PŘIDEJ SE K NÁM!
          </h2>
          <div className='w-full flex-1'>
            {Object.entries(daysInCzech).map(([dayKey, dayName]) => (
              <div key={dayKey} className='mb-2'>
                <span className='font-bold text-primary'>{dayName}</span>
                <div className='mt-2 bg-[#0C0C0C] rounded-lg p-2'>
                  {schedule
                    .filter((row) => row[dayKey])
                    .map((row, index) => (
                      <div key={index} className='flex justify-between items-center py-1'>
                        <span className='text-[12px] sm:text-[14px]'>{row.time}</span>
                        <motion.div
                          className={`cursor-pointer inline-block text-[12px] sm:text-[14px] ${trainingColors[row[dayKey]] || ''}`}
                          onClick={(e) => handleClick(e, row[dayKey])}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          {row[dayKey]}
                        </motion.div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Section - Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="w-full lg:w-[50%] p-6 lg:p-10 rounded-xl space-y-4 flex flex-col"
          variants={fadeInUp}
        >
          <h2 className="font-black text-primary mb-4 font-sans text-[25px] sm:text-[30px] md:text-[30px] uppercase lg:text-[40px] xl:text-[45px]">
            VYBER SI SPORT A Přijd
          </h2>
          <label className="block font-black text-[15px] sm:text-[16px] md:text-[15px] lg:text-[18px] Dosxl:text-[20px] font-orbion">Sport</label>
          <select
            name="sport"
            value={formData.sport}
            onChange={handleChange}
            className="w-full p-4 mb-2 border border-transparent font-sans rounded-xl bg-[#1A1A1A] text-white focus:ring-0 focus:outline-none hover:shadow-[0_0_15px_3px_var(--tw-shadow-color)] focus:shadow-[0_0_15px_3px_var(--tw-shadow-color)] shadow-primary transition duration-300 ease-in-out"
          >
            <option value="Kickbox">Kickbox</option>
            <option value="Thaibox">Thaibox</option>
            <option value="Grappling">Grappling</option>
            <option value="Děti Kickbox">Děti (8-14) Kickbox</option>
            <option value="Kondiční Kickbox">Kondiční Kickbox</option>
            <option value="Pokročilí">Pokročilí</option>
            <option value="Kruhový Trénink">Kruhový trénink</option>
          </select>

          <label className="block font-black text-[15px] sm:text-[16px] md:text-[15px] lg:text-[18px] Dosxl:text-[20px] font-orbion pt-6 mb-2">Jméno a Příjmení</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Zadejte jméno"
            className="w-full p-3 font-sans border border-transparent rounded-xl bg-[#1A1A1A] text-white focus:ring-0 focus:outline-none focus:shadow-[0_0_15px_3px_var(--tw-shadow-color)] shadow-primary transition duration-300 ease-in-out"
          />

          <label className="block font-black text-[15px] sm:text-[16px] md:text-[15px] lg:text-[18px] Dosxl:text-[20px] font-orbion pt-6 mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Zadejte email"
            className="w-full p-3 border font-sans border-transparent rounded-xl bg-[#1A1A1A] text-white focus:ring-0 focus:outline-none focus:shadow-[0_0_15px_3px_var(--tw-shadow-color)] shadow-primary transition duration-300 ease-in-out"
          />

          <label className="block font-black text-[15px] sm:text-[16px] md:text-[15px] lg:text-[18px] Dosxl:text-[20px] font-orbion pt-6 mb-2">Telefoní číslo</label>
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
              Registrovat se 
            </button>
          </div>
        </motion.form>
      </motion.div>
    </div>
  );
};

const RegistracePage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RegistrationForm />
    </Suspense>
  );
};

export default RegistracePage;