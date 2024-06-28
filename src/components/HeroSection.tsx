"use client";

import React, { useState } from "react";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  weight: "800",
  subsets: ["latin"],
});

const company = [
  "https://img.freepik.com/free-vector/colorful-letter-gradient-logo-design_474888-2309.jpg?t=st=1719393528~exp=1719394128~hmac=b2b499dbc90bd93854757a539b5bf2088429c3354c7140381f6f8f280e980cdc",
  "https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg?w=900&t=st=1719393548~exp=1719394148~hmac=801fe61bb8cb03b50d89fdf1e535195ebf18e76a889bcbf621828d750856bf74",
  "https://img.freepik.com/free-psd/gradient-abstract-logo_23-2150689661.jpg?size=626&ext=jpg&ga=GA1.1.150466477.1719393437&semt=ais_user",
  "https://img.freepik.com/free-psd/gradient-abstract-logo_23-2150689644.jpg?w=900&t=st=1719393573~exp=1719394173~hmac=9725f2433a633f6756bab6b793cf2ab9a9fc2c2e1a09bbeecfbcd253072ba7cd",
  "https://img.freepik.com/free-psd/gradient-abstract-logo_23-2150689652.jpg?w=900&t=st=1719393592~exp=1719394192~hmac=fafa41f6626b191c9f8a63b745c814c3b6e6683e71c9c88158465997a9309af0",
  "https://img.freepik.com/free-psd/gradient-abstract-logo_23-2150689648.jpg?w=900&t=st=1719393614~exp=1719394214~hmac=c99af86bbd794281aae4d24bce97c178956a41a3d0c8b4ab69b4c1d90e1e1ee1",
  "https://img.freepik.com/free-vector/creative-letter-colorful-logo-design_474888-2534.jpg?w=900&t=st=1719393633~exp=1719394233~hmac=71b891b5e9dbcf4ad57c2752d403b8dc6a1da5fc1ddedbea43984b19a41f4961",
];

const HeroSection = () => {
  const [languages, setLanguages] = useState(["React JS", "Golang"]);
  const [newLanguage, setNewLanguage] = useState("");

  const addLanguage = () => {
    if (newLanguage && !languages.includes(newLanguage)) {
      setLanguages([...languages, newLanguage]);
      setNewLanguage("");
    }
  };

  const updateLanguage = (index: number, value: string) => {
    const updatedLanguages = [...languages];
    updatedLanguages[index] = value;
    setLanguages(updatedLanguages);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h4 className="text-secondary font-bold text-xl">
        From The Makers Of Developer World Map 🌍
      </h4>
      <h1
        className={`${montserrat.className} text-third font-black text-6xl text-center mb-4`}
      >
        Find The Best Developer Jobs For Absolutely Free
      </h1>
      <div className="text-gray-500 text-xl font-light mb-4">
        Sign up to get notified on the best developer jobs based on your skills:
      </div>
      <div className="flex flex-col items-center justify-center py-2">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg mb-24">
          <form>
            <div className="flex w-full justify-center text-gray-600 font-bold mb-2">
              Your Email Here
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="tom@cruise.com"
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="flex w-full justify-center text-gray-600 font-bold mb-2">
              Add Skills
            </div>
            {languages.map((language, index) => (
              <div key={index} className="mb-4 flex items-center">
                <input
                  type="text"
                  value={language}
                  onChange={(e) => updateLanguage(index, e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
            ))}
            <div className="mb-6 flex items-center">
              <input
                type="text"
                value={newLanguage}
                onChange={(e) => setNewLanguage(e.target.value)}
                placeholder="Add another language"
                className="w-full px-3 py-2 border rounded-lg"
              />
              <button
                type="button"
                onClick={addLanguage}
                className="ml-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg"
              >
                +
              </button>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2 rounded-lg font-bold"
              >
                Get Notified →
              </button>
            </div>
          </form>
        </div>
        <div className="mt-8 text-center">
          <h3 className="text-4xl font-semibold mb-8 text-third">
            Featuring Developer Jobs From:
          </h3>
          <div className="flex justify-center space-x-8" id="jobs">
            {company.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="Developer Jobs"
                className="h-20 rounded-full"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
