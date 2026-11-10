import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, TrendingUp, ArrowRight } from 'lucide-react';
import { products } from '../../data/products';
import { formatPrice } from '../../utils/formatters';

const popularKeywords = [
  'Gold Earrings',
  'Crossbody Bags',
  'Straight Jeans',
  'Silk Scarf',
  'Platform Sneakers',
  'Cat-Eye Sunglasses',
  'Tassel Keychain',
];

const SearchOverlay = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 120);
    } else {
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    const trimmed = query.trim().toLowerCase();
    if (trimmed.length < 2) {
      setResults([]);
      return;
    }
    const matches = products
      .filter(
        (p) =>
          p.name.toLowerCase().includes(trimmed) ||
          p.category.toLowerCase().includes(trimmed) ||
          p.description.toLowerCase().includes(trimmed) ||
          (p.tagline && p.tagline.toLowerCase().includes(trimmed))
      )
      .slice(0, 6);
    setResults(matches);
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/shop?search=${encodeURIComponent(query.trim())}`);
      onClose();
    }
  };

  const handleProductSelect = (slug) => {
    navigate(`/product/${slug}`);
    onClose();
  };

  const handleKeywordClick = (term) => {
    navigate(`/shop?search=${encodeURIComponent(term)}`);
    onClose();
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex flex-col justify-start">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-near-black/70 backdrop-blur-sm cursor-pointer"
          />

          {/* Search Box Panel */}
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            className="relative z-10 w-full max-w-3xl mx-auto mt-6 sm:mt-16 bg-white border border-light-grey shadow-2xl px-6 sm:px-8 py-6 mx-4"
          >
            <div className="flex items-center justify-between pb-4 border-b border-light-grey">
              <span className="text-xs uppercase tracking-widest font-semibold text-warm-grey">
                Search LUXE Catalog
              </span>
              <button
                onClick={onClose}
                className="p-1 text-charcoal/70 hover:text-charcoal transition-colors"
                aria-label="Close search"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="flex items-center gap-3 py-4 border-b border-light-grey">
              <Search size={22} className="text-burgundy shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by product, category, or style..."
                className="w-full text-base sm:text-lg font-normal bg-transparent outline-none text-charcoal placeholder:text-mid-grey"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="p-1 text-mid-grey hover:text-charcoal text-xs uppercase"
                >
                  Clear
                </button>
              )}
            </form>

            {/* Quick pills or live results */}
            <div className="py-4 max-h-[60vh] overflow-y-auto">
              {results.length > 0 ? (
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs uppercase tracking-widest text-warm-grey font-semibold">
                      Matching Products ({results.length})
                    </p>
                    <button
                      onClick={handleSubmit}
                      className="text-xs text-burgundy hover:underline flex items-center gap-1 font-medium"
                    >
                      View all results <ArrowRight size={12} />
                    </button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {results.map((product) => (
                      <div
                        key={product.id}
                        onClick={() => handleProductSelect(product.slug)}
                        className="flex items-center gap-3 p-2.5 hover:bg-ivory border border-transparent hover:border-light-grey transition-all cursor-pointer group"
                      >
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-14 h-14 object-cover shrink-0 bg-cream"
                        />
                        <div className="min-w-0 flex-1">
                          <p className="text-xs uppercase tracking-wider text-warm-grey">
                            {product.category.replace('-', ' ')}
                          </p>
                          <h4 className="text-sm font-medium text-charcoal truncate group-hover:text-burgundy transition-colors">
                            {product.name}
                          </h4>
                          <p className="text-xs font-semibold text-charcoal mt-0.5">
                            {formatPrice(product.price)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : query.trim().length >= 2 ? (
                <div className="text-center py-10">
                  <p className="text-sm text-charcoal font-medium">No results found for "{query}"</p>
                  <p className="text-xs text-warm-grey mt-1">
                    Try checking your spelling or exploring our curated collections.
                  </p>
                </div>
              ) : (
                <div>
                  <p className="text-xs uppercase tracking-widest text-warm-grey font-semibold mb-3 flex items-center gap-1.5">
                    <TrendingUp size={14} className="text-burgundy" />
                    Popular Searches
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {popularKeywords.map((kw) => (
                      <button
                        key={kw}
                        onClick={() => handleKeywordClick(kw)}
                        className="px-3.5 py-1.5 text-xs tracking-wider uppercase bg-ivory hover:bg-cream border border-light-grey text-charcoal transition-all cursor-pointer"
                      >
                        {kw}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SearchOverlay;
