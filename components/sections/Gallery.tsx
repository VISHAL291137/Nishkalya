import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { GalleryItem, GalleryCategory } from '../../types';
import { X, ZoomIn } from 'lucide-react';

const galleryData: GalleryItem[] = [
  { id: '1', imageUrl: 'https://picsum.photos/600/800?random=1', title: 'Ceramic Vase', category: 'Products' },
  { id: '2', imageUrl: 'https://picsum.photos/600/600?random=2', title: 'Brand Icon', category: 'Icons' },
  { id: '3', imageUrl: 'https://picsum.photos/600/900?random=3', title: 'Editorial Lookbook', category: 'Projects' },
  { id: '4', imageUrl: 'https://picsum.photos/600/700?random=4', title: 'Packaging Detail', category: 'Products' },
  { id: '5', imageUrl: 'https://picsum.photos/600/500?random=5', title: 'Logo Sketch', category: 'Icons' },
  { id: '6', imageUrl: 'https://picsum.photos/600/800?random=6', title: 'Campaign Shot', category: 'Projects' },
  { id: '7', imageUrl: 'https://picsum.photos/600/600?random=7', title: 'Minimal Badge', category: 'Icons' },
];

const categories: GalleryCategory[] = ['All', 'Icons', 'Products', 'Projects'];

export const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<GalleryCategory>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems = filter === 'All' 
    ? galleryData 
    : galleryData.filter(item => item.category === filter);

  return (
    <>
      <Card title="Visual Gallery" hasAccentBorder={true} id="gallery" className="scroll-mt-28">
        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-nish-ivory pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-sans transition-all duration-300 ${
                filter === cat 
                  ? 'bg-nish-brown text-nish-ivory shadow-md' 
                  : 'bg-transparent text-nish-grey hover:text-nish-brown hover:bg-nish-ivory/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="masonry-grid">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="masonry-item relative group cursor-pointer overflow-hidden rounded-lg mb-4"
              onClick={() => setSelectedImage(item)}
            >
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-nish-brown/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <div className="text-white text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="font-serif font-bold text-lg tracking-wide">{item.title}</p>
                    <p className="font-sans text-xs uppercase tracking-widest text-nish-gold mt-1">{item.category}</p>
                    <ZoomIn className="w-6 h-6 mx-auto mt-2 text-white/80" />
                 </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[60] bg-nish-brown/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-nish-gold transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          
          <div 
            className="relative max-w-5xl max-h-full overflow-hidden rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()} 
          >
            <img 
              src={selectedImage.imageUrl} 
              alt={selectedImage.title} 
              className="max-h-[85vh] w-auto object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-12 text-white">
              <h3 className="font-serif text-2xl">{selectedImage.title}</h3>
              <p className="text-nish-gold text-sm uppercase tracking-widest">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};