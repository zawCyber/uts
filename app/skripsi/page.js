'use client';

import { useState, useEffect } from 'react';

const chapters = [
  { id: 'bab1', title: 'Bab 1: Pendahuluan' },
  { id: 'bab2', title: 'Bab 2: Tinjauan Pustaka' },
  { id: 'bab3', title: 'Bab 3: Metodologi' },
  { id: 'bab4', title: 'Bab 4: Hasil dan Pembahasan' },
  { id: 'bab5', title: 'Bab 5: Kesimpulan' },
];

export default function SkripsiPage() {
  const [activeChapter, setActiveChapter] = useState(chapters[0].title);

  useEffect(() => {
    const handleScroll = () => {
      let currentChapter = chapters[0].title;
      chapters.forEach((chapter) => {
        const section = document.getElementById(chapter.id);
        if (section && section.getBoundingClientRect().top <= 100) {
          currentChapter = chapter.title;
        }
      });
      setActiveChapter(currentChapter);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4 fixed top-0 left-0 right-0 shadow-lg z-50 flex justify-between items-center px-4 md:px-8">
        <h1 className="text-lg md:text-2xl font-bold">📖 Skripsi Online</h1>
        <span className="text-xs md:text-sm italic">Baca & Belajar</span>
      </nav>
      
      {/* Sticky Heading */}
      <div className="bg-white shadow-lg p-3 md:p-4 fixed top-14 md:top-16 left-0 right-0 z-40 text-center font-semibold text-sm md:text-lg text-blue-600 border-b border-blue-300">
        {activeChapter}
      </div>
      
      {/* Content */}
      <div className="max-w-3xl mx-auto pt-20 md:pt-24 px-4 md:p-4 space-y-12 md:space-y-16">
        {chapters.map((chapter) => (
          <section key={chapter.id} id={chapter.id} className="bg-white p-4 md:p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h2 className="text-xl md:text-3xl font-bold text-blue-700 mb-3 md:mb-4 border-b-2 pb-1 md:pb-2">{chapter.title}</h2>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus nec nulla elementum ultricies. Integer vel lacus vitae lacus scelerisque venenatis. Ut id ligula nec ligula tincidunt bibendum.</p>
            <p className="mt-3 md:mt-4 text-gray-700 leading-relaxed text-sm md:text-base">Phasellus vehicula velit at sem aliquet, vitae consequat justo cursus. Nullam tristique velit id nisi dictum tristique.</p>
            <p className="mt-3 md:mt-4 text-gray-700 leading-relaxed text-sm md:text-base">Aliquam erat volutpat. Duis nec libero eu metus accumsan tristique vel sit amet purus.</p>
          </section>
        ))}
      </div>
    </div>
  );
}
