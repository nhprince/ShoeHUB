import React, { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import { Loader } from './components/ui/Loader';
import { Navbar } from './components/navigation/Navbar';
import { Hero } from './components/sections/Hero';
import { Collection } from './components/sections/Collection';
import { CraftTechStory } from './components/sections/CraftTechStory';
import { Editorial } from './components/sections/Editorial';
import { BrandManifesto } from './components/sections/BrandManifesto';
import { Footer } from './components/sections/Footer';
import { CartDrawer } from './components/ui/CartDrawer';
import { QuickViewModal } from './components/ui/QuickViewModal';
import { SearchModal } from './components/ui/SearchModal';
import Lenis from 'lenis';

export const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Smooth scrolling setup with Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <CartProvider>
      {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        <div className="min-h-screen bg-neutral-950 text-white selection:bg-white selection:text-black">
          <Navbar />
          <main>
            <Hero />
            <Collection />
            <CraftTechStory />
            <Editorial />
            <BrandManifesto />
          </main>
          <Footer />

          {/* Modals & Drawers */}
          <CartDrawer />
          <QuickViewModal />
          <SearchModal />
        </div>
      )}
    </CartProvider>
  );
};

export default App;
