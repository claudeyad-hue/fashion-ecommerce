import { useLocalStorage } from './useLocalStorage';

const MAX_RECENT = 8;

export const useRecentlyViewed = () => {
  const [recentlyViewed, setRecentlyViewed] = useLocalStorage('luxe-recently-viewed', []);

  const addToRecentlyViewed = (product) => {
    if (!product || !product.id) return;
    setRecentlyViewed((prev) => {
      const filtered = prev.filter((p) => p.id !== product.id);
      return [
        {
          id: product.id,
          slug: product.slug,
          name: product.name,
          price: product.price,
          originalPrice: product.originalPrice,
          image: product.images[0],
          category: product.category,
          rating: product.rating,
          badge: product.badge,
        },
        ...filtered,
      ].slice(0, MAX_RECENT);
    });
  };

  return { recentlyViewed, addToRecentlyViewed };
};
