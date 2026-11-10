import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCategoryBySlug, categories } from '../data/categories';
import { getProductsByCategory } from '../data/products';
import { sortProducts } from '../utils/filters';
import ProductGrid from '../components/products/ProductGrid';
import ProductSort from '../components/products/ProductSort';
import Breadcrumbs from '../components/common/Breadcrumbs';
import { ArrowLeft, SlidersHorizontal } from 'lucide-react';

const Category = () => {
  const { slug } = useParams();
  const category = getCategoryBySlug(slug);

  const [sortBy, setSortBy] = useState('featured');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');

  const rawProducts = useMemo(() => {
    if (!category) return [];
    return getProductsByCategory(category.slug);
  }, [category]);

  const filteredAndSortedProducts = useMemo(() => {
    let list = [...rawProducts];

    if (inStockOnly) {
      list = list.filter((p) => p.stockStatus !== 'out-of-stock');
    }

    if (selectedPriceRange === 'under-1500') {
      list = list.filter((p) => p.price < 1500);
    } else if (selectedPriceRange === '1500-3000') {
      list = list.filter((p) => p.price >= 1500 && p.price <= 3000);
    } else if (selectedPriceRange === 'over-3000') {
      list = list.filter((p) => p.price > 3000);
    }

    return sortProducts(list, sortBy);
  }, [rawProducts, inStockOnly, selectedPriceRange, sortBy]);

  if (!category) {
    return (
      <div className="py-20 text-center max-w-xl mx-auto px-4">
        <h2 className="font-display text-2xl font-bold mb-3">Category Not Found</h2>
        <p className="text-warm-grey text-sm mb-6">
          The category you are looking for does not exist or has been archived.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-white text-xs uppercase tracking-widest font-semibold"
        >
          <ArrowLeft size={14} /> Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Category Hero Banner */}
      <div className="relative bg-ivory border-b border-light-grey overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <Breadcrumbs
            items={[
              { label: 'Shop', href: '/shop' },
              { label: category.name },
            ]}
          />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mt-4">
            <div className="md:col-span-7 space-y-4">
              <span className="text-xs uppercase tracking-widest text-burgundy font-bold">
                Category Collection ({rawProducts.length} Styles)
              </span>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-near-black">
                {category.name}
              </h1>
              {category.tagline && (
                <p className="text-sm font-medium text-charcoal italic">
                  "{category.tagline}"
                </p>
              )}
              <p className="text-xs sm:text-sm text-warm-grey leading-relaxed max-w-xl font-light">
                {category.description}
              </p>
            </div>

            <div className="md:col-span-5 aspect-[16/9] md:aspect-[4/3] overflow-hidden border border-light-grey shadow-md">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Products & Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Controls Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-light-grey mb-8">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            {/* Price Filter Pills */}
            <span className="text-warm-grey uppercase font-semibold">Filter:</span>
            <button
              onClick={() => setSelectedPriceRange('all')}
              className={`px-3 py-1.5 border text-xs uppercase tracking-wider cursor-pointer ${
                selectedPriceRange === 'all'
                  ? 'bg-charcoal text-white border-charcoal'
                  : 'bg-white text-charcoal border-light-grey hover:border-charcoal'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedPriceRange('under-1500')}
              className={`px-3 py-1.5 border text-xs uppercase tracking-wider cursor-pointer ${
                selectedPriceRange === 'under-1500'
                  ? 'bg-charcoal text-white border-charcoal'
                  : 'bg-white text-charcoal border-light-grey hover:border-charcoal'
              }`}
            >
              Under ₹1,500
            </button>
            <button
              onClick={() => setSelectedPriceRange('1500-3000')}
              className={`px-3 py-1.5 border text-xs uppercase tracking-wider cursor-pointer ${
                selectedPriceRange === '1500-3000'
                  ? 'bg-charcoal text-white border-charcoal'
                  : 'bg-white text-charcoal border-light-grey hover:border-charcoal'
              }`}
            >
              ₹1,500 – ₹3,000
            </button>
            <button
              onClick={() => setSelectedPriceRange('over-3000')}
              className={`px-3 py-1.5 border text-xs uppercase tracking-wider cursor-pointer ${
                selectedPriceRange === 'over-3000'
                  ? 'bg-charcoal text-white border-charcoal'
                  : 'bg-white text-charcoal border-light-grey hover:border-charcoal'
              }`}
            >
              Over ₹3,000
            </button>

            {/* In stock toggle */}
            <label className="flex items-center gap-1.5 text-xs text-charcoal ml-2 cursor-pointer">
              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={(e) => setInStockOnly(e.target.checked)}
                className="accent-burgundy"
              />
              <span>In Stock Only</span>
            </label>
          </div>

          <ProductSort sortBy={sortBy} onSortChange={setSortBy} />
        </div>

        {/* Product Grid */}
        <ProductGrid
          products={filteredAndSortedProducts}
          columns={4}
          onClearFilters={() => {
            setSelectedPriceRange('all');
            setInStockOnly(false);
          }}
        />

        {/* Other Categories Navigation */}
        <div className="mt-20 pt-10 border-t border-light-grey">
          <h3 className="font-display text-xl font-semibold text-charcoal mb-6 text-center">
            Explore Other Collections
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories
              .filter((c) => c.slug !== category.slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  to={`/category/${c.slug}`}
                  className="px-4 py-2 bg-ivory border border-light-grey hover:border-charcoal text-xs uppercase tracking-wider font-semibold text-charcoal hover:text-burgundy transition-all"
                >
                  {c.name} ({c.count})
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
