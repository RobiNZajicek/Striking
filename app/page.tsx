import React from 'react'
import { HeroText } from '@/components/Hero/HeroText';
import Proces from '@/components/Proces/Proces';
import { FaqSimple } from '@/components/FaQ/FaqSimple';

const Page = () => {  
  return (
    <div >
      <HeroText/>
      <Proces/>
      <FaqSimple/>

    </div>
  )
}

export default Page;
