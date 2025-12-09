import React from 'react';

interface CardProps {
  children: React.ReactNode;
  title?: string;
  hasAccentBorder?: boolean;
  className?: string;
  headerAction?: React.ReactNode;
  id?: string;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  title, 
  hasAccentBorder = false, 
  className = '',
  headerAction,
  id
}) => {
  return (
    <div 
      id={id}
      className={`bg-white/80 backdrop-blur-sm rounded-lg shadow-[0_4px_20px_-4px_rgba(43,31,26,0.05)] p-6 md:p-8 mb-8 border border-nish-ivory/50 transition-all duration-300 hover:shadow-[0_8px_30px_-4px_rgba(43,31,26,0.1)] ${hasAccentBorder ? 'border-l-4 border-l-nish-gold' : ''} ${className}`}
    >
      {title && (
        <div className="flex justify-between items-center mb-6 pb-4 border-b border-nish-ivory">
          <h2 className="text-2xl font-serif font-bold text-nish-brown uppercase tracking-wider">{title}</h2>
          {headerAction}
        </div>
      )}
      {children}
    </div>
  );
};