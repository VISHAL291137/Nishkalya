import React, { useState, useEffect, useRef } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { LazyImage } from '../ui/LazyImage';
import { Project } from '../../types';
import { Github, ExternalLink, Eye, ArrowRight } from 'lucide-react';

const projects: Project[] = [
  {
    id: 'time-light',
    title: 'TIME-LIGHT',
    category: 'Open Source Tool',
    description: "A lightweight, efficient tool built to manage, track, and display real-time data with a clean UI. Features smooth animations and easy integration without bloated frameworks.",
    imageUrl: 'https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=1000',
    link: 'https://github.com/VISHAL291137/TIME-LIGHT',
    techStack: ['HTML5', 'CSS3', 'Vanilla JS']
  },
  {
    id: 'nishkalya-branding',
    title: 'Nishkalya Branding',
    category: 'Visual Identity',
    description: "A complete visual identity overhaul for a premium creative studio, focusing on heritage forms and modern minimalism.",
    imageUrl: 'https://picsum.photos/800/600?random=20',
    techStack: ['Illustrator', 'Figma', 'Brand Strategy']
  },
  {
    id: 'ai-concept-engine',
    title: 'AI Concept Engine',
    category: 'Development',
    description: 'A React-based tool integrating Google Gemini API to generate creative brand concepts dynamically.',
    imageUrl: 'https://picsum.photos/800/600?random=21',
    techStack: ['React', 'Gemini API', 'Tailwind']
  },
  {
    id: 'ecommerce-dashboard',
    title: 'E-Commerce Dashboard',
    category: 'Full Stack',
    description: 'Scalable shopping platform architecture with seamless checkout flows and real-time analytics.',
    imageUrl: 'https://picsum.photos/800/600?random=22',
    techStack: ['Next.js', 'Node.js', 'Stripe']
  }
];

const ProjectItem: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref}
      className={`group transition-all duration-1000 ease-out transform ${
         isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      style={{ 
        transitionDelay: `${index % 2 * 150}ms`
      }}
    >
      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
         {/* Image Container */}
         <div className="w-full md:w-1/3 aspect-video md:aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 relative shadow-md group-hover:shadow-2xl transition-all duration-500">
            <LazyImage
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out filter grayscale group-hover:grayscale-0"
            />
            
            {/* Enhanced Overlay */}
            <div className="absolute inset-0 bg-nish-brown/80 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
               <h4 className="text-nish-gold font-serif text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 opacity-0 group-hover:opacity-100">
                  {project.title}
               </h4>
               
               <div className="mt-6 flex flex-col gap-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150 opacity-0 group-hover:opacity-100 w-full max-w-[200px]">
                 <a href={`#/project/${project.id}`} className="w-full">
                    <Button variant="outline" fullWidth className="!border-white !text-white hover:!bg-white hover:!text-nish-brown !py-2 !text-xs uppercase tracking-widest">
                       View Project
                    </Button>
                 </a>
               </div>

               <div className="flex gap-4 mt-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200 opacity-0 group-hover:opacity-100">
                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-white hover:scale-110 transition-all"
                      title="View Code"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.demoLink && (
                    <a 
                      href={project.demoLink}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-white hover:scale-110 transition-all"
                      title="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
               </div>
            </div>
         </div>
         
         {/* Content */}
         <div className="flex-1 flex flex-col justify-center border-b border-nish-ivory pb-8 md:border-none md:pb-0">
           <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-sans font-bold text-nish-gold tracking-widest uppercase">0{index + 1}</span>
              <span className="h-px w-8 bg-nish-gold/50"></span>
              <span className="text-xs font-sans font-bold text-nish-grey tracking-widest uppercase">{project.category}</span>
           </div>
           
           <h3 className="text-2xl md:text-3xl font-serif text-nish-brown mb-4 group-hover:text-nish-gold transition-colors duration-300">
             {project.title}
           </h3>
           
           {project.techStack && (
             <div className="flex flex-wrap gap-2 mb-6">
               {project.techStack.map((tech) => (
                 <span key={tech} className="px-3 py-1 bg-white border border-nish-ivory text-nish-brown/70 text-[10px] uppercase tracking-widest font-bold rounded-full shadow-sm hover:border-nish-gold hover:text-nish-gold transition-colors cursor-default select-none">
                   {tech}
                 </span>
               ))}
             </div>
           )}

           <p className="text-nish-grey font-body leading-relaxed mb-8 max-w-xl group-hover:text-nish-brown/80 transition-colors duration-300">
             {project.description}
           </p>
           
           {/* Mobile-only Action Buttons (Visible when overlay is not practical or for quick access) */}
           <div className="flex flex-wrap gap-4 mt-auto md:hidden">
              <a href={`#/project/${project.id}`}>
                <Button variant="outline" className="flex items-center gap-2 !px-5 !py-2.5 !text-xs">
                  <Eye size={16} /> View
                </Button>
              </a>
           </div>

           {/* Desktop subtle indicator */}
           <div className="hidden md:flex items-center gap-2 text-nish-gold text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-0 group-hover:translate-x-2">
              Explore <ArrowRight size={14} />
           </div>
         </div>
      </div>
    </div>
  );
};

export const Projects: React.FC = () => {
  return (
    <Card title="Selected Projects" hasAccentBorder={true} id="projects" className="scroll-mt-28">
      <div className="space-y-16">
        {projects.map((project, index) => (
          <ProjectItem key={project.id} project={project} index={index} />
        ))}
      </div>
    </Card>
  );
};