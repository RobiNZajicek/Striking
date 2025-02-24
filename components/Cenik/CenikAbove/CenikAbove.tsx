import React from 'react'
import AboveCen from '@/assets/ayan.png'
import Image from 'next/image'
import classes from './CenikAbove.module.css';
import { Button, Container, Text, Title } from '@mantine/core';
const CenikAbove = () => {
  return (
    <div className={classes.wrapper}>
        <div className={classes.heroLeft}></div>
        <div className={classes.heroRight}></div>
        <div className='absolute flex flex-row z-40 top-96 -left-40 rotate-90 gap-4 text-[20px] justify-center items-center before:content-[""] before:w-20 before:h-[2px] before:bg-[#BDBDBD] before:inline-block before:mr-2 after:content-[""] after:w-20 after:h-[2px] after:bg-[#BDBDBD] after:inline-block after:ml-2'>
          
          </div>

      <Image src={AboveCen} alt="Background" layout="fill" objectFit="cover" />
      <div className={classes.inner}>
        <Title className={classes.title}>Ceník</Title>
       
      </div>
    </div>
  )
}

export default CenikAbove;