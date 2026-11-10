import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus } from 'lucide-react';
import { formatPrice } from '../../utils/formatters';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-6 border-b border-light-grey gap-4">
      {/* Product Image and Details */}
      <div className="flex items-center gap-4 min-w-0">
        <Link
          to={`/product/${item.slug}`}
          className="w-20 h-26 sm:w-24 sm:h-32 bg-ivory shrink-0 overflow-hidden block"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform"
          />
        </Link>

        <div className="space-y-1 min-w-0">
          <p className="text-[10px] uppercase tracking-wider text-warm-grey">
            {item.category?.replace('-', ' ')}
          </p>
          <Link
            to={`/product/${item.slug}`}
            className="font-display text-base font-semibold text-charcoal hover:text-burgundy transition-colors block truncate"
          >
            {item.name}
          </Link>

          <div className="flex flex-wrap items-center gap-2 text-xs text-warm-grey pt-0.5">
            {item.selectedColor && (
              <span className="bg-ivory border border-light-grey px-2 py-0.5">
                Color: {item.selectedColor}
              </span>
            )}
            {item.selectedSize && (
              <span className="bg-ivory border border-light-grey px-2 py-0.5">
                Size: {item.selectedSize}
              </span>
            )}
          </div>

          <p className="text-xs font-medium text-charcoal sm:hidden pt-1">
            Price: {formatPrice(item.price)}
          </p>
        </div>
      </div>

      {/* Quantity & Total */}
      <div className="flex items-center justify-between w-full sm:w-auto sm:gap-6 pt-2 sm:pt-0">
        {/* Quantity Controls */}
        <div className="flex items-center border border-light-grey bg-white">
          <button
            type="button"
            onClick={() => onUpdateQuantity(item.itemKey, item.quantity - 1)}
            disabled={item.quantity <= 1}
            className="w-8 h-8 flex items-center justify-center text-charcoal hover:bg-ivory disabled:opacity-30 cursor-pointer"
            aria-label="Decrease quantity"
          >
            <Minus size={13} />
          </button>
          <span className="w-8 text-center text-xs font-semibold text-charcoal">
            {item.quantity}
          </span>
          <button
            type="button"
            onClick={() => onUpdateQuantity(item.itemKey, item.quantity + 1)}
            disabled={item.quantity >= 10}
            className="w-8 h-8 flex items-center justify-center text-charcoal hover:bg-ivory disabled:opacity-30 cursor-pointer"
            aria-label="Increase quantity"
          >
            <Plus size={13} />
          </button>
        </div>

        {/* Item Total */}
        <div className="text-right min-w-16 sm:min-w-20">
          <span className="font-semibold text-sm sm:text-base text-charcoal">
            {formatPrice(item.price * item.quantity)}
          </span>
        </div>

        {/* Remove Button */}
        <button
          onClick={() => onRemove(item.itemKey)}
          className="w-9 h-9 flex items-center justify-center text-mid-grey hover:text-error transition-colors rounded-sm cursor-pointer"
          aria-label="Remove item"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
