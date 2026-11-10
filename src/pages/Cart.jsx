import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useToast } from '../components/common/Toast';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';
import Breadcrumbs from '../components/common/Breadcrumbs';
import Button from '../components/common/Button';
import { ShoppingBag, ArrowLeft, Trash2, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Cart = () => {
  const {
    items,
    updateQuantity,
    removeFromCart,
    clearCart,
    cartCount,
    subtotal,
    originalSubtotal,
    totalSavings,
    isFreeShipping,
    shippingCost,
    finalTotal,
    freeShippingThreshold,
  } = useCart();

  const { addToast } = useToast();
  const navigate = useNavigate();
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const handleCheckout = () => {
    setIsCheckoutModalOpen(true);
  };

  const handleConfirmOrder = () => {
    setIsOrderPlaced(true);
    setTimeout(() => {
      clearCart();
      addToast('Order successfully confirmed! Thank you for shopping with LUXE.', 'success');
    }, 1200);
  };

  if (items.length === 0 && !isOrderPlaced) {
    return (
      <div className="py-20 md:py-28 max-w-xl mx-auto px-4 text-center">
        <div className="w-20 h-20 rounded-full bg-ivory text-warm-grey flex items-center justify-center mx-auto mb-6">
          <ShoppingBag size={34} />
        </div>
        <h1 className="font-display text-3xl font-bold text-near-black mb-3">
          Your Shopping Bag is Empty
        </h1>
        <p className="text-sm text-warm-grey mb-8 font-light leading-relaxed">
          Looks like you haven’t added any items yet. Explore our curated collections of statement
          jewelry, Italian leather bags, and tailored denim.
        </p>
        <Link to="/shop">
          <Button variant="burgundy" size="lg">
            Discover Catalog <ShoppingBag size={15} />
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Shopping Bag' }]} />

        {/* Page Header */}
        <div className="py-6 border-b border-light-grey mb-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-burgundy font-bold block mb-1">
              Cart Review
            </span>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-near-black">
              Shopping Bag ({cartCount})
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/shop"
              className="text-xs uppercase tracking-widest font-semibold text-charcoal hover:text-burgundy inline-flex items-center gap-1.5"
            >
              <ArrowLeft size={13} /> Continue Shopping
            </Link>
            {items.length > 0 && (
              <button
                onClick={() => {
                  if (window.confirm('Are you sure you want to empty your cart?')) {
                    clearCart();
                    addToast('Cart cleared', 'info');
                  }
                }}
                className="text-xs text-mid-grey hover:text-error transition-colors flex items-center gap-1 cursor-pointer"
              >
                <Trash2 size={13} /> Clear Bag
              </button>
            )}
          </div>
        </div>

        {/* Cart Grid: Items on Left, Summary on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Cart Items List */}
          <div className="lg:col-span-8 bg-white border border-light-grey p-4 sm:p-6 lg:p-8">
            <div className="hidden sm:grid grid-cols-12 text-[11px] uppercase tracking-widest font-semibold text-warm-grey pb-4 border-b border-light-grey">
              <span className="col-span-6">Product Details</span>
              <span className="col-span-3 text-center">Quantity</span>
              <span className="col-span-3 text-right">Subtotal</span>
            </div>

            <div className="divide-y divide-light-grey">
              {items.map((item) => (
                <CartItem
                  key={item.itemKey}
                  item={item}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeFromCart}
                />
              ))}
            </div>

            <div className="pt-6 border-t border-light-grey flex justify-between items-center text-xs text-warm-grey">
              <span>Have a question about your order?</span>
              <Link to="/contact" className="text-burgundy hover:underline font-semibold">
                Contact Concierge
              </Link>
            </div>
          </div>

          {/* Cart Summary */}
          <div className="lg:col-span-4 sticky top-24">
            <CartSummary
              subtotal={subtotal}
              originalSubtotal={originalSubtotal}
              totalSavings={totalSavings}
              isFreeShipping={isFreeShipping}
              shippingCost={shippingCost}
              finalTotal={finalTotal}
              freeShippingThreshold={freeShippingThreshold}
              onCheckout={handleCheckout}
            />
          </div>
        </div>
      </div>

      {/* Simulated Checkout Modal */}
      <AnimatePresence>
        {isCheckoutModalOpen && (
          <div className="fixed inset-0 z-[160] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                if (!isOrderPlaced) setIsCheckoutModalOpen(false);
              }}
              className="fixed inset-0 bg-near-black/70 backdrop-blur-xs cursor-pointer"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative z-10 w-full max-w-lg bg-white border border-light-grey shadow-2xl p-5 sm:p-8 max-h-[90vh] overflow-y-auto scroll-touch"
            >
              {!isOrderPlaced ? (
                <div className="space-y-5">
                  <div className="border-b border-light-grey pb-3">
                    <span className="text-[10px] uppercase tracking-widest text-burgundy font-bold">
                      Express Checkout Prototype
                    </span>
                    <h3 className="font-display text-2xl font-bold text-charcoal">
                      Confirm Demonstration Order
                    </h3>
                  </div>

                  <div className="bg-ivory p-4 border border-light-grey text-xs space-y-2">
                    <p className="font-semibold text-charcoal">Order Preview:</p>
                    <p className="text-warm-grey">Total Items: {cartCount}</p>
                    <p className="text-warm-grey">
                      Shipping to: 44 Heritage Road, Bandra West, Mumbai 400050
                    </p>
                    <p className="text-charcoal font-bold pt-1 border-t border-light-grey">
                      Final Payable: ₹{finalTotal.toLocaleString('en-IN')}
                    </p>
                  </div>

                  <p className="text-xs text-warm-grey leading-relaxed">
                    This is an e-commerce frontend engineering demonstration. Clicking "Place Order"
                    will simulate an authorized checkout confirmation and empty your cart.
                  </p>

                  <div className="flex gap-3 pt-2">
                    <Button
                      onClick={() => setIsCheckoutModalOpen(false)}
                      variant="outline"
                      size="md"
                      className="flex-1"
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={handleConfirmOrder}
                      variant="burgundy"
                      size="md"
                      className="flex-1"
                    >
                      Place Order
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-success flex items-center justify-center mx-auto">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-charcoal">
                    Order Confirmed!
                  </h3>
                  <p className="text-xs text-warm-grey max-w-xs mx-auto">
                    Order #LX-94829 has been processed. A receipt has been dispatched to your email address.
                  </p>
                  <Button
                    onClick={() => {
                      setIsCheckoutModalOpen(false);
                      setIsOrderPlaced(false);
                      navigate('/shop');
                    }}
                    variant="primary"
                    size="md"
                  >
                    Continue Shopping
                  </Button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Cart;
