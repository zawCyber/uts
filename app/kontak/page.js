"use client";

import React from "react";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen text-white flex flex-col items-center justify-center px-6 py-12">
      {/* Header */}
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
      >
        Get in Touch
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-gray-300 text-center mb-10 max-w-lg text-lg"
      >
        Have a project in mind? Let's collaborate and bring your ideas to life!
      </motion.p>

      {/* Contact Info */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex flex-col gap-6 mb-10 text-lg"
      >
        <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg shadow-lg">
          <Mail size={28} className="text-blue-400" />
          <span>reza@example.com</span>
        </div>
        <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg shadow-lg">
          <Phone size={28} className="text-blue-400" />
          <span>+62 812-3456-7890</span>
        </div>
        <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg shadow-lg">
          <MapPin size={28} className="text-blue-400" />
          <span>Bandung, Indonesia</span>
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.form 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        onSubmit={handleSubmit} 
        className="bg-gray-800 p-8 rounded-xl shadow-2xl w-full max-w-lg"
      >
        <label className="block mb-4">
          <span className="text-gray-300 text-lg">Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full mt-2 p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-400"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-300 text-lg">Email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full mt-2 p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-400"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-300 text-lg">Message</span>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full mt-2 p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-400"
            rows="5"
          ></textarea>
        </label>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white py-3 px-6 rounded-lg shadow-lg transition duration-300 text-lg font-bold"
        >
          Send Message
        </motion.button>
        {submitted && <p className="text-green-400 text-center mt-4 text-lg">Message sent successfully!</p>}
      </motion.form>
    </div>
  );
};

export default ContactPage;
