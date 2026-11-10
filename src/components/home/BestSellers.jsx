import { Link } from 'react-router-dom';
import { ArrowRight, Flame } from 'lucide-react';
import ProductGrid from '../products/ProductGrid';
import { getBestSellers } from '../../data/products';

const BestSellers = () => {
  const bestSellers = getBestSellers().slice(0, 4);

  return (
    <section className="py-16 md:py-24 bg-white border-b border-light-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-amber-600 font-bold mb-2">
              <Flame size={14} /> Most Coveted
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-near-black">
              Best Sellers
            </h2>
            <p className="text-xs sm:text-sm text-warm-grey mt-1">
              Proven wardrobe icons cherished by our most discerning clients.
            </p>
          </div>
          <Link
            to="/shop?filter=best-sellers"
            className="text-xs uppercase tracking-widest font-semibold text-charcoal hover:text-burgundy inline-flex items-center gap-1.5 mt-3 md:mt-0 transition-colors"
          >
            Shop All Best Sellers <ArrowRight size={14} />
          </Link>
        </div>

        <ProductGrid products={bestSellers} columns={4} />
      </div>
    </section>
  );
};

export default BestSellers;
