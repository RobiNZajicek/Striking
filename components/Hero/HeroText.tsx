import { Container, Text, Title } from "@mantine/core";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import background from "@/assets/backgroundAbove.png";
import classes from "./HeroText.module.css";
import Link from "next/link";

export function HeroText() {
  return (
    <div className={classes.wrapper}>
      {/* Overlay to Maintain Visibility */}
      <div className="absolute inset-0 bg-black opacity-60 z-1"></div>

      {/* Decorative Blur Elements */}
      <div className={classes.heroLeft}></div>
      <div className={classes.heroRight}></div>

      {/* Social Icons - Positioned Responsively */}
      <div className="absolute flex left-5% flex-row z-40 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] justify-center items-center gap-2 sm:gap-3 lg:gap-4 
        top-[65%] sm:top-[75%] md:top-[80%]   xl:top-[50%] xl:left-[5%] xl:-translate-x-1/2 xl:rotate-90 
        before:content-[''] before:w-10 sm:before:w-14 md:before:w-16 lg:before:w-20 before:h-[2px] before:bg-[#BDBDBD] before:inline-block before:mr-1 sm:before:mr-2 
        after:content-['']  after:w-10 sm:after:w-14 md:after:w-16 lg:after:w-20 after:h-[2px] after:bg-[#BDBDBD] after:inline-block after:ml-1 sm:after:ml-2">
        
        <div className="flex items-center gap-4">
  <span className="text-[#BDBDBD] z-50">Sledujte nás :</span>
  
  <a href="https://www.instagram.com/praguestrikingacademy/" target="_blank" rel="noopener noreferrer">
    <FaInstagram size={24} className="text-white hover:text-primary transition duration-300" />
  </a>

  <a href="https://www.facebook.com/Praguestrikingacademy?locale=cs_CZ" target="_blank" rel="noopener noreferrer">
    <FaFacebookF size={24} className="text-white hover:text-primary transition duration-300" />
  </a>

  <a href="https://www.youtube.com/@Fit2Fight" target="_blank" rel="noopener noreferrer">
    <FaYoutube size={24} className="text-white hover:text-primary transition duration-300" />
  </a>
</div>

      </div>

      {/* Background Image */}
      <Image src={background} alt="Background" layout="fill" objectFit="cover" className="z-0" />

      {/* Content Section */}
      <div className="relative z-50 flex flex-col items-center text-center text-white px-4 sm:px-6">
        <Title className="text-[28px] font-orbion sm:text-[40px] md:text-[50px] lg:text-[65px] xl:text-[85px] font-black text-[#A05A96] uppercase">
          Nauč se Muay Thai
        </Title>

        <Container p={0} size={600}>
          <Text className="text-[14px] font-orbion sm:text-[18px] md:text-[22px] lg:text-[26px] xl:text-[30px] font-bold">
            Získej sílu, disciplínu a sebevědomí!
          </Text>
        </Container>

        {/* Buttons */}
        <div className="flex  sm:flex-row gap-3 sm:gap-6 justify-center items-center mt-4 sm:mt-8">
          <Link href="/Rozvrh" className="bg-primary flex items-center justify-center font-sans w-[120px] sm:w-[140px] md:w-[160px] lg:w-[187px] h-[36px] sm:h-[40px] md:h-[44px] lg:h-[48px] border-4 border-primary rounded-xl text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-bold text-white">
            Zobrazit rozvrh
          </Link>
          <Link href="/Registrace" className="bg-primary flex items-center justify-center font-sans w-[120px] sm:w-[140px] md:w-[160px] lg:w-[187px] h-[36px] sm:h-[40px] md:h-[44px] lg:h-[48px] border-4 border-primary rounded-xl text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-bold text-white">
            Přidej se k nám
          </Link>
        </div>
      </div>
    </div>
  );
}
