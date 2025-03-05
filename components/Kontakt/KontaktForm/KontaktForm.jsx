'use client';

import React, { useRef, useEffect } from 'react'; // Přidáno useEffect
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './KontaktForm.css';

const KontaktForm = () => {
  const form = useRef(null);

  // Inicializace EmailJS
  useEffect(() => {
    emailjs.init('FjHR19_UwmBrW35Gr'); // Inicializace s Public Key
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!form.current) return;

    try {
      const result = await emailjs.sendForm(
        'service_striking', // Service ID
        'template_striking', // Template ID
        form.current,
        'FjHR19_UwmBrW35Gr' // Public Key
      );
      console.log('SUCCESS:', result.text);
      alert('Zpráva byla úspěšně odeslána!');
      form.current.reset();
    } catch (error) {
      console.error('FAILED:', error.text);
      alert('Odeslání zprávy selhalo, zkuste to znovu.');
    }
  };

  return (
    <motion.div
      className='relative flex justify-center flex-col px-[1%] xl:px-[7%] Dosxl:px-[15%]'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
    >
      <div className='KonBlurosss'></div>
      <motion.h1
        className='text-center font-orbion font-black text-primary text-[25px] sm:text-[30px] md:text-[30px] lg:text-[40px] xl:text-[45px] uppercase mt-20'
      >
        Prague Striking Academy
      </motion.h1>
      <motion.div
        className='flex flex-col items-center md:flex-row md:items-stretch text-white py-16 w-full rounded-lg shadow-lg justify-center font-sans gap-0 max-w-[90%] mx-auto'
      >
        {/* Formulář */}
        <motion.div className='w-full md:w-3/5 p-2 lg:p-6 flex flex-col flex-1'>
          <form ref={form} onSubmit={sendEmail} className='flex flex-col flex-grow'>
            <input
              type='text'
              name='user_name' // Toto musí odpovídat proměnné v šabloně
              placeholder='Jakub Novak'
              className='w-full p-4 bg-[#1C1728] rounded-xl text-white placeholder-gray-400 h-16 focus:outline-none focus:ring-2 focus:ring-[#C060CB] mb-4 text-lg'
              required
            />
            <input
              type='email'
              name='user_email' // Toto musí odpovídat proměnné v šabloně
              placeholder='Email'
              className='w-full p-4 bg-[#1C1728] rounded-xl text-white placeholder-gray-400 h-16 focus:outline-none focus:ring-2 focus:ring-[#C060CB] mb-4 text-lg'
              required
            />
            <textarea
              name='message' // Toto musí odpovídat proměnné v šabloně
              placeholder='Zadejte zprávu'
              rows='6'
              className='w-full p-4 bg-[#1C1728] rounded-xl text-white placeholder-gray-400 h-full focus:outline-none focus:ring-2 focus:ring-[#C060CB] mb-4 text-lg flex-grow'
              required
            ></textarea>

            <button
              type='submit'
              className='w-full bg-[#C060CB] text-white py-4 rounded-xl text-xl font-bold opacity-90 hover:opacity-100 transition-all'
            >
              Odeslat
            </button>
          </form>
        </motion.div>

        {/* Kontaktní informace */}
        <motion.div className='w-full md:w-2/5 p-2 lg:p-6 flex flex-col gap-4 justify-center flex-1'>
          {[
            { icon: <FaPhoneAlt />, title: 'Telefonní číslo', text: '+420 728 652 065' },
            { icon: <FaEnvelope />, title: 'Emailová adresa', text: 'prague.striking.academy@gmail.com' },
            { icon: <FaMapMarkerAlt />, title: 'Adresa', text: 'Bellušova 1877/68, 155 00 Praha 5-Stodůlky' }
          ].map((item, index) => (
            <motion.div
              key={index}
              className='bg-[#1C1728] flex-1 p-6 rounded-xl flex items-center gap-4 w-full'
            >
              <div className='shrink-0 text-[#C060CB] text-[20px] md:text-[24px]'>
                {item.icon}
              </div>
              <div className='min-w-0 flex-grow'>
                <p className='text-gray-400 text-lg'>{item.title}</p>
                <p className='text-white font-bold text-[14px] sm:text-[16px] md:text-[18px] break-words'>
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default KontaktForm;