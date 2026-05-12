import React, { useState } from 'react';
import { Button } from './ui/Button';
import { LazyImage } from './ui/LazyImage';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center py-4 md:py-6">
          {/* Logo */}
          <a href="#/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
              <LazyImage
                src="/premium_digital_brand_logo_-_nishkalya.jpg"
                alt="Nishkalya Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display text-lg md:text-2xl font-bold text-nish-brown">NISHKALYA</h1>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#/about" className="font-dm text-sm font-medium text-nish-brown hover:text-nish-gold transition-colors uppercase tracking-wide">About</a>
            <a href="#/highlights" className="font-dm text-sm font-medium text-nish-brown hover:text-nish-gold transition-colors uppercase tracking-wide">Highlights</a>
            <a href="#/gallery" className="font-dm text-sm font-medium text-nish-brown hover:text-nish-gold transition-colors uppercase tracking-wide">Gallery</a>
            <a href="#/projects" className="font-dm text-sm font-medium text-nish-brown hover:text-nish-gold transition-colors uppercase tracking-wide">Projects</a>
            <a href="#/contact" className="font-dm text-sm font-medium text-nish-brown hover:text-nish-gold transition-colors uppercase tracking-wide">Contact</a>
            <a href="#/admin">
              <Button variant="outline" className="!py-2 !px-4 text-xs">Admin</Button>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-nish-brown p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-nish-ivory pt-24 px-6 md:hidden">
          <div className="flex flex-col gap-6 text-center">
            <a href="#/about" onClick={() => setMobileMenuOpen(false)} className="font-serif text-2xl text-nish-brown">About</a>
            <a href="#/highlights" onClick={() => setMobileMenuOpen(false)} className="font-serif text-2xl text-nish-brown">Highlights</a>
            <a href="#/gallery" onClick={() => setMobileMenuOpen(false)} className="font-serif text-2xl text-nish-brown">Gallery</a>
            <a href="#/projects" onClick={() => setMobileMenuOpen(false)} className="font-serif text-2xl text-nish-brown">Projects</a>
            <a href="#/contact" onClick={() => setMobileMenuOpen(false)} className="font-serif text-2xl text-nish-brown">Contact</a>
            <a href="#/admin" onClick={() => setMobileMenuOpen(false)} className="font-serif text-2xl text-nish-brown text-nish-gold">Admin</a>
          </div>
        </div>
      )}
    </>
  );
};