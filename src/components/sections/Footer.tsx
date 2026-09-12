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
    <footer className="bg-neutral-950 text-white border-t border-neutral-900 pt-20 pb-12 px-6 md:px-12 font-mono text-xs">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-6">
            <span className="text-2xl font-bold tracking-widest text-white uppercase font-sans">
              SHOE<span className="text-red-500">HUB</span>
            </span>
            <p className="text-neutral-400 font-light leading-relaxed max-w-sm">
              An independent footwear design house dedicated to athletic innovation, minimal architecture, and sustainable performance.
            </p>

            {/* Newsletter */}
            <div className="space-y-3 pt-2">
              <span className="text-[10px] text-neutral-400 uppercase tracking-widest">
                JOIN THE SHOEHUB PRIVATE ARCHIVE
              </span>

              {subscribed ? (
                <div className="flex items-center gap-2 text-emerald-400 bg-neutral-900 border border-neutral-800 p-3 rounded">
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
                    className="bg-neutral-900 border border-neutral-800 text-white p-3 rounded w-full focus:outline-none focus:border-white"
                  />
                  <button
                    type="submit"
                    className="bg-white text-black px-5 font-bold uppercase hover:bg-neutral-200 transition-colors flex items-center justify-center"
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
              <li><a href="#collection" className="hover:text-white">ShoeHub AERO</a></li>
              <li><a href="#collection" className="hover:text-white">ShoeHub FORM</a></li>
              <li><a href="#collection" className="hover:text-white">ShoeHub FLOW</a></li>
              <li><a href="#collection" className="hover:text-white">ShoeHub CORE</a></li>
              <li><a href="#collection" className="hover:text-white">ShoeHub STUDIO</a></li>
            </ul>
          </div>

          {/* Nav Column 2 */}
          <div className="md:col-span-2 space-y-4">
            <p className="text-white font-bold uppercase tracking-wider">COMPANY</p>
            <ul className="space-y-2.5 text-neutral-400">
              <li><a href="#brand" className="hover:text-white">Manifesto</a></li>
              <li><a href="#story" className="hover:text-white">Material Craft</a></li>
              <li><a href="#editorial" className="hover:text-white">Campaign 2025</a></li>
              <li><a href="#" className="hover:text-white">Sustainability</a></li>
            </ul>
          </div>

          {/* Nav Column 3 */}
          <div className="md:col-span-3 space-y-4">
            <p className="text-white font-bold uppercase tracking-wider">SUPPORT & LEGAL</p>
            <ul className="space-y-2.5 text-neutral-400">
              <li><a href="#" className="hover:text-white">Global Express Shipping</a></li>
              <li><a href="#" className="hover:text-white">30-Day Guarantee</a></li>
              <li><a href="#" className="hover:text-white">Privacy & Terms</a></li>
              <li><a href="#" className="hover:text-white">Cloudflare Pages Worker Status</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Line */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center text-neutral-500 gap-4">
          <p>© {new Date().getFullYear()} SHOEHUB INC. ALL RIGHTS RESERVED.</p>
          <p>POWERED BY CLOUDFLARE PAGES & WORKERS FREE TIER</p>
        </div>
      </div>
    </footer>
  );
};
