import React from "react";
import "./OnasText.css";

const OnasText = () => {
  return (
    <div className="flex justify-center py-16 md:py-20 lg:py-24 px-4 relative">
      <div className="flex justify-center flex-col items-center">
        {/* <div className="OnasBlurosss"></div> */}

        {/* Title */}
        <h1 className="font-black text-primary text-center uppercase text-[25px] sm:text-[30px] md:text-[30px] lg:text-[40px] xl:text-[45px]">
          Místo, kde rosteš s každým  tréninkem!
        </h1>

        {/* Description */}
        <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 justify-center items-center mt-8 sm:mt-10 md:mt-12">
          <span className="text-[15px] sm:text-[16px] md:text-[15px] lg:text-[20px] text-center font-black  text-[#BDBDBD] w-4/6 sm:w-4/6 md:w-4/6 lg:w-3/6 Dosxl:1/6 font-sans">
            Jsme mladý ambiciózní klub s jasným cílem posunu našich klientů v oblasti bojových sportů. Náš tým zkušených trenérů vás provede od základů až po pokročilou úroveň.
          </span>
          <span className="text-[15px] sm:text-[16px] md:text-[15px] lg:text-[20px] text-center font-black  text-[#BDBDBD] w-4/6 sm:w-4/6 md:w-4/6 lg:w-3/6 Dosxl:1/6 font-sans">
            Vítáni jsou jak úplní nováčci, tak pokročilí cvičenci - bez i se zápasovou zkušeností. Na pohlaví ani věku nezáleží, zaregistrujte sebe či své dítě na trénink, který vám vyhovuje, a přijďte!
          </span>
        </div>
      </div>
    </div>
  );
};

export default OnasText;
