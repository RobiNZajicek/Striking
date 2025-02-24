import React from "react";
import uni from "../../assets/uni.png";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import "./Footer.css";
import Link from "next/link";


const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row py-12 gap-10 md:gap-2  items-center md:items-start mt-32 relative font-sans text-center md:text-center w-full px-[-5] justify-center">
      <div className="bluros blursses"></div>

      {/* Logo Section */}
      <div className="flex justify-center md:justify-start">
        <Image
          width={217}
          height={292}
          src={uni.src}
          alt="logo"
          className="w-[100px] sm:w-[140px] md:w-[180px] lg:w-[217px] h-auto"
        />
      </div>

      {/* Navigation */}
      <div className="flex flex-col items-center md:items-center w-full sm:w-1/4 lg:w-1/4 justify-center  gap-3">
        <h2 className="font-black text-[20px] sm:text-[22px] lg:text-[25px]">Navigace</h2>
        <Link href='/Onas' className="text-[15px] sm:text-[20px]">O nás</Link>
        <Link href='/Cenik' className="text-[15px] sm:text-[20px]">Ceník</Link>
        <Link href='/Rozvrh' className="text-[15px] sm:text-[20px]">Rozvrh</Link>
        <Link href='/Kontakt' className="text-[15px] sm:text-[20px]">Kontakt</Link>
      </div>

      {/* Contact */}
      <div className="flex flex-col items-center md:items-center w-full sm:w-1/4 lg:w-1/4 gap-3">
        <h2 className="font-black text-[20px] sm:text-[22px] lg:text-[25px]">Kontakt</h2>
        <span className="text-[15px] sm:text-[20px]">+259 (0) 256 215</span>
        <span className="text-[15px] sm:text-[20px]">striking@gmail.com</span>
        <span className="text-[15px] sm:text-[20px] text-center md:text-center">
          Bellušova 1877/68, 155 00 Praha 5-Stodůlky
        </span>
      </div>

      {/* Social Media */}
      <div className="flex flex-col items-center w-full sm:w-1/4 w-1/4  gap-3">
        <h2 className="font-black text-[20px] sm:text-[22px] lg:text-[25px]">Sociální sítě</h2>
        <div className="flex items-center gap-4">
 
  
  <a href="https://www.instagram.com/praguestrikingacademy/" target="_blank" rel="noopener noreferrer">
    <FaInstagram size={24} className="text-white hover:text-primary transition duration-300" />
  </a>

  <a href="https://www.facebook.com/Praguestrikingacademy?locale=cs_CZ" target="_blank" rel="noopener noreferrer">
    <FaFacebookF size={24} className="text-white hover:text-primary transition duration-300" />
  </a>

  <a href="https://www.youtube.com/@Fit2Fight" target="_blank" rel="noopener noreferrer">
    <FaYoutube size={24} className="text-white hover:text-primary transition duration-300" />
  </a>
</div>
      </div>
    </footer>
  );
};

export default Footer;