"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "../components/Navbar"; // ✅ path diperbaiki

const HomePage = () => {
  const [scale, setScale] = useState(1);
  const [theme, setTheme] = useState("dark");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Efek scroll untuk scale
  useEffect(() => {
    const handleScroll = (event) => {
      setScale((prev) =>
        Math.min(1.1, Math.max(0.9, prev + (event.deltaY > 0 ? -0.05 : 0.05)))
      );
    };
    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  // Theme toggle saat load awal
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
    <div className="bg-gradient-to-br from-gray-900 to-black dark:from-white dark:to-gray-200 min-h-screen text-white dark:text-black transition-colors duration-300 flex flex-col">
      <Navbar />

      {/* Konten Utama */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={
          isInView
            ? { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
            : {}
        }
        className="text-center mt-24 sm:mt-32 mb-12 px-4 flex-grow"
      >
        <motion.div className="relative inline-block" animate={{ scale }}>
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-yellow-500 shadow-lg"
          />
          <span className="absolute -bottom-2 right-0 bg-yellow-500 text-black p-1 rounded-full text-xs">
            👋
          </span>
        </motion.div>

        <h1 className="text-3xl sm:text-4xl font-bold mt-4">
          Hello I'm{" "}
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, delay: 0.2, ease: "easeOut" },
                  }
                : {}
            }
            className="text-yellow-400"
          >
            Reza Ryandi Maulana
          </motion.span>
        </h1>

        <p className="text-base sm:text-lg text-gray-300 dark:text-gray-700 mt-2">
          I'm a <span className="font-semibold text-yellow-400">full-stack developer</span> with{" "}
          <span className="font-bold">2 years</span> of experience.<br />
          I enjoy building <i>sites & apps</i>. My focus is{" "}
          <span className="underline text-yellow-400">React (Next.js)</span>.
        </p>
      </motion.div>

      {/* Theme Toggle */}
      <div className="text-center mb-6">
        <button
          onClick={toggleTheme}
          className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-2 px-6 rounded transition-all"
        >
          {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
    </div>
  );
};

export default HomePage;
