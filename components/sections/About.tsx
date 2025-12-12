import React from 'react';
import { Button } from '../ui/Button';
import { Code, Palette, Terminal, Github, Linkedin } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Intro Section */}
      <div className="flex flex-col md:flex-row gap-8 items-start bg-white p-8 md:p-12 rounded-lg shadow-sm border border-nish-ivory relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-nish-gold/5 rounded-bl-full pointer-events-none"></div>

        <div className="flex-1 space-y-6 relative z-10">
          <h2 className="font-serif text-3xl text-nish-brown font-bold tracking-wide border-b border-nish-gold/30 pb-4 inline-block">ABOUT VISHAL</h2>
          <p className="text-lg leading-relaxed text-nish-grey font-light">
            I am <strong>Vishal Kumar</strong>, the creator behind Nishkalya. I am a multidisciplinary <strong>Full Stack Developer</strong> and <strong>Visual Designer</strong> based in India.
          </p>
          <p className="text-nish-grey font-light leading-relaxed">
            My work exists at the intersection of logic and aesthetics. With a background in modern web technologies and a deep appreciation for classical design principles, I build digital experiences that are not only functional but also emotionally resonant.
          </p>
          <p className="text-nish-grey font-light leading-relaxed">
            Nishkalya is my portfolio and creative playground—a testament to the belief that software should be as crafted and timeless as physical art.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
             <a href="#/projects">
                <Button variant="primary">View My Work</Button>
             </a>
             <a href="https://www.linkedin.com/in/vishal-kumar291137/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4" /> Connect
                </Button>
             </a>
          </div>
        </div>
        
        {/* Profile Card */}
        <div className="w-full md:w-72 flex-shrink-0 flex flex-col items-center justify-center p-6 bg-nish-ivory/30 rounded-lg border border-nish-brown/10 text-center">
           <div className="w-32 h-32 bg-nish-brown rounded-full mb-4 overflow-hidden border-4 border-nish-gold shadow-lg group cursor-pointer">
              <img 
                src="https://github.com/VISHAL291137.png" 
                alt="Vishal Kumar" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
           </div>
           <span className="block font-serif font-bold text-xl text-nish-brown tracking-widest mb-1">VISHAL KUMAR</span>
           <span className="block font-sans text-xs text-nish-gold tracking-[0.2em] uppercase mb-4">Developer & Designer</span>
           
           <div className="flex gap-3 justify-center">
              <a href="https://github.com/VISHAL291137" target="_blank" rel="noopener noreferrer" className="text-nish-brown hover:text-nish-gold transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/vishal-kumar291137/" target="_blank" rel="noopener noreferrer" className="text-nish-brown hover:text-nish-gold transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
           </div>
        </div>
      </div>

      {/* Skills / Philosophy Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <div className="bg-white p-8 rounded-lg border border-nish-ivory shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all duration-300 group">
            <div className="w-12 h-12 bg-nish-brown/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-nish-brown group-hover:text-white transition-colors">
               <Code className="w-6 h-6 text-nish-brown group-hover:text-white" />
            </div>
            <h3 className="font-serif text-xl text-nish-brown mb-3 font-bold">Engineering</h3>
            <p className="text-sm text-nish-grey leading-relaxed">
               Building scalable, performant applications using modern stacks like React, TypeScript, Node.js, and Cloud Infrastructure. I focus on clean architecture and maintainable code.
            </p>
         </div>

         <div className="bg-white p-8 rounded-lg border border-nish-ivory shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all duration-300 group">
            <div className="w-12 h-12 bg-nish-brown/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-nish-brown group-hover:text-white transition-colors">
               <Palette className="w-6 h-6 text-nish-brown group-hover:text-white" />
            </div>
            <h3 className="font-serif text-xl text-nish-brown mb-3 font-bold">Design</h3>
            <p className="text-sm text-nish-grey leading-relaxed">
               Crafting visual identities that speak. My design process involves color theory, typography, and layout composition to create premium, user-centric interfaces.
            </p>
         </div>

         <div className="bg-white p-8 rounded-lg border border-nish-ivory shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all duration-300 group">
            <div className="w-12 h-12 bg-nish-brown/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-nish-brown group-hover:text-white transition-colors">
               <Terminal className="w-6 h-6 text-nish-brown group-hover:text-white" />
            </div>
            <h3 className="font-serif text-xl text-nish-brown mb-3 font-bold">Open Source</h3>
            <p className="text-sm text-nish-grey leading-relaxed">
               I believe in the power of community. Projects like <strong>TIME-LIGHT</strong> reflect my commitment to creating useful, accessible tools for other developers.
            </p>
         </div>
      </div>
    </div>
  );
};
