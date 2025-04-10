"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Star } from "lucide-react";

const RatingPage = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [review, setReview] = useState("");
    const [totalRating, setTotalRating] = useState(0);
    const [average, setAverage] = useState(0);
    const [theme, setTheme] = useState("dark");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await fetch("/api/rating", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ rating, review }),
        });
  
        if (res.ok) {
          alert("Terima kasih atas rating-nya!");
          setRating(0);
          setHover(0);
          setReview("");
          fetchRatingStats();
        } else {
          alert("Gagal mengirim rating.");
        }
      } catch (err) {
        console.error(err);
        alert("Terjadi kesalahan.");
      }
    };
  
    const fetchRatingStats = async () => {
      try {
        const res = await fetch("/api/rating");
        const data = await res.json();
  
        const total = data.length;
        const avg =
          total > 0 ? data.reduce((sum, r) => sum + (r.rating || 0), 0) / total : 0;
  
        setTotalRating(total);
        setAverage(avg.toFixed(1));
      } catch (err) {
        console.error("Gagal ambil data rating:", err);
      }
    };
  
    useEffect(() => {
      fetchRatingStats();
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
        <section className="mt-24 sm:mt-32 px-6 py-12 max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-yellow-400 mb-6">Beri Rating</h2>
  
          {/* Info Rating */}
          <div className="mb-8 text-lg">
            <p className="text-yellow-300">
              {totalRating > 0 ? `${totalRating} orang sudah memberi rating` : "Belum ada rating"}
            </p>
            {totalRating > 0 && (
              <p className="text-gray-400 dark:text-gray-600">Rata-rata: ⭐ {average}</p>
            )}
          </div>
  
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={32}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
                  className={`cursor-pointer transition ${
                    (hover || rating) >= star ? "text-yellow-400" : "text-gray-600"
                  }`}
                />
              ))}
            </div>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              rows={4}
              placeholder="Tulis review kamu di sini..."
              className="w-full px-4 py-3 rounded bg-gray-800 dark:bg-gray-200 text-white dark:text-black"
              required
            />
            <button
              type="submit"
              className="bg-yellow-400 text-black font-semibold py-2 px-6 rounded hover:bg-yellow-300"
            >
              Kirim Rating
            </button>
          </form>
  
          {/* Theme toggle */}
          <div className="mt-12">
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
  
  export default RatingPage;
