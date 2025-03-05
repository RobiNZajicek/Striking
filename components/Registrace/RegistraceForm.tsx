"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import reg from '@/assets/Reg.jpeg';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Default styles
import './Calendar.css'; // Custom styles

// Definice typů pro rozvrh
type ScheduleRow = {
  time: string;
  pondeli: string;
  utery: string;
  streda: string;
  ctvrtek: string;
  patek: string;
  sobota: string;
  nedele: string;
};

type TrainingColors = {
  [key: string]: string;
};

type FormData = {
  sport: string;
  name: string;
  email: string;
  phone: string;
  training_time: string;
};

const schedule: ScheduleRow[] = [
  { time: '16:00', pondeli: '', utery: 'Děti Kickbox', streda: '', ctvrtek: '', patek: 'Děti Kickbox', sobota: '', nedele: '' },
  { time: '17:00', pondeli: '', utery: 'Kondiční Kickbox', streda: '', ctvrtek: '', patek: 'Kondiční Kickbox', sobota: 'Grappling', nedele: '' },
  { time: '18:00', pondeli: 'Thaibox', utery: 'Kickbox', streda: '', ctvrtek: 'Thaibox', patek: 'Kickbox', sobota: '', nedele: 'Kruhový Trénink' },
  { time: '19:00', pondeli: 'Pokročilí', utery: '', streda: '', ctvrtek: '', patek: '', sobota: '', nedele: '' }
];

const trainingColors: TrainingColors = {
  'Kickbox': 'lg:border-l-4 border-l-2 border-green-500 pl-2 w-32',
  'Thaibox': 'lg:border-l-4 border-l-2 border-red-500 pl-2 w-32',
  'Kondiční Kickbox': 'lg:border-l-4 border-l-2 border-blue-500 pl-2 w-32',
  'Děti Kickbox': 'lg:border-l-4 border-l-2 border-green-500 pl-2 w-32',
  'Pokročilí': 'lg:border-l-4 border-l-2 border-purple-500 pl-2 w-32',
  'Grappling': 'lg:border-l-4 border-l-2 border-yellow-500 pl-2 w-32',
  'Kruhový Trénink': 'lg:border-l-4 border-l-2 border-primary pl-2 w-32'
};

