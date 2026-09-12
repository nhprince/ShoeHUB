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
    <section id="collection" className="py-28 px-6 md:px-12 bg-neutral-950 text-white relative">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header & Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-800 pb-8">
          <div>
            <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase">
              01 // CURATED FOOTWEAR ARCHIVE
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase font-sans mt-2">
              THE COLLECTION
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 font-mono text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 uppercase tracking-widest transition-all rounded-full border ${
                  selectedCategory === cat
                    ? 'bg-white text-black border-white font-bold'
                    : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:border-neutral-600 hover:text-white'
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="group relative bg-neutral-900/50 border border-neutral-800/80 rounded-xl overflow-hidden hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between"
    >
      {/* Image & Badges Container */}
      <div
        onClick={onQuickView}
        className="relative h-80 w-full overflow-hidden bg-neutral-900 cursor-pointer"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />

        {/* Overlay Darkening */}
        <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-neutral-950/40 transition-colors" />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-black font-mono text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded">
            {product.badge}
          </div>
        )}

        {/* Quick View Button on Hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView();
            }}
            className="px-5 py-2.5 bg-neutral-950/90 text-white font-mono text-xs uppercase tracking-widest border border-neutral-700 rounded-full flex items-center gap-2 hover:bg-white hover:text-black transition-all shadow-xl"
          >
            <Eye className="w-4 h-4" /> Quick View
          </button>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
        <div className="space-y-1">
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
              {product.category}
            </span>
            <div className="flex items-center gap-1 text-amber-400 text-xs font-mono">
              <Star className="w-3 h-3 fill-amber-400" />
              <span>{product.rating}</span>
            </div>
          </div>

          <h3
            onClick={onQuickView}
            className="text-xl font-bold font-sans uppercase tracking-tight text-white cursor-pointer hover:text-neutral-300 transition-colors"
          >
            {product.name}
          </h3>

          <p className="text-xs text-neutral-400 font-light line-clamp-2">
            {product.tagline}
          </p>
        </div>

        {/* Swatches & Pricing Footer */}
        <div className="pt-4 border-t border-neutral-800/60 flex items-center justify-between">
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
                    ? 'ring-2 ring-white ring-offset-2 ring-offset-neutral-900 border-transparent scale-110'
                    : 'border-neutral-700 opacity-60 hover:opacity-100'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-lg font-mono font-bold text-white">
              ${product.price}
            </span>

            <button
              onClick={handleQuickAdd}
              className={`p-2.5 rounded-lg font-mono text-xs font-bold transition-all ${
                added
                  ? 'bg-emerald-600 text-white'
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
