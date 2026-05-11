import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { LazyImage } from './ui/LazyImage';
import { Menu, X } from 'lucide-react';

const sections = ['about', 'highlights', 'gallery', 'projects', 'contact'];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observers = sections.map((section) => {
      const element = document.querySelector(`[data-section="${section}"]`);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(section);
          }
        },
        { threshold: 0.3 }
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach((observer) => {
        if (observer) observer.disconnect();
      });
    };
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    const element = document.querySelector(`[data-section="${hash}"]`);
    if (element) {
      const headerHeight = 80;
      const elementPosition = (element as HTMLElement).offsetTop - headerHeight;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <style>{`
        nav {
          position: sticky;
          top: 0;
          z-index: 50;
        }

        nav.scrolled {
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(218, 165, 32, 0.1);
        }

        .nav-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          letter-spacing: 0.05em;
          transition: all 0.3s ease;
        }

        .nav-link.active {
          color: #C8924A;
          border-bottom: 2px solid #C8924A;
        }

        .nav-link:hover {
          color: #C8924A;
        }

        .logo-text {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 1.5rem;
        }

        .logo-last-char {
          color: #C8924A;
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          right: -100%;
          width: 100%;
          height: 100vh;
          background: #F3E9D2;
          z-index: 40;
          transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
          gap: 2rem;
          padding-top: 6rem;
          padding-left: 1.5rem;
          padding-right: 1.5rem;
        }

        .mobile-menu.open {
          right: 0;
        }

        .mobile-menu-close {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
        }
      `}</style>

      <nav className={`transition-all duration-300 ${isScrolled ? 'scrolled' : ''}`}>
        <div className={`max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center py-4 md:py-6 transition-all duration-300`}>
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
              <h1 className="logo-text text-nish-brown">
                NISHKALYA<span className="logo-last-char">A</span>
              </h1>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {sections.map((section) => (
              <a
                key={section}
                href={`#/${section}`}
                onClick={(e) => handleSmoothScroll(e, section)}
                className={`nav-link text-nish-brown uppercase pb-1 ${
                  activeSection === section ? 'active' : ''
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
            <a href="#/admin">
              <Button variant="outline" className="!py-2 !px-4 text-xs">
                Admin
              </Button>
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

      {/* Mobile Menu - Slide from right */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="mobile-menu-close text-nish-brown"
        >
          <X size={28} />
        </button>

        <div className="flex flex-col gap-6">
          {sections.map((section) => (
            <a
              key={section}
              href={`#/${section}`}
              onClick={(e) => handleSmoothScroll(e, section)}
              className="nav-link text-nish-brown uppercase text-xl font-medium"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
          <a
            href="#/admin"
            onClick={() => setMobileMenuOpen(false)}
            className="nav-link text-nish-brown uppercase text-xl font-medium"
          >
            Admin
          </a>
        </div>
      </div>

      {/* Mobile Menu Overlay Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/10 backdrop-blur-sm md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
};