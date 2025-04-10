"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-md text-white flex flex-wrap justify-between px-6 sm:px-10 py-4 shadow-lg z-50">
      <div className="text-lg sm:text-xl font-bold text-yellow-400">
        Reza Ryandi Maulana
      </div>
      <ul className="hidden sm:flex space-x-4">
        {[
          { name: "Home", path: "/home" },
          { name: "About", path: "/about" },
          { name: "Projects", path: "/projects" },
          { name: "Skills", path: "/skills" },
          { name: "Experience", path: "/experience" },
          { name: "Contact", path: "/contact" },
          { name: "Rating", path: "/rating" },
          { name: "Chatbot", path: "/chatbot" },
        ].map((item, index) => (
          <li key={index}>
            <Link
              href={item.path}
              className="hover:text-yellow-400 transition cursor-pointer"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
