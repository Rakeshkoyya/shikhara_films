"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#strengths", label: "Strengths" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#5C4033]/90 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
            <Image 
              src="/logo_icon.png" 
              alt="Shikhara Films" 
              width={40} 
              height={40}
              className="transform group-hover:scale-110 transition-all duration-300 w-8 h-8 sm:w-10 sm:h-10"
            />
            <div>
              <h1 className={`text-base sm:text-xl font-bold tracking-wider transition-colors duration-300 ${isScrolled ? 'text-white' : 'text-[#5C4033]'}`}>
                SHIKHARA
              </h1>
              <p className={`text-[8px] sm:text-[10px] tracking-[0.3em] uppercase transition-colors duration-300 ${isScrolled ? 'text-[#F4A261]' : 'text-[#E07B39]'}`}>
                Films
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`transition-colors duration-300 text-sm uppercase tracking-wider font-medium ${isScrolled ? 'text-white hover:text-[#F4A261]' : 'text-[#5C4033] hover:text-[#E07B39]'}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link
            href="#contact"
            className="hidden md:block px-6 py-2.5 bg-linear-to-r from-[#E07B39] to-[#F4A261] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#E07B39]/30 transform hover:scale-105 transition-all duration-300 text-sm uppercase tracking-wider"
          >
            Get Quote
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors duration-300 ${isScrolled ? 'text-white' : 'text-[#5C4033]'}`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/20 bg-[#5C4033]/95 backdrop-blur-md -mx-4 px-4 sm:-mx-6 sm:px-6">
            <ul className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white hover:text-[#F4A261] transition-colors duration-300 text-sm uppercase tracking-wider font-medium block py-2"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-block px-6 py-2.5 bg-linear-to-r from-[#E07B39] to-[#F4A261] text-white font-semibold rounded-full text-sm uppercase tracking-wider mt-2"
                >
                  Get Quote
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
