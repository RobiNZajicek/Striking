'use client'
import React from 'react'
import AboveCen from '@/assets/ayan.png'
import Image from 'next/image'
import classes from './CenikAbove.module.css';
import {  Title } from '@mantine/core';
import { motion } from "framer-motion"; 
const CenikAbove = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };
  return (
    <motion.div className={classes.wrapper} initial="hidden"
    animate="visible"
    variants={fadeIn}
    viewport={{ once: true }}>
        <div className={classes.heroLeft}></div>
        <div className={classes.heroRight}></div>
        <div className='absolute flex flex-row z-40 top-96 -left-40 rotate-90 gap-4 text-[20px] justify-center items-center before:content-[""] before:w-20 before:h-[2px] before:bg-[#BDBDBD] before:inline-block before:mr-2 after:content-[""] after:w-20 after:h-[2px] after:bg-[#BDBDBD] after:inline-block after:ml-2'>
          
          </div>

      <Image src={AboveCen} alt="Background" layout="fill" objectFit="cover" />
      <motion.div className={classes.inner}
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        viewport={{ once: true }} >
        <Title className={classes.title} >Ceník</Title>
       
      </motion.div>
    </motion.div>
  )
}

export default CenikAbove;