import React from 'react';

export const BrandManifesto: React.FC = () => {
  return (
    <section id="brand" className="py-28 px-6 md:px-12 bg-neutral-900 text-white relative">
      <div className="max-w-5xl mx-auto space-y-12 text-center">
        <span className="text-xs font-mono tracking-widest text-red-500 uppercase">
          04 // BRAND MANIFESTO
        </span>

        <h2 className="text-4xl md:text-6xl font-extrabold uppercase font-sans tracking-tight leading-tight">
          WE DO NOT BUILD SHOES TO BE LOOKED AT. <br />
          <span className="text-neutral-500">WE ENGINEER THEM TO BE LIVED IN.</span>
        </h2>

        <p className="text-base md:text-lg text-neutral-300 font-light max-w-2xl mx-auto leading-relaxed">
          ShoeHub exists at the sharp intersection of athletic innovation, architectural minimalism, and raw human movement. We reject disposable fashion in favor of timeless geometry, sustainable material integrity, and unyielding durability.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-neutral-800 font-mono">
          <div>
            <p className="text-3xl font-extrabold text-white">0.00%</p>
            <p className="text-xs text-neutral-400 mt-1 uppercase">PLASTIC FOAM WASTE</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-white">100%</p>
            <p className="text-xs text-neutral-400 mt-1 uppercase">CARBON OFFSETTED</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-white">1,000 KM</p>
            <p className="text-xs text-neutral-400 mt-1 uppercase">GUARANTEED SOLE LIFE</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-white">24/7</p>
            <p className="text-xs text-neutral-400 mt-1 uppercase">GLOBAL SUPPORT</p>
          </div>
        </div>
      </div>
    </section>
  );
};
