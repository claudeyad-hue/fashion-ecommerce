import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import { filterProducts, sortProducts } from '../utils/filters';
import ProductGrid from '../components/products/ProductGrid';
import ProductFilters from '../components/products/ProductFilters';
import ProductSort from '../components/products/ProductSort';
import Breadcrumbs from '../components/common/Breadcrumbs';
import { SlidersHorizontal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Initialize filters from URL query parameters
  const [filters, setFilters] = useState(() => ({
    category: searchParams.get('category') || 'all',
    search: searchParams.get('search') || '',
    flag: searchParams.get('filter') || '',
    minPrice: '',
    maxPrice: '',
    inStockOnly: false,
  }));

  const [sortBy, setSortBy] = useState('featured');

  // Sync URL search params whenever URL changes
  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      category: searchParams.get('category') || 'all',
      search: searchParams.get('search') || '',
      flag: searchParams.get('filter') || '',
    }));
  }, [searchParams]);

  // Handle filter changes
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    // Update URL if category or search changes
    const params = new URLSearchParams();
    if (newFilters.category && newFilters.category !== 'all') {
      params.set('category', newFilters.category);
    }
    if (newFilters.search) {
      params.set('search', newFilters.search);
    }
    if (newFilters.flag) {
      params.set('filter', newFilters.flag);
    }
    setSearchParams(params);
  };

  const handleClearFilters = () => {
    setFilters({
      category: 'all',
      search: '',
      flag: '',
      minPrice: '',
      maxPrice: '',
      inStockOnly: false,
    });
    setSearchParams({});
  };

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    const list = filterProducts(products, filters);
    return sortProducts(list, sortBy);
  }, [filters, sortBy]);

  const activeFiltersCount = [
    filters.category && filters.category !== 'all',
    filters.minPrice !== '' && filters.minPrice !== undefined,
    filters.maxPrice !== '' && filters.maxPrice !== undefined,
    filters.inStockOnly,
    filters.search,
    filters.flag,
  ].filter(Boolean).length;

  return (
    <div className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Shop All Products' }]} />

        {/* Title Header */}
        <div className="py-6 border-b border-light-grey mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-burgundy font-bold block mb-1">
              Complete Atelier Catalog
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-near-black">
              {filters.search
                ? `Search: "${filters.search}"`
                : filters.category && filters.category !== 'all'
                ? `${filters.category.replace('-', ' ').toUpperCase()} COLLECTION`
                : filters.flag === 'new-arrivals'
                ? 'NEW ARRIVALS'
                : filters.flag === 'best-sellers'
                ? 'BEST SELLERS'
                : 'ALL PRODUCTS'}
            </h1>
            <p className="text-xs sm:text-sm text-warm-grey mt-2">
              Showing {filteredProducts.length} of {products.length} handcrafted items
            </p>
          </div>

          {/* Sort and Mobile Filter Toggle */}
          <div className="flex items-center justify-between sm:justify-start gap-2 sm:gap-3 w-full sm:w-auto">
            <button
              onClick={() => setIsMobileFiltersOpen(true)}
              className="lg:hidden px-3.5 sm:px-4 py-2 bg-ivory border border-light-grey text-xs uppercase tracking-wider font-semibold text-charcoal flex items-center gap-2 cursor-pointer min-h-[42px]"
            >
              <SlidersHorizontal size={14} className="text-burgundy" />
              <span>Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}</span>
            </button>

            <ProductSort sortBy={sortBy} onSortChange={setSortBy} />
          </div>
        </div>

        {/* Layout: Sidebar + Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 items-start">
          {/* Desktop Filters Sidebar */}
          <aside className="hidden lg:block lg:col-span-1 sticky top-24 bg-white p-6 border border-light-grey">
            <ProductFilters
              filters={filters}
              onFilterChange={handleFilterChange}
              onClearFilters={handleClearFilters}
              totalResults={filteredProducts.length}
            />
          </aside>

          {/* Main Product Grid */}
          <div className="lg:col-span-3">
            <ProductGrid
              products={filteredProducts}
              columns={3}
              onClearFilters={handleClearFilters}
            />
          </div>
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      <AnimatePresence>
        {isMobileFiltersOpen && (
          <div className="fixed inset-0 z-[115] lg:hidden flex justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileFiltersOpen(false)}
              className="fixed inset-0 bg-near-black/60 backdrop-blur-xs cursor-pointer"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="relative z-10 w-full max-w-sm bg-white h-full h-dvh overflow-y-auto scroll-touch shadow-2xl pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]"
            >
              <ProductFilters
                filters={filters}
                onFilterChange={handleFilterChange}
                onClearFilters={handleClearFilters}
                totalResults={filteredProducts.length}
                isMobileDrawer={true}
                onCloseMobileDrawer={() => setIsMobileFiltersOpen(false)}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Shop;
