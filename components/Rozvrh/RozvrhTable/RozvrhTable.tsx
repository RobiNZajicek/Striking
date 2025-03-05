"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import uni from '@/assets/uni.png';
import './RozvrhTable.css';
import Link from 'next/link';

type TrainingEntry = {
  time: string;
  training: string;
};

type Schedule = {
  pondeli: TrainingEntry[];
  utery: TrainingEntry[];
  streda: TrainingEntry[];
  ctvrtek: TrainingEntry[];
  patek: TrainingEntry[];
  sobota: TrainingEntry[];
  nedele: TrainingEntry[];
};

const schedule: Schedule = {
  pondeli: [
    { time: '16:00', training: '' },
    { time: '17:00', training: '' },
    { time: '18:00', training: 'Thaibox' },
    { time: '19:00', training: 'Pokročilí' }
  ],
  utery: [
    { time: '16:00', training: 'Děti Kickbox' },
    { time: '17:00', training: 'Kondiční Kickbox' },
    { time: '18:00', training: 'Kickbox' },
    { time: '19:00', training: '' }
  ],
  streda: [
    { time: '16:00', training: '' },
    { time: '17:00', training: '' },
    { time: '18:00', training: '' },
    { time: '19:00', training: '' }
  ],
  ctvrtek: [
    { time: '16:00', training: '' },
    { time: '17:00', training: '' },
    { time: '18:00', training: 'Thaibox' },
    { time: '19:00', training: '' }
  ],
  patek: [
    { time: '16:00', training: 'Děti Kickbox' },
    { time: '17:00', training: 'Kondiční Kickbox' },
    { time: '18:00', training: 'Kickbox' },
    { time: '19:00', training: '' }
  ],
  sobota: [
    { time: '16:00', training: '' },
    { time: '17:00', training: 'Grappling' },
    { time: '18:00', training: '' },
    { time: '19:00', training: '' }
  ],
  nedele: [
    { time: '16:00', training: '' },
    { time: '17:00', training: '' },
    { time: '18:00', training: 'Kruhový Trénink' },
    { time: '19:00', training: '' }
  ]
};

type TrainingColors = {
  [key: string]: string;
};

const trainingColors: TrainingColors = {
  'Kickbox': 'lg:border-l-4 border-l-2 border-green-500 pl-2',
  'Thaibox': 'lg:border-l-4 border-l-2 border-red-500 pl-2',
  'Kondiční Kickbox': 'lg:border-l-4 border-l-2 border-blue-500 pl-2',
  'Děti Kickbox': 'lg:border-l-4 border-l-2 border-green-500 pl-2',
  'Pokročilí': 'lg:border-l-4 border-l-2 border-purple-500 pl-2',
  'Grappling': 'lg:border-l-4 border-l-2 border-yellow-500 pl-2',
  'Kruhový Trénink': 'lg:border-l-4 border-l-2 border-primary pl-2'
};

type TrainingType = keyof typeof trainingInfo;

const trainingInfo = {
  'Kickbox': 'Dynamické lekce zaměřené na kickbox, důraz na správné technické provedení úderů a na kondici. Doporučeno pro všechny zkušenostní kategorie.',
  'Thaibox': 'Komplexní bojový sport obsahující údery pěstmi, lokty, koleny, nohama, strhy a spoustu dalšího. Doporučeno pro všechny zkušenostní kategorie. Fyzický kontakt není povinný.',
  'Kondiční Kickbox': 'Bezkontaktní lekce zaměřené na spálení vysokého počtu kalorií. Tréninky budují kondici a formují postavu, vše v přátelské atmosféře. Doporučeno pro muže, ženy, mladistvé všech zkušenostních kategorií.',
  'Děti Kickbox': 'Zábavné lekce pro děti ideálně 9-14 let. Na tréninku se budeme věnovat všestrannému rozvoji pohybu, základním technikám kickboxu a rozvoji sportovního ducha. Vše v přátelské a bezpečné atmosféře.',
  'Pokročilí': 'Pokročilé techniky bojových sportů pro zkušené cvičence.',
  'Grappling': 'Lekce grapplingu vhodné pro úplné začátečníky a mírně pokročilé. Na tyto tréninky prosíme kraťasy bez kapes/legíny; uplné tričko (ideálně rashguard); ostříhané nehty a zvýšenou pozornost na hygienu.',
  'Kruhový Trénink': 'Lekce, kde posilujeme celé tělo metodou kruhového tréninku. Cvičení spočívá v několika stanovištích, které trvají určitou dobu. Mezi stanovištěmi je krátká pauza. Tréninky jsou zaměřeny na budování kondice, síly a výbušnosti.'
};

