import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getProductBySlug, products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useToast } from '../components/common/Toast';
import { useRecentlyViewed } from '../hooks/useRecentlyViewed';
import { formatPrice, getDiscountPercent, getBadgeStyle } from '../utils/formatters';
import ProductGallery from '../components/products/ProductGallery';
import ColorSelector from '../components/products/ColorSelector';
import SizeSelector from '../components/products/SizeSelector';
import QuantitySelector from '../components/products/QuantitySelector';
import StarRating from '../components/products/StarRating';
import ProductCard from '../components/products/ProductCard';
import Breadcrumbs from '../components/common/Breadcrumbs';
import Button from '../components/common/Button';
import {
  Heart,
  ShoppingBag,
  Truck,
  RotateCcw,
  ShieldCheck,
  Check,
  AlertCircle,
} from 'lucide-react';

const ProductDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = getProductBySlug(slug);

  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToast } = useToast();
  const { recentlyViewed, addToRecentlyViewed } = useRecentlyViewed();

  // Selected state
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [variantError, setVariantError] = useState('');
  const [pincode, setPincode] = useState('');
  const [pincodeStatus, setPincodeStatus] = useState(null);
  const [activeTab, setActiveTab] = useState('details');

  // Track product in recently viewed and reset state on slug change
  useEffect(() => {
    if (product) {
      addToRecentlyViewed(product);
      setSelectedColor(product.availableColors?.[0] || null);
      setSelectedSize(null);
      setQuantity(1);
      setVariantError('');
      setPincodeStatus(null);
    }
  }, [slug]);

  if (!product) {
    return (
      <div className="py-24 text-center max-w-md mx-auto px-4">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-3">Product Not Found</h2>
        <p className="text-sm text-warm-grey mb-6">
          The requested item may be sold out or no longer part of our current edition.
        </p>
        <Link to="/shop">
          <Button variant="primary" size="md">
            Return to Shop
          </Button>
        </Link>
      </div>
    );
  }

  const isFavorited = isInWishlist(product.id);
  const discount = getDiscountPercent(product.price, product.originalPrice);

  // Validate variant selections
  const validateVariants = () => {
    if (product.availableSizes && product.availableSizes.length > 0 && !selectedSize) {
      setVariantError('Please select a size to proceed.');
      return false;
    }
    setVariantError('');
    return true;
  };

  const handleAddToCart = () => {
    if (!validateVariants()) return;
    addToCart(product, quantity, selectedColor, selectedSize);
    addToast(`Added ${quantity} × "${product.name}" to your bag`, 'cart');
  };

  const handleBuyNow = () => {
    if (!validateVariants()) return;
    addToCart(product, quantity, selectedColor, selectedSize);
    navigate('/cart');
  };

  const handlePincodeCheck = (e) => {
    e.preventDefault();
    if (pincode.trim().length === 6 && /^\d+$/.test(pincode.trim())) {
      setPincodeStatus({
        success: true,
        message: 'Delivery available in 2-3 business days. Free shipping eligible.',
      });
    } else {
      setPincodeStatus({
        success: false,
        message: 'Please enter a valid 6-digit postal pincode.',
      });
    }
  };

  // Related products from same category
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Shop', href: '/shop' },
            {
              label: product.category.replace('-', ' '),
              href: `/category/${product.category}`,
            },
            { label: product.name },
          ]}
        />

        {/* Product Hero Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pt-4">
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-7">
            <ProductGallery images={product.images} productName={product.name} />
          </div>

          {/* Right Column: Information & Actions */}
          <div className="lg:col-span-5 space-y-6">
            {/* Category & Badge */}
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest font-semibold text-burgundy">
                {product.category.replace('-', ' ')}
              </span>
              {product.badge && (
                <span
                  className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 border ${getBadgeStyle(
                    product.badge
                  )}`}
                >
                  {product.badge}
                </span>
              )}
            </div>

            {/* Title & Tagline */}
            <div>
              <h1 className="font-display text-2xl sm:text-3xl font-bold text-near-black">
                {product.name}
              </h1>
              {product.tagline && (
                <p className="text-xs sm:text-sm text-warm-grey mt-1 font-light italic">
                  {product.tagline}
                </p>
              )}
            </div>

            {/* Ratings Summary */}
            <div className="flex items-center gap-3 pb-4 border-b border-light-grey">
              <StarRating rating={product.rating} reviewCount={product.reviewCount} size={15} />
              <span className="text-light-grey">|</span>
              <span className="text-xs text-success font-medium flex items-center gap-1">
                <Check size={13} /> {product.stockStatus === 'low-stock' ? 'Only a few left!' : 'In Stock & Ready to Ship'}
              </span>
            </div>

            {/* Pricing */}
            <div className="flex items-baseline gap-3">
              <span className="font-display text-2xl sm:text-3xl font-bold text-charcoal">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && product.originalPrice > product.price && (
                <>
                  <span className="text-base text-warm-grey line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-burgundy bg-burgundy/10 px-2 py-0.5">
                    Save {discount}%
                  </span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-warm-grey leading-relaxed">
              {product.description}
            </p>

            {/* Color Swatches */}
            {product.availableColors && product.availableColors.length > 0 && (
              <div className="pt-2">
                <ColorSelector
                  colors={product.availableColors}
                  selectedColor={selectedColor}
                  onSelectColor={(c) => {
                    setSelectedColor(c);
                    setVariantError('');
                  }}
                />
              </div>
            )}

            {/* Size Selector */}
            {product.availableSizes && product.availableSizes.length > 0 && (
              <div className="pt-2">
                <SizeSelector
                  sizes={product.availableSizes}
                  selectedSize={selectedSize}
                  onSelectSize={(s) => {
                    setSelectedSize(s);
                    setVariantError('');
                  }}
                  onOpenSizeGuide={() => setActiveTab('details')}
                />
              </div>
            )}

            {/* Variant error feedback */}
            {variantError && (
              <div className="p-3 bg-red-50 border border-error/30 text-xs text-error flex items-center gap-2">
                <AlertCircle size={15} className="shrink-0" />
                <span>{variantError}</span>
              </div>
            )}

            {/* Quantity & CTA Buttons */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-4">
                <span className="text-xs uppercase tracking-wider font-semibold text-charcoal">
                  Quantity:
                </span>
                <QuantitySelector quantity={quantity} onQuantityChange={setQuantity} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <Button
                  onClick={handleAddToCart}
                  variant="burgundy"
                  size="lg"
                  className="w-full flex items-center justify-center gap-2"
                >
                  <ShoppingBag size={16} /> Add to Bag
                </Button>
                <Button
                  onClick={handleBuyNow}
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  Buy Now
                </Button>
              </div>

              {/* Wishlist Button */}
              <button
                type="button"
                onClick={() => {
                  toggleWishlist(product);
                  addToast(
                    isFavorited
                      ? `Removed "${product.name}" from wishlist`
                      : `Saved "${product.name}" to wishlist`,
                    'wishlist'
                  );
                }}
                className={`w-full py-2.5 border text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  isFavorited
                    ? 'border-burgundy text-burgundy bg-burgundy/5'
                    : 'border-light-grey text-charcoal hover:border-charcoal bg-white'
                }`}
              >
                <Heart
                  size={15}
                  className={isFavorited ? 'fill-burgundy text-burgundy' : 'text-charcoal'}
                />
                <span>{isFavorited ? 'In Your Wishlist' : 'Add to Wishlist'}</span>
              </button>
            </div>

            {/* Postal Delivery Checker */}
            <div className="p-4 bg-ivory border border-light-grey space-y-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-charcoal flex items-center gap-1.5">
                <Truck size={14} className="text-burgundy" /> Delivery Options
              </span>
              <form onSubmit={handlePincodeCheck} className="flex gap-2">
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={6}
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  placeholder="Enter 6-digit Pincode"
                  className="flex-1 bg-white border border-light-grey px-3 py-2 text-xs sm:text-sm text-charcoal focus:outline-none focus:border-burgundy min-h-[42px]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-charcoal text-white text-xs uppercase tracking-wider font-semibold hover:bg-near-black min-h-[42px] cursor-pointer"
                >
                  Check
                </button>
              </form>
              {pincodeStatus && (
                <p
                  className={`text-[11px] ${
                    pincodeStatus.success ? 'text-success' : 'text-error'
                  }`}
                >
                  {pincodeStatus.message}
                </p>
              )}
            </div>

            {/* Assurance Pillars */}
            <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-warm-grey">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-success shrink-0" />
                <span>Certified Hypoallergenic</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw size={16} className="text-burgundy shrink-0" />
                <span>14-Day Complimentary Returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs: Details, Specifications, Reviews */}
        <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-light-grey">
          <div className="flex items-center overflow-x-auto scroll-touch justify-start sm:justify-center border-b border-light-grey gap-4 sm:gap-12 mb-8 whitespace-nowrap px-1">
            <button
              onClick={() => setActiveTab('details')}
              className={`pb-3.5 sm:pb-4 text-xs sm:text-sm uppercase tracking-widest font-semibold transition-all relative cursor-pointer shrink-0 ${
                activeTab === 'details' ? 'text-burgundy font-bold' : 'text-warm-grey hover:text-charcoal'
              }`}
            >
              Specifications & Care
              {activeTab === 'details' && (
                <span className="absolute bottom-0 inset-x-0 h-0.5 bg-burgundy" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('reviews')}
              className={`pb-3.5 sm:pb-4 text-xs sm:text-sm uppercase tracking-widest font-semibold transition-all relative cursor-pointer shrink-0 ${
                activeTab === 'reviews' ? 'text-burgundy font-bold' : 'text-warm-grey hover:text-charcoal'
              }`}
            >
              Client Reviews ({product.reviewCount})
              {activeTab === 'reviews' && (
                <span className="absolute bottom-0 inset-x-0 h-0.5 bg-burgundy" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('shipping')}
              className={`pb-3.5 sm:pb-4 text-xs sm:text-sm uppercase tracking-widest font-semibold transition-all relative cursor-pointer shrink-0 ${
                activeTab === 'shipping' ? 'text-burgundy font-bold' : 'text-warm-grey hover:text-charcoal'
              }`}
            >
              Shipping & Returns
              {activeTab === 'shipping' && (
                <span className="absolute bottom-0 inset-x-0 h-0.5 bg-burgundy" />
              )}
            </button>
          </div>

          {/* Tab 1: Details */}
          {activeTab === 'details' && (
            <div className="max-w-3xl mx-auto space-y-4">
              <h3 className="font-display text-lg font-semibold text-charcoal">
                Artisanal Notes & Material Specifications
              </h3>
              {product.details && product.details.length > 0 ? (
                <ul className="space-y-2 text-xs sm:text-sm text-warm-grey">
                  {product.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-burgundy mt-2 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-xs text-warm-grey">
                  Crafted from premium hypoallergenic materials with anti-tarnish protective sealing.
                </p>
              )}

              <div className="p-4 bg-ivory border border-light-grey mt-6">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
                  Jewelry & Leather Care
                </h4>
                <p className="text-xs text-warm-grey leading-relaxed">
                  Store in the provided microfiber pouch away from direct moisture, perfumes, and chemical sprays.
                  Gently wipe with the complimentary polishing cloth after wearing.
                </p>
              </div>
            </div>
          )}

          {/* Tab 2: Reviews */}
          {activeTab === 'reviews' && (
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="flex flex-col sm:flex-row items-center justify-between p-6 bg-ivory border border-light-grey gap-4">
                <div className="text-center sm:text-left">
                  <span className="font-display text-4xl font-bold text-charcoal">
                    {product.rating.toFixed(1)}
                  </span>
                  <div className="mt-1">
                    <StarRating rating={product.rating} size={16} showText={false} />
                  </div>
                  <p className="text-xs text-warm-grey mt-1">Based on {product.reviewCount} verified client reviews</p>
                </div>
                <Button variant="outline" size="sm">
                  Write a Review
                </Button>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-white border border-light-grey space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-charcoal">Malini V. — Verified Buyer</span>
                    <span className="text-warm-grey">4 days ago</span>
                  </div>
                  <StarRating rating={5} size={12} showText={false} />
                  <p className="text-xs text-warm-grey leading-relaxed">
                    Exceeded my expectations. The finish is immaculate and looks identical to the campaign photographs.
                    Shipping was fast and the presentation box is worthy of gifting.
                  </p>
                </div>

                <div className="p-4 bg-white border border-light-grey space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-charcoal">Sunaina S. — Verified Buyer</span>
                    <span className="text-warm-grey">2 weeks ago</span>
                  </div>
                  <StarRating rating={5} size={12} showText={false} />
                  <p className="text-xs text-warm-grey leading-relaxed">
                    The weight and balance are so thoughtfully engineered. I have received compliments every single time
                    I've styled this out!
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Shipping */}
          {activeTab === 'shipping' && (
            <div className="max-w-3xl mx-auto space-y-4 text-xs sm:text-sm text-warm-grey leading-relaxed">
              <h3 className="font-display text-lg font-semibold text-charcoal">
                Domestic & International Fulfilment
              </h3>
              <p>
                All orders are dispatched from our Mumbai atelier within 24 hours of confirmation. Domestic express
                courier delivery takes 2–4 business days depending on city tier.
              </p>
              <p>
                We offer a 14-day hassle-free return window for unworn items in their original protective packaging
                with tags intact.
              </p>
            </div>
          )}
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-10 border-t border-light-grey">
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="text-xs uppercase tracking-widest text-burgundy font-bold block mb-1">
                  Complete Your Look
                </span>
                <h3 className="font-display text-2xl font-bold text-near-black">
                  Related in {product.category.replace('-', ' ')}
                </h3>
              </div>
              <Link
                to={`/category/${product.category}`}
                className="text-xs uppercase tracking-widest font-semibold text-charcoal hover:text-burgundy"
              >
                View Category
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}

        {/* Recently Viewed Products */}
        {recentlyViewed.length > 1 && (
          <div className="mt-20 pt-10 border-t border-light-grey">
            <span className="text-xs uppercase tracking-widest text-warm-grey font-bold block mb-1">
              Your Browsing History
            </span>
            <h3 className="font-display text-2xl font-bold text-near-black mb-6">
              Recently Viewed
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
              {recentlyViewed
                .filter((p) => p.id !== product.id)
                .slice(0, 6)
                .map((p) => (
                  <Link
                    key={p.id}
                    to={`/product/${p.slug}`}
                    className="group bg-white border border-light-grey p-2 hover:border-charcoal transition-all block"
                  >
                    <div className="aspect-[3/4] bg-ivory overflow-hidden mb-2">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <p className="text-[11px] font-medium text-charcoal truncate group-hover:text-burgundy">
                      {p.name}
                    </p>
                    <p className="text-[11px] font-bold text-charcoal mt-0.5">
                      {formatPrice(p.price)}
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        )}
        {/* Mobile Sticky Add-to-Bag Bar */}
        <div className="md:hidden fixed bottom-14 inset-x-0 z-30 bg-white/95 backdrop-blur-md border-t border-light-grey p-3 px-4 shadow-[0_-4px_16px_rgba(0,0,0,0.06)] flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[11px] text-warm-grey truncate">{product.name}</p>
            <p className="font-display text-base font-bold text-charcoal">
              {formatPrice(product.price)}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                toggleWishlist(product);
                addToast(
                  isFavorited
                    ? `Removed "${product.name}" from wishlist`
                    : `Saved "${product.name}" to wishlist`,
                  'wishlist'
                );
              }}
              className="w-10 h-10 border border-light-grey bg-white flex items-center justify-center shrink-0 cursor-pointer"
              aria-label="Wishlist"
            >
              <Heart
                size={16}
                className={isFavorited ? 'fill-burgundy text-burgundy' : 'text-charcoal'}
              />
            </button>
            <button
              onClick={handleAddToCart}
              className="px-5 py-2.5 bg-burgundy text-white text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5 shrink-0 shadow-sm cursor-pointer"
            >
              <ShoppingBag size={14} />
              <span>Add to Bag</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
