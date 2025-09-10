"use client";

import Link from 'next/link';
import { useState } from 'react';

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Tienda', href: '/tienda' },
  { name: 'Blog', href: '/blog' },
  { name: 'Sobre Mí', href: '/sobre-mi' },
  { name: 'Contacto', href: '/contacto' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-effect border-b border-white/30">
      {/* Gradiente de fondo animado */}
      <div className="absolute inset-0 gradient-bg-rainbow opacity-10"></div>
      
      <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo súper llamativo */}
          <Link href="/" className="flex items-center group">
            <div className="flex flex-col relative">
              {/* Efecto de brillo detrás del texto */}
              <div className="absolute inset-0 blur-lg opacity-30 gradient-bg-primary rounded-lg"></div>
              
              <span className="relative font-display text-2xl md:text-3xl font-bold gradient-text group-hover:scale-110 transition-all duration-300 animate-pulse-slow">
                🥑 Mi Vida Keto
              </span>
              <span className="relative font-creative text-lg md:text-xl text-keto-secondary group-hover:text-keto-pink -mt-1 animate-float">
                ✨ ALMA CREATIVA ✨
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Super colorida */}
          <div className="hidden md:flex items-center space-x-2">
            {navigation.map((item, index) => {
              const colors = ['keto-primary', 'keto-secondary', 'keto-purple', 'keto-orange', 'keto-teal'];
              const bgColor = colors[index % colors.length];
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 button-3d neon-glow hover:bg-gradient-to-r hover:from-${bgColor} hover:to-${colors[(index + 1) % colors.length]} bg-${bgColor} hover:scale-110 hover:rotate-1`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button - Llamativo */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-r from-keto-primary to-keto-teal text-white hover:from-keto-secondary hover:to-keto-pink transition-all duration-300 button-3d neon-glow"
            aria-label="Toggle menu"
          >
            <svg
              className={`h-6 w-6 transform transition-transform duration-300 ${isMenuOpen ? 'rotate-45' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu - Super llamativo */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass-effect border-t border-white/30 rounded-b-2xl overflow-hidden">
            <div className="absolute inset-0 gradient-bg-rainbow opacity-20"></div>
            <div className="relative px-4 py-6 space-y-4">
              {navigation.map((item, index) => {
                const colors = ['keto-primary', 'keto-secondary', 'keto-purple', 'keto-orange', 'keto-teal'];
                const bgColor = colors[index % colors.length];
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block text-center py-4 px-6 rounded-full font-semibold text-white transition-all duration-300 button-3d bg-${bgColor} hover:scale-105 neon-glow`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}