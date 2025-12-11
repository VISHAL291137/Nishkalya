import React from 'react';
import { Card } from '../ui/Card';

export const Sidebar: React.FC = () => {
  return (
    <div className="space-y-8 sticky top-24">
      {/* Contact Card */}
      <div className="bg-nish-brown text-nish-ivory p-8 rounded-lg shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-nish-gold rounded-full opacity-10 blur-xl"></div>
        <h3 className="text-xl font-serif font-bold mb-6 tracking-widest border-b border-nish-gold/30 pb-4">CONTACT</h3>
        <div className="space-y-4 font-body text-sm">
          <div>
            <p className="text-nish-grey text-xs uppercase tracking-wider mb-1">Inquiries</p>
            <p className="font-semibold text-lg hover:text-nish-gold transition-colors cursor-pointer">hello@nishkalya.com</p>
          </div>
          <div>
            <p className="text-nish-grey text-xs uppercase tracking-wider mb-1">Connect</p>
            <div className="flex flex-col gap-2 text-nish-gold font-medium">
              <a 
                href="https://www.linkedin.com/in/vishal-kumar291137/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-2"
              >
                LinkedIn <span className="text-xs opacity-50">↗</span>
              </a>
              <a 
                href="https://github.com/VISHAL291137" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-2"
              >
                GitHub <span className="text-xs opacity-50">↗</span>
              </a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
            </div>
          </div>
          <div className="pt-4 mt-2">
            <a href="#/contact" className="inline-block px-4 py-2 bg-nish-gold text-nish-brown text-xs font-bold uppercase tracking-widest rounded hover:bg-white transition-colors w-full text-center">
              Send Message
            </a>
          </div>
        </div>
      </div>

      {/* Admin Link */}
       <div className="bg-white p-6 rounded-lg shadow-sm border border-nish-ivory/50">
        <h3 className="text-sm font-serif font-bold text-nish-brown mb-2 uppercase tracking-wider">Admin Access</h3>
        <p className="text-xs text-nish-grey mb-4">Manage portfolio and messages.</p>
        <a href="#/admin" className="block text-center text-xs font-bold text-nish-gold hover:text-nish-brown uppercase tracking-widest border border-nish-ivory py-2 rounded hover:bg-nish-ivory transition-all">Login to Dashboard →</a>
      </div>
    </div>
  );
};