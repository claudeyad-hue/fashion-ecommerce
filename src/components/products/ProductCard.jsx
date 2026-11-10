import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';
import { useToast } from '../common/Toast';
import { formatPrice, getDiscountPercent, getBadgeStyle } from '../../utils/formatters';
import StarRating from './StarRating';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { addToast } = useToast();
  const navigate = useNavigate();

  const isFavorited = isInWishlist(product.id);
  const discount = getDiscountPercent(product.price, product.originalPrice);

  const primaryImage = product.images?.[0] || 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80';
  const secondaryImage = product.images?.[1] || primaryImage;

  const handleWishlistClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
    addToast(
      isFavorited ? `Removed "${product.name}" from wishlist` : `Saved "${product.name}" to wishlist`,
      'wishlist'
    );
  };

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // If item requires size selection, direct to details page
    if (product.availableSizes && product.availableSizes.length > 0) {
      navigate(`/product/${product.slug}`);
      return;
    }

    const defaultColor = product.availableColors?.[0] || null;
    addToCart(product, 1, defaultColor, null);
    addToast(`Added "${product.name}" to bag!`, 'cart');
  };

  return (
    <div
      className="group flex flex-col h-full bg-white border border-light-grey/80 hover:border-charcoal/40 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Frame */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-ivory">
        <Link to={`/product/${product.slug}`} className="block w-full h-full">
          <img
            src={isHovered ? secondaryImage : primaryImage}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </Link>

        {/* Badges Overlay */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 items-start z-10 pointer-events-none">
          {product.badge && (
            <span
              className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 border ${getBadgeStyle(
                product.badge
              )}`}
            >
              {product.badge}
            </span>
          )}
          {discount > 0 && (
            <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 bg-burgundy text-white">
              -{discount}%
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={handleWishlistClick}
          aria-label={isFavorited ? 'Remove from wishlist' : 'Add to wishlist'}
          className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 w-9 h-9 sm:w-8 sm:h-8 rounded-full bg-white/95 backdrop-blur-xs flex items-center justify-center text-charcoal hover:text-burgundy hover:scale-110 active:scale-95 transition-all shadow-sm z-10 cursor-pointer"
        >
          <Heart
            size={16}
            className={isFavorited ? 'fill-burgundy text-burgundy' : 'text-charcoal'}
          />
        </button>

        {/* Quick Add Overlay on desktop hover */}
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 via-black/20 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-200 hidden sm:block">
          <button
            onClick={handleQuickAdd}
            className="w-full py-2.5 bg-white text-charcoal hover:bg-burgundy hover:text-white text-xs uppercase tracking-widest font-semibold transition-all flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
          >
            <ShoppingBag size={14} />
            <span>
              {product.availableSizes?.length > 0 ? 'Select Options' : 'Quick Add to Bag'}
            </span>
          </button>
        </div>
      </div>

      {/* Product Information */}
      <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-[11px] text-warm-grey uppercase tracking-wider mb-1">
            <span>{product.category.replace('-', ' ')}</span>
            <StarRating rating={product.rating} reviewCount={product.reviewCount} size={11} />
          </div>

          <Link to={`/product/${product.slug}`} className="block group-hover:text-burgundy transition-colors">
            <h3 className="font-display text-sm sm:text-base font-semibold text-charcoal line-clamp-1">
              {product.name}
            </h3>
          </Link>

          {product.tagline && (
            <p className="text-xs text-warm-grey line-clamp-1 mt-0.5">{product.tagline}</p>
          )}

          {/* Color Preview Swatches */}
          {product.availableColors && product.availableColors.length > 0 && (
            <div className="flex items-center gap-1.5 mt-2.5">
              {product.availableColors.slice(0, 4).map((c, idx) => (
                <span
                  key={idx}
                  title={c.name}
                  className="w-2.5 h-2.5 rounded-full border border-charcoal/20"
                  style={{ backgroundColor: c.hex }}
                />
              ))}
              {product.availableColors.length > 4 && (
                <span className="text-[10px] text-warm-grey">
                  +{product.availableColors.length - 4}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Price & Mobile Add */}
        <div className="mt-3 pt-2.5 border-t border-light-grey/60 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-semibold text-sm sm:text-base text-charcoal">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-xs text-warm-grey line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Mobile visible action icon */}
          <button
            onClick={handleQuickAdd}
            className="sm:hidden w-9 h-9 flex items-center justify-center text-charcoal hover:text-burgundy bg-ivory border border-light-grey active:bg-burgundy active:text-white transition-colors"
            aria-label="Add to bag"
          >
            <ShoppingBag size={15} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
