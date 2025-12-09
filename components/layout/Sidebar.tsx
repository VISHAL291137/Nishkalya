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
            <p className="text-nish-grey text-xs uppercase tracking-wider mb-1">Follow</p>
            <div className="flex gap-4 text-nish-gold font-medium">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">Behance</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>

      {/* Admin Link (Mock) */}
       <div className="bg-white p-6 rounded-lg shadow-sm border border-nish-ivory/50">
        <h3 className="text-sm font-serif font-bold text-nish-brown mb-2 uppercase tracking-wider">Admin Access</h3>
        <p className="text-xs text-nish-grey mb-4">Manage portfolio and uploads.</p>
        <button className="text-xs font-bold text-nish-gold hover:text-nish-brown uppercase tracking-widest">Login to Dashboard →</button>
      </div>
    </div>
  );
};