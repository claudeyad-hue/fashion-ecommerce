import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { useToast } from '../components/common/Toast';
import { formatPrice } from '../utils/formatters';
import Breadcrumbs from '../components/common/Breadcrumbs';
import Button from '../components/common/Button';
import { Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { addToast } = useToast();

  const handleMoveToCart = (product) => {
    const defaultColor = product.availableColors?.[0] || null;
    const defaultSize = product.availableSizes?.[0] || null;
    addToCart(product, 1, defaultColor, defaultSize);
    addToast(`Added "${product.name}" to your bag`, 'cart');
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="py-20 md:py-28 max-w-md mx-auto px-4 text-center">
        <div className="w-20 h-20 rounded-full bg-ivory text-warm-grey flex items-center justify-center mx-auto mb-6">
          <Heart size={32} />
        </div>
        <h1 className="font-display text-3xl font-bold text-near-black mb-3">
          Your Wishlist is Empty
        </h1>
        <p className="text-sm text-warm-grey mb-8 font-light leading-relaxed">
          Keep track of your favorite pieces and seasonal inspirations by clicking the heart icon on
          any product.
        </p>
        <Link to="/shop">
          <Button variant="burgundy" size="lg">
            Explore Collections <ArrowRight size={15} />
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Wishlist' }]} />

        {/* Page Header */}
        <div className="py-6 border-b border-light-grey mb-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-burgundy font-bold block mb-1">
              Curated Favorites
            </span>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-near-black">
              Saved Pieces ({wishlistItems.length})
            </h1>
          </div>
          <Link
            to="/shop"
            className="text-xs uppercase tracking-widest font-semibold text-charcoal hover:text-burgundy inline-flex items-center gap-1.5"
          >
            Add More Pieces <ArrowRight size={13} />
          </Link>
        </div>

        {/* Wishlist Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white border border-light-grey flex flex-col justify-between"
            >
              <div className="relative aspect-[3/4] bg-ivory overflow-hidden">
                <Link to={`/product/${item.slug}`} className="block w-full h-full">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>
                <button
                  onClick={() => {
                    removeFromWishlist(item.id);
                    addToast(`Removed "${item.name}" from wishlist`, 'info');
                  }}
                  className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 w-9 h-9 sm:w-8 sm:h-8 bg-white/95 hover:bg-white text-mid-grey hover:text-error rounded-full shadow-sm transition-colors cursor-pointer flex items-center justify-center"
                  aria-label="Remove from wishlist"
                >
                  <Trash2 size={15} />
                </button>
              </div>

              <div className="p-3 sm:p-4 space-y-2.5 sm:space-y-3">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-warm-grey">
                    {item.category?.replace('-', ' ')}
                  </p>
                  <Link
                    to={`/product/${item.slug}`}
                    className="font-display text-xs sm:text-sm font-semibold text-charcoal hover:text-burgundy block truncate"
                  >
                    {item.name}
                  </Link>
                  <p className="font-semibold text-xs sm:text-sm text-charcoal mt-1">
                    {formatPrice(item.price)}
                  </p>
                </div>

                <Button
                  onClick={() => handleMoveToCart(item)}
                  variant="burgundy"
                  size="sm"
                  className="w-full flex items-center justify-center gap-1.5 min-h-[38px] text-[11px]"
                >
                  <ShoppingBag size={13} /> Move to Bag
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
