import React from 'react';

export const BrandManifesto: React.FC = () => {
  return (
    <section id="brand" className="py-32 px-6 md:px-12 bg-[#050505] text-[#f5f5f3] relative border-t border-white/10">
      <div className="max-w-5xl mx-auto space-y-12 text-center">
        <span className="text-xs font-mono tracking-widest text-[#ff2a2a] uppercase">
          04 // BRAND MANIFESTO
        </span>

        <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold uppercase font-['Syne'] tracking-tight leading-none">
          WE DO NOT BUILD SHOES FOR DISPLAY. <br />
          <span className="text-outline">WE ENGINEER THEM FOR MOVEMENT.</span>
        </h2>

        <p className="text-base md:text-xl text-neutral-300 font-light max-w-2xl mx-auto leading-relaxed">
          ShoeHub exists at the threshold of athletic innovation, architectural minimalism, and raw physical motion. We reject ephemeral trends in favor of timeless structural geometry and unyielding material durability.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/10 font-mono">
          <div>
            <p className="text-4xl font-extrabold text-white">0.00%</p>
            <p className="text-[10px] text-neutral-400 mt-1 uppercase tracking-widest">VIRGIN PLASTIC WASTE</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-white">100%</p>
            <p className="text-[10px] text-neutral-400 mt-1 uppercase tracking-widest">CARBON NEUTRAL PRODUCTION</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-white">1,000 KM</p>
            <p className="text-[10px] text-neutral-400 mt-1 uppercase tracking-widest">GUARANTEED MILEAGE</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-white">24/7</p>
            <p className="text-[10px] text-neutral-400 mt-1 uppercase tracking-widest">GLOBAL CONCIERGE</p>
          </div>
        </div>
      </div>
    </section>
  );
};
