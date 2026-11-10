import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import ProductGrid from '../products/ProductGrid';
import { getTrendingProducts } from '../../data/products';

const TrendingSection = () => {
  const trendingProducts = getTrendingProducts().slice(0, 4);

  return (
    <section className="py-16 md:py-24 bg-ivory border-b border-light-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-burgundy font-bold mb-2">
              <Sparkles size={14} /> Runway & Streetstyle
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-near-black">
              Trending Right Now
            </h2>
            <p className="text-xs sm:text-sm text-warm-grey mt-1">
              The viral styles setting trends across global fashion capitals this week.
            </p>
          </div>
          <Link
            to="/shop?filter=trending"
            className="text-xs uppercase tracking-widest font-semibold text-charcoal hover:text-burgundy inline-flex items-center gap-1.5 mt-3 md:mt-0 transition-colors"
          >
            View Trending Edit <ArrowRight size={14} />
          </Link>
        </div>

        <ProductGrid products={trendingProducts} columns={4} />
      </div>
    </section>
  );
};

export default TrendingSection;
