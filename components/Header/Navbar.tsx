"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi"; // Hamburger & Close icons
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import logo from "@/assets/logo-striking.webp";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.header
      ref={ref}
      initial={{ opacity: 0, y: -20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[#00060E] text-white py-5 px-[5%] flex justify-between items-center relative"
    >
      {/* Left side: Logo */}
      <div className="flex items-center">
        <Link href="/">
          <Image
            width={274}
            height={45}
            src={logo.src}
            alt="logo"
            className="cursor-pointer w-[200px] h-[42px] xl:w-[275px] xl:h-[45px]"
          />
        </Link>
      </div>

      {/* Desktop Navigation (Hidden on mobile) */}
      <nav className="hidden lg:flex flex-col justify-center items-end gap-4">
        <div className="flex gap-8 xl:gap-12">
          <span className="flex items-center gap-2 font-sans text-[14px] xl:text-[18px]">
            <BsTelephone size={20} className="text-primary" />
            +420 728 652 065
          </span>
          <span className="flex items-center gap-2 font-sans text-[14px] xl:text-[18px]">
            <MdOutlineMail size={20} className="text-primary" />
            prague.striking.academy@gmail.com
          </span>
        </div>

        <ul className="flex gap-8 xl:gap-14 font-bold text-[14px] xl:text-[18px] font-sans items-center text-[#BDBDBD]">
          {["Onas", "Cenik", "Rozvrh", "Kontakt"].map((item) => (
            <li key={item}>
              <Link
                href={`/${item}`}
                className={`hover:text-white ${
                  pathname === `/${item.toLowerCase()}` ? "text-white" : ""
                }`}
              >
                {item.replace("Onas", "O nás")}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/Registrace">
              <button className="bg-primary xl:w-[136px] xl:h-[48px] w-[115px] h-[40px] border-4 border-primary rounded-xl text-[14px] xl:text-[18px] font-bold text-white">
                Registrace zde
              </button>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Navigation: Hamburger Button (Visible when screen < 900px) */}
      <button
        className="lg:hidden text-white text-3xl"
        onClick={() => setIsOpen(true)}
        aria-label="Toggle menu"
      >
        <FiMenu />
      </button>

      {/* Full-Screen Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed top-0 left-0 w-screen h-screen bg-[#00060E] text-white flex flex-col items-center justify-center z-50"
        >
          {/* Close button */}
          <button
            className="absolute top-5 right-5 text-3xl"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <FiX />
          </button>

          {/* Mobile Menu Links */}
          <ul className="flex flex-col items-center gap-10 font-bold text-[24px]">
            {["Onas", "Cenik", "Rozvrh", "Kontakt"].map((item) => (
              <li key={item}>
                <Link
                  href={`/${item}`}
                  className="hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {item.replace("Onas", "O nás")}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/Registrace">
                <button
                  className="bg-primary md:w-[200px] md:h-[50px] w-[190px] h-[55px] border-4 border-primary rounded-xl text-[20px] font-bold text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Registrace zde
                </button>
              </Link>
            </li>
          </ul>

          {/* Contact Info in Mobile Menu */}
          <div className="flex flex-col items-center gap-4 mt-10 text-[18px]">
            <span className="flex items-center gap-2">
              <BsTelephone size={24} className="text-primary" />
              +420 728 652 065
            </span>
            <span className="flex items-center gap-2">
              <MdOutlineMail size={24} className="text-primary" />
              prague.striking.academy@gmail.com
            </span>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
