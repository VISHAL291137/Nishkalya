import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface Service {
  emoji: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    emoji: '🧵',
    title: 'Handloom Textiles',
    description: 'Exquisite handwoven fabrics crafted with traditional techniques and premium materials.',
  },
  {
    emoji: '💍',
    title: 'Traditional Jewellery',
    description: 'Authentic pieces blending heritage craftsmanship with timeless elegance and artistry.',
  },
  {
    emoji: '🏺',
    title: 'Artisan Decor',
    description: 'Handcrafted home décor items that bring warmth, character, and cultural beauty.',
  },
  {
    emoji: '👗',
    title: 'Ethnic Wear',
    description: 'Premium ethnic clothing celebrating cultural traditions with contemporary style.',
  },
  {
    emoji: '🕯️',
    title: 'Pooja Essentials',
    description: 'Sacred and spiritual items for worship, meditation, and ceremonial purposes.',
  },
  {
    emoji: '🎁',
    title: 'Gift Hampers',
    description: 'Curated collections perfect for celebrations, sharing traditions, and special moments.',
  },
];

export const Services: React.FC = () => {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="py-16 md:py-24 px-4 bg-white">
      <style>{`
        .service-card {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .service-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 3px;
          background: #C8924A;
          transition: width 0.4s ease;
        }

        .service-card:hover::after {
          width: 100%;
        }

        .service-card:hover {
          transform: translateY(-4px);
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-nish-brown mb-4">
            Our Services
          </h2>
          <p className="font-body text-nish-grey/80 max-w-2xl mx-auto">
            Discover our curated collection of traditional and artisan products
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className="service-card bg-nish-ivory/30 rounded-lg p-8 border border-nish-gold/10 hover:border-nish-gold/30 transition-all"
              style={{
                animation: 'fadeUp 0.6s ease forwards',
                animationDelay: `${idx * 80}ms`,
                opacity: 0,
              }}
            >
              <div className="text-5xl mb-4">{service.emoji}</div>
              <h3 className="font-display text-xl font-bold text-nish-brown mb-3">
                {service.title}
              </h3>
              <p className="font-body text-sm text-nish-grey/80 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