const RegistrationForm = () => {
  const searchParams = useSearchParams();
  const selectedSport = searchParams?.get('sport') || "Kickbox"; // Ošetření null hodnoty

  const [formData, setFormData] = useState<FormData>({
    sport: selectedSport,
    name: "",
    email: "",
    phone: "",
    training_time: "", // New field for selected training time
  });

  const [showCalendar, setShowCalendar] = useState(false); // State to toggle calendar visibility
  const [selectedDate, setSelectedDate] = useState<Date>(new Date()); // Selected date in calendar
  const [selectedTraining, setSelectedTraining] = useState<string | null>(null); // Selected training session

  const calendarRef = useRef<HTMLDivElement>(null); // Ref for the calendar container

  // Close calendar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setShowCalendar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you can send the form data to your backend or API
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

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

  const handleClick = (e: React.MouseEvent, training: string) => {
    setSelectedTraining(training);
  };

  // Map days to their Czech equivalents with diacritics
  const daysInCzech: { [key: string]: string } = {
    pondeli: 'Pondělí',
    utery: 'Úterý',
    streda: 'Středa',
    ctvrtek: 'Čtvrtek',
    patek: 'Pátek',
    sobota: 'Sobota',
    nedele: 'Neděle'
  };

  // Get the day of the week from a date
  const getDayOfWeek = (date: Date): string => {
    const days = ['nedele', 'pondeli', 'utery', 'streda', 'ctvrtek', 'patek', 'sobota'];
    return days[date.getDay()];
  };

  // Check if a date has training
  const hasTraining = (date: Date): boolean => {
    const dayOfWeek = getDayOfWeek(date);
    return schedule.some((row) => row[dayOfWeek as keyof ScheduleRow]);
  };

  // Handle date selection in the calendar
  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    const dayOfWeek = getDayOfWeek(date);
    const trainings = schedule
      .filter((row) => row[dayOfWeek as keyof ScheduleRow])
      .map((row) => `${row.time} - ${row[dayOfWeek as keyof ScheduleRow]}`);

    if (trainings.length > 0) {
      setSelectedTraining(trainings[0]); // Default to the first training of the day
      setFormData({ ...formData, training_time: `${date.toLocaleDateString()} ${trainings[0]}` });
    } else {
      setSelectedTraining(null);
      setFormData({ ...formData, training_time: `${date.toLocaleDateString()} Není trénink` });
    }
  };

  // Handle training selection
  const handleTrainingSelect = (training: string) => {
    setSelectedTraining(training);
    setFormData({ ...formData, training_time: `${selectedDate.toLocaleDateString()} ${training}` });
    setShowCalendar(false); // Close the calendar after selection
  };

  // Add custom class to days with training
  const tileClassName = ({ date }: { date: Date }): string | null => {
    return hasTraining(date) ? 'has-training' : null;
  };

  const staggerChildren = {
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <div className="relative flex flex-col lg:flex-row items-center lg:items-start text-white pt-12 pb-44 mb-6 x-8 md:px-2 lg:px-2 xl:px-2 2xl:px-16 mx-auto rounded-xl justify-center overflow-hidden bg-black font-sans">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image src={reg} layout="fill" objectFit="cover" alt="Registration Background" />
      </div>

      {/* Overlay to Darken the Image */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <motion.div
        className="relative w-[100%] md:w-[90%] bg-[#00060E]/90 p-4 md:p-10 rounded-xl shadow-lg flex flex-col lg:flex-row items-stretch gap-8"
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
        viewport={{ once: true }}
      >
        {/* Left Section */}
        <motion.div
          className="w-full lg:w-[45%] gap-6 pt-6 lg:pt-10 flex flex-col"
          variants={fadeInUp}
        >
          <h2 className="font-black text-primary mb-0 font-sans text-[25px] sm:text-[30px] md:text-[30px] lg:text-[40px] xl:text-[45px]">
            PŘIDEJ SE K NÁM!
          </h2>
          <div className='w-full flex-1'>
            {Object.entries(daysInCzech).map(([dayKey, dayName]) => (
              <div key={dayKey} className='mb-2'>
                <span className='font-bold text-primary'>{dayName}</span>
                <div className='mt-2  rounded-lg p-2'>
                  {schedule
                    .filter((row) => row[dayKey as keyof ScheduleRow])
                    .map((row, index) => (
                      <div key={index} className='flex justify-between items-center py-1'>
                        <span className='text-[12px] sm:text-[14px]'>{row.time}</span>
                        <motion.div
                          className={`cursor-pointer inline-block text-[12px] sm:text-[14px] ${trainingColors[row[dayKey as keyof ScheduleRow]] || ''}`}
                          onClick={(e) => handleClick(e, row[dayKey as keyof ScheduleRow])}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          {row[dayKey as keyof ScheduleRow]}
                        </motion.div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Section - Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="w-full lg:w-[55%] p-6 lg:p-10 rounded-xl space-y-4 flex flex-col"
          variants={fadeInUp}
        >
          <h2 className="font-black text-primary mb-4 font-sans text-[25px] sm:text-[30px] md:text-[30px] uppercase lg:text-[40px] xl:text-[45px] mt-4">
            ZAREGISTRUJ SE
          </h2>
          <label className="block font-bold text-[15px] sm:text-[16px] md:text-[15px] lg:text-[18px] Dosxl:text-[20px] font-sans">Sport</label>
          <select
            name="sport"
            value={formData.sport}
            onChange={handleChange}
            className="w-full p-4 mb-2 border border-transparent font-sans rounded-xl bg-[#1A1A1A] text-white focus:ring-0 focus:outline-none hover:shadow-[0_0_15px_3px_var(--tw-shadow-color)] focus:shadow-[0_0_15px_3px_var(--tw-shadow-color)] shadow-primary transition duration-300 ease-in-out"
          >
            <option value="Kickbox">Kickbox</option>
            <option value="Thaibox">Thaibox</option>
            <option value="Grappling">Grappling</option>
            <option value="Děti Kickbox">Děti (8-14) Kickbox</option>
            <option value="Kondiční Kickbox">Kondiční Kickbox</option>
            <option value="Pokročilí">Pokročilí</option>
            <option value="Kruhový Trénink">Kruhový trénink</option>
          </select>

          <label className="block font-bold text-[15px] sm:text-[16px] md:text-[15px] lg:text-[18px] Dosxl:text-[20px] font-sans pt-4 mb-2">Jméno a Příjmení</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Zadejte jméno"
            className="w-full p-3 font-sans border border-transparent rounded-xl bg-[#1A1A1A] text-white focus:ring-0 focus:outline-none focus:shadow-[0_0_15px_3px_var(--tw-shadow-color)] shadow-primary transition duration-300 ease-in-out"
          />

          <label className="block font-bold text-[15px] sm:text-[16px] md:text-[15px] lg:text-[18px] Dosxl:text-[20px] font-sans pt-4 mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Zadejte email"
            className="w-full p-3 border font-sans border-transparent rounded-xl bg-[#1A1A1A] text-white focus:ring-0 focus:outline-none focus:shadow-[0_0_15px_3px_var(--tw-shadow-color)] shadow-primary transition duration-300 ease-in-out"
          />

          <label className="block font-bold text-[15px] sm:text-[16px] md:text-[15px] lg:text-[18px] Dosxl:text-[20px] font-sans pt-4 mb-2">Telefoní číslo</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="752 331 915"
            className="w-full p-3 border font-sans border-transparent rounded-xl bg-[#1A1A1A] text-white focus:ring-0 focus:outline-none focus:shadow-[0_0_15px_3px_var(--tw-shadow-color)] shadow-primary transition duration-300 ease-in-out"
          />

          <label className="block font-bold text-[15px] sm:text-[16px] md:text-[15px] lg:text-[18px] Dosxl:text-[20px] font-sans pt-4 mb-2">Kdy přijdu</label>
          <div className="relative" ref={calendarRef}>
            <input
              type="text"
              name="training_time"
              value={formData.training_time}
              readOnly
              placeholder="Vyberte trénink z kalendáře"
              onClick={() => setShowCalendar(!showCalendar)}
              className="w-full p-3 border font-sans border-transparent rounded-xl bg-[#1A1A1A] text-white focus:ring-0 focus:outline-none focus:shadow-[0_0_15px_3px_var(--tw-shadow-color)] shadow-primary transition duration-300 ease-in-out cursor-pointer"
            />
            {showCalendar && (
              <div className="absolute right-[100%] bottom-[30%] z-50 mt-2 bg-[#00060E] rounded-xl">
                <Calendar
                  onChange={handleDateChange}
                  value={selectedDate}
                  className="react-calendar"
                  tileClassName={tileClassName}
                  showNeighboringMonth={false}
                  formatDay={(locale, date) => date.getDate().toString()} // Zobrazí pouze číslo dne bez tečky
                />
                {selectedDate && (
                  <div className="mt-4 p-2">
                    <h3 className="font-bold mb-4 text-primary">Tréninky na {selectedDate.toLocaleDateString()}</h3>
                    {schedule
                      .filter((row) => row[getDayOfWeek(selectedDate) as keyof ScheduleRow])
                      .map((row, index) => (
                        <div
                          key={index}
                          className={`cursor-pointer p-2 w-full hover:bg-[#1A1A1A] rounded-lg ${trainingColors[row[getDayOfWeek(selectedDate) as keyof ScheduleRow]]}`}
                          onClick={() => handleTrainingSelect(`${row.time} - ${row[getDayOfWeek(selectedDate) as keyof ScheduleRow]}`)}
                        >
                          {row.time} - {row[getDayOfWeek(selectedDate) as keyof ScheduleRow]}
                        </div>
                      ))}
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-primary font-sans text-white font-black text-[14px] xl:text-[18px] py-3 mt-4 rounded-xl hover:bg-opacity-80 transition"
            >
              Registrovat se 
            </button>
          </div>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default RegistrationForm;