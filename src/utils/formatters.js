/**
 * Format price in INR (₹)
 */
export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

/**
 * Calculate discount percentage
 */
export const getDiscountPercent = (price, originalPrice) => {
  if (!originalPrice || originalPrice <= price) return 0;
  return Math.round(((originalPrice - price) / originalPrice) * 100);
};

/**
 * Truncate text cleanly
 */
export const truncateText = (text, maxLength = 100) => {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
};

/**
 * Friendly badge color helper
 */
export const getBadgeStyle = (badge) => {
  switch (badge) {
    case 'Bestseller':
      return 'bg-amber-100 text-amber-900 border-amber-300';
    case 'Trending':
    case 'Viral Pick':
      return 'bg-burgundy text-white border-transparent';
    case 'New':
    case 'Limited Edition':
      return 'bg-neutral-900 text-white border-transparent';
    case 'Pure Silk':
    case 'Luxury':
      return 'bg-emerald-900 text-emerald-100 border-transparent';
    default:
      return 'bg-cream text-charcoal border-light-grey';
  }
};
