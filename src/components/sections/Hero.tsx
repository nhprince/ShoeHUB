import React from 'react';
import { motion } from 'framer-motion';
import { Hero3DCanvas } from '../three/Hero3DCanvas';
import { PRODUCTS } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { ArrowRight, Zap, ShieldCheck, Globe } from 'lucide-react';

export const Hero: React.FC = () => {
  const { setQuickViewProduct } = useCart();
  const flagshipProduct = PRODUCTS[0];

  const scrollToCollection = () => {
    const el = document.getElementById('collection');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen w-full bg-[#050505] text-[#f5f5f3] flex flex-col justify-between pt-28 pb-12 overflow-hidden">
      {/* Background kinetic grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,#18181b_0%,#050505_100%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none" />

      {/* Kinetic Infinite Ticker Bar Top */}
      <div className="w-full overflow-hidden border-y border-white/10 py-2.5 bg-black/40 backdrop-blur-sm z-10 mb-8">
        <div className="animate-ticker text-xs font-mono tracking-widest text-neutral-400 uppercase space-x-12">
          <span>/// SHOEHUB ARCHITECTURAL FOOTWEAR</span>
          <span>• AUTONOMOUS KINETIC PROPULSION</span>
          <span>• LIMITED SERIES RELEASE 2025</span>
          <span>• ZERO-GRAVITY CUSHIONING</span>
          <span>/// SHOEHUB ARCHITECTURAL FOOTWEAR</span>
          <span>• AUTONOMOUS KINETIC PROPULSION</span>
          <span>• LIMITED SERIES RELEASE 2025</span>
          <span>• ZERO-GRAVITY CUSHIONING</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 my-auto">
        {/* Left Editorial Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 space-y-8 text-left"
        >
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono tracking-widest text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-[#ff2a2a] animate-ping" />
            FLAGSHIP CAPSULE 01
          </div>

          <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight uppercase leading-[0.9] font-['Syne']">
            SHOES, <br />
            <span className="text-outline">REDEFINED.</span>
          </h1>

          <p className="text-base md:text-lg text-neutral-400 font-light max-w-lg leading-relaxed">
            Engineered at the intersection of athletic hyper-light propulsion and contemporary fashion sculpture. Quiet power for the modern mover.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              onClick={scrollToCollection}
              className="px-8 py-4 bg-white text-black font-mono text-xs font-bold uppercase tracking-widest hover:bg-neutral-200 transition-all flex items-center justify-center gap-3 group border border-white"
            >
              Explore Archive
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>

            <button
              onClick={() => setQuickViewProduct(flagshipProduct)}
              className="px-8 py-4 bg-transparent border border-white/20 text-white font-mono text-xs font-bold uppercase tracking-widest hover:border-white hover:bg-white/5 transition-all"
            >
              Discover AERO 01
            </button>
          </div>

          {/* Micro Technical Specs */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10 font-mono">
            <div>
              <p className="text-[10px] text-neutral-500 uppercase tracking-widest">MASS</p>
              <p className="text-sm font-semibold text-neutral-200">185 Grams</p>
            </div>
            <div>
              <p className="text-[10px] text-neutral-500 uppercase tracking-widest">PLATE</p>
              <p className="text-sm font-semibold text-neutral-200">Vector Carbon</p>
            </div>
            <div>
              <p className="text-[10px] text-neutral-500 uppercase tracking-widest">ENERGY RETURN</p>
              <p className="text-sm font-semibold text-neutral-200">86.4%</p>
            </div>
          </div>
        </motion.div>

        {/* Right 3D Experience */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 h-[440px] md:h-[560px] w-full relative rounded-2xl bg-gradient-to-b from-white/5 to-black/80 border border-white/10 p-2 shadow-2xl overflow-hidden backdrop-blur-3xl"
        >
          <Hero3DCanvas />
        </motion.div>
      </div>

      {/* Feature Highlights Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full pt-10 z-10 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono text-neutral-400">
        <div className="flex items-center gap-3">
          <Zap className="w-4 h-4 text-[#ff2a2a]" />
          <span>NITROGEN MATRIX CORE CUSHIONING</span>
        </div>
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-4 h-4 text-neutral-200" />
          <span>ARCHITECTURAL CRAFT GUARANTEE</span>
        </div>
        <div className="flex items-center gap-3">
          <Globe className="w-4 h-4 text-neutral-200" />
          <span>EXPRESS GLOBAL DUTY-PAID DELIVERY</span>
        </div>
      </div>
    </section>
  );
};
