'use client';

import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './KontaktForm.css';

const ContactForm = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const staggerChildren = {
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <motion.div
      className='relative flex justify-center flex-col px-[1%] xl:px-[10%] Dosxl:px-[15%]'
      initial="hidden"
      whileInView="visible"
      variants={staggerChildren}
      viewport={{ once: true }}
    >
      <div className='KonBlurosss'></div>
      <motion.h1
        className='text-center font-orbion font-black text-primary text-[25px] sm:text-[30px] md:text-[30px] lg:text-[40px] xl:text-[45px] uppercase mt-20'
        variants={fadeInUp}
      >
        Prague Striking Academy
      </motion.h1>
      <motion.div
        className='flex flex-col items-center md:flex-row md:items-stretch text-white py-16 w-full rounded-lg shadow-lg justify-center font-sans gap-0 max-w-[90%] mx-auto'
        variants={staggerChildren}
      >
        {/* Left Side - Form */}
        <motion.div
          className='w-full md:w-3/5 p-2 lg:p-6 flex flex-col flex-1'
          variants={fadeInUp}
        >
          <form className='flex flex-col flex-grow'>
            <input
              type='text'
              placeholder='Jakub Novak'
              className='w-full p-4 bg-[#1C1728] rounded-xl text-white placeholder-gray-400 h-16 focus:outline-none focus:ring-2 focus:ring-[#C060CB] mb-4 text-lg'
            />
            <textarea
              placeholder='Zadejte zprávu'
              rows='6'
              className='w-full p-4 bg-[#1C1728] rounded-xl text-white placeholder-gray-400 h-full focus:outline-none focus:ring-2 focus:ring-[#C060CB] mb-4 text-lg flex-grow'
            ></textarea>
            <button className='w-full bg-[#C060CB] text-white py-4 rounded-xl text-xl font-bold opacity-90 hover:opacity-100 transition-all'>
              Odeslat
            </button>
          </form>
        </motion.div>

        {/* Right Side - Contact Info */}
        <motion.div
          className='w-full md:w-2/5 p-2 lg:p-6 flex flex-col gap-4 justify-center flex-1'
          variants={staggerChildren}
        >
          {[
            { icon: <FaPhoneAlt />, title: 'Telefonní číslo', text: '+420 728 652 065' },
            { icon: <FaEnvelope />, title: 'Emailová adresa', text: 'prague.striking.academy@gmail.com' },
            { icon: <FaMapMarkerAlt />, title: 'Adresa', text: 'Bellušova 1877/68, 155 00 Praha 5-Stodůlky' }
          ].map((item, index) => (
            <motion.div
              key={index}
              className='bg-[#1C1728] flex-1 p-6 rounded-xl flex items-center gap-4 w-full'
              variants={fadeInUp}
            >
              <div className='shrink-0 text-[#C060CB] text-[20px] md:text-[24px]'>
                {item.icon}
              </div>
              <div className='min-w-0 flex-grow'>
                <p className='text-gray-400 text-lg'>{item.title}</p>
                <p className='text-white font-bold text-[14px] sm:text-[16px] md:text-[18px] break-words'>
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ContactForm;