import { Button, Container, Text, Title } from '@mantine/core';

import classes from './HeroText.module.css';
import { FaFacebookF } from "react-icons/fa";
import Image from 'next/image';
import background from '@/assets/backgroundAbove.png';
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
export function HeroText() {
  return (
    <div className={classes.wrapper}>
        <div className={classes.heroLeft}></div>
        <div className={classes.heroRight}></div>
        <div className='absolute flex flex-row z-40 top-96 -left-40 rotate-90 gap-4 text-[20px] justify-center items-center before:content-[""] before:w-20 before:h-[2px] before:bg-[#BDBDBD] before:inline-block before:mr-2 after:content-[""] after:w-20 after:h-[2px] after:bg-[#BDBDBD] after:inline-block after:ml-2'>
          <span className='text-[#BDBDBD]'>Sledujte nás :</span>
            <FaInstagram size={26} />
            <FaFacebookF size={26} />
            <FaYoutube size={26} />
          </div>

      <Image src={background} alt="Background" layout="fill" objectFit="cover" />
      <div className={classes.inner}>
        <Title className={classes.title}>Nauc se Muay Thai</Title>
        <Container p={0} size={600}>
          <Text size="lg" c="dimmed" className={classes.description}>
            Získej sílu, disciplínu a sebevedomí!
          </Text>
        </Container>
        <div className={classes.controls}>
        <button className="bg-primary w-[187px] h-[48px] border-4 border-primary rounded-xl text-[16px] font-bold text-white">Zobrazit rozvrh</button>
        <button className="bg-primary w-[187px] h-[48px] border-4 border-primary rounded-xl text-[16px] font-bold text-white">Pridej se k nam</button>
        </div>
        
      </div>
    </div>
  );
}
