import { NavLink } from 'react-router-dom';
import { Home, Compass, Search, Heart, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

const MobileBottomBar = ({ onOpenSearch }) => {
  const { cartCount, openDrawer } = useCart();
  const { wishlistCount } = useWishlist();

  return (
    <nav
      aria-label="Mobile navigation bar"
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-light-grey pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_16px_rgba(0,0,0,0.04)]"
    >
      <div className="grid grid-cols-5 h-14 max-w-md mx-auto items-stretch">
        {/* Home */}
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `flex flex-col items-center justify-center gap-1 transition-colors select-none py-1 ${
              isActive ? 'text-burgundy font-semibold' : 'text-warm-grey hover:text-charcoal'
            }`
          }
        >
          <Home size={19} strokeWidth={1.8} />
          <span className="text-[10px] tracking-wider uppercase">Home</span>
        </NavLink>

        {/* Shop */}
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center gap-1 transition-colors select-none py-1 ${
              isActive ? 'text-burgundy font-semibold' : 'text-warm-grey hover:text-charcoal'
            }`
          }
        >
          <Compass size={19} strokeWidth={1.8} />
          <span className="text-[10px] tracking-wider uppercase">Shop</span>
        </NavLink>

        {/* Search */}
        <button
          type="button"
          onClick={onOpenSearch}
          className="flex flex-col items-center justify-center gap-1 text-warm-grey hover:text-charcoal transition-colors select-none py-1 cursor-pointer"
          aria-label="Search catalog"
        >
          <Search size={19} strokeWidth={1.8} />
          <span className="text-[10px] tracking-wider uppercase">Search</span>
        </button>

        {/* Wishlist */}
        <NavLink
          to="/wishlist"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center gap-1 transition-colors select-none py-1 relative ${
              isActive ? 'text-burgundy font-semibold' : 'text-warm-grey hover:text-charcoal'
            }`
          }
          aria-label={`Wishlist with ${wishlistCount} items`}
        >
          <div className="relative">
            <Heart size={19} strokeWidth={1.8} />
            {wishlistCount > 0 && (
              <span className="absolute -top-1.5 -right-2 min-w-4 h-4 px-1 bg-burgundy text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </div>
          <span className="text-[10px] tracking-wider uppercase">Saved</span>
        </NavLink>

        {/* Bag */}
        <button
          type="button"
          onClick={openDrawer}
          className="flex flex-col items-center justify-center gap-1 text-warm-grey hover:text-charcoal transition-colors select-none py-1 relative cursor-pointer"
          aria-label={`Shopping bag with ${cartCount} items`}
        >
          <div className="relative">
            <ShoppingBag size={19} strokeWidth={1.8} />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 min-w-4 h-4 px-1 bg-charcoal text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
          <span className="text-[10px] tracking-wider uppercase">Bag</span>
        </button>
      </div>
    </nav>
  );
};

export default MobileBottomBar;
