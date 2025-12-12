import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Code, Palette, Terminal, Github, Linkedin, ChevronDown, ChevronUp } from 'lucide-react';

const InfoCard: React.FC<{
  icon: React.ElementType;
  title: string;
  description: string;
}> = ({ icon: Icon, title, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 130;
  const shouldTruncate = description.length > maxLength;
  
  const displayText = !isExpanded && shouldTruncate 
    ? `${description.slice(0, maxLength).trim()}...` 
    : description;

  return (
     <div className="bg-white p-8 rounded-lg border border-nish-ivory shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all duration-300 group flex flex-col h-full">
        <div className="w-12 h-12 bg-nish-brown/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-nish-brown group-hover:text-white transition-colors flex-shrink-0">
           <Icon className="w-6 h-6 text-nish-brown group-hover:text-white" />
        </div>
        <h3 className="font-serif text-xl text-nish-brown mb-3 font-bold">{title}</h3>
        <p className="text-sm text-nish-grey leading-relaxed mb-4 flex-grow">
           {displayText}
        </p>
        {shouldTruncate && (
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-1 text-xs font-bold text-nish-gold uppercase tracking-widest hover:text-nish-brown transition-colors mt-auto pt-2 self-start"
          >
            {isExpanded ? 'View Less' : 'Read More'}
            {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
        )}
     </div>
  );
};

export const About: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Intro Section */}
      <div className="flex flex-col md:flex-row gap-8 items-start bg-white p-8 md:p-12 rounded-lg shadow-sm border border-nish-ivory relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-nish-gold/5 rounded-bl-full pointer-events-none"></div>

        <div className="flex-1 space-y-6 relative z-10">
          <h2 className="font-serif text-3xl text-nish-brown font-bold tracking-wide border-b border-nish-gold/30 pb-4 inline-block uppercase">About Nishkalya</h2>
          
          <p className="text-lg leading-relaxed text-nish-grey font-light">
            <strong>Nishkalya</strong> is a full-stack digital solution hub shaped by the principles of <em>śuddha-kalpanā</em> (pure creation) and <em>sūkṣma-karma</em> (precise craftsmanship).
          </p>
          
          <p className="text-nish-grey font-light leading-relaxed">
            We build and maintain websites, structure databases, design interfaces, automate processes, secure systems, and support long-term application growth. Every solution is designed to be <em>sthira</em> (stable), <em>śubhra</em> (clean), and <em>samanvita</em> (well-integrated).
          </p>

          <p className="text-nish-grey font-light leading-relaxed">
            Our approach is simple: engineer experiences that feel balanced, intentional, and dependable. Whether you are beginning your first digital journey or expanding an existing vision, Nishkalya delivers reliable development, swift execution, and sustained maintenance.
          </p>

          <p className="text-nish-grey font-light leading-relaxed">
            With hands-on experience in Python development, automation tools, algorithms, UI/UX design, web applications, and system optimization, Nishkalya merges modern technology with a refined, user-centered philosophy inspired by timeless design values.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
             <a href="#/projects">
                <Button variant="primary">View My Work</Button>
             </a>
             <a href="#/contact">
                <Button variant="outline" className="flex items-center gap-2">
                  Connect
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
              <a href="https://www.linkedin.com/in/nishkalya" target="_blank" rel="noopener noreferrer" className="text-nish-brown hover:text-nish-gold transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
           </div>
        </div>
      </div>

      {/* Skills / Philosophy Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <InfoCard 
            icon={Code}
            title="Engineering"
            description="Building scalable, performant applications using modern stacks like React, TypeScript, Node.js, and Cloud Infrastructure. I focus on clean architecture and maintainable code."
         />

         <InfoCard 
            icon={Palette}
            title="Design"
            description="Crafting clean, minimal interfaces inspired by clarity and function. My design approach blends layout structure, consistent typography, and user-focused flow to create screens that look polished and feel intuitive. From TIME-LIGHT UI concepts to dashboard elements, every design aims to be both modern and effortless."
         />

         <InfoCard 
            icon={Terminal}
            title="Open Source"
            description="I share my work openly through projects on GitHub, including automation tools, UI experiments, Python utilities, and learning-based repos. Projects like TIME-LIGHT reflect my commitment to building useful, accessible tools that help others explore code, learn faster, and create more confidently."
         />
      </div>
    </div>
  );
};