const trainerInfo: Record<TrainingType, string> = {
  'Kickbox': 'Trenér: Kuba',
  'Thaibox': 'Trenér: Dan',
  'Kondiční Kickbox': 'Trenér: Kuba',
  'Děti Kickbox': 'Trenér: Kuba',
  'Pokročilí': 'Trenér: Kuba',
  'Grappling': 'Trenér: Ayan',
  'Kruhový Trénink': 'Trenér: Barča'
};

const Schedule = () => {
  const [selectedTraining, setSelectedTraining] = useState<TrainingType | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [expandedDay, setExpandedDay] = useState<string | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 500);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  const handleClick = (e: React.MouseEvent, training: TrainingType) => {
    setSelectedTraining(training);
  };

  const toggleDay = (day: string) => {
    setExpandedDay(expandedDay === day ? null : day);
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  // Map days to their Czech equivalents with diacritics
  const daysInCzech = {
    pondeli: 'Pondělí',
    utery: 'Úterý',
    streda: 'Středa',
    ctvrtek: 'Čtvrtek',
    patek: 'Pátek',
    sobota: 'Sobota',
    nedele: 'Neděle'
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
        transition={{ delay: 0.5, duration: 2.5, ease: "linear" }}
        className="absolute inset-0 w-[400px] h-[400px] top-36 opacity-10 mx-auto"
        style={{ left: '33%', transform: 'translateX(-50%)' }}
      >
        <Image src={uni} alt='Striking Academy Logo' className="w-full md:flex h-full hidden" />
      </motion.div>

      <motion.div
        className='overflow-x-auto'
        variants={fadeInUp}
      >
        {isMobile ? (
          // Mobile Layout: Collapsible days
          <div className='w-full'>
            {Object.entries(daysInCzech).map(([dayKey, dayName]) => (
              <div key={dayKey} className='mb-2'>
                <button
                  onClick={() => toggleDay(dayKey)}
                  className='w-full bg-primary text-white py-4 rounded-xl px-4  text-left flex justify-between items-center'
                >
                  <span className='font-bold'>{dayName}</span>
                  <span>{expandedDay === dayKey ? '▲' : '▼'}</span>
                </button>
                {expandedDay === dayKey && (
                  <div className='mt-2 bg-[#0C0C0C] rounded-lg p-2'>
                    {schedule[dayKey]
                      .filter((row) => row.training)
                      .map((row, index) => (
                        <div key={index} className='flex justify-between items-center py-1'>
                          <span className='text-[12px] sm:text-[14px]'>{row.time}</span>
                          <motion.div
                            className={`cursor-pointer inline-block text-[12px] sm:text-[14px] ${trainingColors[row.training] || ''}`}
                            onClick={(e) => handleClick(e, row.training as TrainingType)}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                            {row.training}
                          </motion.div>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          // Desktop Layout: Times at the top, days on the left
          <table className='w-full border-collapse text-center text-lg rounded-xl table-fixed'>
            <thead className='rounded-xl'>
              <tr className='bg-primary rounded-xl text-white'>
                <th className='py-4 px-1 text-start w-[10%] sm:w-[12.5%] rounded-tl-xl text-[8px] sm:text-[14px] md:text-[16px] lg:text-[20px]'></th>
                {schedule.pondeli.map((row, index) => (
                  <th key={index} className='py-4 px-1 text-start w-[12.5%] text-[8px] sm:text-[14px] md:text-[16px] lg:text-[20px]'>{row.time}</th>
                ))}
              </tr>
            </thead>
            <tbody className='bg-[#0C0C0C]'>
              {Object.entries(daysInCzech).map(([dayKey, dayName]) => (
                <tr key={dayKey} className='border-t border-gray-700 h-28'>
                  <td className='p-0 text-[8px] sm:text-[14px] md:text-[16px] lg:text-[18px] lg:p-4 font-bold'>{dayName}</td>
                  {schedule[dayKey].map((row, index) => (
                    <td key={index} className='p-0 md:p-4 relative text-start'>
                      {row.training && (
                        <motion.div
                          className={`cursor-pointer inline-block text-[8px] sm:text-[11px] md:text-[12px] lg:text-[14px] xl:text-[16px] ${trainingColors[row.training] || ''}`}
                          onClick={(e) => handleClick(e, row.training as TrainingType)}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          {row.training}
                        </motion.div>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </motion.div>

      {selectedTraining && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={() => setSelectedTraining(null)}
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