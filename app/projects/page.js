"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

const projects = [
  {
    title: "Portfolio Website",
    shortDesc: "A personal portfolio built with Next.js.",
    fullDesc:
      "This project showcases my personal work. It's built with Next.js, Tailwind CSS, and is fully responsive.",
  },
  {
    title: "Todo App",
    shortDesc: "A simple task manager app.",
    fullDesc:
      "This is a CRUD app built using React and Firebase for authentication and data storage. Features include adding, editing, deleting, and marking tasks as complete.",
  },
  {
    title: "E-commerce Demo",
    shortDesc: "Frontend for an e-commerce store.",
    fullDesc:
      "Mock e-commerce project using React, Tailwind CSS, and integrated with Stripe API. Includes cart, product pages, and checkout process.",
  },
];

const ProjectsPage = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [theme, setTheme] = useState("dark");

  const toggleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

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
      <section className="mt-24 sm:mt-32 px-6 py-12 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-8 text-center">
          Projects
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 dark:bg-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-yellow-500/20 transition cursor-pointer"
              onClick={() => toggleExpand(index)}
            >
              <h3 className="text-xl font-semibold text-yellow-400">{project.title}</h3>
              <p className="text-gray-300 dark:text-gray-700 mt-2">{project.shortDesc}</p>
              {expandedIndex === index && (
                <p className="text-sm text-gray-400 dark:text-gray-600 mt-4 border-t border-gray-700 dark:border-gray-300 pt-3">
                  {project.fullDesc}
                </p>
              )}
              <p className="mt-4 text-yellow-300 text-sm underline">
                {expandedIndex === index ? "Hide Details" : "View Details"}
              </p>
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

export default ProjectsPage;
