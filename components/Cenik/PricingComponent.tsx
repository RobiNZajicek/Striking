'use client';

import { useState } from 'react';
import { Switch } from '@headlessui/react';
import './PricingComponent.css'
import Link from 'next/link';
const PricingComponent = () => {
  const [isMonthly, setIsMonthly] = useState(false);

  return (
    <div className="flex flex-col items-center text-white py-16 px-8 max-w-6xl mx-auto relative">
      <div className="TreninkBlurosss"></div>
      <div className="TreninkBlurosssDos"></div>
      <h2 className=" text-[25px] sm:text-[30px] md:text-[30px] lg:text-[40px] xl:text-[45px] font-black text-primary mb-2 font-orbion text-center">PRVNÍ TRÉNINK ZDARMA!</h2>
      
      
      {/* Toggle Switch */}
      <div className="flex items-center gap-4 mb-20">
        <span className="text-lg font-sans">Počet vstupů</span>
        <Switch
          checked={isMonthly}
          onChange={setIsMonthly}
          className={`relative inline-flex h-10 w-20 items-center rounded-full border-2 border-primary bg-[#0C0C0C] transition duration-300`}
        >
          <span
            className={`inline-block h-8 w-8 transform rounded-full bg-primary transition duration-300 ${isMonthly ? 'translate-x-10' : 'translate-x-1'}`}
          />
        </Switch>
        <span className="text-lg font-sans">Měsíčně</span>
      </div>
      
      {/* Pricing Cards */}
      <div className="flex flex-col md:flex-row gap-8 w-full">
        {/* First Card */}
        <div className="flex-1 bg-[#0C0C0C] p-10 rounded-2xl shadow-lg text-left">
          <h3 className="text-2xl mb-4 font-black text-center text-[20px] sm:text-[20px] md:text-[22px] lg:text-[25px] xl:text-[30px]">{isMonthly ? 'Standardní měsíční' : '1 vstup'}</h3>
          <p className="text-5xl font-black text-primary text-center ">{isMonthly ? '1200,-' : '200,-'}</p>
          <ul className="mt-36 space-y-2 text-lg">
            <li className="flex items-center gap-2 text-[15px] sm:text-[16px] md:text-[13px] lg:text-[18px] font-black font-sans"><span className="text-primary">✔</span>{isMonthly ? ' trénink 2x týdně po dobu 1 měsíce' : ' jednorázový trénink'}</li>
            
            
          </ul>
          <Link href='/Registrace' className="mt-12 flex z-50 cursor-pointer justify-center items-center w-full py-3 text-lg font-black font-orbion bg-primary rounded-xl hover:bg-opacity-80 transition">Rezervovat</Link>
        </div>
        
        {/* Second Card */}
        <div className="flex-1  bg-[#0C0C0C] p-10 rounded-2xl shadow-lg text-left">
          <h3 className="text-2xl font-black font-orbion mb-4  text-[20px] sm:text-[20px] md:text-[22px] lg:text-[25px] xl:text-[30px] text-center">{isMonthly ? 'Neomezené měsíční' : '10 vstupů'}</h3>
          <p className="text-5xl font-bold text-primary text-center">{isMonthly ? '1600,-' : '1700,-'}</p>
          <ul className="mt-36 space-y-2 text-lg">
            <li className="flex items-center gap-2 text-[15px] sm:text-[16px] md:text-[13px] lg:text-[18px] font-black font-sans"><span className="text-primary">✔</span>{isMonthly ? 'neomezené tréninky na 1 měsíc' : '10 tréninků pro využití do 5 měsíců'}</li>
            
            
          </ul>
          <Link href='/Registrace' className="mt-12 flex justify-center items-center z-50 cursor-pointer w-full py-3 text-lg  font-orbion bg-primary rounded-xl hover:bg-opacity-80 transition font-black">Rezervovat</Link>
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;
