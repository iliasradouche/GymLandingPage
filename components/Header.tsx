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

  useEffect(() => {
    const handleScroll = () => {
      setHeaderActive(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        headerActive ? "h-[100px]" : "h-[124px]"
      } fixed max-w-[1920px] top-0 w-full bg-[#000000] h-[100px] transition-all z-50`}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="">
          <Image src={"/img/logowhite.png"} width={117} height={55} alt="" />
        </Link>
        {/* Mobile Nav - for small devices only */}
        <MobileNav
          containerStyles={`${headerActive ? "top-[90px]" : "top-[124px]"} 
          ${
            openNav
              ? "max-h-max pt-8 pb-10 border-t border-white/10"
              : "max-h-[0] pt-0 pb-0 overflow-hidden border-white/0"
          }
          flex flex-col text-center gap-8 fixed bg-[#000000] w-full left-0 top-[124px] text-base uppercase font-medium text-white transition-all lg:hidden`}
        />
        {/* desktop nav - hidden on small devices */}
        <Nav containerStyles="py-12 flex gap-4 text-white text-base uppercase font-medium transition-all hidden lg:flex" />
        {/* Burger Menu */}
        <div className="flex items-center gap-4">
          {/* Login button */}
          <div className="text-white flex items-center gap-4">
            <button className="hover:text-black transition-all w-[90px] h-[40px] rounded-lg text-base uppercase bg-accent font-medium">
              Login
            </button>
            <button className="hover:text-black transition-all w-[90px] h-[40px] rounded-lg text-base uppercase bg-accent font-medium">
              Register
            </button>
          </div>
          <button
            type="button"
            title="open/close navbar"
            onClick={() => setOpenNav(!openNav)}
            className="text-white lg:hidden"
          >
            <MdMenu className="text-4xl" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
