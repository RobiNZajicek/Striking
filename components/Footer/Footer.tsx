import React from 'react'
import uni from '../../assets/uni.png'
import { FaFacebookF } from "react-icons/fa";
import Image from 'next/image';
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import './Footer.css'
const Footer = () => {
  return (
    <footer className='flex flex-row py-16 gap-5 justify-center mt-56 relative font-sans'>
      <div className='bluros blursses'></div>
        <div>
        <Image width={217} height={292} src={uni.src} alt="logo"></Image>
        </div>
        <div className='flex flex-col items-center w-96 gap-4' >
            <h2 className='font-black text-[25px]'>Navigace</h2>
            <span className='text-[20px]'>O nas</span>
            <span className='text-[20px]'>Cenik</span>
            <span className='text-[20px]'>Rozvrh</span>
            <span className='text-[20px]'>Kontakt</span>
        </div>
        <div className='flex flex-col items-center w-96 gap-4'>
            <h2 className='font-black text-[25px]'>Kontakt</h2>
            <span className='text-[20px]'>+259 (0) 256 215</span>
            <span className='text-[20px]'>striking@gmail.com</span>
            <span className='text-[20px] text-center'>Bellušova 1877/68, 155 00 Praha 5-Stodůlky</span>
        </div>
        <div className='flex flex-col items-center w-96 gap-4'>
            <h2 className='font-black text-[25px]'>Socialni site</h2>
            <div className='flex flex-row gap-3'>
            <FaInstagram size={32} />
            <FaFacebookF size={32} />
            <FaYoutube size={32} />
            </div>
        </div>

    </footer>
  )
}

export default Footer