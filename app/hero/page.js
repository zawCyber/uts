"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      {/* Foto Profil */}
      <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-xl border-4 border-blue-500">
        <Image
          src="/profile.jpg" // Pastikan foto ada di folder public
          alt="Profile Picture"
          width={200}
          height={200}
          className="object-cover"
        />
      </div>

      {/* Nama & Job Title */}
      <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4">
        Reza Ryandi Maulana
      </h1>
      <h2 className="text-xl md:text-2xl text-blue-500 font-semibold">
        Full-Stack Developer
      </h2>

      {/* Deskripsi */}
      <p className="max-w-2xl text-gray-700 mt-4 text-lg md:text-xl leading-relaxed">
        Saya adalah seorang **Full-Stack Developer** dengan pengalaman lebih dari 5 tahun. 
        Saya memiliki keahlian dalam **React.js, Next.js, Node.js, dan Tailwind CSS**. 
        Saya senang membangun aplikasi web yang modern, cepat, dan responsif.
      </p>

      {/* Tombol CTA */}
      <div className="mt-6">
        <a
          href="/lms"
          className="bg-blue-600 text-white py-2 px-6 rounded-lg text-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          Lihat Portfolio
        </a>
      </div>
    </section>
  );
}
