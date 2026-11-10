import { useState, useRef } from 'react';
import { ZoomIn, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ProductGallery = ({ images = [], productName = 'Product' }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const touchStartX = useRef(null);

  const activeImage = images[activeIndex] || images[0];

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  return (
    <div className="flex flex-col-reverse md:flex-row gap-3 sm:gap-4">
      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex md:flex-col gap-2.5 sm:gap-3 overflow-x-auto md:overflow-y-auto max-h-[580px] shrink-0 scroll-touch py-1 px-0.5">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-14 h-18 sm:w-20 sm:h-24 shrink-0 overflow-hidden border-2 transition-all cursor-pointer rounded-xs ${
                activeIndex === idx
                  ? 'border-burgundy ring-1 ring-burgundy'
                  : 'border-transparent opacity-70 hover:opacity-100 hover:border-light-grey'
              }`}
            >
              <img
                src={img}
                alt={`${productName} thumbnail ${idx + 1}`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Main Image View */}
      <div
        className="relative flex-1 aspect-[3/4] max-h-[620px] bg-ivory overflow-hidden group cursor-zoom-in select-none"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={activeImage}
          alt={productName}
          onClick={() => setIsLightboxOpen(true)}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Mobile Page indicator pill */}
        {images.length > 1 && (
          <div className="absolute top-3 left-3 bg-black/60 text-white text-[11px] font-medium px-2 py-0.5 rounded-full backdrop-blur-xs sm:hidden">
            {activeIndex + 1} / {images.length}
          </div>
        )}

        {/* Zoom trigger icon */}
        <button
          onClick={() => setIsLightboxOpen(true)}
          className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-10 h-10 rounded-full bg-white/90 text-charcoal backdrop-blur-xs hover:bg-white shadow-md transition-all cursor-pointer flex items-center justify-center"
          aria-label="Enlarge image"
        >
          <ZoomIn size={18} />
        </button>

        {/* Carousel controls if multi-image */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-2.5 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 sm:bg-white/80 hover:bg-white text-charcoal opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity shadow-md"
              aria-label="Previous image"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 sm:bg-white/80 hover:bg-white text-charcoal opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity shadow-md"
              aria-label="Next image"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsLightboxOpen(false)}
              className="fixed inset-0 bg-near-black/90 backdrop-blur-md cursor-pointer"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative z-10 max-w-4xl max-h-[90vh] overflow-hidden"
            >
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors z-20"
                aria-label="Close zoom"
              >
                <X size={24} />
              </button>
              <img
                src={activeImage}
                alt={`${productName} enlarged view`}
                className="max-h-[85vh] w-auto mx-auto object-contain shadow-2xl"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductGallery;
