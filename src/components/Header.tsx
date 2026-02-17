'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || isMenuOpen
        ? 'bg-[#1a1a1a] border-b border-[#f5f0e8]/5'
        : 'bg-transparent'
        }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3d4a3d] to-[#5a6b5a] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <svg className="w-5 h-5 text-[#f5f0e8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 1 7.92 12.446a9 9 0 1 1 -16.626 0a7.5 7.5 0 0 1 7.92 -12.446c.131 0 .262 0 .393 0z" />
                <path d="M12 3v18" />
                <path d="M12 10c-1.5 0 -3 .5 -3 2.5s1.5 2.5 3 2.5" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl text-[#f5f0e8] tracking-tight">MPLS Vegan</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#d4a574]">Directory</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {[
              { href: '/', label: 'Home' },
              { href: '/restaurants', label: 'Restaurants' },
              { href: '/guide', label: 'Guide' },
              { href: '/blog', label: 'Blog' },
              { href: '/neighborhoods', label: 'Neighborhoods' },
              { href: '/about', label: 'About' },
              { href: '/contact', label: 'Contact' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-[#f5f0e8]/70 hover:text-[#d4a574] transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-1 left-4 right-4 h-px bg-[#d4a574] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5 w-6">
              <span
                className={`w-full h-0.5 bg-[#f5f0e8] transition-all duration-300 origin-center ${isMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
              />
              <span
                className={`w-full h-0.5 bg-[#f5f0e8] transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-0' : ''
                  }`}
              />
              <span
                className={`w-full h-0.5 bg-[#f5f0e8] transition-all duration-300 origin-center ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
              />
            </div>
          </button>
        </div>

      </nav>

      {/* Mobile Navigation — full screen overlay */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 top-20 z-50 bg-[#1a1a1a]"
        >
          <div className="flex flex-col px-6 pt-6">
            {[
              { href: '/', label: 'Home' },
              { href: '/restaurants', label: 'Restaurants' },
              { href: '/guide', label: 'Guide' },
              { href: '/blog', label: 'Blog' },
              { href: '/neighborhoods', label: 'Neighborhoods' },
              { href: '/about', label: 'About' },
              { href: '/contact', label: 'Contact' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="py-4 text-lg text-[#f5f0e8]/80 hover:text-[#d4a574] transition-colors duration-300 border-b border-[#f5f0e8]/10"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
