"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Lobster } from "next/font/google";
import { Button } from "./ui/button";
import { signOut } from "next-auth/react";
import type { Session } from "next-auth";
import Image from "next/image";

const lobster = Lobster({
  weight: "400",
  subsets: ["latin"],
});

interface NavbarClientProps {
  session: Session | null;
}

const NavbarClient: React.FC<NavbarClientProps> = ({ session }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
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
      className={`sticky top-0 z-50 flex items-center justify-between py-3 px-4 md:px-24 lg:px-20 border-b-2 border-gray transition-all duration-300 ${
        isScrolled ? "bg-white bg-opacity-75" : "bg-white"
      }`}
    >
      <Link href={"/"}>
        <div className="flex items-center">
          <Image
            src="https://gcdnb.pbrd.co/images/2vuSqDR2F05t.png?o=1"
            alt="Devlovers Logo"
            className="w-10 h-10 md:w-14 md:h-14"
            width={500}
            height={500}
          />
          <h1 className={"text-2xl md:text-4xl text-main"}>
            <span className={"font-extrabold"}>Dev</span>
            <span className={`${lobster.className}`}>lovers</span>
          </h1>
        </div>
      </Link>
      <div className="hidden md:flex space-x-4 items-center">
        <Link href="/#jobs" className="text-main animated-underline">
          Find Jobs For Developer
        </Link>
        <button
          onClick={() => router.push("/post-job")}
          className="text-main animated-underline"
        >
          Post A Developer Job
        </button>
      </div>
      <div className="hidden md:flex space-x-6 items-center">
        {session ? (
          <div className="relative" ref={dropdownRef}>
            <div
              id="dropdownDefaultButton"
              onClick={toggleDropdown}
              className="text-black text-md text-center inline-flex items-center dark:text-white cursor-pointer"
            >
              <p className="capitalize">{session.user?.username}</p>
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </div>

            {isDropdownOpen && (
              <div
                id="dropdown"
                className="absolute right-0 mt-2 z-10 bg-white border border-gray-300 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : null}
        {session ? (
          <Button
            className="rounded-lg bg-main px-4 py-2 text-white transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-main"
            onClick={() => signOut()}
          >
            Sign Out
          </Button>
        ) : (
          <Link
            className="rounded-lg bg-main px-4 py-2 text-white transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-main"
            href="/sign-in"
            scroll={false}
          >
            Sign In Here
          </Link>
        )}
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
            Post A Developer Job
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarClient;
