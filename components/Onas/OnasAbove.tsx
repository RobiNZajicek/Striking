import React from "react";
import KubaOnas from "@/assets/kubaOnas.webp";
import Image from "next/image";
import classes from "./Onas.module.css";

const OnasAbove = () => {
  return (
    <div className={classes.wrapper}>
      {/* Decorative Line */}
      <div className="absolute flex flex-row z-40 top-96 -left-40 rotate-90 gap-4 text-[16px] sm:text-[20px] justify-center items-center before:content-[''] before:w-14 sm:before:w-20 before:h-[2px] before:bg-[#BDBDBD] before:inline-block before:mr-2 after:content-[''] after:w-14 sm:after:w-20 after:h-[2px] after:bg-[#BDBDBD] after:inline-block after:ml-2"></div>

      {/* Background Image */}
      <Image
        src={KubaOnas}
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />

      {/* Content */}
      <div className={classes.inner}>
        <h1 className="text-white uppercase text-[40px] sm:text-[55px] md:text-[75px] lg:text-[85px] font-black text-center">
          O nás
        </h1>
      </div>
    </div>
  );
};

export default OnasAbove;
