'use client'
import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import "./OnasText.css";

const OnasText = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerChildren = {
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <motion.div
      className="flex justify-center py-16 md:py-20 lg:py-24 px-4 relative"
      initial="hidden"
      whileInView="visible"
      variants={staggerChildren}
      viewport={{ once: true }}
    >
      <div className="flex justify-center flex-col items-center">
        {/* Title */}
        <motion.h1
          className="font-black font-orbion text-primary text-center uppercase text-[25px] sm:text-[30px] md:text-[30px] lg:text-[40px] xl:text-[45px]"
          variants={fadeInUp}
        >
          Místo, kde rosteš s každým tréninkem!
        </motion.h1>

        {/* Description */}
        <motion.div
          className="flex flex-col gap-8 sm:gap-10 md:gap-12 justify-center items-center mt-8 sm:mt-10 md:mt-12"
          variants={staggerChildren}
        >
          
          
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OnasText;