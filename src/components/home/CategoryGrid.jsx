import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories } from '../../data/categories';

const CategoryGrid = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-light-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest text-burgundy font-bold block mb-2">
              Curated Universes
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-near-black">
              Shop by Category
            </h2>
          </div>
          <Link
            to="/shop"
            className="text-xs uppercase tracking-widest font-semibold text-charcoal hover:text-burgundy inline-flex items-center gap-1.5 mt-3 md:mt-0 transition-colors"
          >
            Explore All 8 Categories <ArrowRight size={14} />
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/category/${cat.slug}`}
              className="group relative flex flex-col overflow-hidden bg-ivory border border-light-grey hover:border-charcoal transition-all duration-300"
            >
              <div className="aspect-[4/5] w-full overflow-hidden bg-cream">
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Overlay Label */}
              <div className="p-4 bg-white border-t border-light-grey flex items-center justify-between">
                <div>
                  <h3 className="font-display text-sm sm:text-base font-semibold text-charcoal group-hover:text-burgundy transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-[11px] text-warm-grey">
                    {cat.count} curated items
                  </p>
                </div>
                <div className="w-7 h-7 rounded-full bg-ivory group-hover:bg-burgundy group-hover:text-white flex items-center justify-center transition-colors">
                  <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
