'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useFavorites } from '@/hooks/useFavorites';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { favorites, loaded } = useFavorites();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMenuOpen
          ? 'bg-[#1a1a1a] border-b border-[#f5f0e8]/5' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <img src="/images/mpls-vegan-logo.jpg" alt="MPLS Vegan" className="w-10 h-10 rounded-full object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="font-display text-xl text-[#f5f0e8] tracking-tight">MPLS Vegan</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#d4a574]">Directory</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {[
              { href: '/', label: 'Home' },
              { href: '/#restaurants', label: 'Restaurants' },
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
            {loaded && (
              <Link
                href="/saved"
                className="ml-2 px-4 py-2 text-sm text-[#f5f0e8]/70 hover:text-[#d4a574] transition-colors duration-300 relative group flex items-center gap-1.5"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill={favorites.length > 0 ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
                My List
                {favorites.length > 0 && (
                  <span className="text-xs bg-[#d4a574] text-[#1a1a1a] rounded-full w-4 h-4 flex items-center justify-center font-medium">
                    {favorites.length}
                  </span>
                )}
                <span className="absolute bottom-1 left-4 right-4 h-px bg-[#d4a574] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5 w-6">
              <span 
                className={`w-full h-0.5 bg-[#f5f0e8] transition-all duration-300 origin-center ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`} 
              />
              <span 
                className={`w-full h-0.5 bg-[#f5f0e8] transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0 scale-0' : ''
                }`} 
              />
              <span 
                className={`w-full h-0.5 bg-[#f5f0e8] transition-all duration-300 origin-center ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
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
              { href: '/#restaurants', label: 'Restaurants' },
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
            <Link
              href="/saved"
              onClick={() => setIsMenuOpen(false)}
              className="py-4 text-lg text-[#f5f0e8]/80 hover:text-[#d4a574] transition-colors duration-300 border-b border-[#f5f0e8]/10 flex items-center gap-2"
            >
              My Saved List
              {loaded && favorites.length > 0 && (
                <span className="text-xs bg-[#d4a574] text-[#1a1a1a] rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  {favorites.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
