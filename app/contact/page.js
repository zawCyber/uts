"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar"; // perbaiki path

const ContactPage = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [comments, setComments] = useState([]);
    const [theme, setTheme] = useState("dark");
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const res = await fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });
  
      if (res.ok) {
        setFormData({ name: "", email: "", message: "" });
        fetchComments();
      }
    };
  
    const fetchComments = async () => {
      const res = await fetch("/api/comments");
      const data = await res.json();
      setComments(data.reverse());
    };
  
    useEffect(() => {
      fetchComments();
    }, []);
  
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
        <section className="mt-24 px-6 py-12 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">Contact Me</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nama"
              required
              className="w-full px-4 py-2 rounded bg-gray-800 dark:bg-gray-200 text-white dark:text-black"
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              type="email"
              required
              className="w-full px-4 py-2 rounded bg-gray-800 dark:bg-gray-200 text-white dark:text-black"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Pesan"
              rows={4}
              required
              className="w-full px-4 py-2 rounded bg-gray-800 dark:bg-gray-200 text-white dark:text-black"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-300"
            >
              Kirim Pesan
            </button>
          </form>
  
          <div className="mt-10">
            <h3 className="text-xl font-semibold text-yellow-300 mb-4">Komentar</h3>
            {comments.map((c, i) => (
              <div key={i} className="bg-gray-800 dark:bg-gray-100 text-white dark:text-black p-4 rounded mb-2">
                <p className="text-yellow-400 font-semibold">{c.name}</p>
                <p className="text-sm text-gray-400 dark:text-gray-600">{c.email}</p>
                <p className="mt-2">{c.message}</p>
              </div>
            ))}
          </div>
  
          <div className="text-center mt-12">
            <button
              onClick={toggleTheme}
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-2 px-6 rounded"
            >
              {theme === "dark" ? "☀️ Light Theme" : "🌙 Dark Theme"}
            </button>
          </div>
        </section>
      </div>
    );
  };
  
  export default ContactPage;
