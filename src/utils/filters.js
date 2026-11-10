/**
 * Filter products based on active filters
 */
export const filterProducts = (products, filters) => {
  let filtered = [...products];

  // Category filter
  if (filters.category && filters.category !== 'all') {
    filtered = filtered.filter((p) => p.category === filters.category);
  }

  // Price range filter
  if (filters.minPrice !== undefined && filters.minPrice !== null && filters.minPrice !== '') {
    filtered = filtered.filter((p) => p.price >= Number(filters.minPrice));
  }
  if (filters.maxPrice !== undefined && filters.maxPrice !== null && filters.maxPrice !== '') {
    filtered = filtered.filter((p) => p.price <= Number(filters.maxPrice));
  }

  // Stock availability
  if (filters.inStockOnly) {
    filtered = filtered.filter((p) => p.stockStatus !== 'out-of-stock');
  }

  // Badges / Flags (like best-sellers, new-arrivals, on-sale)
  if (filters.flag === 'new-arrivals') {
    filtered = filtered.filter((p) => p.isNewArrival);
  } else if (filters.flag === 'best-sellers') {
    filtered = filtered.filter((p) => p.isBestSeller);
  } else if (filters.flag === 'sale') {
    filtered = filtered.filter((p) => p.originalPrice && p.originalPrice > p.price);
  }

  // Search keyword
  if (filters.search && filters.search.trim()) {
    const q = filters.search.toLowerCase().trim();
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        (p.tagline && p.tagline.toLowerCase().includes(q))
    );
  }

  return filtered;
};

/**
 * Sort products based on sort option
 */
export const sortProducts = (products, sortBy) => {
  const sorted = [...products];

  switch (sortBy) {
    case 'newest':
      return sorted.sort((a, b) => (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0));
    case 'price-low':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price-high':
      return sorted.sort((a, b) => b.price - a.price);
    case 'popularity':
      return sorted.sort((a, b) => b.reviewCount - a.reviewCount);
    case 'rating':
      return sorted.sort((a, b) => b.rating - a.rating);
    case 'featured':
    default:
      return sorted.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
  }
};

export const priceRanges = [
  { label: 'All Prices', min: '', max: '' },
  { label: 'Under ₹1,000', min: 0, max: 1000 },
  { label: '₹1,000 – ₹2,000', min: 1000, max: 2000 },
  { label: '₹2,000 – ₹3,500', min: 2000, max: 3500 },
  { label: 'Over ₹3,500', min: 3500, max: '' },
];
