import Link from "next/link";
import React from "react";
import { Lobster } from "next/font/google";

const lobster = Lobster({
  weight: "400",
  subsets: ["latin"],
});

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 py-8 px-4 md:px-24 lg:px-56">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-6/12 mb-8 md:mb-0">
            <div className="text-center md:text-left">
              <Link href={"/"}>
                <div className="flex items-center">
                  <img
                    src="https://gcdnb.pbrd.co/images/2vuSqDR2F05t.png?o=1"
                    alt="Devlovers Logo"
                    className="w-6 h-6 md:w-10 md:h-10"
                  />
                  <h1 className={"text-xl md:text-2xl text-main"}>
                    <span className={"font-extrabold"}>Dev</span>
                    <span className={`${lobster.className}`}>lovers</span>
                  </h1>
                </div>
              </Link>
              <p className="text-gray-600 mt-2 w-2/3">
                Devlovers is the world&apos;s first developer-only job board,
                making it easy for people who want to find a job in programming.
              </p>
            </div>
          </div>

          <div className="w-full md:w-3/12 mb-8 md:mb-0">
            <div className="">
              <div className="text-gray-800 font-semibold text-xl mb-5">
                Links
              </div>
              <ul className="text-gray-600">
                <li>
                  <a href="#" className="hover:text-main">
                    Developer World Map
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-main">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-main">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-3/12">
            <div className="text-center md:text-right">
              <div className="text-gray-800 font-semibold text-xl mb-5">
                Legal
              </div>
              <ul className="text-gray-600">
                <li>
                  <a href="#" className="hover:text-main">
                    Terms of Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-main">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-gray-600 mt-8 text-center">
          Copyright © {currentYear} ||{" "}
          <span className="text-main">Jimmi & Sutan</span> - All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
