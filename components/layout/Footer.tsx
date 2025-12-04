import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND_NAME } from '../../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-charcoal text-brand-ivory pt-32 pb-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
          
          <div className="md:w-1/3 space-y-8">
            <h3 className="text-5xl font-serif italic text-brand-ivory">{BRAND_NAME}</h3>
            <p className="text-brand-ivory/60 text-sm leading-relaxed max-w-sm font-light">
              A tribute to the handloom heritage of Kerala. We weave stories of the past into silhouettes for the future. 
              Ethically sourced, intentionally crafted.
            </p>
          </div>

          <div className="flex flex-wrap gap-16 md:gap-32 md:w-2/3 md:justify-end">
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] mb-8 text-brand-gold">Shop</h4>
              <ul className="space-y-4 text-sm text-brand-ivory/70 font-light">
                <li><Link to="/shop" className="hover:text-white transition-colors hover:pl-2 duration-300">All Products</Link></li>
                <li><Link to="/shop?category=saree" className="hover:text-white transition-colors hover:pl-2 duration-300">Sarees</Link></li>
                <li><Link to="/shop?category=set-mundu" className="hover:text-white transition-colors hover:pl-2 duration-300">Set Mundu</Link></li>
                <li><Link to="/shop?category=bridal" className="hover:text-white transition-colors hover:pl-2 duration-300">Bridal</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] mb-8 text-brand-gold">Client Services</h4>
              <ul className="space-y-4 text-sm text-brand-ivory/70 font-light">
                <li><Link to="/contact" className="hover:text-white transition-colors hover:pl-2 duration-300">Contact Us</Link></li>
                <li><Link to="/shipping" className="hover:text-white transition-colors hover:pl-2 duration-300">Shipping & Returns</Link></li>
                <li><Link to="/sizing" className="hover:text-white transition-colors hover:pl-2 duration-300">Size Guide</Link></li>
                <li><Link to="/care" className="hover:text-white transition-colors hover:pl-2 duration-300">Garment Care</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] mb-8 text-brand-gold">Social</h4>
              <ul className="space-y-4 text-sm text-brand-ivory/70 font-light">
                <li><a href="#" className="hover:text-white transition-colors hover:pl-2 duration-300">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:pl-2 duration-300">Pinterest</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:pl-2 duration-300">Facebook</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-ivory/10 pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-brand-ivory/40">
          <p>© {new Date().getFullYear()} Dhupa Design House.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
            <span>Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
};