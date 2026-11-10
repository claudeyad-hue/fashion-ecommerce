import { useState } from 'react';
import { formatPrice } from '../../utils/formatters';
import { ShieldCheck, Tag, ArrowRight, Check, Truck } from 'lucide-react';
import Button from '../common/Button';

const CartSummary = ({
  subtotal,
  totalSavings,
  isFreeShipping,
  shippingCost,
  finalTotal,
  freeShippingThreshold,
  onCheckout,
}) => {
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponError, setCouponError] = useState('');

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    const clean = couponCode.trim().toUpperCase();
    if (clean === 'LUXE15') {
      setAppliedCoupon({ code: 'LUXE15', discountPercent: 15 });
      setCouponError('');
    } else if (clean === 'FREESHIP') {
      setAppliedCoupon({ code: 'FREESHIP', discountPercent: 0, freeShipping: true });
      setCouponError('');
    } else {
      setCouponError('Invalid promo code. Try "LUXE15"');
    }
  };

  const couponDiscountAmount = appliedCoupon
    ? Math.round((subtotal * (appliedCoupon.discountPercent || 0)) / 100)
    : 0;

  const effectiveShipping = appliedCoupon?.freeShipping ? 0 : shippingCost;
  const grandTotal = Math.max(0, finalTotal - couponDiscountAmount - (appliedCoupon?.freeShipping ? shippingCost : 0));

  return (
    <div className="bg-white border border-light-grey p-6 lg:p-8 space-y-6">
      <h3 className="font-display text-xl font-semibold text-charcoal border-b border-light-grey pb-4">
        Order Summary
      </h3>

      {/* Free Shipping Alert */}
      <div className="p-3.5 bg-ivory border border-light-grey text-xs flex items-center gap-2">
        <Truck size={16} className="text-burgundy shrink-0" />
        {isFreeShipping ? (
          <span className="text-success font-medium">
            You qualify for <strong>Complimentary Express Shipping</strong>!
          </span>
        ) : (
          <span className="text-warm-grey">
            Add <strong>{formatPrice(freeShippingThreshold - subtotal)}</strong> more to unlock Free
            Shipping.
          </span>
        )}
      </div>

      {/* Breakdown */}
      <div className="space-y-3 text-xs sm:text-sm">
        <div className="flex justify-between text-warm-grey">
          <span>Items Subtotal</span>
          <span className="text-charcoal font-medium">{formatPrice(subtotal)}</span>
        </div>

        {totalSavings > 0 && (
          <div className="flex justify-between text-success">
            <span>Catalogue Discount</span>
            <span>-{formatPrice(totalSavings)}</span>
          </div>
        )}

        {appliedCoupon && (
          <div className="flex justify-between text-burgundy font-medium">
            <span className="flex items-center gap-1">
              <Tag size={13} /> Code {appliedCoupon.code} applied
            </span>
            <span>-{formatPrice(couponDiscountAmount)}</span>
          </div>
        )}

        <div className="flex justify-between text-warm-grey">
          <span>Estimated Shipping</span>
          <span>
            {effectiveShipping === 0 ? (
              <span className="text-success font-semibold uppercase">Free</span>
            ) : (
              formatPrice(effectiveShipping)
            )}
          </span>
        </div>

        <div className="border-t border-light-grey pt-3 flex justify-between items-baseline">
          <span className="font-semibold text-base text-charcoal uppercase tracking-wider">
            Estimated Total
          </span>
          <span className="font-display text-2xl font-bold text-charcoal">
            {formatPrice(grandTotal)}
          </span>
        </div>
        <p className="text-[11px] text-warm-grey">Includes GST and all applicable local duties.</p>
      </div>

      {/* Promo Code Input */}
      <div className="border-t border-light-grey pt-4">
        <form onSubmit={handleApplyCoupon} className="space-y-2">
          <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal">
            Promotional Code
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              placeholder="e.g. LUXE15"
              className="flex-1 bg-ivory border border-light-grey px-3 py-2 text-xs uppercase tracking-wider focus:outline-none focus:border-burgundy"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-charcoal text-white hover:bg-near-black text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer"
            >
              Apply
            </button>
          </div>
          {couponError && <p className="text-[11px] text-error">{couponError}</p>}
          {appliedCoupon && (
            <p className="text-[11px] text-success flex items-center gap-1">
              <Check size={12} /> Coupon "{appliedCoupon.code}" active!
            </p>
          )}
        </form>
      </div>

      {/* Checkout CTA */}
      <Button
        onClick={onCheckout}
        variant="burgundy"
        size="lg"
        className="w-full text-center"
      >
        Proceed to Secure Checkout <ArrowRight size={16} />
      </Button>

      {/* Trust Badges */}
      <div className="pt-2 border-t border-light-grey space-y-2 text-[11px] text-warm-grey">
        <div className="flex items-center gap-2">
          <ShieldCheck size={14} className="text-success shrink-0" />
          <span>Guaranteed Safe & Secure Checkout</span>
        </div>
        <p>Accepted: Visa, Mastercard, American Express, UPI, NetBanking, Apple Pay</p>
      </div>
    </div>
  );
};

export default CartSummary;
