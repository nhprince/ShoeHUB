import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Loader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 80);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-neutral-950 px-8 py-12 text-white select-none"
    >
      <div className="flex w-full justify-between items-center text-xs tracking-widest text-neutral-400 font-mono">
        <span>SHOEHUB // ARCHIVE 2025</span>
        <span>PARIS - TOKYO - NY</span>
      </div>

      <div className="flex flex-col items-center gap-6">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative flex items-center justify-center"
        >
          {/* Custom Shoe Sole Silhouette Graphic */}
          <svg
            className="w-24 h-24 stroke-neutral-200 fill-none"
            viewBox="0 0 100 100"
            strokeWidth="1.5"
          >
            <path d="M30 80 Q 20 50, 35 25 Q 50 10, 70 20 Q 80 35, 70 55 Q 60 75, 45 85 Z" />
            <path d="M38 30 C 45 25, 55 25, 62 32" strokeDasharray="2 2" />
            <path d="M35 50 C 45 48, 55 52, 65 50" strokeDasharray="2 2" />
            <path d="M40 70 C 48 68, 52 72, 58 70" strokeDasharray="2 2" />
          </svg>
        </motion.div>

        <h1 className="text-3xl font-light tracking-widest uppercase font-mono">
          SHOEHUB
        </h1>

        <p className="text-xs text-neutral-400 font-mono tracking-wider">
          INITIATING KINETIC MATRIX...
        </p>
      </div>

      <div className="w-full max-w-xs space-y-2">
        <div className="flex justify-between text-xs font-mono text-neutral-400">
          <span>PROGRESS</span>
          <span>{Math.min(progress, 100)}%</span>
        </div>
        <div className="h-[2px] w-full bg-neutral-800 overflow-hidden rounded-full">
          <motion.div
            className="h-full bg-white"
            style={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ ease: 'easeOut' }}
          />
        </div>
      </div>
    </motion.div>
  );
};
