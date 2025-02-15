import React from 'react'
import './OnasText.css'
const OnasText = () => {
  return (
    <div className='flex justify-center py-24 relative'>
       
        <div className='flex justify-center flex-col'> 
        <div className='OnasBlurosss'></div>
            <h1 className='font-black text-primary text-[50px] text-center uppercase '>Místo, kde rostes s kazdým <br /> tréninkem!</h1>
            <div className='flex flex-col gap-12 justify-center items-center mt-12'>
            <span className='text-[25px] text-center font-bold text-[#BDBDBD] w-2/6 font-sans'>
            Jsme mladý ambiciózní klub s jasným cílem posunu našich klientů v oblasti bojových sportů. Náš tým zkušených trenérů vás provede od základů až po pokročilou úroveň.
            </span>
            <span className='text-[25px] text-center font-bold text-[#BDBDBD] w-2/6 font-sans'>
            Vítáni jsou jak úplní nováčci, tak pokročilí cvičenci - bez i se zápasovou zkušeností. Na pohlaví ani věku nezáleží, zaregistrujte sebe či své dítě na trénink, který vám vyhovuje a přijďte!  
            </span>
            </div>
        </div>
    </div>
  )
}

export default OnasText