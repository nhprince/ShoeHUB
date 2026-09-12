import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Sparkles, Layers } from 'lucide-react';

export const CraftTechStory: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'material' | 'midsole' | 'outsole'>('material');

  const content = {
    material: {
      title: 'AEROKNIT PRIME UPPER',
      subtitle: 'Engineered Zero-Friction Weave',
      description:
        'Woven with high-tenacity recycled polymer threads, the upper adapts dynamically to natural foot motion while maintaining extreme breathable tensile strength.',
      specs: [
        { label: 'Tensile Rating', value: '420 MPa' },
        { label: 'Breathability Index', value: '98/100' },
        { label: 'Recycled Content', value: '88%' }
      ],
      image: '/images/editorial/craft.jpg'
    },
    midsole: {
      title: 'NITROPLEX DUAL-DENSITY FOAM',
      subtitle: 'Supercritical Nitrogen Injection',
      description:
        'Infused with liquid nitrogen under high pressure, generating millions of micro-cells that rebound with 86% energy retention without degrading.',
      specs: [
        { label: 'Energy Return', value: '86%' },
        { label: 'Core Weight', value: '62 Grams' },
        { label: 'Rebound Latency', value: '< 2ms' }
      ],
      image: '/images/products/aero.jpg'
    },
    outsole: {
      title: 'TACTILE ANATOMIGRIP MATRIX',
      subtitle: 'Wet & Dry All-Terrain Compound',
      description:
        'Inspired by gecko toe structures, the razor-siped tread compound bites into both polished wet tile and rugged outdoor concrete without slipping.',
      specs: [
        { label: 'Friction Coeff', value: '1.45 µ' },
        { label: 'Durability Rating', value: '1,000+ KM' },
        { label: 'Compound Type', value: 'Vulcanized Bio-Rubber' }
      ],
      image: '/images/products/flow.jpg'
    }
  };

  const current = content[activeTab];

  return (
    <section id="story" className="py-28 px-6 md:px-12 bg-neutral-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase">
            02 // CRAFT & MATERIAL ARCHITECTURE
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase font-sans">
            ENGINEERED TO THE MICRON
          </h2>
          <p className="text-sm md:text-base text-neutral-400 font-light">
            Every component of ShoeHub footwear is meticulously researched, prototyped, and tested to harmonize human biology with physical performance.
          </p>
        </div>

        {/* Interactive Story Tabs */}
        <div className="flex justify-center border-b border-neutral-800 pb-4">
          <div className="inline-flex p-1 bg-neutral-950 rounded-xl border border-neutral-800 font-mono text-xs">
            <button
              onClick={() => setActiveTab('material')}
              className={`px-6 py-2.5 rounded-lg uppercase tracking-widest transition-all flex items-center gap-2 ${
                activeTab === 'material' ? 'bg-white text-black font-bold' : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-4 h-4" /> Upper Knit
            </button>
            <button
              onClick={() => setActiveTab('midsole')}
              className={`px-6 py-2.5 rounded-lg uppercase tracking-widest transition-all flex items-center gap-2 ${
                activeTab === 'midsole' ? 'bg-white text-black font-bold' : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Cpu className="w-4 h-4" /> Midsole Foam
            </button>
            <button
              onClick={() => setActiveTab('outsole')}
              className={`px-6 py-2.5 rounded-lg uppercase tracking-widest transition-all flex items-center gap-2 ${
                activeTab === 'outsole' ? 'bg-white text-black font-bold' : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Layers className="w-4 h-4" /> Outsole Grip
            </button>
          </div>
        </div>

        {/* Dynamic Display Panel */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-neutral-950/60 border border-neutral-800/80 rounded-2xl p-8 md:p-12 shadow-2xl"
        >
          {/* Left Text Detail */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-red-400 tracking-wider uppercase">
              SPECIFICATION DETAIL
            </div>
            <h3 className="text-3xl md:text-4xl font-extrabold uppercase font-sans tracking-tight">
              {current.title}
            </h3>
            <p className="text-sm font-mono text-neutral-400 tracking-wider uppercase">
              {current.subtitle}
            </p>
            <p className="text-sm text-neutral-300 font-light leading-relaxed">
              {current.description}
            </p>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-neutral-800 font-mono">
              {current.specs.map((s) => (
                <div key={s.label}>
                  <p className="text-[10px] text-neutral-500 uppercase">{s.label}</p>
                  <p className="text-base font-bold text-white mt-1">{s.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Imagery Showcase */}
          <div className="lg:col-span-6 h-80 md:h-96 rounded-xl overflow-hidden border border-neutral-800 relative group">
            <img
              src={current.image}
              alt={current.title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-neutral-950/20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
