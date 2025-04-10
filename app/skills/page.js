"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Firebase",
  "Git & GitHub",
  "REST API",
];

const SkillsPage = () => {
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
          My Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 dark:bg-gray-200 text-center py-4 px-2 rounded-xl shadow hover:shadow-yellow-500/20 transition"
            >
              <p className="text-lg font-semibold text-yellow-300">{skill}</p>
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

export default SkillsPage;
