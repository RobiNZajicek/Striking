import React from 'react'
import './Proces.css'
import { TiTick } from "react-icons/ti";
const Proces = () => {
  return (
    <div className='flex items-center flex-col  mt-14 h-screen relative'>
      
      <div className='flex flex-col gap-14  items-center'>
      <div className='bluros blurss'></div>
      <h1 className='text-[50px] font-black'>PRVNÍ TRÉNINK ZDARMA</h1>
      <button className="bg-primary w-[158px] h-[48px] border-4 border-primary rounded-xl text-[16px] font-bold text-white">Registrace zde</button>
      </div>
      <div className='flex flex-row gap-0 mt-32'>
      <div className='flex flex-col justify-center items-center w-1/4'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"strokeWidth={1.5} stroke="currentColor" className="size-20 text-[#A05A96]">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/>
      </svg>
        <span className='text-[50px] uppercase font-black text-[#BDBDBD] '>Vyber</span>
        <span className='font-normal text-[25px] text-[#BDBDBD] text-center w-5/6 '>Vyberte si sport, který vám sedne.</span>
      </div>
      <div className='flex flex-col justify-center items-center w-1/4'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-20 text-[#A05A96]">
  <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
</svg>


        <span className='text-[50px] uppercase font-black text-[#BDBDBD] '>Rozvrh</span>
        <span className='font-normal text-[25px] text-[#BDBDBD] text-center w-5/6'>Podívejte se, kdy se vám to hodí.</span>
      </div>
      <div className='flex flex-col justify-center items-center w-1/4'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-20 text-[#A05A96]">
  <path fillRule="evenodd" d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z" clipRule="evenodd" />
</svg>

        <span className='text-[50px] uppercase font-black text-[#BDBDBD]'>Clenství</span>
        <span className='font-normal text-[25px] text-[#BDBDBD] text-center w-5/6'>Rozmyslete si,jak často chcete chodit</span>
      </div>
      <div className='flex flex-col justify-center items-center w-1/4'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-20 text-[#A05A96]">
  <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
  <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
</svg>

        <span className='text-[50px] uppercase font-black text-[#BDBDBD]'>Trénink</span>
        <span className='font-normal text-[25px] text-[#BDBDBD] text-center w-5/6'>Přijďte si <br /> zaboxovat!</span>
      </div>
    
      </div>
    </div>
  )
}

export default Proces