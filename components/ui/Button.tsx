
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'lux';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-10 py-4 text-xs font-medium uppercase tracking-[0.2em] transition-all duration-500 ease-out focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group";
  
  const variants = {
    primary: "bg-brand-charcoal text-white hover:bg-brand-charcoal/90 border border-brand-charcoal disabled:hover:bg-brand-charcoal",
    secondary: "bg-brand-gold text-white hover:bg-brand-gold/90 border border-brand-gold",
    outline: "bg-transparent text-brand-charcoal border border-brand-charcoal hover:bg-brand-charcoal hover:text-white disabled:hover:bg-transparent disabled:hover:text-brand-charcoal",
    ghost: "bg-transparent text-brand-charcoal hover:text-brand-gold px-0 py-2",
    lux: "bg-brand-charcoal text-brand-ivory hover:text-white border-none"
  };

  const widthStyles = fullWidth ? "w-full" : "w-auto";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyles} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {variant === 'outline' && !props.disabled && (
        <span className="absolute inset-0 bg-brand-charcoal transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] -z-0"></span>
      )}
    </button>
  );
};
