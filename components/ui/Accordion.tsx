import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-brand-charcoal/10">
      <button 
        className="w-full flex justify-between items-center py-6 group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-sm uppercase tracking-widest text-brand-charcoal group-hover:text-brand-gold transition-colors">{title}</span>
        <span className="text-brand-charcoal/50 group-hover:text-brand-gold transition-colors">
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="text-sm font-light leading-relaxed text-brand-earth">
          {children}
        </div>
      </div>
    </div>
  );
};