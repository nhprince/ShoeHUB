import React from 'react';

export const Editorial: React.FC = () => {
  return (
    <section id="editorial" className="py-28 px-6 md:px-12 bg-neutral-950 text-white relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-2">
          <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase">
            03 // EDITORIAL CAMPAIGN
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase font-sans">
            FORM IN MOTION
          </h2>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* Main Large Visual Card */}
          <div className="md:col-span-8 relative rounded-2xl overflow-hidden min-h-[420px] md:min-h-[560px] group border border-neutral-800">
            <img
              src="/images/editorial/lifestyle.jpg"
              alt="ShoeHub Campaign Motion"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80" />

            <div className="absolute bottom-8 left-8 right-8 space-y-4 max-w-xl">
              <span className="text-xs font-mono tracking-widest text-red-500 uppercase">
                LOOKBOOK 2025
              </span>
              <h3 className="text-3xl md:text-4xl font-bold uppercase font-sans tracking-tight leading-tight">
                "BUILT BETWEEN URBAN PRECISION AND NATURAL UNBOUND FREEDOM."
              </h3>
              <p className="text-xs text-neutral-300 font-mono tracking-wider">
                TOKYO — PARIS — REYKJAVIK
              </p>
            </div>
          </div>

          {/* Secondary Editorial Column */}
          <div className="md:col-span-4 flex flex-col justify-between space-y-8 bg-neutral-900/60 border border-neutral-800 p-8 rounded-2xl">
            <div className="space-y-6">
              <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase">
                ESSAY // NO. 04
              </span>
              <h4 className="text-2xl font-bold uppercase tracking-tight font-sans">
                THE POSTURE OF MODERN LUXURY
              </h4>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                True luxury today is no longer about ostentatious logos or loud decoration. It is found in silence, weightlessness, anatomical balance, and materials that withstand the test of time and velocity.
              </p>
            </div>

            <div className="pt-6 border-t border-neutral-800 space-y-4 font-mono text-xs">
              <div className="flex justify-between text-neutral-400">
                <span>PHOTOGRAPHY</span>
                <span className="text-white">STUDIO Hub-09</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>ART DIRECTION</span>
                <span className="text-white">KINETIC MONOLITH</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
