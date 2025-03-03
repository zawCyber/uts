"use client";

import React, { useState, useRef } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion, useInView } from "framer-motion";

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

  // Ref for animated sections
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen text-white flex flex-col items-center justify-center px-6 py-12">
      {/* Header */}
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-extrabold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gold-400 to-yellow-500 shadow-xl"
      >
        Contact Us
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-gray-300 text-center mb-10 max-w-lg text-lg italic"
      >
        Let's collaborate and bring your vision to reality with elegance and excellence!
      </motion.p>

      {/* Contact Info */}
      <motion.div 
        ref={ref}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}} 
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-6 mb-10 text-lg"
      >
        {[ 
          { Icon: Mail, text: "reza@example.com" },
          { Icon: Phone, text: "+62 812-3456-7890" },
          { Icon: MapPin, text: "Bandung, Indonesia" }
        ].map(({ Icon, text }, index) => (
          <motion.div 
            key={index}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex items-center gap-4 bg-gray-800 p-5 rounded-lg shadow-xl border border-yellow-500 hover:scale-105 transition-transform"
          >
            <Icon size={32} className="text-gold-400" />
            <span className="text-lg font-semibold">{text}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Contact Form */}
      <motion.form 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        onSubmit={handleSubmit} 
        className="bg-gray-900 p-10 rounded-2xl shadow-2xl w-full max-w-lg border border-yellow-500"
      >
        {["Name", "Email"].map((field, index) => (
          <label className="block mb-6" key={index}>
            <span className="text-gray-300 text-lg font-semibold">{field}</span>
            <input
              type={field.toLowerCase() === "email" ? "email" : "text"}
              name={field.toLowerCase()}
              value={form[field.toLowerCase()]}
              onChange={handleChange}
              required
              className="w-full mt-2 p-4 rounded-lg bg-gray-800 text-white border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </label>
        ))}
        <label className="block mb-6">
          <span className="text-gray-300 text-lg font-semibold">Message</span>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full mt-2 p-4 rounded-lg bg-gray-800 text-white border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            rows="5"
          ></textarea>
        </label>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-gradient-to-r from-yellow-500 to-gold-600 hover:from-gold-600 hover:to-yellow-500 text-black py-4 px-8 rounded-lg shadow-xl transition duration-300 text-lg font-bold border border-yellow-300"
        >
          Send Message
        </motion.button>
        {submitted && <p className="text-green-400 text-center mt-4 text-lg">Message sent successfully!</p>}
      </motion.form>
    </div>
  );
};

export default ContactPage;