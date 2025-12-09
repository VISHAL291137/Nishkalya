import React from 'react';
import { Card } from '../ui/Card';
import { Highlight } from '../../types';

const highlightsData: Highlight[] = [
  {
    id: '1',
    title: 'Art & Icon Work',
    description: 'Custom iconography and mark-making rooted in heritage forms.',
    imageUrl: 'https://picsum.photos/400/300?grayscale&random=10'
  },
  {
    id: '2',
    title: 'Products',
    description: 'Product presentation and packaging for premium objects.',
    imageUrl: 'https://picsum.photos/400/300?grayscale&random=11'
  },
  {
    id: '3',
    title: 'Storytelling',
    description: 'Case studies and process narratives that explain design choices.',
    imageUrl: 'https://picsum.photos/400/300?grayscale&random=12'
  }
];

export const Highlights: React.FC = () => {
  return (
    <div id="highlights" className="mb-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {highlightsData.map((item) => (
          <div key={item.id} className="group cursor-pointer bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-nish-ivory/50">
            <div className="overflow-hidden rounded-md mb-4 aspect-[4/3]">
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative">
              <h4 className="font-serif font-bold text-xl text-nish-brown mb-2 relative inline-block">
                {item.title}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-nish-gold transition-all duration-300 group-hover:w-full"></span>
              </h4>
              <p className="text-sm font-body text-nish-grey leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};