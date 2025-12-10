import React from 'react';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-center bg-white p-8 md:p-12 rounded-lg shadow-sm border border-nish-ivory mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex-1 space-y-6">
        <h2 className="font-serif text-3xl text-nish-brown font-bold tracking-wide">ABOUT US</h2>
        <p className="text-lg leading-relaxed text-nish-grey font-light">
          Founded by <strong>Vishal Kumar</strong>, Nishkalya is a creative study in visual identity and digital craft. 
          We build premium branded work rooted in calm, clarity, and detail. Our process values composition, material feel, and slow design that ages well.
        </p>
        <Button variant="text" className="!p-0 !text-nish-gold font-bold flex items-center mt-4">
          Read Our Story <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
      
      <div className="hidden md:flex flex-col items-center justify-center p-8 bg-nish-ivory/30 rounded-lg border border-nish-brown/10 w-64 h-64 text-center">
         <span className="text-4xl mb-4">✨</span>
         <span className="block font-serif font-bold text-nish-brown tracking-[0.2em] mb-2">PREMIUM</span>
         <span className="block font-serif font-bold text-nish-brown tracking-[0.2em] mb-2">TIMELESS</span>
         <span className="block font-serif font-bold text-nish-brown tracking-[0.2em]">CLEAN</span>
      </div>
    </div>
  );
};