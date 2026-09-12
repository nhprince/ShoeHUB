import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
    } catch {
      // Fallback
    }
    setSubscribed(true);
  };

  return (
    <footer className="bg-[#050505] text-[#f5f5f3] border-t border-white/10 pt-24 pb-12 px-6 md:px-12 font-mono text-xs">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-6">
            <span className="text-3xl font-bold tracking-widest text-white uppercase font-['Syne']">
              SHOE<span className="text-[#ff2a2a]">HUB</span>
            </span>
            <p className="text-neutral-400 font-light leading-relaxed max-w-sm">
              An independent footwear design house dedicated to athletic innovation, minimal architecture, and sustainable kinetic performance.
            </p>

            {/* Newsletter */}
            <div className="space-y-3 pt-2">
              <span className="text-[10px] text-neutral-400 uppercase tracking-widest">
                JOIN THE SHOEHUB PRIVATE ARCHIVE
              </span>

              {subscribed ? (
                <div className="flex items-center gap-2 text-emerald-400 bg-black border border-white/10 p-3 rounded-full">
                  <Check className="w-4 h-4" />
                  <span>Subscribed to private drops.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email address"
                    className="bg-black border border-white/10 text-white p-3 rounded-full w-full focus:outline-none focus:border-white px-5"
                  />
                  <button
                    type="submit"
                    className="bg-white text-black px-6 font-bold uppercase hover:bg-neutral-200 transition-colors flex items-center justify-center rounded-full"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Nav Column 1 */}
          <div className="md:col-span-2 space-y-4">
            <p className="text-white font-bold uppercase tracking-wider">COLLECTION</p>
            <ul className="space-y-2.5 text-neutral-400">
              <li><a href="#collection" className="hover:text-white transition-colors">ShoeHub AERO</a></li>
              <li><a href="#collection" className="hover:text-white transition-colors">ShoeHub FORM</a></li>
              <li><a href="#collection" className="hover:text-white transition-colors">ShoeHub FLOW</a></li>
              <li><a href="#collection" className="hover:text-white transition-colors">ShoeHub CORE</a></li>
              <li><a href="#collection" className="hover:text-white transition-colors">ShoeHub STUDIO</a></li>
            </ul>
          </div>

          {/* Nav Column 2 */}
          <div className="md:col-span-2 space-y-4">
            <p className="text-white font-bold uppercase tracking-wider">COMPANY</p>
            <ul className="space-y-2.5 text-neutral-400">
              <li><a href="#brand" className="hover:text-white transition-colors">Manifesto</a></li>
              <li><a href="#story" className="hover:text-white transition-colors">Material Craft</a></li>
              <li><a href="#editorial" className="hover:text-white transition-colors">Campaign 2025</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
            </ul>
          </div>

          {/* Nav Column 3 */}
          <div className="md:col-span-3 space-y-4">
            <p className="text-white font-bold uppercase tracking-wider">SUPPORT & LEGAL</p>
            <ul className="space-y-2.5 text-neutral-400">
              <li><a href="#" className="hover:text-white transition-colors">Global Express Shipping</a></li>
              <li><a href="#" className="hover:text-white transition-colors">30-Day Guarantee</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy & Terms</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cloudflare Pages Worker Status</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Line */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-neutral-500 gap-4">
          <p>© {new Date().getFullYear()} SHOEHUB INC. ALL RIGHTS RESERVED.</p>
          <p>POWERED BY CLOUDFLARE PAGES & WORKERS FREE TIER</p>
        </div>
      </div>
    </footer>
  );
};
