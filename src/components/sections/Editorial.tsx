import React from 'react';

export const Editorial: React.FC = () => {
  return (
    <section id="editorial" className="py-32 px-6 md:px-12 bg-[#050505] text-[#f5f5f3] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-2">
          <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase">
            03 // EDITORIAL CAMPAIGN
          </span>
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight uppercase font-['Syne']">
            FORM IN MOTION
          </h2>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* Main Large Visual Card */}
          <div className="md:col-span-8 relative rounded-2xl overflow-hidden min-h-[460px] md:min-h-[580px] group border border-white/10">
            <img
              src="/images/editorial/lifestyle.jpg"
              alt="ShoeHub Campaign Motion"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-85" />

            <div className="absolute bottom-8 left-8 right-8 space-y-4 max-w-xl">
              <span className="text-xs font-mono tracking-widest text-[#ff2a2a] uppercase">
                LOOKBOOK 2025
              </span>
              <h3 className="text-3xl md:text-5xl font-bold uppercase font-['Syne'] tracking-tight leading-tight">
                "BUILT BETWEEN URBAN PRECISION AND UNBOUND FREEDOM."
              </h3>
              <p className="text-xs text-neutral-300 font-mono tracking-wider">
                TOKYO — PARIS — REYKJAVIK
              </p>
            </div>
          </div>

          {/* Secondary Editorial Column */}
          <div className="md:col-span-4 flex flex-col justify-between space-y-8 bg-[#0f0f10] border border-white/10 p-8 md:p-10 rounded-2xl backdrop-blur-2xl">
            <div className="space-y-6">
              <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase">
                ESSAY // NO. 04
              </span>
              <h4 className="text-3xl font-bold uppercase tracking-tight font-['Syne']">
                THE POSTURE OF SILENT LUXURY
              </h4>
              <p className="text-sm text-neutral-300 font-light leading-relaxed">
                True modern luxury is no longer defined by loud logos or superficial decoration. It resides in anatomical balance, featherweight durability, and materials engineered for seamless velocity.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-4 font-mono text-xs">
              <div className="flex justify-between text-neutral-400">
                <span>PHOTOGRAPHY</span>
                <span className="text-white">STUDIO HUB-09</span>
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
