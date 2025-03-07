"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
    name: 'F Thai', 
    review: 'Výborná Tělocvična! Mně jako cizinci z Německa se školení velmi líbilo a byl jsem tam vítán jako každý jiný. Vedle profesionálního školení a dobrého školícího zařízení jsou dva velmi milí trenéři, kteří tvrdě pracují a pomáhají bez ohledu na úroveň vašich dovedností',
    stars: 5
  },
  { 
    name: 'Lukáš Kvasnička', 
    review: 'Super gym na trénink thajského boxu a kickboxu trenéři vše do podrobna vysvětlí a naučí spoustu technik. Výklad je zde hodně podrobný, člověk se zde vybouchá i na lapách a pořádně zapotí. Na každém tréninku se jede i kardio a posilování celého těla. Sparingy jsou zde dobrovolné, vše záleží na domluvě s parťákem.',
    stars: 5
  },
  { 
    name: 'Karolína Janečková', 
    review: 'Za mě super!',
    stars: 5
  },
  { 
    name: 'Robin Zajíček', 
    review: 'Úžasný gym! Když jsem začal s thajským boxem/kickboxem, netušil jsem, co od toho očekávat. V strikingu mě a mého bratra přivítali velmi hezky a každý trénink byl vidět progres. Přístup trenérů je také skvělý. ',
    stars: 5
  }
];

const ReviewsCarousel = () => {
  const [index, setIndex] = useState(0);
  const [maxWidth, setMaxWidth] = useState('none'); // Default max-width

  useEffect(() => {
    // Ensure this code only runs in the browser
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        const width = window.innerWidth;

        if (width >= 1600) {
          setMaxWidth('none'); // No max-width
        } else if (width >= 1200 && width < 1600) {
          setMaxWidth('1100px'); // 1200px - 1600px
        } else if (width >= 900 && width < 1200) {
          setMaxWidth('800px'); // 900px - 1200px
        } else if (width >= 600 && width < 900) {
          setMaxWidth('600px'); // 600px - 900px
        } else if (width >= 550 && width < 600) {
          setMaxWidth('550px'); 
        } else if (width >= 450 && width < 550) {
          setMaxWidth('450px');
        } else if (width >= 400 && width < 450) {
          setMaxWidth('400px');
        } else if (width >= 350 && width < 400) {
          setMaxWidth('350px'); // 350px - 600px
        } else if (width >= 300 && width < 350) {
          setMaxWidth('300px'); // 350px - 600px
        } else {
          setMaxWidth('none'); // Fallback
        }
      };

      handleResize(); // Initial check
      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    // Ensure this code only runs in the browser
    if (typeof window !== 'undefined') {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % (window.innerWidth < 1600 ? reviews.length : Math.ceil(reviews.length / 2)));
      }, 7500);
      return () => clearInterval(interval);
    }
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const staggerChildren = {
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <motion.div
      className='relative flex flex-col items-center text-white py-16 overflow-hidden wrapper z-0'
      initial="hidden"
      whileInView="visible"
      variants={staggerChildren}
      viewport={{ once: true }}
    >
      <div className='absolute inset-0 bg-black opacity-70 z-0'></div>
      <div className='absolute inset-0' style={{ backgroundImage: `url(${rev.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      <motion.h2
        className='relative text-[50px] font-orbion font-black text-white uppercase z-10'
        variants={fadeInUp}
      >
        Recenze
      </motion.h2>
      <motion.div
        className='relative flex gap-6 mt-8 w-full justify-center z-10'
        style={{ overflow: 'hidden', height: '400px' }}
        variants={staggerChildren}
      >
        <motion.div
          className='flex w-full transition-transform duration-[1500ms] ease-in-out'
          style={{ 
            transform: `translateX(-${index * (typeof window !== 'undefined' && window.innerWidth < 1600 ? 100 : 50)}%)`, 
            width: `${typeof window !== 'undefined' && window.innerWidth < 1600 ? reviews.length * 100 : (reviews.length / 2) * 100}%` 
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              className={`${typeof window !== 'undefined' && window.innerWidth < 1600 ? 'w-full' : 'w-1/2'} p-6 flex-shrink-0 flex justify-center`}
              variants={fadeInUp}
            >
              <div 
                className='relative bg-[#121212] z-30 h-[285px] sm:h-[270px] md:h-[260px]  lg:h-[310px] xl:h-[328px] p-4 md:p-8 rounded-xl text-white shadow-lg w-full'
                style={{ maxWidth: maxWidth }} // Apply dynamic max-width
              >
                <div className='flex text-2xl'>
                  {Array(review.stars).fill().map((_, idx) => (
                    <span key={idx} className='text-primary text-4xl'>★</span>
                  ))}
                </div>
                <p className='mt- sm:mt-2 md:mt-4 xl:mt-6 text-[15px] sm:text-[16px] md:text-[15px] lg:text-[20px] text-white z-20 font-sans h-40 sm:h-36 md:h-24 lg:h-32 xl:h-36'>{review.review}</p>
                <p className='mt-6 font-bold text-primary text-xl z-20 font-sans'>{review.name}</p>
                <Image width={196} height={172} src={uni.src} className='z-index z-0 absolute opacity-20 w-[250px] h-[250px] right-4 top-4' alt="logo"></Image>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ReviewsCarousel;