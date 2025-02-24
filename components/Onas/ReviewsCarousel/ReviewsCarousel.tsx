'use client'

import React, { useState, useEffect } from 'react';
import rev from '@/assets/rev.jpeg';
import './ReviewsCarousel.css';
import Image from 'next/image';
import uni from '@/assets/uni.png';

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
  const [maxWidth, setMaxWidth] = useState('none'); // Default max-width

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= 1600) {
        setMaxWidth('none'); // No max-width
      } else if (width >= 1200 && width < 1600) {
        setMaxWidth('1100px'); // 1200px - 1600px
      } else if (width >= 900 && width < 1200) {
        setMaxWidth('800px'); // 900px - 1200px
      } else if (width >= 600 && width < 900) {
        setMaxWidth('500px'); // 600px - 900px
      } else if (width >= 450 && width < 600) {
        setMaxWidth('450px'); 
      }else if (width >= 350 && width < 450) {
          setMaxWidth('350px'); // 350px - 600px
      } else {
        setMaxWidth('none'); // Fallback
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % (window.innerWidth < 1600 ? reviews.length : Math.ceil(reviews.length / 2)));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='relative flex flex-col items-center text-white py-16 overflow-hidden wrapper z-0'>
      <div className='absolute inset-0 bg-black opacity-70 z-0'></div>
      <div className='absolute inset-0' style={{ backgroundImage: `url(${rev.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      <h2 className='relative text-[50px] font-orbion font-black text-white uppercase z-10'>Recenze</h2>
      <div className='relative flex gap-6 mt-8 w-full justify-center z-10' style={{ overflow: 'hidden', height: '400px' }}>
        <div className='flex w-full transition-transform duration-[1500ms] ease-in-out'
             style={{ transform: `translateX(-${index * (window.innerWidth < 1600 ? 100 : 50)}%)`, width: `${window.innerWidth < 1600 ? reviews.length * 100 : (reviews.length / 2) * 100}%` }}>
          {reviews.map((review, i) => (
            <div key={i} className={`${window.innerWidth < 1600 ? 'w-full' : 'w-1/2'} p-6 flex-shrink-0 flex justify-center`}>
              <div 
                className='relative bg-[#121212] z-30 h-[298px] p-8 rounded-xl text-white shadow-lg w-full'
                style={{ maxWidth: maxWidth }} // Apply dynamic max-width
              >
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