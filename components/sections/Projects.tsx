import React from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Project } from '../../types';
import { Github, ExternalLink, Eye } from 'lucide-react';

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

export const Projects: React.FC = () => {
  return (
    <Card title="Selected Projects" hasAccentBorder={true} id="projects" className="scroll-mt-28">
      <div className="space-y-12">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className="group animate-in fade-in slide-in-from-bottom-12 duration-700 ease-out"
            style={{ 
              animationDelay: `${index * 150}ms`,
              animationFillMode: 'backwards' 
            }}
          >
            <div className="flex flex-col md:flex-row gap-6 md:gap-10">
               {/* Image */}
               <div className="w-full md:w-1/3 aspect-video md:aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 relative shadow-md">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0" 
                  />
                  {/* Overlay Actions */}
                  <div className="absolute inset-0 bg-nish-brown/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                     <a 
                        href={`#/project/${project.id}`}
                        className="bg-white p-3 rounded-full text-nish-brown hover:text-nish-gold hover:scale-110 transition-all shadow-lg"
                        title="View Project Details"
                     >
                        <Eye size={20} />
                     </a>
                     {project.link && (
                        <a
                          href={project.link}
                          className="bg-white p-3 rounded-full text-nish-brown hover:text-nish-gold hover:scale-110 transition-all shadow-lg"
                          title="View Repository"
                        >
                          <Github size={20} />
                        </a>
                     )}
                     {project.demoLink && (
                        <a
                          href={project.demoLink}
                          className="bg-white p-3 rounded-full text-nish-brown hover:text-nish-gold hover:scale-110 transition-all shadow-lg"
                          title="Live Demo"
                        >
                          <ExternalLink size={20} />
                        </a>
                     )}
                  </div>
               </div>
               
               {/* Content */}
               <div className="flex-1 flex flex-col justify-center border-b border-nish-ivory pb-8 md:border-none md:pb-0">
                 <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-sans font-bold text-nish-gold tracking-widest uppercase">0{index + 1}</span>
                    <span className="h-px w-8 bg-nish-gold/50"></span>
                    <span className="text-xs font-sans font-bold text-nish-grey tracking-widest uppercase">{project.category}</span>
                 </div>
                 
                 <h3 className="text-2xl md:text-3xl font-serif text-nish-brown mb-4 group-hover:text-nish-gold transition-colors">
                   {project.title}
                 </h3>
                 
                 {project.techStack && (
                   <div className="flex flex-wrap gap-2 mb-5">
                     {project.techStack.map((tech) => (
                       <span key={tech} className="px-2 py-1 bg-nish-ivory/50 border border-nish-ivory text-nish-brown text-[10px] uppercase tracking-wider font-bold rounded">
                         {tech}
                       </span>
                     ))}
                   </div>
                 )}

                 <p className="text-nish-grey font-body leading-relaxed mb-8 max-w-xl">
                   {project.description}
                 </p>
                 
                 {/* Action Buttons */}
                 <div className="flex flex-wrap gap-4 mt-auto">
                    <a href={`#/project/${project.id}`}>
                      <Button variant="outline" className="flex items-center gap-2 !px-5 !py-2.5 !text-xs hover:bg-nish-brown hover:text-white">
                        <Eye size={16} /> View Project
                      </Button>
                    </a>

                    {project.link && (
                      <a
                        href={project.link}
                      >
                         <Button variant="primary" className="flex items-center gap-2 !px-5 !py-2.5 !text-xs">
                           <Github size={16} /> Repository
                         </Button>
                      </a>
                    )}

                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                      >
                         <Button variant="outline" className="flex items-center gap-2 !px-5 !py-2.5 !text-xs">
                           <ExternalLink size={16} /> Live Demo
                         </Button>
                      </a>
                    )}
                 </div>
               </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};