import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import Button from '../common/Button';

const PromoBanner = () => {
  return (
    <section className="bg-burgundy text-white py-12 sm:py-16 border-y border-burgundy-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/15 text-amber-200 text-xs uppercase tracking-widest font-bold">
              <Clock size={13} /> Seasonal Welcome Offer
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              Enjoy 15% Off Your First Acquisition
            </h2>
            <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-light">
              Experience the distinction of LUXE craftsmanship. Enter promo code{' '}
              <span className="font-bold tracking-widest text-amber-200 bg-white/10 px-2 py-0.5">
                LUXE15
              </span>{' '}
              at checkout. Complimentary express shipping included on orders above ₹1,999.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Link to="/shop">
              <Button
                variant="primary"
                size="lg"
                className="bg-white text-charcoal hover:bg-ivory hover:text-charcoal"
              >
                Claim 15% Off <ArrowRight size={15} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
