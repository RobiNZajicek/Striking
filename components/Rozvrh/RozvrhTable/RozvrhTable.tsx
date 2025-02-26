'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import Image from 'next/image';
import uni from '@/assets/uni.png';
import './RozvrhTable.css';
import Link from 'next/link';

const schedule = [
  { time: '16:00', monday: '', tuesday: 'Děti Kickbox', wednesday: '', thursday: '', friday: 'Děti Kickbox', saturday: '', sunday: '' },
  { time: '17:00', monday: '', tuesday: 'Kondiční Kickbox', wednesday: '', thursday: '', friday: 'Kondiční Kickbox', saturday: 'Grappling', sunday: '' },
  { time: '18:00', monday: 'Thaibox', tuesday: 'Kickbox', wednesday: '', thursday: 'Thaibox', friday: 'Kickbox', saturday: '', sunday: 'Kruhový Trénink' },
  { time: '19:00', monday: 'Pokročilí', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: '', sunday: '' }
];

const trainingColors = {
  'Kickbox': 'lg:border-l-4 border-l-2 border-green-500 pl-2',
  'Thaibox': 'lg:border-l-4 border-l-2 border-red-500 pl-2',
  'Kondiční Kickbox': 'lg:border-l-4 border-l-2 border-blue-500 pl-2',
  'Děti Kickbox': 'lg:border-l-4 border-l-2 border-green-500 pl-2',
  'Pokročilí': 'lg:border-l-4 border-l-2 border-purple-500 pl-2',
  'Grappling': 'lg:border-l-4 border-l-2 border-yellow-500 pl-2',
  'Kruhový Trénink': 'lg:border-l-4 border-l-2 border-primary pl-2'
};

const trainingInfo = {
  'Kickbox': 'Dynamické lekce zaměřené na kickbox, důraz na správné technické provedení úderů a na kondici. Doporučeno pro všechny zkušenostní kategorie.',
  'Thaibox': 'Komplexní bojový sport obsahující údery pěstmi, lokty, koleny, nohama, strhy a spoustu dalšího. Doporučeno pro všechny zkušenostní kategorie. Fyzický kontakt není povinný.',
  'Kondiční Kickbox': 'Bezkontaktní lekce zaměřené na spálení vysokého počtu kalorií. Tréninky budují kondici a formují postavu, vše v přátelské atmosféře. Doporučeno pro muže, ženy, mladistvé všech zkušenostních kategorií.',
  'Děti Kickbox': 'Zábavné lekce pro děti ideálně 9-14 let. Na tréninku se budeme věnovat všestrannému rozvoji pohybu, základním technikám kickboxu a rozvoji sportovního ducha. Vše v přátelské a bezpečné atmosféře.',
  'Pokročilí': 'Pokročilé techniky bojových sportů pro zkušené cvičence.',
  'Grappling': 'Lekce grapplingu vhodné pro úplné začátečníky a mírně pokročilé. Na tyto tréninky prosíme kraťasy bez kapes/legíny; uplné tričko (ideálně rashguard); ostříhané nehty a zvýšenou pozornost na hygienu.',
  'Kruhový Trénink': 'Lekce, kde posilujeme celé tělo metodou kruhového tréninku. Cvičení spočívá v několika stanovištích, které trvají určitou dobu. Mezi stanovištěmi je krátká pauza. Tréninky jsou zaměřeny na budování kondice, síly a výbušnosti.'
};

const trainerInfo = {
  'KB & K1': 'Trenér: Kuba',
  'Thaibox': 'Trenér: Dan',
  'Kondiční KB': 'Trenér: Kuba',
  'Děti KB': 'Trenér: Kuba',
  'Grappling': 'Trenér: Ayan',
  'Kruhový': 'Trenér: Barča'
};

