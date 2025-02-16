'use client'

import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './KontaktForm.css'
const ContactForm = () => {
  return (
    <div className='relative'>
<div className='KonBlurosss'></div>
      <h1 className='text-center font-orbion font-black text-primary text-[50px] uppercase mt-20'>Prague Striking Academy</h1>
    <div className='flex flex-col md:flex-row items-start   text-white py-16 px-6 md:px-20 w-full   rounded-lg shadow-lg justify-center font-sans'>
      {/* Left Side - Form - Bigger Width */}
      
     
      <div className='w-full md:w-2/3 p-6 flex flex-col'>
      
        <form className='flex flex-col flex-grow'>
          <input
            type='text'
            placeholder='Jakub Novak'
            className='w-full p-4 bg-[#1C1728] rounded-xl text-white placeholder-gray-400 h-20 focus:outline-none focus:ring-2 focus:ring-[#C060CB] mb-6 text-lg'
          />
          <textarea
            placeholder='Zadejte zprávu'
            rows='6'
            className='w-full p-4 bg-[#1C1728] rounded-xl text-white placeholder-gray-400 h-60 focus:outline-none focus:ring-2 focus:ring-[#C060CB] mb-6 text-lg flex-grow'
          ></textarea>
          <button className='w-full bg-[#C060CB] text-white py-4 rounded-xl text-xl font-bold opacity-90 hover:opacity-100 transition-all'>
            Odeslat
          </button>
        </form>
      </div>

      {/* Right Side - Contact Info */}
      <div className='w-full md:w-1/3 p-6 flex flex-col gap-6 justify-center'>
        <div className='bg-[#1C1728] h-32 p-6 rounded-xl flex items-center gap-6 w-full'>
          <FaPhoneAlt className='text-[#C060CB] text-4xl' />
          <div>
            <p className='text-gray-400 text-lg'>Telefonní číslo</p>
            <p className='text-white font-bold text-xl'>+420 728 652 065</p>
          </div>
        </div>

        <div className='bg-[#1C1728] h-32 p-6 rounded-xl flex items-center gap-6 w-full'>
          <FaEnvelope className='text-[#C060CB] text-4xl' />
          <div>
            <p className='text-gray-400 text-lg'>Emailová adresa</p>
            <p className='text-white font-bold text-xl'>prague.striking.academy@gmail.com</p>
          </div>
        </div>

        <div className='bg-[#1C1728] h-32 p-6 rounded-xl flex items-center gap-6 w-full'>
          <FaMapMarkerAlt className='text-[#C060CB] text-4xl' />
          <div>
            <p className='text-gray-400 text-lg'>Adresa</p>
            <p className='text-white font-bold text-xl'>Bellušova 1877/68, 155 00 Praha 5-Stodůlky</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactForm;
