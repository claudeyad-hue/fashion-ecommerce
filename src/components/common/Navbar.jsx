import { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  Search,
  Heart,
  ShoppingBag,
  Menu,
  ChevronDown,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { categories } from '../../data/categories';
import SearchOverlay from './SearchOverlay';
import MobileNav from './MobileNav';
import CartDrawer from './CartDrawer';
import MobileBottomBar from './MobileBottomBar';

const Navbar = () => {
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const dropdownRef = useRef(null);

  const { cartCount, openDrawer } = useCart();
  const { wishlistCount } = useWishlist();

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsCategoryDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-light-grey transition-all pt-[env(safe-area-inset-top)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
            {/* Left: Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="w-11 h-11 -ml-2 text-charcoal hover:text-burgundy transition-colors cursor-pointer flex items-center justify-center rounded-sm"
                aria-label="Open mobile navigation"
              >
                <Menu size={22} />
              </button>
            </div>

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="group flex flex-col items-center">
                <span className="font-display text-2xl sm:text-3xl font-bold tracking-[0.25em] text-near-black group-hover:text-burgundy transition-colors">
                  LUXE
                </span>
                <span className="text-[9px] uppercase tracking-[0.35em] text-warm-grey -mt-0.5">
                  Atelier
                </span>
              </Link>
            </div>

            {/* Center: Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `px-4 py-2 text-xs uppercase tracking-widest font-semibold transition-all relative ${
                    isActive ? 'text-burgundy font-bold' : 'text-charcoal hover:text-burgundy'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>Home</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-burgundy" />
                    )}
                  </>
                )}
              </NavLink>

              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  `px-4 py-2 text-xs uppercase tracking-widest font-semibold transition-all relative ${
                    isActive ? 'text-burgundy font-bold' : 'text-charcoal hover:text-burgundy'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>Shop All</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-burgundy" />
                    )}
                  </>
                )}
              </NavLink>

              {/* Categories Mega Dropdown */}
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => setIsCategoryDropdownOpen(true)}
                onMouseLeave={() => setIsCategoryDropdownOpen(false)}
              >
                <button
                  onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
                  className={`flex items-center gap-1.5 px-4 py-2 text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer ${
                    isCategoryDropdownOpen ? 'text-burgundy' : 'text-charcoal hover:text-burgundy'
                  }`}
                  aria-expanded={isCategoryDropdownOpen}
                >
                  <span>Categories</span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      isCategoryDropdownOpen ? 'rotate-180 text-burgundy' : 'text-warm-grey'
                    }`}
                  />
                </button>

                {/* Dropdown Card */}
                {isCategoryDropdownOpen && (
                  <div className="absolute top-full -left-20 w-[680px] bg-white border border-light-grey shadow-2xl p-6 grid grid-cols-3 gap-6 animate-in fade-in-0 zoom-in-95 duration-150 z-50">
                    <div className="col-span-2 grid grid-cols-2 gap-3">
                      {categories.map((cat) => (
                        <Link
                          key={cat.slug}
                          to={`/category/${cat.slug}`}
                          onClick={() => setIsCategoryDropdownOpen(false)}
                          className="flex items-center gap-3 p-2 hover:bg-ivory transition-colors group"
                        >
                          <img
                            src={cat.image}
                            alt={cat.name}
                            className="w-12 h-12 object-cover shrink-0 bg-cream"
                          />
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-charcoal group-hover:text-burgundy transition-colors">
                              {cat.name}
                            </p>
                            <p className="text-[11px] text-warm-grey">
                              {cat.count} curated styles
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="col-span-1 bg-ivory p-4 flex flex-col justify-between border-l border-light-grey">
                      <div>
                        <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest text-burgundy bg-burgundy/10 px-2 py-0.5 mb-2">
                          <Sparkles size={11} /> Featured
                        </span>
                        <h4 className="font-display text-base font-semibold text-charcoal mb-1">
                          Curated Edit
                        </h4>
                        <p className="text-xs text-warm-grey leading-relaxed">
                          Explore this week’s handcrafted statement earrings and luxury bags.
                        </p>
                      </div>
                      <Link
                        to="/shop"
                        onClick={() => setIsCategoryDropdownOpen(false)}
                        className="text-xs uppercase tracking-widest font-semibold text-burgundy hover:underline inline-flex items-center gap-1 mt-4"
                      >
                        Browse All <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <NavLink
                to="/shop?filter=new-arrivals"
                className={({ isActive }) =>
                  `px-4 py-2 text-xs uppercase tracking-widest font-semibold transition-all relative ${
                    isActive ? 'text-burgundy font-bold' : 'text-charcoal hover:text-burgundy'
                  }`
                }
              >
                <span>New Arrivals</span>
              </NavLink>

              <NavLink
                to="/shop?filter=best-sellers"
                className={({ isActive }) =>
                  `px-4 py-2 text-xs uppercase tracking-widest font-semibold transition-all relative ${
                    isActive ? 'text-burgundy font-bold' : 'text-charcoal hover:text-burgundy'
                  }`
                }
              >
                <span>Best Sellers</span>
              </NavLink>

              <NavLink
                to="/about"
                className="px-4 py-2 text-xs uppercase tracking-widest font-semibold text-warm-grey hover:text-charcoal transition-colors"
              >
                About
              </NavLink>

              <NavLink
                to="/contact"
                className="px-4 py-2 text-xs uppercase tracking-widest font-semibold text-warm-grey hover:text-charcoal transition-colors"
              >
                Contact
              </NavLink>
            </nav>

            {/* Right: Actions */}
            <div className="flex items-center space-x-0.5 sm:space-x-2">
              {/* Search Trigger */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="w-11 h-11 text-charcoal hover:text-burgundy transition-colors cursor-pointer flex items-center justify-center rounded-sm"
                aria-label="Open search catalog"
              >
                <Search size={20} />
              </button>

              {/* Wishlist Link */}
              <Link
                to="/wishlist"
                className="w-11 h-11 text-charcoal hover:text-burgundy transition-colors relative flex items-center justify-center rounded-sm"
                aria-label={`Wishlist (${wishlistCount} items)`}
              >
                <Heart size={20} />
                {wishlistCount > 0 && (
                  <span className="absolute top-1.5 right-1.5 min-w-4 h-4 px-1 bg-burgundy text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* Cart Drawer Trigger */}
              <button
                onClick={openDrawer}
                className="w-11 h-11 text-charcoal hover:text-burgundy transition-colors relative cursor-pointer flex items-center justify-center rounded-sm"
                aria-label={`Shopping bag (${cartCount} items)`}
              >
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <span className="absolute top-1.5 right-1.5 min-w-4.5 h-4.5 px-1 bg-charcoal text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Overlays */}
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <MobileNav isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      <CartDrawer />
      <MobileBottomBar onOpenSearch={() => setIsSearchOpen(true)} />
    </>
  );
};

export default Navbar;
