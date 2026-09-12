import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import { X, Check, Star, ShieldCheck, Truck } from 'lucide-react';

export const QuickViewModal: React.FC = () => {
  const { quickViewProduct, setQuickViewProduct, addToCart } = useCart();
  const [selectedColorIdx, setSelectedColorIdx] = useState(0);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [added, setAdded] = useState(false);

  if (!quickViewProduct) return null;

  const activeSize = selectedSize || quickViewProduct.sizes[0];
  const activeColor = quickViewProduct.colors[selectedColorIdx] || quickViewProduct.colors[0];

  const handleAdd = () => {
    addToCart(quickViewProduct, activeColor, activeSize);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      setQuickViewProduct(null);
    }, 1200);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setQuickViewProduct(null)}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl z-10 grid grid-cols-1 md:grid-cols-12 text-white max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={() => setQuickViewProduct(null)}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-neutral-900/80 text-neutral-400 hover:text-white border border-neutral-800"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Product Image Column */}
          <div className="md:col-span-6 bg-neutral-900 relative min-h-[300px] md:min-h-full">
            <img
              src={quickViewProduct.image}
              alt={quickViewProduct.name}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Product Info & Selector Column */}
          <div className="md:col-span-6 p-6 md:p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex justify-between items-center font-mono text-xs text-neutral-400">
                <span className="uppercase">{quickViewProduct.category}</span>
                <div className="flex items-center gap-1 text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span>{quickViewProduct.rating} ({quickViewProduct.reviewsCount} reviews)</span>
                </div>
              </div>

              <h2 className="text-3xl font-extrabold uppercase font-sans tracking-tight">
                {quickViewProduct.name}
              </h2>

              <p className="text-xl font-mono font-bold text-white">
                ${quickViewProduct.price}
              </p>

              <p className="text-xs text-neutral-300 font-light leading-relaxed">
                {quickViewProduct.longDescription}
              </p>

              {/* Color Selector */}
              <div className="space-y-2 font-mono text-xs">
                <span className="text-neutral-400 uppercase">COLOR: {activeColor.name}</span>
                <div className="flex gap-3">
                  {quickViewProduct.colors.map((c, idx) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColorIdx(idx)}
                      className={`w-6 h-6 rounded-full border ${c.bgClass} transition-all ${
                        selectedColorIdx === idx
                          ? 'ring-2 ring-white ring-offset-2 ring-offset-neutral-950 border-transparent scale-110'
                          : 'border-neutral-700 opacity-60'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selector */}
              <div className="space-y-2 font-mono text-xs">
                <span className="text-neutral-400 uppercase">SELECT SIZE (US):</span>
                <div className="grid grid-cols-4 gap-2">
                  {quickViewProduct.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`py-2 rounded border text-center transition-all ${
                        activeSize === s
                          ? 'bg-white text-black font-bold border-white'
                          : 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-600'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA & Guarantees */}
            <div className="space-y-4 pt-4 border-t border-neutral-800">
              <button
                onClick={handleAdd}
                className={`w-full py-4 font-mono text-xs font-bold uppercase tracking-widest rounded-lg transition-all flex items-center justify-center gap-2 ${
                  added ? 'bg-emerald-600 text-white' : 'bg-white text-black hover:bg-neutral-200'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" /> Added to Bag
                  </>
                ) : (
                  `Add to Bag — $${quickViewProduct.price}`
                )}
              </button>

              <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-neutral-400 pt-2">
                <div className="flex items-center gap-2">
                  <Truck className="w-3.5 h-3.5 text-neutral-300" />
                  <span>FREE GLOBAL EXPRESS</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-neutral-300" />
                  <span>30-DAY EASY RETURNS</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
