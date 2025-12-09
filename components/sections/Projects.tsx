import React from 'react';
import { Card } from '../ui/Card';
import { Project } from '../../types';
import { ArrowRight } from 'lucide-react';

const projects: Project[] = [
  {
    id: '1',
    title: 'Project One',
    category: 'Branding',
    description: "A complete visual identity overhaul for a heritage ceramic studio.",
    imageUrl: 'https://picsum.photos/800/600?random=20'
  },
  {
    id: '2',
    title: 'Project Two',
    category: 'Packaging',
    description: 'Sustainable packaging design series for organic skincare.',
    imageUrl: 'https://picsum.photos/800/600?random=21'
  },
  {
    id: '3',
    title: 'Project Three',
    category: 'Digital',
    description: 'Web experience and art direction for a slow-fashion label.',
    imageUrl: 'https://picsum.photos/800/600?random=22'
  }
];

export const Projects: React.FC = () => {
  return (
    <Card title="Selected Projects" hasAccentBorder={true} id="projects">
      <div className="space-y-12">
        {projects.map((project, index) => (
          <div key={project.id} className="group cursor-pointer">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10">
               {/* Image */}
               <div className="w-full md:w-1/3 aspect-video md:aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0" 
                  />
               </div>
               
               {/* Content */}
               <div className="flex-1 flex flex-col justify-center border-b border-nish-ivory pb-8 md:border-none md:pb-0">
                 <span className="text-xs font-sans font-bold text-nish-gold tracking-widest uppercase mb-2">0{index + 1} — {project.category}</span>
                 <h3 className="text-2xl md:text-3xl font-serif text-nish-brown mb-4 group-hover:text-nish-gold transition-colors">
                   {project.title}
                 </h3>
                 <p className="text-nish-grey font-body leading-relaxed mb-6 max-w-lg">
                   {project.description}
                 </p>
                 <div className="flex items-center text-sm font-bold text-nish-brown uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                   View Case Study <ArrowRight className="w-4 h-4 ml-2" />
                 </div>
               </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};