"use client";
import Link from "next/link";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";

const Header = () => {
 const [headerActive, setHeaderActive] = useState(false);
 const [openNav, setOpenNav] = useState(false);
 const [lastScrollY, setLastScrollY] = useState(0);
 const [shouldShow, setShouldShow] = useState(true);

 useEffect(() => {
   const controlNavbar = () => {
     if (window.scrollY > lastScrollY && window.scrollY > 100) { // scrolling down
       setShouldShow(false);
     } else { // scrolling up
       setShouldShow(true);
     }
     setLastScrollY(window.scrollY);
     setHeaderActive(window.scrollY > 50);
   };

   window.addEventListener('scroll', controlNavbar);
   return () => window.removeEventListener('scroll', controlNavbar);
 }, [lastScrollY]);

 return (
   <header
     className={`${
       headerActive ? "h-[100px]" : "h-[124px]"
     } fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[90%] lg:max-w-[800px] 
     ${shouldShow ? 'translate-y-0' : '-translate-y-full'} 
     transition-all duration-300 z-50 
     ${headerActive ? 'bg-black/90 backdrop-blur-md rounded-b-2xl' : 'bg-transparent'}`}
   >
     <div className="h-full flex items-center justify-between px-6">
       {/* Logo */}
       <Link href="">
         <Image src={"/assets/img/logo.png"} width={60} height={55} alt="" className="rounded-full" />
       </Link>

       {/* Mobile Nav */}
       <MobileNav
         containerStyles={`${headerActive ? "top-[90px]" : "top-[124px]"} 
         ${openNav ? "max-h-max pt-8 pb-10 border-t border-white/10" : "max-h-[0] pt-0 pb-0 overflow-hidden border-white/0"}
         flex flex-col text-center gap-8 fixed bg-black/90 backdrop-blur-md w-full left-0 text-base uppercase font-medium text-white transition-all lg:hidden`}
       />

       {/* Desktop Nav */}
       <Nav containerStyles="py-12 flex gap-6 text-white text-base uppercase font-medium transition-all hidden lg:flex" />

       {/* Burger Menu */}
       <button
         type="button"
         title="open/close navbar"
         onClick={() => setOpenNav(!openNav)}
         className="text-white lg:hidden"
       >
         <MdMenu className="text-4xl" />
       </button>
     </div>
   </header>
 );
};

export default Header;