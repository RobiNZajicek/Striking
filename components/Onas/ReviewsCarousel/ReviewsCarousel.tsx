'use client'

import React, { useState, useEffect } from 'react';
import rev from '@/assets/rev.jpeg';
import './ReviewsCarousel.css';
import Image from 'next/image';
import uni from '@/assets/uni.png'
const reviews = [
  { 
    name: 'Eliška Syrová', 
    review: 'S trenérem Kubou budete ve správných rukou. Ideální sport na zlepšení fyzického a psychického zdraví, rovnováhy a socializace.',
    stars: 5
  },
  { 
    name: 'Zdeněk Pekárek', 
    review: 'Kdo se chce naučit základy K1 a Thaiboxu, nebo zkusit první zápasové krůčky, mohu vřele doporučit. Trenér Kuba je zapálený mladík s pedagogickým talentem. Vysvětlí, ukáže. Mohu vřele doporučit.',
    stars: 5
  },
  { 
    name: 'Marek Novotný', 
    review: 'Tréninky jsou skvělé a velmi intenzivní. Doporučuji všem, kteří se chtějí zlepšit a posunout na vyšší úroveň.',
    stars: 5
  },
  { 
    name: 'Petr Havel', 
    review: 'Super atmosféra, profesionální přístup a skvělí lidé. Doporučuji všem, kdo chtějí začít s bojovými sporty.',
    stars: 4
  },
  { 
    name: 'Jana Králová', 
    review: 'Tréninky jsou výborné, Kuba je skvělý trenér a ví, jak motivovat.',
    stars: 5
  },
  { 
    name: 'Tomáš Dvořák', 
    review: 'Díky Kubovi jsem se hodně zlepšil a získal větší sebevědomí. Velmi doporučuji.',
    stars: 5
  }
  
];

const ReviewsCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='relative flex flex-col items-center text-white py-16 overflow-hidden wrapper z-0 '>
      <div className='absolute inset-0 bg-black opacity-70 z-0'></div>
      <div className='absolute inset-0' style={{ backgroundImage: `url(${rev.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      <h2 className='relative text-[50px] font-orbion font-black text-white uppercase z-10'>Recenze</h2>
      <div className='relative flex gap-6 mt-8 w-full justify-center z-10' style={{ overflow: 'hidden', height: '400px' }}>
        <div className='flex transition-transform duration-[1500ms] ease-in-out'
             style={{ transform: `translateX(-${index * (100 / 2)}%)`, width: `${(reviews.length / 2) * 100}%` }}>
          {reviews.map((review, i) => (
            <div key={i} className='w-1/2 p-6 flex-shrink-0'>
              <div className='relative bg-[#121212]  z-30 h-[298px] p-8 rounded-xl text-white shadow-lg w-full'>
                <div className='flex text-2xl'>
                  {Array(review.stars).fill().map((_, idx) => (
                    <span key={idx} className='text-primary text-4xl'>★</span>
                  ))}
                </div>
                
                <p className='mt-6 text-lg text-white z-20 font-sans h-28'>{review.review}</p>
                <p className='mt-6 font-bold text-primary text-xl z-20 font-sans'>{review.name}</p>
                <Image width={196} height={172} src={uni.src} className='z-index z-0 absolute opacity-20 w-[250px] h-[250px] right-4 top-4' alt="logo"></Image>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsCarousel;
