"use client"

import React, { useState } from "react";
import JobCard from "./JobCard";

const jobs = [
  {
    id: 1,
    company: "Your Company Name",
    logo: "https://img.freepik.com/free-psd/gradient-abstract-logo_23-2150689644.jpg?w=900&t=st=1719393573~exp=1719394173~hmac=9725f2433a633f6756bab6b793cf2ab9a9fc2c2e1a09bbeecfbcd253072ba7cd", // Add logo URL if available
    position: "Here is your job",
    technologies: ["Vue JS", "Nest JS"],
    minSalary: 3000000,
    maxSalary: 4000000,
    location: "North America",
    timePosted: "Now",
    description: "mantap pancing",
  },
  {
    id: 2,
    company: "Netflix",
    logo: "https://img.freepik.com/free-psd/gradient-abstract-logo_23-2150689661.jpg?size=626&ext=jpg&ga=GA1.1.150466477.1719393437&semt=ais_user", // Replace with Netflix logo path
    position: "Accounts Payable Processing Specialist",
    technologies: ["Java", "MongoDB", "Laravel"],
    minSalary: 3500000,
    maxSalary: 6500000,
    location: "Manila, Philippines",
    timePosted: "1 day ago",
    description:
      "Sambil mengenal proses bisnis Pertamina, para pengunjung pun bisa berbelanja dapat memanjakan lidah dengan merogoh kocek tidak terlalu mahal untuk menikmati produk-produk UMKM unggulan. Mulai dari minum susu kurma dari UMKM MauQu, Teh Herbal bu Jami'ah, atau jajan Keripik tempe Bu Mar, Kerupuk Ikan Lele dan aneka roti dari Orchid Bakery.",
  },
  {
    id: 3,
    company: "Google",
    logo: "https://img.freepik.com/free-vector/creative-letter-colorful-logo-design_474888-2534.jpg?w=900&t=st=1719393633~exp=1719394233~hmac=71b891b5e9dbcf4ad57c2752d403b8dc6a1da5fc1ddedbea43984b19a41f4961", // Replace with Google logo path
    position: "Digital Marketing Strategist, Customer Success Acceleration",
    technologies: ["React JS", "Node JS", "Express"],
    minSalary: 4000000,
    maxSalary: 5000000,
    location: "Warsaw, Poland",
    timePosted: "1 day ago",
    description:
      "Mardiana (29), pemilik UMKM Mahar Palembang Murah, bercerita bahwa ia merintis usahanya ini bersama suami setelah menikah pada 2017 lalu. Jadi setelah kami menikah, ada ide sama suami untuk bikin usaha perhiasan mahar, alhamdulillah lancar sampai sekarang jadi pemasukan tambahan, kata Dian, panggilan akrabnya. Dian pun mengaku, meski omzetnya kadang naik turun, namun tetap ada masyarakat yang berminat terhadap produknya, terutama bagi muda mudi yang akan melangsungkan pernikahan. Area Manager Communication, Relations & CSR Kilang Pertamina Plaju, Siti Rachmi Indahsari mengatakan pihaknya selalu berkomitmen menyejahterakan perekonomian masyarakat lokal, salah satunya dengan dukungan penuh terhadap UMKM mitra binaan agar senantiasa naik kelas dan semakin dikenal luas. Sebagai entitas bisnis yang ada di tengah-tengah masyarakat, kami berupaya untuk terus hadir dan memberdayakan potensi-potensi lokal, ujar Rachmi. Menurutnya, keikutsertaan UMKM mitra binaan di Sriwijaya Expo 2024 ini menjadi pesan bahwa Kilang Pertamina Plaju terus mendukung naik kelasnya usaha-usaha yang dirintis masyarakat, terutama kelompok UMKM yang aktif dibina beberapa tahun terakhir",
  },
  {
    id: 4,
    company: "Google",
    logo: "https://pbs.twimg.com/profile_images/874834013512499201/7Q5HhU3P_400x400.jpg",
    position: "Digital Marketing Strategist, Customer Success Acceleration",
    technologies: ["Vue JS", "Express", "MySQL"],
    minSalary: 3500000,
    maxSalary: 5000000,
    location: "Warsaw, Poland",
    timePosted: "1 day ago",
    description:
      "Mardiana (29), pemilik UMKM Mahar Palembang Murah, bercerita bahwa ia merintis usahanya ini bersama suami setelah menikah pada 2017 lalu. Jadi setelah kami menikah, ada ide sama suami untuk bikin usaha perhiasan mahar, alhamdulillah lancar sampai sekarang jadi pemasukan tambahan, kata Dian, panggilan akrabnya. Dian pun mengaku, meski omzetnya kadang naik turun, namun tetap ada masyarakat yang berminat terhadap produknya, terutama bagi muda mudi yang akan melangsungkan pernikahan. Area Manager Communication, Relations & CSR Kilang Pertamina Plaju, Siti Rachmi Indahsari mengatakan pihaknya selalu berkomitmen menyejahterakan perekonomian masyarakat lokal, salah satunya dengan dukungan penuh terhadap UMKM mitra binaan agar senantiasa naik kelas dan semakin dikenal luas. Sebagai entitas bisnis yang ada di tengah-tengah masyarakat, kami berupaya untuk terus hadir dan memberdayakan potensi-potensi lokal, ujar Rachmi. Menurutnya, keikutsertaan UMKM mitra binaan di Sriwijaya Expo 2024 ini menjadi pesan bahwa Kilang Pertamina Plaju terus mendukung naik kelasnya usaha-usaha yang dirintis masyarakat, terutama kelompok UMKM yang aktif dibina beberapa tahun terakhir",
  },
  {
    id: 5,
    company: "Google",
    logo: "https://img.freepik.com/free-psd/gradient-abstract-logo_23-2150689648.jpg?w=900&t=st=1719393614~exp=1719394214~hmac=c99af86bbd794281aae4d24bce97c178956a41a3d0c8b4ab69b4c1d90e1e1ee1", // Replace with Google logo path
    position: "Digital Marketing Strategist, Customer Success Acceleration",
    technologies: ["PHP", "PostgreSQL", "Nest JS"],
    minSalary: 5500000,
    maxSalary: 6000000,
    location: "Warsaw, Poland",
    timePosted: "1 day ago",
    description: "mantap",
  },
];

