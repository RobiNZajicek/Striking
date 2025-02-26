"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import kuba from "@/assets/kubaOnas.webp";
import dan from "@/assets/dan.png";
import ayan from "@/assets/ayan.png";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import uni from "@/assets/uni.png";
import "./Treneri.css";

const trainers = [
  {
    name: "JAKUB BABICKÝ",
    sport: "Kickbox",
    image: kuba,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "DAN PEŠATA",
    sport: "Thaibox",
    image: dan,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "AYAN",
    sport: "Grappling",
    image: ayan,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Treneri = () => {
  const [hoveredTrainer, setHoveredTrainer] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [mobilePopup, setMobilePopup] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", updateCursor);
    return () => document.removeEventListener("mousemove", updateCursor);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Define Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger the animation of children
        delayChildren: 0.2, // Delay before starting the animation
      },
    },
  };

  const trainerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="flex flex-col items-center text-white py-12 bg-[#00060E] relative pb-44"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }} // Animation plays only once
      variants={containerVariants}
    >
      <div className="TreninkBlurosss"></div>
      <motion.h2
        className="text-[30px] mt-8 xl:mt-24 sm:text-[30px] md:text-[35px] lg:text-[45px] xl:text-[50px] font-orbion font-black text-primary uppercase"
        variants={trainerVariants}
      >
        Naši Trenéři
      </motion.h2>
      <motion.span
                  className="text-[15px] sm:text-[16px] md:text-[15px] lg:text-[20px] text-center font-medium text-[#BDBDBD] mt-4 mb-4 w-4/6 sm:w-4/6 md:w-4/6 lg:w-3/6 Dosxl:1/6 font-sans"
                  variants={fadeInUp}
                >
                  Jsme mladý ambiciózní klub s jasným cílem posunu našich klientů v oblasti bojových sportů. Náš tým zkušených trenérů vás provede od základů až po pokročilou úroveň.
                  Začít může  každý
                </motion.span>

      {/* Trainers List */}
      <motion.div className="flex flex-col md:flex-row gap-8 lg:gap-6 mt-8 relative items-center">
        {trainers.map((trainer, index) => (
          <motion.div
            key={index}
            className="relative w-[340px] h-[520px] md:w-[240px] md:h-[340px] lg:w-[300px] lg:h-[420px] xl:w-[380px] xl:h-[550px] Dosxl:w-[420px] Dosxl:h-[550px] bg-black overflow-hidden rounded-lg"
            onMouseEnter={() => !isMobile && setHoveredTrainer(trainer)}
            onMouseLeave={() => !isMobile && setHoveredTrainer(null)}
            onClick={() => isMobile && setMobilePopup(trainer)} // Works only on mobile
            variants={trainerVariants}
          >
            <Image src={trainer.image} alt={trainer.name} objectFit="cover" className="grayscale" fill />
            <div className="absolute top-4 right-4 flex flex-col items-center gap-4 p-2 rounded-lg">
              <a href="https://www.instagram.com/praguestrikingacademy/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} className="text-white hover:text-primary transition duration-300 size-[15px] sm:size-[16px] md:size-[15px] lg:size-[20px]" />
              </a>
              <a href="https://www.facebook.com/Praguestrikingacademy?locale=cs_CZ" target="_blank" rel="noopener noreferrer">
                <FaFacebookF size={24} className="text-white hover:text-primary transition duration-300 size-[15px] sm:size-[16px] md:size-[15px] lg:size-[20px]" />
              </a>
            </div>
            <div className="absolute bottom-4 left-4 text-white font-bold flex flex-row items-center justify-center">
              <div className="w-[4px] h-10 bg-primary mb-0 mr-4"></div>
              <div className="flex flex-col">
                <span className="block text-primary text-xl font-black font-orbion">{trainer.name}</span>
                <span className="block text-gray-300 text-sm font-black font-thin">{trainer.sport}</span>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Hover description box (PC) */}
        {!isMobile && hoveredTrainer && (
          <motion.div
            className="fixed bg-primary w-[400px] h-[236px] p-6 z-50 text-white rounded-xl shadow-lg hidden md:flex"
            style={{ top: cursorPos.y + 10, left: cursorPos.x + 10 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="flex relative flex-col">
              <h3 className="text-[25px] font-black font-orbion">{hoveredTrainer.name}</h3>
              <h3 className="text-[20px] font-black mb-4 font-orbion">{hoveredTrainer.sport}</h3>
              <p className="font-sans font-bold text-[16px]">{hoveredTrainer.description}</p>
              <Image width={176} height={122} src={uni.src} className="absolute opacity-20 right-0 -top-6 " alt="logo" />
            </div>
          </motion.div>
        )}

        {/* Mobile pop-up (Replaces hover on small screens) */}
        {isMobile && mobilePopup && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/80 z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <motion.div
              className="bg-primary w-[90%] max-w-[400px] p-6 rounded-xl text-white shadow-lg relative"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <h3 className="text-[25px] font-black">{mobilePopup.name}</h3>
              <h3 className="text-[20px] font-black mb-4">{mobilePopup.sport}</h3>
              <p className="font-sans font-bold text-[16px]">{mobilePopup.description}</p>
              <Image width={170} height={167} src={uni.src} className="absolute opacity-30 z-50 right-4 top-0" alt="logo" />
              <div className="flex justify-center">
                <button
                  onClick={() => setMobilePopup(null)}
                  className="font-black border-2 bg-white mt-4 text-primary w-32 p-2 rounded-xl z-10 text-center"
                >
                  Zavřít
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Treneri;