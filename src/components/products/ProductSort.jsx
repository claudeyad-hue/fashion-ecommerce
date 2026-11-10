import { ArrowUpDown } from 'lucide-react';

const sortOptions = [
  { value: 'featured', label: 'Featured Selection' },
  { value: 'newest', label: 'Newest Arrivals' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'popularity', label: 'Most Popular' },
  { value: 'rating', label: 'Customer Rating' },
];

const ProductSort = ({ sortBy, onSortChange }) => {
  return (
    <div className="flex items-center gap-2 text-xs">
      <span className="text-warm-grey uppercase tracking-wider hidden sm:inline flex items-center gap-1">
        <ArrowUpDown size={13} /> Sort By:
      </span>
      <select
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
        className="bg-white border border-light-grey text-charcoal px-3 py-2 text-xs font-medium focus:outline-none focus:border-burgundy cursor-pointer"
      >
        {sortOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProductSort;
