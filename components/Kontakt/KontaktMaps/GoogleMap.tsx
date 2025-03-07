'use client';

import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import './GoogleMap.css'
const GoogleMap = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <motion.div
      className="flex flex-col items-center text-white py-16 px-8 h-[700px] sm:h-[700px] md:h-[800px] xl:h-[900px]  Dosxl:h-[1000px] mx-auto shadow-lg overflow-hidden font-sans rounded-xl relative"
      initial="hidden"
      whileInView="visible"
      variants={fadeInUp}
      viewport={{ once: true }}
    >
      <div className='FaqRight '></div>
      <div className='FaqRightLef '></div>
      {/* Title */}
      <motion.h2
        className="text-[22px] sm:text-[30px] md:text-[35px] lg:text-[45px] xl:text-[50px] font-black text-primary uppercase mb-24 text-center font-orbion"
        variants={fadeInUp}
      >
        ZDE NÁS NAJDEŠ
      </motion.h2>

      {/* Google Map */}
      <motion.div
        className="w-full flex justify-center h-full rounded-xl overflow-hidden"
        variants={fadeIn}
      >
        <iframe
          className=" w-[100%] xl:w-[80%] h-[95%] Dosxl:h-[90%] rounded-xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.9829638476124!2d14.325169115814135!3d50.3781773794664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470be1c3a4b5a1d7%3A0xccaaf9c018aed85b!2s28RG%2BG37%20Praha!5e0!3m2!1sen!2sus!4v1678123456789"
          
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>
    </motion.div>
  );
};

export default GoogleMap;