const Schedule = () => {
  const [selectedTraining, setSelectedTraining] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (selectedTraining) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedTraining]);

  const handleClick = (e, training) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
    setSelectedTraining(training);
  };

  const closeModal = () => {
    setSelectedTraining(null);
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <motion.div
      className='relative text-white py-16 px-4 sm:px-8 max-w-7xl mx-auto font-sans rounded-xl mt-16'
      initial="hidden"
      whileInView="visible"
      variants={fadeInUp}
      viewport={{ once: true }}
    >
      <div className='susosBluros'></div>

      {/* Logo with Framer Motion */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 0.5, duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 w-[400px] h-[400px] top-36 opacity-10 mx-auto"
        style={{ left: '33%', transform: 'translateX(-50%)' }}
      >
        <Image src={uni} alt='Striking Academy Logo' className="w-full h-full" />
      </motion.div>

      <motion.div
        className='overflow-x-auto'
        variants={fadeInUp}
      >
        <table className='w-full border-collapse text-center text-lg rounded-xl table-fixed'>
          <thead className='rounded-xl'>
            <tr className='bg-primary rounded-xl text-white'>
              <th className='py-4 px-1 text-start w-[10%] sm:w-[12.5%] rounded-tl-xl text-[8px] sm:text-[14px] md:text-[16px] lg:text-[20px]'></th>
              <th className='py-4 px-1 text-start w-[12.5%] text-[8px] sm:text-[14px] md:text-[16px] lg:text-[20px]'>Pondělí</th>
              <th className='py-4 px-1 text-start w-[12.5%] text-[8px] sm:text-[14px] md:text-[16px] lg:text-[20px]'>Úterý</th>
              <th className='py-4 px-1 text-start w-[10%] text-[8px] sm:text-[14px] md:text-[16px] lg:text-[20px]'>Středa</th>
              <th className='py-4 px-1 text-start w-[12.5%] text-[8px] sm:text-[14px] md:text-[16px] lg:text-[20px]'>Čtvrtek</th>
              <th className='py-4 px-1 text-start w-[12.5%] text-[8px] sm:text-[14px] md:text-[16px] lg:text-[20px]'>Pátek</th>
              <th className='py-4 px-1 text-start w-[12.5%] text-[8px] sm:text-[14px] md:text-[16px] lg:text-[20px]'>Sobota</th>
              <th className='py-4 px-1 text-start w-[12.5%] text-[8px] sm:text-[14px] md:text-[16px] lg:text-[20px] rounded-tr-xl'>Neděle</th>
            </tr>
          </thead>
          <tbody className='bg-[#0C0C0C]'>
            {schedule.map((row, index) => (
              <tr key={index} className='border-t border-gray-700 h-28'>
                <td className='p-0 text-[8px] sm:text-[14px] md:text-[16px] lg:text-[18px] lg:p-4 font-bold'>{row.time}</td>
                {Object.values(row).slice(1).map((training, idx) => (
                  <td key={idx} className='p-0 md:p-4 relative text-start'>
                    {training && (
                      <motion.div
                        className={`cursor-pointer inline-block text-[8px] sm:text-[11px] md:text-[12px] lg:text-[14px] xl:text-[16px] ${trainingColors[training] || ''}`}
                        onClick={(e) => handleClick(e, training)}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {training}
                      </motion.div>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {selectedTraining && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={closeModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-primary w-[90%] sm:w-[400px] h-[320px] p-6 text-white rounded-xl shadow-lg relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              width={196}
              height={172}
              src={uni.src}
              className="absolute opacity-30 top-4 right-4 z-1 object-cover"
              alt="logo"
            />
            <div className="h-[200px] bg-primary">
              <h3 className="text-[20px] font-black mb-0">{selectedTraining}</h3>
              <p className="text-[20px] font-black mb-2">{trainerInfo[selectedTraining]}</p>
              <span className="font-sans font-bold text-[16px]">{trainingInfo[selectedTraining]}</span>
            </div>
            <div className="flex justify-center gap-4">
              <Link
                href={`/Registrace?sport=${encodeURIComponent(selectedTraining)}`}
                className="mt-8 flex justify-center items-center font-black border-2 bg-white text-primary w-32 p-2 rounded-xl"
              >
                Objednat se
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Schedule;