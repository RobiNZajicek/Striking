"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
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
    name: "DAN PESATA",
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

  useEffect(() => {
    const updateCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", updateCursor);
    return () => document.removeEventListener("mousemove", updateCursor);
  }, []);

  return (
    <div className="flex flex-col items-center text-white py-12 bg-[#00060E] relative pb-44">
      <div className="TreninkBlurosss"></div>
      <h2 className="text-[25px] sm:text-[30px] md:text-[35px] lg:text-[45px] xl:text-[50px] font-orbion font-black text-primary uppercase">
        Naši Trenéři
      </h2>

      {/* Trainers List */}
      <div className="flex flex-col md:flex-row gap-8 lg:gap-6 mt-8 relative items-center">
        {trainers.map((trainer, index) => (
          <div
            key={index}
            className="relative w-[340px] h-[520px] md:w-[240px] md:h-[340px] lg:w-[300px] lg:h-[420px] xl:w-[380px] xl:h-[550px] Dosxl:w-[420px] Dosxl:h-[550px] bg-black overflow-hidden rounded-lg"
            onMouseEnter={() => setHoveredTrainer(trainer)}
            onMouseLeave={() => setHoveredTrainer(null)}
            onClick={() => setMobilePopup(trainer)} // Enable touch interactions
          >
            <Image src={trainer.image} alt={trainer.name} objectFit="cover" className="grayscale" />
            <div className="absolute top-4 right-4 flex flex-col items-center gap-4 p-2 rounded-lg">
              <FaFacebookF className="text-white text-lg cursor-pointer bg-black/70 w-6 h-6 p-1" />
              <FaInstagram className="text-white text-lg cursor-pointer bg-black/70 w-6 h-6 p-1" />
            </div>
            <div className="absolute bottom-4 left-4 text-white font-bold flex flex-row items-center justify-center">
              <div className="w-[4px] h-10 bg-primary mb-0 mr-4"></div>
              <div className="flex flex-col">
                <span className="block text-primary font-bold text-xl font-black">{trainer.name}</span>
                <span className="block text-gray-300 text-sm font-black">{trainer.sport}</span>
              </div>
            </div>
          </div>
        ))}

        {/* Hover description box (PC) */}
        {hoveredTrainer && (
          <div
            className="fixed bg-primary w-[400px] h-[276px] p-6 z-50 text-white rounded-xl shadow-lg hidden md:flex"
            style={{ top: cursorPos.y + 10, left: cursorPos.x + 10 }}
          >
            <div className="flex relative flex-col">
              <h3 className="text-[25px] font-black">{hoveredTrainer.name}</h3>
              <h3 className="text-[20px] font-black mb-4">{hoveredTrainer.sport}</h3>
              <p className="font-sans font-bold text-[16px]">{hoveredTrainer.description}</p>
              <Image width={196} height={172} src={uni.src} className="absolute opacity-30 right-4 top-0" alt="logo" />
            </div>
          </div>
        )}

        {/* Mobile pop-up (Replaces hover on small screens) */}
        {mobilePopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50 p-4 ">
            <div className="bg-primary w-[90%] max-w-[400px] p-6 rounded-xl  text-white  shadow-lg relative  " >
              <h3 className="text-[25px] font-black">{mobilePopup.name}</h3>
              <h3 className="text-[20px] font-black mb-4">{mobilePopup.sport}</h3>
              <p className="font-sans font-bold text-[16px]">{mobilePopup.description}</p>
              <Image width={196} height={172} src={uni.src} className="absolute opacity-30 right-4 top-0" alt="logo" />
              <div className="flex justify-center">
              <button
                onClick={() => setMobilePopup(null)}
                className="font-black border-2 bg-white mt-4  text-primary  w-32 p-2 rounded-xl text-center"
              >
                Zavřít
              </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Treneri;
