"use client";
import Link from "next/link";
import React from "react";
import Logo from "../public/logo.svg";
import { useState } from "react";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <nav className="fixed top-0 w-[100%] z-10">
      <div className="flex justify-between items-center px-8 h-16 w-full">
      <Image src="/logo.svg" alt="logo" width={74} height={74} />
        <div className="flex gap-4 items-center">
          
          <ul className="hidden sm:flex">
            {NAV_LINKS.map((link) => (
              <Link href={link.href} key={link.key} className="mx-2">
                {link.label}
              </Link>
            ))}
          </ul>

          {/* Mobile Nav */}
          <ul
            className={`flex fixed w-3/4 flex-col right-0 top-0 items-center 
            justify-center h-full gap-10 bg-white sm:hidden transition-all ${
              nav ? "translate-x-0 drop-shadow-xl" : "translate-x-full"
            }`}
          >
            {NAV_LINKS.map((link) => (
              <Link href={link.href} key={link.key} className="mx-2">
                {link.label}
              </Link>
            ))}
          </ul>
        </div>

        <div className="flex gap-5">
          <div className="flex items-center justify-center gap-2">
            <Image src="search.svg" alt="logo" width={14} height={14} />
            <h1 className="text-[0.8rem]">Search</h1>
          </div>
          <div className="flex z-50 cursor-pointer" onClick={handleNav}>
            <Image src="menu.svg" alt="logo" width={24} height={24} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;