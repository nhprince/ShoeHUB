import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const { cartCount, setIsCartOpen, setIsSearchOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800/80 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group text-left"
          >
            <span className="text-xl font-bold tracking-widest text-white uppercase font-mono">
              SHOE<span className="text-red-500">HUB</span>
            </span>
          </button>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center space-x-10 text-xs tracking-widest uppercase font-mono text-neutral-300">
            <button onClick={() => scrollTo('collection')} className="hover:text-white transition-colors">
              Collection
            </button>
            <button onClick={() => scrollTo('story')} className="hover:text-white transition-colors">
              Craft & Tech
            </button>
            <button onClick={() => scrollTo('editorial')} className="hover:text-white transition-colors">
              Editorial
            </button>
            <button onClick={() => scrollTo('brand')} className="hover:text-white transition-colors">
              Manifesto
            </button>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-5">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-neutral-300 hover:text-white transition-colors"
              aria-label="Search products"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-neutral-300 hover:text-white transition-colors flex items-center"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-mono font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[60px] z-30 bg-neutral-950 flex flex-col px-8 py-12 md:hidden"
          >
            <div className="flex flex-col space-y-8 text-lg font-mono tracking-widest uppercase text-neutral-300">
              <button onClick={() => scrollTo('collection')} className="text-left hover:text-white">
                01 // Collection
              </button>
              <button onClick={() => scrollTo('story')} className="text-left hover:text-white">
                02 // Craft & Tech
              </button>
              <button onClick={() => scrollTo('editorial')} className="text-left hover:text-white">
                03 // Editorial
              </button>
              <button onClick={() => scrollTo('brand')} className="text-left hover:text-white">
                04 // Manifesto
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
