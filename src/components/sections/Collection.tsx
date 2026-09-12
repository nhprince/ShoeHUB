import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCTS } from '../../data/products';
import type { Product } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { Eye, Plus, Check, Star } from 'lucide-react';

export const Collection: React.FC = () => {
  const { setQuickViewProduct, addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Performance', 'Lifestyle', 'Minimalist', 'Studio'];

  const filteredProducts =
    selectedCategory === 'All'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="collection" className="py-32 px-6 md:px-12 bg-[#050505] text-[#f5f5f3] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header & Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-8">
          <div>
            <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase">
              01 // CURATED FOOTWEAR ARCHIVE
            </span>
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight uppercase font-['Syne'] mt-2">
              THE COLLECTION
            </h2>
          </div>

          {/* Kinetic Filter Pills */}
          <div className="flex flex-wrap gap-2.5 font-mono text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 uppercase tracking-widest transition-all rounded-full border ${
                  selectedCategory === cat
                    ? 'bg-white text-black border-white font-bold shadow-lg'
                    : 'bg-black/60 text-neutral-400 border-white/10 hover:border-white/40 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={() => setQuickViewProduct(product)}
                onAddToCart={(color, size) => addToCart(product, color, size)}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const ProductCard: React.FC<{
  product: Product;
  onQuickView: () => void;
  onAddToCart: (color: any, size: number) => void;
}> = ({ product, onQuickView, onAddToCart }) => {
  const [selectedColorIdx, setSelectedColorIdx] = useState(0);
  const [added, setAdded] = useState(false);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product.colors[selectedColorIdx], product.sizes[2] || product.sizes[0]);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="group relative bg-[#0f0f10] border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-500 flex flex-col justify-between"
    >
      {/* Image & Badges Container */}
      <div
        onClick={onQuickView}
        className="relative h-88 w-full overflow-hidden bg-black cursor-pointer"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
          loading="lazy"
        />

        {/* Dynamic Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-black font-mono text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border border-white">
            {product.badge}
          </div>
        )}

        {/* Quick View Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView();
            }}
            className="px-6 py-3 bg-black/90 backdrop-blur-md text-white font-mono text-xs uppercase tracking-widest border border-white/20 rounded-full flex items-center gap-2.5 hover:bg-white hover:text-black transition-all shadow-2xl scale-95 group-hover:scale-100"
          >
            <Eye className="w-4 h-4" /> Quick View
          </button>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
        <div className="space-y-1.5">
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
              {product.category}
            </span>
            <div className="flex items-center gap-1 text-amber-400 text-xs font-mono">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>{product.rating}</span>
            </div>
          </div>

          <h3
            onClick={onQuickView}
            className="text-2xl font-bold font-['Syne'] uppercase tracking-tight text-white cursor-pointer hover:text-neutral-300 transition-colors"
          >
            {product.name}
          </h3>

          <p className="text-xs text-neutral-400 font-light line-clamp-2 leading-relaxed">
            {product.tagline}
          </p>
        </div>

        {/* Swatches & Pricing Footer */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {product.colors.map((color, idx) => (
              <button
                key={color.name}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedColorIdx(idx);
                }}
                title={color.name}
                className={`w-4 h-4 rounded-full border transition-all ${color.bgClass} ${
                  selectedColorIdx === idx
                    ? 'ring-2 ring-white ring-offset-2 ring-offset-black border-transparent scale-110'
                    : 'border-neutral-700 opacity-60 hover:opacity-100'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xl font-mono font-bold text-white">
              ${product.price}
            </span>

            <button
              onClick={handleQuickAdd}
              className={`p-3 rounded-full font-mono text-xs font-bold transition-all ${
                added
                  ? 'bg-emerald-500 text-white'
                  : 'bg-white text-black hover:bg-neutral-200'
              }`}
              title="Quick Add to Cart"
            >
              {added ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
