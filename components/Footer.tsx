import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-nish-brown text-nish-ivory py-16 px-6 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Brand */}
        <div className="space-y-4">
          <h2 className="font-serif text-3xl tracking-[0.2em] text-nish-gold">NISHKALYA</h2>
          <p className="font-body text-nish-grey text-sm leading-relaxed max-w-xs">
            Handcrafted visual identity & premium product work. Rooted in calm, clarity, and detail.
          </p>
        </div>

        {/* Links */}
        <div className="space-y-4">
          <h3 className="font-serif text-lg text-nish-ivory tracking-wider">Connect</h3>
          <div className="flex flex-col gap-2">
             <a
              href="https://www.linkedin.com/in/vishal-kumar291137/"
              className="flex items-center gap-2 text-nish-grey hover:text-nish-gold transition-colors group"
            >
              LinkedIn <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="https://github.com/VISHAL291137"
              className="flex items-center gap-2 text-nish-grey hover:text-nish-gold transition-colors group"
            >
              GitHub <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href="#" className="flex items-center gap-2 text-nish-grey hover:text-nish-gold transition-colors group">
              Email <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>

        {/* Newsletter / Text */}
        <div className="space-y-4">
           <h3 className="font-serif text-lg text-nish-ivory tracking-wider">Philosophy</h3>
           <p className="font-body text-nish-grey text-sm italic">
             "Design that ages well through slow craft and material feeling."
           </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-nish-grey/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-nish-grey">
        <p>© {new Date().getFullYear()} Vishal Kumar / Nishkalya Branding. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <span className="hover:text-nish-gold cursor-pointer">Privacy</span>
          <span className="hover:text-nish-gold cursor-pointer">Terms</span>
        </div>
      </div>
    </footer>
  );
};