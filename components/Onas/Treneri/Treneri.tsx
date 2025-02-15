import Image from 'next/image';
import React from 'react';
import kuba from '@/assets/kubaOnas.webp';
import dan from '@/assets/dan.png';
import ayan from '@/assets/ayan.png';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import './Treneri.css'
const trainers = [
  { name: 'JAKUB BABICKÝ', sport: 'Kickbox', image: kuba },
  { name: 'DAN PESATA', sport: 'Thaibox', image: dan },
  { name: 'AYAN', sport: 'Grapling', image: ayan }
];

const Treneri = () => {
  return (
    <div className='flex flex-col items-center text-white py-12 bg-[#00060E] relative'>
        <div className='TreninkBlurosss'></div>
      <h2 className='text-[50px] font-orbion font-black text-primary uppercase'>Nasi Trenéri</h2>
      <div className='flex gap-6 mt-8'>
        {trainers.map((trainer, index) => (
          <div key={index} className='relative w-[420px] h-[550px] bg-black overflow-hidden rounded-lg'>
            <Image src={trainer.image} alt={trainer.name} layout='fill' objectFit='cover' className='grayscale' />
            
            {/* Social Icons */}
            <div className='absolute top-4 right-4 flex flex-col items-center gap-4  p-2 rounded-lg'>
              <FaFacebookF className='text-white text-lg cursor-pointer bg-black/70 w-6 h-6 p-1' />
              <FaInstagram className='text-white text-lg cursor-pointer bg-black/70 w-6 h-6 p-1' />
            </div>
            
            {/* Name & Sport */}
            <div className='absolute bottom-4 left-4 text-white font-bold flex flex-row items-center justify-center'>
            <div className='w-[4px] h-10 bg-primary mb-0 mr-4'></div>
            <div className='flex flex-col'>
              <span className='block text-primary font-bold text-xl font-black'>{trainer.name}</span>
              <span className='block text-gray-300 text-sm font-black'>{trainer.sport}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Treneri;
