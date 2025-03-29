"use client";

import { useState } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from 'react-icons/fa';


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 bg-fuchsia-100/95 text-fuchsia-500 py-4 shadow-sm z-50">
      <nav className="container mx-auto flex items-center justify-between px-4 relative z-50">
        <div className="text-2xl font-bold">
          <Link href="/">William Sart</Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Menu Mobile */}
        <div
          className={`absolute top-16 left-0 w-full bg-gray-100 flex flex-col items-center gap-4 p-4 shadow-md transition-all duration-300 ${menuOpen ? "opacity-100 visible z-40" : "opacity-0 invisible z-0"} md:relative md:top-0 md:w-auto md:flex-row md:opacity-100 md:visible md:bg-transparent md:shadow-none md:p-0`}
        >
          <Link href="/#about" className="relative transition-all duration-200 after:block after:h-[1px] after:w-full after:bg-fuchsia-500 after:absolute after:left-0 after:bottom-[-2px] after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100" onClick={handleCloseMenu}>À propos</Link>
          <Link href="/#skills" className="relative transition-all duration-200 after:block after:h-[1px] after:w-full after:bg-fuchsia-500 after:absolute after:left-0 after:bottom-[-2px] after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100" onClick={handleCloseMenu}>Compétences</Link>
          <Link href="/#projets" className="relative transition-all duration-200 after:block after:h-[1px] after:w-full after:bg-fuchsia-500 after:absolute after:left-0 after:bottom-[-2px] after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100" onClick={handleCloseMenu}>Projets</Link>
          <Link href="/#contact" className="relative transition-all duration-200 after:block after:h-[1px] after:w-full after:bg-fuchsia-500 after:absolute after:left-0 after:bottom-[-2px] after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100" onClick={handleCloseMenu}>Contact</Link>
          <div className="md:hidden flex flex-col items-center gap-2">
            <Link
              href="https://github.com/WillBlade117"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fuchsia-700"
              onClick={handleCloseMenu}
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/william-sart-developpeur-concepteur-web-mobile-cybersecurite"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fuchsia-700"
              onClick={handleCloseMenu}
            >
              LinkedIn
            </Link>
          </div>
        </div>

        <div className="hidden md:flex gap-4 z-50">
          <Link
            href="https://github.com/WillBlade117"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visiter mon profil GitHub"
            >
            <div role="button" className="border border-fuchsia-500 rounded-lg hover:bg-fuchsia-500 hover:text-gray-100 hover:border-gray-100 transition-all px-2 py-1">
              <FaGithub />
            </div>
          </Link>
          <Link
            href="https://www.linkedin.com/in/william-sart-developpeur-concepteur-web-mobile-cybersecurite"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visiter mon profil LinkedIn"
            >
            <div role="button" className="border border-fuchsia-500 rounded-lg hover:bg-fuchsia-500 hover:text-gray-100 hover:border-gray-100 transition-all px-2 py-1">
              <FaLinkedin />
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
}
