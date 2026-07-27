
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

      <div className="pt-8 pb-4 text-center space-y-3">
        <h3 className="text-lg font-serif text-brand-charcoal group-hover:text-brand-gold transition-colors duration-500">
          {product.title}
        </h3>
        {product.isCustom ? (
          <span className="inline-flex items-center justify-center rounded-full border border-brand-charcoal/10 bg-brand-charcoal/5 px-3 py-2 text-xs uppercase tracking-[0.35em] text-brand-charcoal">
            Customization
          </span>
        ) : (
          <div className="space-y-1">
            <p className="text-2xl md:text-3xl font-serif text-brand-charcoal tracking-tight">
              {formatPrice(product.price)}
            </p>
            {(product.originalPrice || product.discountPercent) && (
              <div className="flex flex-wrap justify-center items-center gap-3 text-sm text-brand-earth">
                {product.originalPrice && (
                  <span className="line-through text-brand-earth/70">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
                {product.discountPercent && (
                  <span className="inline-flex items-center rounded-full bg-brand-charcoal/5 text-[10px] uppercase tracking-[0.25em] text-brand-charcoal px-2 py-1">
                    {product.discountPercent}% OFF
                  </span>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
