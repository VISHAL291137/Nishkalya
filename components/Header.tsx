import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-nish-ivory/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
          <a href="#/" className="flex items-center gap-3">
             <div className="w-10 h-10 md:w-12 md:h-12 bg-nish-brown rounded-full flex items-center justify-center text-nish-gold border border-nish-gold">
               <span className="text-xl">🕉️</span>
             </div>
             <div>
               <h1 className="font-serif text-xl md:text-2xl font-bold tracking-[0.15em] text-nish-brown">NISHKALYA</h1>
             </div>
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#/about" target="_blank" className="font-sans text-sm font-medium text-nish-brown hover:text-nish-gold transition-colors uppercase tracking-wide">About</a>
            <a href="#/highlights" className="font-sans text-sm font-medium text-nish-brown hover:text-nish-gold transition-colors uppercase tracking-wide">Highlights</a>
            <a href="#/gallery" className="font-sans text-sm font-medium text-nish-brown hover:text-nish-gold transition-colors uppercase tracking-wide">Gallery</a>
            <a href="#/projects" className="font-sans text-sm font-medium text-nish-brown hover:text-nish-gold transition-colors uppercase tracking-wide">Projects</a>
            <a href="#/contact" className="font-sans text-sm font-medium text-nish-brown hover:text-nish-gold transition-colors uppercase tracking-wide">Contact</a>
            <a href="#/admin">
               <Button variant="outline" className="!py-2 !px-4 text-xs">Admin</Button>
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-nish-brown p-2">
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-nish-ivory pt-24 px-6 md:hidden">
           <div className="flex flex-col gap-6 text-center">
            <a href="#/about" onClick={() => setMobileMenuOpen(false)} className="font-serif text-2xl text-nish-brown">About</a>
            <a href="#/highlights" onClick={() => setMobileMenuOpen(false)} className="font-serif text-2xl text-nish-brown">Highlights</a>
            <a href="#/gallery" onClick={() => setMobileMenuOpen(false)} className="font-serif text-2xl text-nish-brown">Gallery</a>
            <a href="#/projects" onClick={() => setMobileMenuOpen(false)} className="font-serif text-2xl text-nish-brown">Projects</a>
            <a href="#/contact" onClick={() => setMobileMenuOpen(false)} className="font-serif text-2xl text-nish-brown">Contact</a>
            <a href="#/admin" onClick={() => setMobileMenuOpen(false)} className="font-serif text-2xl text-nish-brown text-nish-gold">Admin Login</a>
           </div>
        </div>
      )}
    </>
  );
};