import ProductCard from './ProductCard';
import { PackageOpen } from 'lucide-react';
import Button from '../common/Button';

const ProductGrid = ({ products = [], columns = 4, onClearFilters }) => {
  if (products.length === 0) {
    return (
      <div className="py-16 px-4 text-center bg-white border border-light-grey">
        <div className="w-16 h-16 rounded-full bg-ivory text-warm-grey flex items-center justify-center mx-auto mb-4">
          <PackageOpen size={30} />
        </div>
        <h3 className="font-display text-xl font-semibold text-charcoal mb-2">
          No Products Match Your Criteria
        </h3>
        <p className="text-xs sm:text-sm text-warm-grey max-w-md mx-auto mb-6">
          Try expanding your price range, clearing specific filters, or searching with alternative keywords.
        </p>
        {onClearFilters && (
          <Button onClick={onClearFilters} variant="primary" size="md">
            Reset All Filters
          </Button>
        )}
      </div>
    );
  }

  const gridColsClass = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
  }[columns] || 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4';

  return (
    <div className={`grid ${gridColsClass} gap-4 sm:gap-6`}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
