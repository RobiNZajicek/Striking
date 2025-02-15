"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import Image from "next/image";
import logo from '@/assets/logo-striking.webp';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="bg-[#00060E] text-white py-3 px-[10%] flex justify-between items-center">
      {/* Left side: Logo */}
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image width={274} height={45} src={logo.src} alt="logo" className="cursor-pointer" />
        </Link>
      </div>

      <nav className="flex flex-col justify-center items-end gap-4">
        <div className="gap-12 flex">
          <span className="flex items-center gap-2 font-sans">
            <BsTelephone size={20} className="text-primary" />
            +420 728 652 065
          </span>
          <span className="flex items-center gap-2 font-sans">
            <MdOutlineMail size={20} className="text-primary" />
            prague.striking.academy@gmail.com
          </span>
        </div>

        <ul className="flex justify-center items-center flex-row gap-14 font-bold text-[18px] font-sans text-[#BDBDBD]">
          <li>
            <Link href="/Onas" className={`hover:text-white ${pathname === "/onas" ? "text-white" : ""}`}>O nás</Link>
          </li>
          <li>
            <Link href="/Cenik" className={`hover:text-white ${pathname === "/cenik" ? "text-white" : ""}`}>Ceník</Link>
          </li>
          <li>
            <Link href="/Rozvrh" className={`hover:text-white ${pathname === "/rozvrh" ? "text-white" : ""}`}>Rozvrh</Link>
          </li>
          <li>
            <Link href="/Kontakt" className={`hover:text-white ${pathname === "/kontakt" ? "text-white" : ""}`}>Kontakt</Link>
          </li>
          <li>
            <Link href="/registrace">
              <button className="bg-primary w-[136px] h-[48px] border-4 border-primary rounded-xl text-[16px] font-bold text-white">
                Registrace zde
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
