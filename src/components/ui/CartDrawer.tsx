import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import { X, Trash2, ShoppingBag, ArrowRight, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export const CartDrawer: React.FC = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal, clearCart } =
    useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState<string | null>(null);
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');

  const handleCheckoutSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: cart,
          total: cartTotal,
          customerInfo: { name: customerName, email: customerEmail },
        }),
      });
      const data = await res.json();
      if (data.success) {
        setOrderComplete(data.orderId);
        clearCart();
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      }
    } catch {
      // Fallback local order generation if offline preview
      const fallbackId = 'SH-' + Math.floor(100000 + Math.random() * 900000);
      setOrderComplete(fallbackId);
      clearCart();
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }
  };

  const closeAll = () => {
    setIsCartOpen(false);
    setIsCheckingOut(false);
    setOrderComplete(null);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeAll}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-neutral-950 text-white shadow-2xl flex flex-col justify-between border-l border-neutral-800"
          >
            {/* Header */}
            <div className="p-6 border-b border-neutral-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-red-500" />
                <h2 className="font-mono text-sm uppercase tracking-widest font-bold">
                  YOUR BAG ({cart.length})
                </h2>
              </div>
              <button
                onClick={closeAll}
                className="p-2 text-neutral-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {orderComplete ? (
                <div className="py-12 text-center space-y-4">
                  <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto" />
                  <h3 className="text-2xl font-extrabold uppercase font-sans">ORDER CONFIRMED</h3>
                  <p className="text-xs font-mono text-neutral-400">ORDER ID: {orderComplete}</p>
                  <p className="text-sm text-neutral-300 font-light">
                    Thank you for choosing ShoeHub. Your shipping confirmation has been sent to your email.
                  </p>
                  <button
                    onClick={closeAll}
                    className="mt-6 w-full py-3 bg-white text-black font-mono text-xs font-bold uppercase tracking-widest hover:bg-neutral-200"
                  >
                    Continue Browsing
                  </button>
                </div>
              ) : isCheckingOut ? (
                <form onSubmit={handleCheckoutSubmit} className="space-y-4 font-mono text-xs">
                  <div className="space-y-1">
                    <label className="text-neutral-400 uppercase">FULL NAME</label>
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Alexander McQueen"
                      className="w-full bg-neutral-900 border border-neutral-800 rounded p-3 text-white focus:outline-none focus:border-white"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-neutral-400 uppercase">EMAIL ADDRESS</label>
                    <input
                      type="email"
                      required
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      placeholder="alexander@domain.com"
                      className="w-full bg-neutral-900 border border-neutral-800 rounded p-3 text-white focus:outline-none focus:border-white"
                    />
                  </div>

                  <div className="p-4 bg-neutral-900 rounded border border-neutral-800 space-y-2 mt-4">
                    <div className="flex justify-between text-neutral-400">
                      <span>SUBTOTAL</span>
                      <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-neutral-400">
                      <span>EXPRESS SHIPPING</span>
                      <span className="text-emerald-400 uppercase">FREE</span>
                    </div>
                    <div className="flex justify-between text-white font-bold border-t border-neutral-800 pt-2 text-sm">
                      <span>TOTAL</span>
                      <span>${cartTotal.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setIsCheckingOut(false)}
                      className="w-1/3 py-3 border border-neutral-800 text-neutral-300 font-mono text-xs uppercase hover:bg-neutral-900"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="w-2/3 py-3 bg-white text-black font-mono text-xs font-bold uppercase tracking-widest hover:bg-neutral-200"
                    >
                      Complete Order
                    </button>
                  </div>
                </form>
              ) : cart.length === 0 ? (
                <div className="py-20 text-center space-y-4 text-neutral-500 font-mono text-xs">
                  <p>YOUR CART IS CURRENTLY EMPTY.</p>
                  <button
                    onClick={closeAll}
                    className="px-6 py-2 bg-neutral-900 text-neutral-300 rounded border border-neutral-800 hover:text-white"
                  >
                    DISCOVER COLLECTION
                  </button>
                </div>
              ) : (
                cart.map((item, idx) => (
                  <div
                    key={`${item.product.id}-${item.selectedColor.name}-${item.selectedSize}`}
                    className="flex gap-4 p-3 bg-neutral-900/50 rounded-lg border border-neutral-800/80 items-center"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded bg-neutral-900"
                    />
                    <div className="flex-1 space-y-1">
                      <h4 className="text-sm font-bold uppercase font-sans text-white">
                        {item.product.name}
                      </h4>
                      <p className="text-[10px] font-mono text-neutral-400 uppercase">
                        COLOR: {item.selectedColor.name} // SIZE: US {item.selectedSize}
                      </p>
                      <p className="text-xs font-mono font-bold text-white">
                        ${item.product.price}
                      </p>
                    </div>

                    <div className="flex flex-col items-end gap-2 font-mono">
                      <button
                        onClick={() => removeFromCart(idx)}
                        className="text-neutral-500 hover:text-red-400 p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <div className="flex items-center gap-2 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800 text-xs">
                        <button
                          onClick={() => updateQuantity(idx, item.quantity - 1)}
                          className="hover:text-red-400"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(idx, item.quantity + 1)}
                          className="hover:text-emerald-400"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Total & CTA */}
            {!orderComplete && !isCheckingOut && cart.length > 0 && (
              <div className="p-6 border-t border-neutral-800 bg-neutral-950 space-y-4">
                <div className="flex justify-between items-center font-mono">
                  <span className="text-xs text-neutral-400 uppercase">ESTIMATED TOTAL</span>
                  <span className="text-xl font-bold text-white">${cartTotal.toFixed(2)}</span>
                </div>

                <button
                  onClick={() => setIsCheckingOut(true)}
                  className="w-full py-4 bg-white text-black font-mono text-xs font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 group"
                >
                  Proceed to Checkout
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
