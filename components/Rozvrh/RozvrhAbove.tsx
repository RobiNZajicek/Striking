'use client'
import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import KubaORozvrh from '@/assets/mrKuvaop.webp';
import Image from 'next/image';
import classes from './RozvrhAbove.module.css';
import { Button, Container, Text, Title } from '@mantine/core';

const RozvrhAbove = () => {
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
    <div className={classes.wrapper}>
      {/* Decorative Line */}
      <motion.div
        className="absolute flex flex-row z-40 top-96 -left-40 rotate-90 gap-4 text-[20px] justify-center items-center before:content-[''] before:w-20 before:h-[2px] before:bg-[#BDBDBD] before:inline-block before:mr-2 after:content-[''] after:w-20 after:h-[2px] after:bg-[#BDBDBD] after:inline-block after:ml-2"
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: true }}
      />

      {/* Background Image */}
      <Image src={KubaORozvrh} alt="Background" layout="fill" objectFit="cover" />

      {/* Content */}
      <motion.div
        className={classes.inner}
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
      >
        <Title className={classes.title}>Rozvrh</Title>
      </motion.div>
    </div>
  );
};

export default RozvrhAbove;