"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

const AboutPage = () => {
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
      <section className="mt-24 sm:mt-32 text-center px-6 py-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-4">About Me</h2>
        <p className="text-base sm:text-lg text-gray-300 dark:text-gray-700 max-w-3xl mx-auto">
          I’m passionate about building excellent software that improves the lives of those around me.
          I specialize in creating software for clients ranging from individuals and small businesses all
          the way to large enterprise corporations. My core stack is React, Next.js, Tailwind CSS, and Node.js.
        </p>
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

export default AboutPage;
