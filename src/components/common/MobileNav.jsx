import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, Heart, ArrowRight, Sparkles } from 'lucide-react';
import { categories } from '../../data/categories';
import { useWishlist } from '../../context/WishlistContext';

const MobileNav = ({ isOpen, onClose }) => {
  const [isCatExpanded, setIsCatExpanded] = useState(true);
  const { wishlistCount } = useWishlist();

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden flex">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-near-black/60 backdrop-blur-xs cursor-pointer"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="relative z-10 w-full max-w-xs sm:max-w-sm bg-white h-full flex flex-col shadow-2xl border-r border-light-grey"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-light-grey bg-ivory">
              <Link to="/" onClick={handleLinkClick} className="flex items-center gap-2">
                <span className="font-display text-2xl font-bold tracking-widest text-charcoal">
                  LUXE
                </span>
                <span className="text-[10px] uppercase tracking-widest text-burgundy font-semibold">
                  Atelier
                </span>
              </Link>
              <button
                onClick={onClose}
                className="p-1.5 text-warm-grey hover:text-charcoal transition-colors cursor-pointer"
                aria-label="Close mobile navigation"
              >
                <X size={22} />
              </button>
            </div>

            {/* Navigation links */}
            <div className="flex-1 overflow-y-auto py-4">
              <div className="px-5 mb-4">
                <Link
                  to="/shop"
                  onClick={handleLinkClick}
                  className="flex items-center justify-between p-3.5 bg-burgundy text-white text-xs uppercase tracking-widest font-semibold hover:bg-burgundy-dark transition-colors"
                >
                  <span>Explore All Products</span>
                  <ArrowRight size={15} />
                </Link>
              </div>

              <div className="space-y-1 px-3">
                <NavLink
                  to="/"
                  end
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    `block px-4 py-2.5 text-xs uppercase tracking-widest font-medium transition-colors ${
                      isActive ? 'text-burgundy bg-ivory font-bold' : 'text-charcoal hover:bg-ivory'
                    }`
                  }
                >
                  Home
                </NavLink>

                {/* Categories Accordion */}
                <div>
                  <button
                    onClick={() => setIsCatExpanded(!isCatExpanded)}
                    className="w-full flex items-center justify-between px-4 py-2.5 text-xs uppercase tracking-widest font-medium text-charcoal hover:bg-ivory transition-colors cursor-pointer"
                  >
                    <span>Categories ({categories.length})</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        isCatExpanded ? 'rotate-180 text-burgundy' : 'text-warm-grey'
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isCatExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-ivory/60 pl-4 py-1 space-y-1"
                      >
                        {categories.map((cat) => (
                          <Link
                            key={cat.slug}
                            to={`/category/${cat.slug}`}
                            onClick={handleLinkClick}
                            className="flex items-center justify-between px-4 py-2 text-xs text-warm-grey hover:text-burgundy hover:bg-white/80 transition-colors"
                          >
                            <span>{cat.name}</span>
                            <span className="text-[10px] text-mid-grey">({cat.count})</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <NavLink
                  to="/shop?filter=new-arrivals"
                  onClick={handleLinkClick}
                  className="flex items-center justify-between px-4 py-2.5 text-xs uppercase tracking-widest font-medium text-charcoal hover:bg-ivory transition-colors"
                >
                  <span className="flex items-center gap-1.5">
                    <Sparkles size={14} className="text-burgundy" /> New Arrivals
                  </span>
                  <span className="text-[10px] bg-burgundy/10 text-burgundy font-bold px-1.5 py-0.5">
                    New
                  </span>
                </NavLink>

                <NavLink
                  to="/shop?filter=best-sellers"
                  onClick={handleLinkClick}
                  className="block px-4 py-2.5 text-xs uppercase tracking-widest font-medium text-charcoal hover:bg-ivory transition-colors"
                >
                  Best Sellers
                </NavLink>

                <NavLink
                  to="/wishlist"
                  onClick={handleLinkClick}
                  className="flex items-center justify-between px-4 py-2.5 text-xs uppercase tracking-widest font-medium text-charcoal hover:bg-ivory transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Heart size={15} /> My Wishlist
                  </span>
                  {wishlistCount > 0 && (
                    <span className="text-[11px] font-bold bg-burgundy text-white px-2 py-0.5 rounded-full">
                      {wishlistCount}
                    </span>
                  )}
                </NavLink>

                <div className="border-t border-light-grey my-3 pt-3">
                  <NavLink
                    to="/about"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-xs uppercase tracking-widest text-warm-grey hover:text-charcoal"
                  >
                    About The Brand
                  </NavLink>
                  <NavLink
                    to="/contact"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-xs uppercase tracking-widest text-warm-grey hover:text-charcoal"
                  >
                    Customer Care & Contact
                  </NavLink>
                </div>
              </div>
            </div>

            {/* Bottom info */}
            <div className="p-4 border-t border-light-grey bg-ivory text-center">
              <p className="text-[11px] uppercase tracking-wider text-warm-grey">
                Free Shipping over ₹1,999 ✦ Code: LUXE15
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
