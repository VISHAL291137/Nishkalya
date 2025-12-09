import React from 'react';
import { Card } from '../ui/Card';
import { Project } from '../../types';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';

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
    id: '1',
    title: 'Nishkalya Branding',
    category: 'Visual Identity',
    description: "A complete visual identity overhaul for a premium creative studio, focusing on heritage forms and modern minimalism.",
    imageUrl: 'https://picsum.photos/800/600?random=20',
    techStack: ['Illustrator', 'Figma', 'Brand Strategy']
  },
  {
    id: '2',
    title: 'AI Concept Engine',
    category: 'Development',
    description: 'A React-based tool integrating Google Gemini API to generate creative brand concepts dynamically.',
    imageUrl: 'https://picsum.photos/800/600?random=21',
    techStack: ['React', 'Gemini API', 'Tailwind']
  },
  {
    id: '3',
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
          <div key={project.id} className="group">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10">
               {/* Image */}
               <div className="w-full md:w-1/3 aspect-video md:aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 relative">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0" 
                  />
                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="absolute top-2 right-2 bg-white/90 p-2 rounded-full text-nish-brown opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-nish-gold"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
               </div>
               
               {/* Content */}
               <div className="flex-1 flex flex-col justify-center border-b border-nish-ivory pb-8 md:border-none md:pb-0">
                 <span className="text-xs font-sans font-bold text-nish-gold tracking-widest uppercase mb-2">0{index + 1} — {project.category}</span>
                 <h3 className="text-2xl md:text-3xl font-serif text-nish-brown mb-3 group-hover:text-nish-gold transition-colors">
                   {project.title}
                 </h3>
                 
                 {project.techStack && (
                   <div className="flex flex-wrap gap-2 mb-4">
                     {project.techStack.map((tech) => (
                       <span key={tech} className="px-2 py-1 bg-nish-ivory text-nish-brown text-[10px] uppercase tracking-wider font-bold rounded">
                         {tech}
                       </span>
                     ))}
                   </div>
                 )}

                 <p className="text-nish-grey font-body leading-relaxed mb-6 max-w-lg">
                   {project.description}
                 </p>
                 
                 <a 
                   href={project.link || '#'} 
                   target={project.link ? "_blank" : "_self"}
                   rel={project.link ? "noopener noreferrer" : ""}
                   className="flex items-center text-sm font-bold text-nish-brown uppercase tracking-wider group-hover:translate-x-2 transition-transform w-fit"
                 >
                   {project.link ? 'View Repository' : 'View Case Study'} <ArrowRight className="w-4 h-4 ml-2" />
                 </a>
               </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};