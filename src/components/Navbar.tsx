"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Lobster } from "next/font/google";


const lobster = Lobster({
  weight: "400",
  subsets: ["latin"],
});

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className={`sticky top-0 z-50 flex items-center justify-between py-3 px-4 md:px-24 lg:px-56 border-b-2 border-gray transition-all duration-300 ${
        isScrolled ? "bg-white bg-opacity-75" : "bg-white"
      }`}
    >
      <Link href={"/"}>
        <div className="flex items-center">
          <img
            src="https://gcdnb.pbrd.co/images/2vuSqDR2F05t.png?o=1"
            alt="Devlovers Logo"
            className="w-10 h-10 md:w-14 md:h-14"
          />
          <h1 className={"text-2xl md:text-4xl text-main"}>
            <span className={"font-extrabold"}>Dev</span><span className={`${lobster.className}`}>lovers</span>
          </h1>
        </div>
      </Link>
      <div className="hidden md:flex space-x-4 items-center">
        <Link href="/#jobs" className="text-main animated-underline">
          Find Jobs For Developer
        </Link>
      </div>
      <div className="hidden md:flex space-x-4 items-center">
        <button
          onClick={() => router.push("/post-job")}
          className="rounded-lg bg-main px-4 py-2 text-white transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
        >
          Post A Developer Job
        </button>
      </div>
      <div className="md:hidden flex items-center">
        <button
          className="outline-none mobile-menu-button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6 text-gray-500"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden mobile-menu bg-white shadow-lg rounded-b-lg absolute top-16 left-0 right-0 px-4 py-4 ${
          isScrolled ? "bg-white bg-opacity-75" : "bg-white"
        } text-center`}
      >
        <div>
          <Link
            href={"/post-job"}
            className="block text-main py-2 animated-underline"
          >
            Find Jobs For Developer
          </Link>
          <button
            onClick={() => router.push("/post-job")}
            className="block rounded-lg bg-main px-4 py-2 text-white w-full text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            Post A Billingual Job
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
