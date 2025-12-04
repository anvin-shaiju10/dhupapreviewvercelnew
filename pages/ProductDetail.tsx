
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data/mockProducts';
import { Button } from '../components/ui/Button';
import { Accordion } from '../components/ui/Accordion';
import { formatPrice, generateWhatsAppLink } from '../utils/helpers';
import { WHATSAPP_NUMBER } from '../constants';
import { useCart } from '../context/CartContext';
import { ImageWithFallback } from '../components/common/ImageWithFallback';

export const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = PRODUCTS.find(p => p.slug === slug);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-brand-ivory">
        <h2 className="text-3xl font-serif mb-4">Product Not Found</h2>
        <Link to="/shop"><Button variant="outline">Return to Shop</Button></Link>
      </div>
    );
  }

  const handleWhatsAppClick = () => {
    if (!selectedSize && product.sizes.length > 0) {
      alert("Please select a size");
      return;
    }
    const message = `Inquiry for ${product.title} (${product.sku}), Size: ${selectedSize || 'Standard'}.`;
    window.open(generateWhatsAppLink(WHATSAPP_NUMBER, message), '_blank');
  };

  const handleAddToCart = () => {
    if (!selectedSize && product.sizes.length > 0) {
      alert("Please select a size to add to bag.");
      return;
    }
    addToCart(product, selectedSize || 'One Size');
  };

  return (
    <div className="bg-brand-ivory min-h-screen">
      <div className="flex flex-col lg:flex-row">
        
        {/* Left: Image Gallery (Vertical Stack) */}
        <div className="w-full lg:w-[65%] flex flex-col">
          {product.images.map((img, idx) => (
            <div key={idx} className="w-full h-screen relative group">
               <ImageWithFallback 
                src={img} 
                alt={`${product.title} view ${idx + 1}`} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Right: Sticky Details Panel */}
        <div className="w-full lg:w-[35%] lg:h-screen lg:sticky lg:top-0 bg-brand-ivory flex flex-col justify-center px-6 py-12 lg:px-16 lg:py-0 border-l border-brand-charcoal/5">
          <div className="max-w-md mx-auto w-full space-y-8 animate-fade-in-up">
            
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-[0.3em] text-brand-stone">{product.category.replace(/-/g, ' ')}</span>
              <h1 className="text-4xl md:text-5xl font-serif text-brand-charcoal leading-none">
                {product.title}
              </h1>
              <p className="text-xl font-light text-brand-earth pt-2">{formatPrice(product.price)}</p>
            </div>

            <p className="text-sm leading-relaxed text-brand-earth font-light">
              {product.description}
            </p>

            {/* Sizes */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs uppercase tracking-widest text-brand-charcoal">Size</span>
                <button className="text-[10px] uppercase underline text-brand-earth hover:text-brand-gold">Size Guide</button>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 text-xs border transition-all duration-300 ${
                      selectedSize === size 
                        ? 'bg-brand-charcoal text-white border-brand-charcoal' 
                        : 'bg-transparent text-brand-charcoal border-brand-earth/20 hover:border-brand-charcoal'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3 pt-6">
              <Button 
                onClick={handleAddToCart} 
                fullWidth 
                variant="primary" 
                className="h-14"
                disabled={!selectedSize && product.sizes.length > 0}
              >
                Add to Bag
              </Button>
              <Button 
                onClick={handleWhatsAppClick} 
                fullWidth 
                variant="outline"
                className="h-14 hover:bg-brand-gold/10 hover:border-brand-gold hover:text-brand-charcoal"
              >
                Inquire via WhatsApp
              </Button>
              
              <p className="text-[10px] text-center text-brand-stone mt-2 uppercase tracking-widest">
                Worldwide Shipping Available
              </p>
            </div>

            {/* Accordions */}
            <div className="pt-8">
              <Accordion title="Material & Care" defaultOpen>
                <p>{product.material}</p>
                <p className="mt-2">Dry clean only. Store in a muslin cloth to preserve the zari.</p>
              </Accordion>
              <Accordion title="Designer's Note">
                <p className="italic">"{product.designerNote}"</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>Made to order. Dispatched within 7-10 days.</p>
                <p className="mt-2">Returns accepted within 14 days of delivery for store credit.</p>
              </Accordion>
            </div>
            
          </div>
        </div>
      </div>
      
      {/* Footer is below */}
    </div>
  );
};