const FindJob = () => {
  const [openJobId, setOpenJobId] = useState<number | null>(null);
  const handleToggle = (id: number) => {
    setOpenJobId(openJobId === id ? null : id);
  };

  return (
    <div className="w-4/5 mx-auto p-6 mt-24">
      <h1 className="text-5xl font-bold mb-8 text-center text-third">
        Find Bilingual Jobs
      </h1>
      <p className="mb-8 text-center text-gray-500 text-xl font-light">
        Find the best bilingual jobs on the worlds first bilingual job board:
      </p>
      <div className="flex items-center gap-4 mb-8">
        <input
          type="text"
          placeholder="Search by company name, or skill..."
          className="w-full p-2 border rounded-lg"
        />
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <span className="text-gray-500 dark:text-gray-500 text-sm">
            Remote Only
          </span>
          <div className="relative w-16 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-500 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-main"></div>
        </label>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div>
          <button className="px-4 py-2 bg-green-200 rounded-full">
            React JS
          </button>
          <button className="ml-2 px-4 py-2 bg-gray-200 rounded-full">+</button>
        </div>
        <select className="p-2 border rounded">
          <option>Latest</option>
          <option>Oldest</option>
        </select>
      </div>
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          job={job}
          isOpen={job.id === openJobId}
          onToggle={() => handleToggle(job.id)}
        />
      ))}
    </div>
  );
};

export default FindJob;
