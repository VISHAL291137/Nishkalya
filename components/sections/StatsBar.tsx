import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface Stat {
  value: number;
  label: string;
  suffix: string;
}

const stats: Stat[] = [
  { value: 12, label: 'Customers', suffix: 'K+' },
  { value: 500, label: 'Products', suffix: '+' },
  { value: 48, label: 'Delivery', suffix: 'h' },
  { value: 4.9, label: 'Rating', suffix: '★' },
];

const Counter: React.FC<{ end: number; suffix: string; isVisible: boolean }> = ({ end, suffix, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let current = 0;
    const increment = end / 40;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.round(current * 10) / 10);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
};

export const StatsBar: React.FC = () => {
  const ref = useScrollAnimation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (ref.current?.classList.contains('visible')) {
      setIsVisible(true);
    }
  }, [ref]);

  return (
    <div
      ref={ref}
      className="w-full py-16 md:py-20 bg-gradient-to-r from-nish-brown/5 via-nish-ivory/30 to-nish-brown/5 border-y border-nish-gold/10"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <div key={stat.label} className="text-center" style={{ animation: isVisible ? `fadeUp 0.6s ease forwards` : 'none', animationDelay: `${idx * 100}ms` }}>
              <div className="text-4xl md:text-5xl font-display font-bold text-nish-gold mb-2">
                {isVisible ? <Counter end={stat.value} suffix={stat.suffix} isVisible={isVisible} /> : '0'}
              </div>
              <p className="text-sm md:text-base font-body text-nish-brown/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
