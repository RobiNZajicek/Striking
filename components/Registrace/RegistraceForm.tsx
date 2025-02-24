"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import reg from '@/assets/Reg.jpeg';

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

  return (
    <div className="relative flex flex-col lg:flex-row items-center  lg:items-start text-white py-24 px-8 lg:px-16   mx-auto rounded-xl justify-center overflow-hidden bg-black h-screen">
      
      {/* Background Image - INSIDE the Component */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={reg}
          layout="fill"
          objectFit="cover"
          alt="Registration Background"
          className=""
        />
      </div>

      {/* Overlay to Darken the Image */}
      <div className=""></div>

      {/* Content inside the same container */}
      <div className="relative w-[100%] md:w-[90%] bg-[#00060E]/90  p-4 md:p-10 rounded-xl shadow-lg flex flex-col lg:flex-row items-center  lg:items-start justify-between">
        
        {/* Left Section */}
        <div className="lg:w-[50%] pt-6 lg:pt   -10">
          <h2 className=" font-black text-primary mb-4 font-orbion text-[25px] sm:text-[30px] md:text-[30px] lg:text-[40px] xl:text-[45px]">PŘIDEJ SE K NÁM!</h2>
          <p className="text-lg text-center lg:text-start">A začni svou cestu zápasníka.</p>
        </div>

        {/* Right Section - Form */}
        <form 
          onSubmit={handleSubmit} 
          className="w-full lg:w-[50%] p-6 lg:p-10 rounded-xl space-y-4"
        >
          <label className="block font-black text-[16px] font-orbion">Sport</label>
          <select
          name="sport"
          value={formData.sport}
          onChange={handleChange}
            className="w-full p-4 border border-transparent font-orbion rounded-xl bg-[#1A1A1A] text-white 
            

            focus:ring-0 focus:outline-none hover:shadow-[0_0_15px_3px_var(--tw-shadow-color)] 
            focus:shadow-[0_0_15px_3px_var(--tw-shadow-color)] shadow-primary transition duration-300 ease-in-out"
          >
            <option value="Kickbox">Kickbox</option>
            <option value="Thaibox">Thaibox</option>
            <option value="Grappling">Grappling</option>
            <option value="Děti Kickbox">Děti (8-14) Kickbox</option>
            <option value="Kondiční Kickbox">Kondiční Kickbox</option>
            <option value="Pokročilí">Pokročilí</option>
            <option value="Kruhový Trénink">Kruhový trénink</option>
          </select>

          <label className="block font-black text-[16px] font-orbion pt-4">Jméno a Příjmení</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Zadejte jméno"
            className="w-full p-3 font-orbion border border-transparent rounded-xl bg-[#1A1A1A] text-white 
            focus:ring-0 focus:outline-none focus:shadow-[0_0_15px_3px_var(--tw-shadow-color)] 
            shadow-primary transition duration-300 ease-in-out"
          />

          <label className="block font-black text-[16px] font-orbion pt-4">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Zadejte email"
            className="w-full p-3 border font-orbion border-transparent rounded-xl bg-[#1A1A1A] text-white 
            focus:ring-0 focus:outline-none focus:shadow-[0_0_15px_3px_var(--tw-shadow-color)] 
            shadow-primary transition duration-300 ease-in-out"
          />

          <label className="block font-black text-[16px] font-orbion pt-4    ">Telefonní číslo</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="999 999 999"
            className="w-full p-3 border font-orbion  border-transparent rounded-xl bg-[#1A1A1A] text-white 
            focus:ring-0 focus:outline-none focus:shadow-[0_0_15px_3px_var(--tw-shadow-color)] 
            shadow-primary transition duration-300 ease-in-out"
          />
            <div className="pt-4">
         <button
            type="submit"
            className="w-full bg-primary font-orbion  text-white font-bold py-3 mt-4 rounded-xl hover:bg-opacity-80 transition"
          >
            Submit
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
