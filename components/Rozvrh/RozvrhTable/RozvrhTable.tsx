'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import uni from '@/assets/uni.png';

const schedule = [
  { time: '16:00', monday: '', tuesday: 'Děti (8-14) Kickbox', wednesday: '', thursday: '', friday: 'Děti (8-14) Kickbox', saturday: '', sunday: '' },
  { time: '17:00', monday: '', tuesday: 'Kondiční Kickbox', wednesday: '', thursday: '', friday: 'Kondiční Kickbox', saturday: 'Grappling', sunday: '' },
  { time: '18:00', monday: 'Thaibox', tuesday: 'Kickbox a K1', wednesday: '', thursday: 'Thaibox', friday: 'Kickbox a K1', saturday: '', sunday: 'Kruhový trénink' },
  { time: '19:00', monday: 'Pokročilí', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: '', sunday: '' }
];

const trainingColors = {
  'Kickbox a K1': 'border-l-4 border-green-500 pl-2',
  'Thaibox': 'border-l-4 border-red-500 pl-2',
  'Kondiční Kickbox': 'border-l-4 border-blue-500 pl-2',
  'Děti (8-14) Kickbox': 'border-l-4 border-green-500 pl-2',
  'Pokročilí': 'border-l-4 border-purple-500 pl-2',
  'Grappling': 'border-l-4 border-yellow-500 pl-2',
  'Kruhový trénink': 'border-l-4 border-yellow-500 pl-2'
};

const trainingInfo = {
  'Kickbox a K1': 'Dynamické lekce zaměřené na kickbox, důraz na správné technické provedení úderů a na kondici. Doporučeno pro všechny zkušenostní kategorie.',
  'Thaibox': 'Komplexní bojový sport obsahující údery pěstmi, lokty, koleny, nohama, strhy a spoustu dalšího. Doporučeno pro všechny zkušenostní kategorie. Fyzický kontakt není povinný.',
  'Kondiční Kickbox': 'Bezkontaktní lekce zaměřené na spálení vysokého počtu kalorií. Tréninky budují kondici a formují postavu, vše v přátelské atmosféře. Doporučeno pro muže, ženy, mladistvé všech zkušenostních kategorií.',
  'Děti (8-14) Kickbox': 'Zábavné lekce pro děti ideálně 9-14 let. Na tréninku se budeme věnovat všestrannému rozvoji pohybu, základním technikám kickboxu a rozvoji sportovního ducha. Vše v přátelské a bezpečné atmosféře.',
  'Pokročilí': 'Pokročilé techniky bojových sportů pro zkušené cvičence.',
  'Grappling': 'Lekce grapplingu vhodné pro úplné začátečníky a mírně pokročilé. Na tyto tréninky prosíme kraťasy bez kapes/legíny; uplné tričko (ideálně rashguard); ostříhané nehty a zvýšenou pozornost na hygienu.',
  'Kruhový trénink': 'Lekce, kde posilujeme celé tělo metodou kruhového tréninku. Cvičení spočívá v několika stanovištích, které trvají určitou dobu. Mezi stanovištěmi je krátká pauza. Tréninky jsou zaměřeny na budování kondice, síly a výbušnosti.'
};
const trainerInfo = {
  'Kickbox a K1': 'Trenér: Kuba',
  'Thaibox': 'Trenér: Dan',
  'Kondiční Kickbox': 'Trenér: Kuba',
  'Děti (8-14) Kickbox': 'Trenér: Kuba',
  'Grappling': 'Trenér: Ayan',
  'Kruhový trénink': 'Trenér: Barča'
};

const Schedule = () => {
  const [hoveredTraining, setHoveredTraining] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e, training) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
    setHoveredTraining(training);
  };

  return (
    <div className='relative text-white py-16 px-8 max-w-6xl mx-auto shadow-lg overflow-hidden font-sans rounded-xl h-[614px] mt-16'>
      {/* Background Logo */}
      <Image src={uni} alt='Striking Academy Logo' className='absolute inset-0 w-[400px] h-[400px] top-36 opacity-10 mx-auto' style={{ left: '33%', transform: 'translateX(-50%)' }} />
      
      <table className='w-full border-collapse text-center text-lg rounded-xl h-[514px] table-fixed overflow-hidden'>
        <thead className='rounded-xl'>
          <tr className='bg-primary rounded-xl text-xl text-white'>
            <th className='py-4 px-2 text-start w-[12.5%] '></th>
            <th className='py-4 px-2 text-start w-[12.5%] '>Pondělí</th>
            <th className='py-4 px-2 text-start w-[12.5%] '>Úterý</th>
            <th className='py-4 px-2 text-start w-[12.5%] '>Středa</th>
            <th className='py-4 px-2 text-start w-[12.5%] '>Čtvrtek</th>
            <th className='py-4 px-2 text-start w-[12.5%] '>Pátek</th>
            <th className='py-4 px-2 text-start w-[12.5%] '>Sobota</th>
            <th className='py-4 px-2 text-start w-[12.5%] '>Neděle</th>
          </tr>
        </thead>
        <tbody className='bg-[#0C0C0C] rounded-xl overflow-hidden'>
          {schedule.map((row, index) => (
            <tr key={index} className='border-t border-gray-700 h-28 rounded-xl'>
              <td className='p-4 font-bold'>{row.time}</td>
              {Object.values(row).slice(1).map((training, idx) => (
                <td key={idx} className='p-4 relative text-start rounded-xl'>
                  {training && (
                    <div className={`cursor-pointer inline-block ${trainingColors[training] || ''}`} onMouseMove={(e) => handleMouseMove(e, training)} onMouseLeave={() => setHoveredTraining(null)}>
                      {training}
                    </div>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {hoveredTraining && trainingInfo[hoveredTraining] &&trainerInfo&& (
        <div className='fixed bg-primary w-[400px] h-[290px] p-6 text-white rounded-xl shadow-lg' style={{ top: cursorPos.y + 10, left: cursorPos.x + 10 }}>
          <div className='flex relative flex-col'>
            <div className='h-[170px] z-20'>
            <h3 className='text-[20px] z-20 font-black mb-0'>{hoveredTraining}</h3>
           <p className='z-20 font-sans font-bold text-[16px] mb-2 '>{trainerInfo[hoveredTraining]}</p>
            <p className='z-20 font-sans font-bold text-[16px]'>{trainingInfo[hoveredTraining]}</p>
            
            </div>
            <div className='flex justify-center'>
            
            <button className='mt-8 z-20 font-black border-2 w-32 p-2 rounded-xl'>Vyber sport</button>
            </div>
            <Image width={196} height={172} src={uni.src} className='z-index z-0 absolute opacity-70 right-4 top-0' alt='logo' />
          </div>
        </div>
      )}
    </div>
  );
};

export default Schedule;
