
import React from 'react';
import { useCart } from '../../context/CartContext';
import { X, Trash2, ShoppingBag } from 'lucide-react';
import { Button } from '../ui/Button';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { formatPrice, generateWhatsAppLink, generateCartMessage } from '../../utils/helpers';
import { WHATSAPP_NUMBER } from '../../constants';
import { motion, AnimatePresence } from 'framer-motion';

export const CartDrawer: React.FC = () => {
  const { cart, isCartOpen, toggleCart, removeFromCart, cartTotal } = useCart();

  const handleCheckout = () => {
    const message = generateCartMessage(cart, cartTotal);
    window.open(generateWhatsAppLink(WHATSAPP_NUMBER, message), '_blank');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-brand-charcoal/20 backdrop-blur-sm z-[60]"
          />

          {/* Drawer */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full md:w-[480px] bg-brand-ivory z-[70] shadow-2xl flex flex-col border-l border-brand-charcoal/5"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-8 border-b border-brand-charcoal/5">
              <h2 className="text-2xl font-serif text-brand-charcoal">Your Bag</h2>
              <button onClick={toggleCart} className="text-brand-charcoal hover:text-brand-gold transition-colors">
                <X size={24} strokeWidth={1} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-8">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6 opacity-60">
                  <ShoppingBag size={48} strokeWidth={0.5} />
                  <p className="font-serif text-xl">Your shopping bag is empty.</p>
                </div>
              ) : (
                <div className="space-y-8">
                  {cart.map((item) => (
                    <div key={`${item.id}-${item.selectedSize}`} className="flex gap-6">
                      <div className="w-24 h-32 flex-shrink-0">
                        <ImageWithFallback src={item.images[0]} alt={item.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start">
                            <h3 className="font-serif text-lg text-brand-charcoal pr-4">{item.title}</h3>
                            <button 
                              onClick={() => removeFromCart(item.id, item.selectedSize)}
                              className="text-brand-stone hover:text-brand-red transition-colors"
                            >
                              <Trash2 size={16} strokeWidth={1} />
                            </button>
                          </div>
                          <p className="text-xs uppercase tracking-widest text-brand-stone mt-1">{item.category}</p>
                          <p className="text-sm text-brand-earth mt-2">Size: {item.selectedSize}</p>
                        </div>
                        <div className="flex justify-between items-end">
                          <p className="text-sm font-light">Qty: {item.quantity}</p>
                          <p className="text-base font-medium">{formatPrice(item.price * item.quantity)}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-8 border-t border-brand-charcoal/5 bg-brand-sand/10 space-y-6">
                <div className="flex justify-between items-center text-lg font-serif">
                  <span>Subtotal</span>
                  <span>{formatPrice(cartTotal)}</span>
                </div>
                <p className="text-xs text-brand-earth/70 text-center leading-relaxed">
                  Shipping and taxes calculated via WhatsApp.
                </p>
                <Button onClick={handleCheckout} fullWidth variant="primary" className="h-14">
                  Request Order on WhatsApp
                </Button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
