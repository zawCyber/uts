"use client"; // Agar bisa menggunakan useState dan usePathname()
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import { Geist, Geist_Mono } from "next/font/google";
import { Menu, X } from "lucide-react"; // Icon untuk hamburger menu
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname(); // Ambil path saat ini
  const [menuOpen, setMenuOpen] = useState(false); // State untuk mobile menu

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <nav className="navbar">
          <div className="nav-container">
            <Link href="/" className="logo">MyPortfolio</Link>

            {/* Hamburger Menu Button */}
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Menu Links */}
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            <li><Link href="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link href="/skills" onClick={() => setMenuOpen(false)}>Skills</Link></li>
            <li><Link href="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link></li>
            <li><Link href="/layanan" onClick={() => setMenuOpen(false)}>Layanan</Link></li>
            <li><Link href="/kontak" onClick={() => setMenuOpen(false)}>Kontak</Link></li>
          </ul>
        </nav>

        {/* Hanya tampil jika TIDAK berada di halaman /lms */}
        {pathname !== "/lms" && (
          <div className="back-button-container">
            <Link href="/lms" className="back-button">⬅ Kembali ke LMS</Link>
          </div>
        )}

        {children}
      </body>
    </html>
  );
}
