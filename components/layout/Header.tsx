
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BRAND_NAME, NAVIGATION_LINKS } from '../../constants';
import { Menu, X, ShoppingBag, Search, User } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useCart } from '../../context/CartContext';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();
  const { toggleCart, cartCount } = useCart();
  
  // Dynamic header height - slightly taller initially for grandeur
  const headerHeight = useTransform(scrollY, [0, 100], [100, 80]);
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.9]);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Check if homepage to handle transparency
  const isHome = location.pathname === '/';

  return (
    <>
      <motion.header 
        style={{ 
          height: headerHeight,
          backgroundColor: isScrolled ? 'rgba(253, 251, 247, 0.98)' : (isHome ? 'transparent' : 'rgba(253, 251, 247, 1)'),
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(26, 26, 26, 0.05)' : '1px solid transparent'
        }}
        className="fixed top-0 left-0 right-0 z-50 transition-colors duration-700 ease-out"
      >
        <div className="container mx-auto px-6 md:px-12 h-full grid grid-cols-[1fr_auto_1fr] items-center">
          
          {/* Left: Logo & Mobile Trigger */}
          <div className="flex items-center justify-start gap-4 z-20">
            <button 
              className={`md:hidden p-1 transition-colors ${!isScrolled && isHome ? 'text-white' : 'text-brand-charcoal'}`}
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} strokeWidth={1} />
            </button>

            <Link to="/" className="group flex items-center">
              <motion.span 
                style={{ scale: logoScale, transformOrigin: 'left center' }}
                className={`block text-3xl md:text-4xl font-serif font-bold tracking-[0.1em] leading-none transition-colors duration-500 ${
                  !isScrolled && isHome ? 'text-white group-hover:text-brand-gold' : 'text-brand-charcoal group-hover:text-brand-earth'
                }`}
              >
                {BRAND_NAME}
              </motion.span>
            </Link>
          </div>

          {/* Center: Desktop Navigation */}
          <nav className="hidden md:flex justify-center items-center space-x-8 lg:space-x-12">
            {NAVIGATION_LINKS.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`font-serif text-xs uppercase tracking-[0.2em] font-medium transition-colors relative group py-2 whitespace-nowrap ${
                  !isScrolled && isHome ? 'text-white hover:text-brand-gold' : 'text-brand-charcoal hover:text-brand-gold'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-[1px] bg-brand-gold transition-all duration-500 ease-out w-0 group-hover:w-full`}></span>
              </Link>
            ))}
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center justify-end space-x-6 z-20">
            <button className={`transition-colors hidden md:block ${!isScrolled && isHome ? 'text-white hover:text-brand-gold' : 'text-brand-charcoal hover:text-brand-gold'}`}>
              <Search size={20} strokeWidth={1.2} />
            </button>
            <Link to="/account" className={`hidden md:block transition-colors ${!isScrolled && isHome ? 'text-white hover:text-brand-gold' : 'text-brand-charcoal hover:text-brand-gold'}`}>
              <User size={20} strokeWidth={1.2} />
            </Link>
            <button 
              onClick={toggleCart}
              className={`transition-colors relative ${!isScrolled && isHome ? 'text-white hover:text-brand-gold' : 'text-brand-charcoal hover:text-brand-gold'}`}
            >
              <ShoppingBag size={20} strokeWidth={1.2} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-gold text-brand-ivory text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-serif">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-brand-ivory/98 backdrop-blur-xl flex flex-col"
          >
            <div className="flex justify-between items-center p-6 border-b border-brand-charcoal/5">
              <span className="text-3xl font-serif tracking-[0.1em] font-bold text-brand-charcoal">{BRAND_NAME}</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 -mr-2 text-brand-charcoal hover:text-brand-earth transition-colors">
                <X size={28} strokeWidth={1} />
              </button>
            </div>
            
            <div className="flex flex-col flex-grow justify-center items-center space-y-8 p-6">
              {NAVIGATION_LINKS.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <Link 
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl md:text-4xl font-serif text-brand-charcoal hover:text-brand-gold hover:italic transition-all duration-300 tracking-wide"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="p-8 text-center border-t border-brand-charcoal/5">
              <div className="flex justify-center space-x-8 text-sm font-serif text-brand-charcoal">
                <Link to="/login" className="hover:text-brand-gold transition-colors uppercase tracking-widest">Sign In</Link>
                <Link to="/help" className="hover:text-brand-gold transition-colors uppercase tracking-widest">Contact</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
