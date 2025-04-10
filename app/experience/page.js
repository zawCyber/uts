"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

const experiences = [
  {
    company: "Freelance Project",
    role: "Full-stack Developer",
    year: "2023 - Sekarang",
    description:
      "Mengembangkan aplikasi web custom untuk klien UMKM, termasuk sistem pemesanan online dan dashboard admin. Fokus menggunakan Next.js, Tailwind CSS, dan Firebase.",
  },
  {
    company: "Startup Tech",
    role: "Frontend Developer Intern",
    year: "2022",
    description:
      "Bertanggung jawab dalam pembuatan UI responsif dan integrasi API menggunakan React dan Tailwind. Bekerja dalam tim menggunakan Git dan Trello.",
  },
  {
    company: "Campus Project",
    role: "Team Leader",
    year: "2021",
    description:
      "Memimpin tim untuk membangun sistem manajemen tugas berbasis web sebagai bagian dari tugas akhir. Stack yang digunakan: React, Node.js, MongoDB.",
  },
];

const ExperiencePage = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div className="bg-gray-900 dark:bg-white text-white dark:text-black min-h-screen transition-colors duration-300">
      <Navbar />
      <section className="mt-24 sm:mt-32 px-6 py-12 max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-8 text-center">
          Experience
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-800 dark:bg-gray-200 rounded-2xl p-6 shadow hover:shadow-yellow-500/20 transition"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold text-yellow-300">{exp.company}</h3>
                <span className="text-sm text-gray-400 dark:text-gray-600">{exp.year}</span>
              </div>
              <h4 className="text-lg font-medium text-white dark:text-black">{exp.role}</h4>
              <p className="text-sm text-gray-300 dark:text-gray-700 mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="text-center mt-10 pb-10">
        <button
          onClick={toggleTheme}
          className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-2 px-6 rounded"
        >
          {theme === "dark" ? "☀️ Light Theme" : "🌙 Dark Theme"}
        </button>
      </div>
    </div>
  );
};

export default ExperiencePage;
