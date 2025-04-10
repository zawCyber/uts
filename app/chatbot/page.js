"use client";

import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";

const ChatbotPage = () => {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Halo! Ada yang bisa saya bantu hari ini? 😊" },
  ]);
  const [input, setInput] = useState("");
  const [theme, setTheme] = useState("dark");
  const chatRef = useRef(null);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { from: "user", text: input };
    const botReply = generateBotReply(input);

    setMessages((prev) => [...prev, userMessage, { from: "bot", text: botReply }]);
    setInput("");
  };

  const generateBotReply = (text) => {
    text = text.toLowerCase();

    if (text.includes("halo") || text.includes("hai")) {
      return "Halo juga! 👋 Ada yang bisa dibantu?";
    } else if (text.includes("project")) {
      return "Saya punya beberapa project keren! Coba cek halaman Projects ya. 🚀";
    } else if (text.includes("skills")) {
      return "Saya ahli di React, Next.js, dan Tailwind CSS. 🔧";
    } else if (text.includes("thanks") || text.includes("terima kasih")) {
      return "Sama-sama! 😊";
    } else {
      return "Maaf, saya belum mengerti maksud kamu 😅. Tapi saya terus belajar!";
    }
  };

  // Theme logic
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

  // Auto-scroll ke bawah
  useEffect(() => {
    chatRef.current?.scrollTo(0, chatRef.current.scrollHeight);
  }, [messages]);

  return (
    <div className="bg-gray-900 dark:bg-white text-white dark:text-black min-h-screen transition-colors duration-300">
      <Navbar />
      <div className="pt-24 sm:pt-32 px-4 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-yellow-400 text-center mb-6">Chatbot</h2>

        {/* Chat box */}
        <div
          className="bg-gray-800 dark:bg-gray-200 rounded-lg p-4 space-y-2 h-96 overflow-y-auto mb-4"
          ref={chatRef}
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 rounded-md max-w-xs ${
                msg.from === "user"
                  ? "bg-yellow-400 text-black ml-auto text-right"
                  : "bg-gray-700 dark:bg-white dark:text-black text-white"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Input */}
        <form onSubmit={handleSend} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Tulis pesan..."
            className="flex-grow px-4 py-2 rounded-lg bg-gray-700 dark:bg-gray-100 text-white dark:text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            type="submit"
            className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-lg hover:bg-yellow-300 transition"
          >
            Kirim
          </button>
        </form>

        {/* Theme Toggle */}
        <div className="mt-6 text-center">
          <button
            onClick={toggleTheme}
            className="mt-4 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-2 px-6 rounded"
          >
            {theme === "dark" ? "☀️ Light Theme" : "🌙 Dark Theme"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;
