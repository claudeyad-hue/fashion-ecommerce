import { categories } from '../../data/categories';
import { priceRanges } from '../../utils/filters';
import { X, SlidersHorizontal } from 'lucide-react';

const ProductFilters = ({
  filters,
  onFilterChange,
  onClearFilters,
  totalResults,
  isMobileDrawer = false,
  onCloseMobileDrawer,
}) => {
  const activeFiltersCount = [
    filters.category && filters.category !== 'all',
    filters.minPrice !== '' && filters.minPrice !== undefined,
    filters.maxPrice !== '' && filters.maxPrice !== undefined,
    filters.inStockOnly,
    filters.search,
    filters.flag,
  ].filter(Boolean).length;

  return (
    <div className={`space-y-6 ${isMobileDrawer ? 'p-6' : ''}`}>
      {/* Drawer Header for mobile */}
      {isMobileDrawer && (
        <div className="flex items-center justify-between pb-4 border-b border-light-grey">
          <div className="flex items-center gap-2">
            <SlidersHorizontal size={18} className="text-burgundy" />
            <h3 className="font-display text-lg font-semibold text-charcoal">
              Filter Products ({totalResults})
            </h3>
          </div>
          <button
            onClick={onCloseMobileDrawer}
            className="p-1.5 text-warm-grey hover:text-charcoal"
            aria-label="Close filters"
          >
            <X size={20} />
          </button>
        </div>
      )}

      {/* Active Filter Chips */}
      {activeFiltersCount > 0 && (
        <div className="bg-ivory p-3.5 border border-light-grey">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] uppercase tracking-wider font-bold text-charcoal">
              Active Filters ({activeFiltersCount})
            </span>
            <button
              onClick={onClearFilters}
              className="text-[11px] text-burgundy font-semibold hover:underline cursor-pointer"
            >
              Clear All
            </button>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {filters.category && filters.category !== 'all' && (
              <span className="inline-flex items-center gap-1 text-[11px] bg-white border border-light-grey px-2 py-0.5 text-charcoal">
                Category: {filters.category.replace('-', ' ')}
                <button
                  onClick={() => onFilterChange({ ...filters, category: 'all' })}
                  className="text-warm-grey hover:text-charcoal"
                >
                  <X size={12} />
                </button>
              </span>
            )}

            {(filters.minPrice || filters.maxPrice) && (
              <span className="inline-flex items-center gap-1 text-[11px] bg-white border border-light-grey px-2 py-0.5 text-charcoal">
                Price: ₹{filters.minPrice || 0} – ₹{filters.maxPrice || '∞'}
                <button
                  onClick={() => onFilterChange({ ...filters, minPrice: '', maxPrice: '' })}
                  className="text-warm-grey hover:text-charcoal"
                >
                  <X size={12} />
                </button>
              </span>
            )}

            {filters.inStockOnly && (
              <span className="inline-flex items-center gap-1 text-[11px] bg-white border border-light-grey px-2 py-0.5 text-charcoal">
                In Stock Only
                <button
                  onClick={() => onFilterChange({ ...filters, inStockOnly: false })}
                  className="text-warm-grey hover:text-charcoal"
                >
                  <X size={12} />
                </button>
              </span>
            )}

            {filters.search && (
              <span className="inline-flex items-center gap-1 text-[11px] bg-white border border-light-grey px-2 py-0.5 text-charcoal">
                "{filters.search}"
                <button
                  onClick={() => onFilterChange({ ...filters, search: '' })}
                  className="text-warm-grey hover:text-charcoal"
                >
                  <X size={12} />
                </button>
              </span>
            )}

            {filters.flag && (
              <span className="inline-flex items-center gap-1 text-[11px] bg-white border border-light-grey px-2 py-0.5 text-charcoal capitalize">
                {filters.flag.replace('-', ' ')}
                <button
                  onClick={() => onFilterChange({ ...filters, flag: '' })}
                  className="text-warm-grey hover:text-charcoal"
                >
                  <X size={12} />
                </button>
              </span>
            )}
          </div>
        </div>
      )}

      {/* Category Filter */}
      <div className="border-b border-light-grey pb-5">
        <h4 className="text-xs uppercase tracking-widest font-semibold text-charcoal mb-3">
          Categories
        </h4>
        <div className="space-y-1.5">
          <label className="flex items-center justify-between text-xs text-charcoal hover:text-burgundy cursor-pointer py-1">
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="category"
                checked={!filters.category || filters.category === 'all'}
                onChange={() => onFilterChange({ ...filters, category: 'all' })}
                className="accent-burgundy"
              />
              <span className={!filters.category || filters.category === 'all' ? 'font-bold' : ''}>
                All Products
              </span>
            </div>
            <span className="text-[11px] text-warm-grey">41</span>
          </label>

          {categories.map((cat) => (
            <label
              key={cat.slug}
              className="flex items-center justify-between text-xs text-charcoal hover:text-burgundy cursor-pointer py-1"
            >
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="category"
                  checked={filters.category === cat.slug}
                  onChange={() => onFilterChange({ ...filters, category: cat.slug })}
                  className="accent-burgundy"
                />
                <span className={filters.category === cat.slug ? 'font-bold text-burgundy' : ''}>
                  {cat.name}
                </span>
              </div>
              <span className="text-[11px] text-warm-grey">{cat.count}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Presets */}
      <div className="border-b border-light-grey pb-5">
        <h4 className="text-xs uppercase tracking-widest font-semibold text-charcoal mb-3">
          Price Range
        </h4>
        <div className="space-y-1.5">
          {priceRanges.map((range, idx) => {
            const isSelected =
              filters.minPrice === range.min &&
              filters.maxPrice === range.max;
            return (
              <label
                key={idx}
                className="flex items-center gap-2 text-xs text-charcoal hover:text-burgundy cursor-pointer py-1"
              >
                <input
                  type="radio"
                  name="priceRange"
                  checked={isSelected}
                  onChange={() =>
                    onFilterChange({
                      ...filters,
                      minPrice: range.min,
                      maxPrice: range.max,
                    })
                  }
                  className="accent-burgundy"
                />
                <span className={isSelected ? 'font-bold text-burgundy' : ''}>
                  {range.label}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Availability */}
      <div className="border-b border-light-grey pb-5">
        <h4 className="text-xs uppercase tracking-widest font-semibold text-charcoal mb-3">
          Availability
        </h4>
        <label className="flex items-center gap-2 text-xs text-charcoal cursor-pointer py-1">
          <input
            type="checkbox"
            checked={!!filters.inStockOnly}
            onChange={(e) =>
              onFilterChange({ ...filters, inStockOnly: e.target.checked })
            }
            className="w-4 h-4 accent-burgundy cursor-pointer"
          />
          <span>In Stock items only</span>
        </label>
      </div>

      {isMobileDrawer && (
        <button
          onClick={onCloseMobileDrawer}
          className="w-full py-3 bg-burgundy text-white text-xs uppercase tracking-widest font-semibold"
        >
          View Results ({totalResults})
        </button>
      )}
    </div>
  );
};

export default ProductFilters;
