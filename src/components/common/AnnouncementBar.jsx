import { useState } from 'react';
import { X, Truck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="bg-charcoal text-white text-xs sm:text-sm tracking-wider uppercase font-medium relative border-b border-white/10"
        >
          <div className="max-w-7xl mx-auto px-4 py-2 sm:py-2.5 flex items-center justify-center gap-3 text-center pr-9 sm:pr-10 text-[11px] sm:text-xs">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-amber-300">
              <Truck size={14} />
              Free Express Shipping
            </span>
            <span className="hidden sm:inline text-white/40">|</span>
            <p className="text-white/90">
              <span className="hidden sm:inline">Orders over ₹1,999 qualify for complimentary shipping ✦ Use code </span>
              <span className="sm:hidden">Complimentary Shipping over ₹1,999 ✦ Code </span>
              <span className="font-bold text-amber-300 tracking-widest bg-white/10 px-1.5 sm:px-2 py-0.5 rounded">
                LUXE15
              </span>{' '}
              <span>for 15% off</span>
            </p>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-white/60 hover:text-white transition-colors"
            aria-label="Dismiss announcement"
          >
            <X size={14} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnnouncementBar;
