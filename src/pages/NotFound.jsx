import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import { Home, ShoppingBag } from 'lucide-react';
import { categories } from '../data/categories';

const NotFound = () => {
  return (
    <div className="py-24 md:py-32 max-w-2xl mx-auto px-4 text-center">
      <span className="text-xs uppercase tracking-widest text-burgundy font-bold block mb-2">
        Error 404 — Page Unavailable
      </span>
      <h1 className="font-display text-4xl sm:text-6xl font-bold text-near-black mb-4">
        Lost in the Atelier
      </h1>
      <p className="text-sm text-warm-grey max-w-md mx-auto mb-8 font-light leading-relaxed">
        The destination you requested has either moved or been retired from our current season. Let us
        guide you back to curated discovery.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
        <Link to="/">
          <Button variant="primary" size="md">
            <Home size={15} /> Return Home
          </Button>
        </Link>
        <Link to="/shop">
          <Button variant="burgundy" size="md">
            <ShoppingBag size={15} /> Explore All Products
          </Button>
        </Link>
      </div>

      <div className="pt-8 border-t border-light-grey">
        <p className="text-xs uppercase tracking-widest text-warm-grey font-semibold mb-4">
          Popular Departments
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {categories.slice(0, 5).map((cat) => (
            <Link
              key={cat.slug}
              to={`/category/${cat.slug}`}
              className="px-3.5 py-1.5 text-xs bg-ivory border border-light-grey hover:border-charcoal text-charcoal hover:text-burgundy transition-all"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotFound;
