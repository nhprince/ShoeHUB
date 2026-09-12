import React from 'react';
import { motion } from 'framer-motion';
import { Hero3DCanvas } from '../three/Hero3DCanvas';
import { PRODUCTS } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react';

export const Hero: React.FC = () => {
  const { setQuickViewProduct } = useCart();
  const flagshipProduct = PRODUCTS[0]; // ShoeHub AERO

  const scrollToCollection = () => {
    const el = document.getElementById('collection');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen w-full bg-neutral-950 text-white flex flex-col justify-between pt-28 pb-12 px-6 md:px-12 overflow-hidden">
      {/* Subtle Grid & Gradient Backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,#1f1f23_0%,#0a0a0b_100%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370a_1px,transparent_1px),linear-gradient(to_bottom,#1f29370a_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 my-auto">
        {/* Left Editorial Copy Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 space-y-8 text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono tracking-widest text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            SERIES 2025 // FLAGSHIP RELEASE
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter uppercase font-sans leading-[0.95]">
            SHOES, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 via-neutral-400 to-neutral-600">
              REDEFINED.
            </span>
          </h1>

          <p className="text-base md:text-lg text-neutral-400 font-light max-w-lg leading-relaxed">
            Engineered at the threshold of hyper-light kinetic propulsion and architectural fashion. Crafted for those who demand uncompromising performance and quiet aesthetic power.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              onClick={scrollToCollection}
              className="px-8 py-4 bg-white text-black font-mono text-xs font-bold uppercase tracking-widest hover:bg-neutral-200 transition-all flex items-center justify-center gap-3 group"
            >
              Explore Collection
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => setQuickViewProduct(flagshipProduct)}
              className="px-8 py-4 bg-neutral-900 border border-neutral-800 text-white font-mono text-xs font-bold uppercase tracking-widest hover:border-neutral-600 transition-colors"
            >
              Discover AERO 01
            </button>
          </div>

          {/* Micro Specs */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-neutral-800/80 font-mono">
            <div>
              <p className="text-[10px] text-neutral-500 uppercase">WEIGHT</p>
              <p className="text-sm font-semibold text-neutral-200">185 Grams</p>
            </div>
            <div>
              <p className="text-[10px] text-neutral-500 uppercase">CORE</p>
              <p className="text-sm font-semibold text-neutral-200">Carbon Vector</p>
            </div>
            <div>
              <p className="text-[10px] text-neutral-500 uppercase">ENERGY RETURN</p>
              <p className="text-sm font-semibold text-neutral-200">86%</p>
            </div>
          </div>
        </motion.div>

        {/* Right Interactive 3D Canvas Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 h-[420px] md:h-[540px] w-full relative rounded-2xl bg-gradient-to-b from-neutral-900/40 to-neutral-950/80 border border-neutral-800/60 p-4 shadow-2xl overflow-hidden"
        >
          <Hero3DCanvas />
        </motion.div>
      </div>

      {/* Ticker Bar */}
      <div className="max-w-7xl mx-auto w-full pt-8 z-10 border-t border-neutral-900 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono text-neutral-500">
        <div className="flex items-center gap-3">
          <Zap className="w-4 h-4 text-red-500" />
          <span>NITROGEN FOAM CORE</span>
        </div>
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-4 h-4 text-neutral-300" />
          <span>LIFETIME CRAFT GUARANTEE</span>
        </div>
        <div className="flex items-center gap-3">
          <Globe className="w-4 h-4 text-neutral-300" />
          <span>FREE WORLDWIDE PRIORITY SHIPPING</span>
        </div>
      </div>
    </section>
  );
};
