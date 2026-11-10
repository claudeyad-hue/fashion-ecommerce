import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Truck, ShieldCheck } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../utils/formatters';
import Button from './Button';

const CartDrawer = () => {
  const {
    items,
    isDrawerOpen,
    closeDrawer,
    removeFromCart,
    updateQuantity,
    cartCount,
    subtotal,
    freeShippingThreshold,
    isFreeShipping,
  } = useCart();
  const navigate = useNavigate();

  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
  const amountAway = freeShippingThreshold - subtotal;

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeDrawer();
    };
    if (isDrawerOpen) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [isDrawerOpen, closeDrawer]);

  const handleCheckoutClick = () => {
    closeDrawer();
    navigate('/cart');
  };

  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <div className="fixed inset-0 z-[105] flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDrawer}
            className="fixed inset-0 bg-near-black/60 backdrop-blur-xs cursor-pointer"
          />

          {/* Drawer content */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="relative z-10 w-full max-w-md bg-white h-full flex flex-col shadow-2xl border-l border-light-grey"
          >
            {/* Header */}
            <div className="p-5 border-b border-light-grey flex items-center justify-between bg-ivory/60">
              <div className="flex items-center gap-2.5">
                <ShoppingBag size={20} className="text-burgundy" />
                <h3 className="font-display text-lg font-semibold tracking-wide text-charcoal">
                  Shopping Bag ({cartCount})
                </h3>
              </div>
              <button
                onClick={closeDrawer}
                className="p-1.5 text-warm-grey hover:text-charcoal transition-colors cursor-pointer"
                aria-label="Close cart drawer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Free shipping bar */}
            <div className="px-5 py-3 bg-cream/70 border-b border-light-grey">
              <div className="flex items-center justify-between text-xs font-medium text-charcoal mb-1.5">
                <span className="flex items-center gap-1.5">
                  <Truck size={14} className="text-burgundy" />
                  {isFreeShipping ? (
                    <span className="font-semibold text-success">
                      Complimentary Express Shipping Unlocked!
                    </span>
                  ) : (
                    <span>
                      Add <strong className="text-burgundy">{formatPrice(amountAway)}</strong> more for Free Shipping
                    </span>
                  )}
                </span>
                <span>{progressPercent}%</span>
              </div>
              <div className="w-full bg-light-grey h-1.5 overflow-hidden">
                <div
                  className={`h-full transition-all duration-300 ${
                    isFreeShipping ? 'bg-success' : 'bg-burgundy'
                  }`}
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 px-4">
                  <div className="w-16 h-16 rounded-full bg-ivory flex items-center justify-center mb-4 text-warm-grey">
                    <ShoppingBag size={28} />
                  </div>
                  <h4 className="font-display text-lg font-semibold text-charcoal mb-1">
                    Your bag is empty
                  </h4>
                  <p className="text-xs text-warm-grey max-w-xs mb-6">
                    Discover our new arrivals and curated accessories to elevate your wardrobe.
                  </p>
                  <Button
                    onClick={() => {
                      closeDrawer();
                      navigate('/shop');
                    }}
                    variant="primary"
                    size="md"
                  >
                    Start Exploring
                  </Button>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={item.itemKey}
                    className="flex gap-4 pb-4 border-b border-light-grey last:border-b-0"
                  >
                    <Link
                      to={`/product/${item.slug}`}
                      onClick={closeDrawer}
                      className="w-20 h-24 bg-ivory shrink-0 overflow-hidden block"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                      />
                    </Link>

                    <div className="flex-1 flex flex-col justify-between min-w-0">
                      <div>
                        <div className="flex justify-between items-start gap-2">
                          <Link
                            to={`/product/${item.slug}`}
                            onClick={closeDrawer}
                            className="font-medium text-sm text-charcoal hover:text-burgundy transition-colors truncate block"
                          >
                            {item.name}
                          </Link>
                          <button
                            onClick={() => removeFromCart(item.itemKey)}
                            className="text-mid-grey hover:text-error transition-colors p-1"
                            aria-label="Remove item"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>

                        <div className="flex items-center gap-2 mt-1 text-xs text-warm-grey">
                          {item.selectedColor && (
                            <span className="bg-ivory px-2 py-0.5 border border-light-grey">
                              {item.selectedColor}
                            </span>
                          )}
                          {item.selectedSize && (
                            <span className="bg-ivory px-2 py-0.5 border border-light-grey">
                              Size {item.selectedSize}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        {/* Quantity Controls */}
                        <div className="flex items-center border border-light-grey bg-white">
                          <button
                            onClick={() => updateQuantity(item.itemKey, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            className="p-1.5 text-charcoal hover:bg-ivory disabled:opacity-30 transition-colors cursor-pointer"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={13} />
                          </button>
                          <span className="px-2.5 text-xs font-semibold text-charcoal">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.itemKey, item.quantity + 1)}
                            disabled={item.quantity >= 10}
                            className="p-1.5 text-charcoal hover:bg-ivory disabled:opacity-30 transition-colors cursor-pointer"
                            aria-label="Increase quantity"
                          >
                            <Plus size={13} />
                          </button>
                        </div>

                        <div className="text-right">
                          <span className="text-sm font-semibold text-charcoal">
                            {formatPrice(item.price * item.quantity)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary */}
            {items.length > 0 && (
              <div className="p-5 bg-ivory/60 border-t border-light-grey space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-warm-grey uppercase tracking-wider text-xs">Subtotal</span>
                  <span className="font-semibold text-base text-charcoal">{formatPrice(subtotal)}</span>
                </div>
                <p className="text-[11px] text-warm-grey">
                  Taxes, shipping, and discount coupons calculated at checkout.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <Link
                    to="/cart"
                    onClick={closeDrawer}
                    className="w-full text-center py-3 text-xs tracking-widest uppercase font-semibold border border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-all flex items-center justify-center"
                  >
                    View Bag
                  </Link>
                  <Button
                    onClick={handleCheckoutClick}
                    variant="burgundy"
                    size="md"
                    className="w-full"
                  >
                    Checkout <ArrowRight size={14} />
                  </Button>
                </div>

                <div className="flex items-center justify-center gap-2 pt-2 text-[11px] text-warm-grey">
                  <ShieldCheck size={14} className="text-success" />
                  <span>Encrypted 256-bit Secure Checkout</span>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
