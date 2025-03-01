'use client';

import { Container, Text, } from "@mantine/core";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import background from "@/assets/backgroundAbove.png";
import classes from "./HeroText.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function HeroText() {
  const [isMobile, setIsMobile] = useState(false);

  // Check screen width on component mount and resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={classes.wrapper}>
      {/* Overlay to Maintain Visibility */}
      <div className="absolute inset-0 bg-black opacity-60 z-1"></div>

      {/* Decorative Blur Elements */}
      <div className={classes.heroLeft}></div>
      <div className={classes.heroRight}></div>

      {/* Social Icons - Positioned Responsively */}
      {isMobile ? (
        // Mobile: No animation, centered below buttons
        <div className="absolute flex flex-row z-40 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] justify-center items-center gap-2 sm:gap-3 lg:gap-4 sm:top-[550px] top-[500px]  left-1/2 transform -translate-x-1/2">
          <div className="flex items-center gap-4">
            <span className="text-[#BDBDBD] xl:flex hidden z-50 font-orbion">Sledujte nás :</span>
            <div className="flex items-center gap-4">
              <span className="text-[#BDBDBD] xl:flex hidden z-50 font-orbion">Sledujte nás :</span>
              <div className="flex items-center gap-4 before:content-[''] before:w-10 sm:before:w-14 md:before:w-16 lg:before:w-20 before:h-[2px] before:bg-[#BDBDBD] before:inline-block before:mr-1 sm:before:mr-2 after:content-[''] after:w-10 sm:after:w-14 md:after:w-16 lg:after:w-20 after:h-[2px] after:bg-[#BDBDBD] after:inline-block after:ml-1 sm:after:ml-2">
                <a href="https://www.instagram.com/praguestrikingacademy/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={24} className="text-white hover:text-primary transition duration-300 size-[15px] sm:size-[16px] md:size-[15px] lg:size-[20px]" />
                </a>
                <a href="https://www.facebook.com/Praguestrikingacademy?locale=cs_CZ" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF size={24} className="text-white hover:text-primary transition duration-300 size-[15px] sm:size-[16px] md:size-[15px] lg:size-[20px]" />
                </a>
                <a href="https://www.youtube.com/@Fit2Fight" target="_blank" rel="noopener noreferrer">
                  <FaYoutube size={24} className="text-white hover:text-primary transition duration-300 size-[15px] sm:size-[16px] md:size-[15px] lg:size-[20px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Desktop: With animation
        <motion.div
          initial={{ opacity: 0, x: -230, rotateZ: 90 }}
          animate={{ opacity: 1, x: -180, rotateZ: 90 }}
          transition={{ duration: 0.5, ease: "linear", delay: 1.5 }}
          viewport={{ once: true }}
          className="absolute flex left-5% flex-row z-40 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] Dosxl:lg:text-[18px] justify-center items-center gap-2 sm:gap-3 lg:gap-4 
          top-[65%] sm:top-[75%] md:top-[80%] xl:top-[50%] xl:left-[4%] xl:-translate-x-1/2 Dosxl:left-[1%] Dosxl:-translate-x-1/2 xl:rotate-90 
          before:content-[''] before:w-10 sm:before:w-14 md:before:w-12 Dosxl:before:w-20 before:h-[2px] before:bg-[#BDBDBD] before:inline-block before:mr-1 sm:before:mr-2 
          after:content-[''] after:w-10 sm:after:w-14 md:after:w-12 Dosxl:after:w-20 after:h-[2px] after:bg-[#BDBDBD] after:inline-block after:ml-1 sm:after:ml-2"
        >
          <div className="flex items-center gap-4">
            <span className="text-[#BDBDBD] xl:flex hidden font-normal text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] Dosxl:text-[18px] z-50 font-orbion">Sledujte nás :</span>
            <a href="https://www.instagram.com/praguestrikingacademy/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} className="text-white hover:text-primary transition duration-300 size-[15px] sm:size-[16px] md:size-[15px] lg:size-[16px] Dosxl:size-[20px]" />
            </a>
            <a href="https://www.facebook.com/Praguestrikingacademy?locale=cs_CZ" target="_blank" rel="noopener noreferrer">
              <FaFacebookF size={24} className="text-white hover:text-primary transition duration-300 size-[15px] sm:size-[16px] md:size-[15px] lg:size-[20px]" />
            </a>
            <a href="https://www.youtube.com/@Fit2Fight" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={24} className="text-white hover:text-primary transition duration-300 size-[15px] sm:size-[16px] md:size-[15px] lg:size-[20px]" />
            </a>
          </div>
        </motion.div>
      )}

      {/* Background Image */}
      <Image src={background} alt="Background" layout="fill" objectFit="cover" className="z-0" />

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-50 flex flex-col items-center text-center text-white px-4 sm:px-6"
      >
        {/* <Title className="text-[28px] font-orbion sm:text-[40px] md:text-[50px] lg:text-[50px] xl:text-[60px] Dosxl:text-[85px] font-black text-[#A05A96] uppercase">
         NAUC SE MUAY THAI
        </Title> */}

        <Container p={0} size={600}>
          <Text className="text-[14px] font-orbion sm:text-[18px] md:text-[22px] lg:text-[25px] xl:text-[25px] xlDos:text-[30px] font-bold">
            Získej sílu, disciplínu a sebevědomí!
          </Text>
        </Container>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex sm:flex-row gap-3 sm:gap-6 justify-center items-center mt-4 sm:mt-8"
        >
          <Link href="/Rozvrh" className="bg-primary flex items-center justify-center font-sans w-[120px] sm:w-[140px] md:w-[160px] lg:w-[160px]  h-[36px] sm:h-[40px] md:h-[44px] lg:h-[45px] Dosxl:w-[187px] Dosxl:h-[48px]  border-2  border-primary rounded-xl text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-bold text-white">
            Zobrazit rozvrh
          </Link>
          <Link href="/Registrace" className="bg-primary flex items-center justify-center font-sans w-[120px] sm:w-[140px] md:w-[160px] lg:w-[160px]  h-[36px] sm:h-[40px] md:h-[44px] lg:h-[45px] Dosxl:w-[187px] Dosxl:h-[48px]  border-2  border-primary rounded-xl text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-bold text-white  ">
            Přidej se k nám
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
} 