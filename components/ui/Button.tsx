import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-md font-sans font-medium transition-all duration-300 ease-in-out text-sm tracking-wide uppercase";
  
  const variants = {
    primary: "bg-nish-brown text-nish-ivory hover:bg-black hover:shadow-lg border border-transparent",
    secondary: "bg-nish-gold text-nish-brown hover:bg-[#C9961A] hover:shadow-md",
    outline: "border border-nish-brown text-nish-brown hover:bg-nish-brown hover:text-nish-ivory",
    text: "bg-transparent text-nish-brown hover:text-nish-gold px-2 py-1"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};