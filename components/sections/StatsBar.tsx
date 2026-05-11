import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '../../utils/scrollAnimations';

interface StatItem {
  value: number;
  label: string;
  suffix?: string;
}

const stats: StatItem[] = [
  { value: 50, label: 'Happy Clients', suffix: '+' },
  { value: 150, label: 'Projects Delivered', suffix: '+' },
  { value: 3, label: 'Avg Delivery Days', suffix: ' days' },
  { value: 5, label: 'Star Rating', suffix: '★' },
];

const AnimatedCounter: React.FC<{ end: number; suffix?: string; isVisible: boolean }> = ({ end, suffix = '', isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = end / 50;
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  return <span>{count}{suffix}</span>;
};

export const StatsBar: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.5 });

  return (
    <div
      ref={ref}
      className="w-full py-12 md:py-16 bg-gradient-to-r from-nish-brown/5 via-nish-ivory/30 to-nish-brown/5 border-y border-nish-gold/10"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center"
              style={{
                animation: isVisible ? `fadeInUp 0.6s ease-out forwards` : 'none',
                animationDelay: `${index * 100}ms`,
                opacity: isVisible ? 1 : 0,
              }}
            >
              <div className="text-3xl md:text-5xl font-display font-bold text-nish-gold mb-2">
                {isVisible ? <AnimatedCounter end={stat.value} suffix={stat.suffix} isVisible={isVisible} /> : '0'}
              </div>
              <p className="text-sm md:text-base font-sans text-nish-brown/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
