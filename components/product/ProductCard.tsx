
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';
import { formatPrice } from '../../utils/helpers';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group flex flex-col h-full cursor-pointer">
      <Link to={`/shop/${product.slug}`} className="relative block overflow-hidden aspect-[3/4.5]">
        {/* Main Image - Slow Ken Burns Effect */}
        <div className="w-full h-full relative overflow-hidden">
          <ImageWithFallback 
            src={product.images[0]} 
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-110 z-10 relative"
          />
          
          {/* Secondary Image - Reveal on hover with opacity */}
          {product.images[1] && (
            <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out">
              <ImageWithFallback 
                src={product.images[1]} 
                alt={`${product.title} detail`}
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[1.5s]"
              />
            </div>
          )}
        </div>

        {/* Badges - Minimalist */}
        {product.isNewArrival && (
          <span className="absolute top-4 right-4 text-[9px] uppercase tracking-widest text-brand-charcoal bg-white/80 backdrop-blur px-2 py-1 z-30">
            New
          </span>
        )}

        {/* Quick Add Overlay - Slide Up */}
        <div className="absolute inset-x-0 bottom-0 z-30 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out bg-brand-ivory/95 backdrop-blur-md border-t border-brand-charcoal/5">
          <button className="w-full py-5 text-[10px] uppercase tracking-[0.25em] text-brand-charcoal hover:text-brand-gold transition-colors flex items-center justify-center gap-3">
            <Plus size={12} strokeWidth={1} /> View Details
          </button>
        </div>
      </Link>

      <div className="pt-8 pb-4 text-center space-y-2">
        <h3 className="text-lg font-serif text-brand-charcoal group-hover:text-brand-gold transition-colors duration-500">
          {product.title}
        </h3>
        <p className="text-xs text-brand-earth/80 font-light tracking-widest">
          {formatPrice(product.price)}
        </p>
      </div>
    </div>
  );
};
