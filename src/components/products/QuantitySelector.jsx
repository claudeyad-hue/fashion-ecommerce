import { Plus, Minus } from 'lucide-react';

const QuantitySelector = ({ quantity = 1, onQuantityChange, max = 10, min = 1 }) => {
  return (
    <div className="flex items-center border border-light-grey bg-white min-h-[42px]">
      <button
        type="button"
        onClick={() => onQuantityChange(Math.max(min, quantity - 1))}
        disabled={quantity <= min}
        className="w-10 h-10 flex items-center justify-center text-charcoal hover:bg-ivory disabled:opacity-30 transition-colors cursor-pointer"
        aria-label="Decrease quantity"
      >
        <Minus size={14} />
      </button>
      <span className="w-10 text-center text-xs font-semibold text-charcoal select-none">
        {quantity}
      </span>
      <button
        type="button"
        onClick={() => onQuantityChange(Math.min(max, quantity + 1))}
        disabled={quantity >= max}
        className="w-10 h-10 flex items-center justify-center text-charcoal hover:bg-ivory disabled:opacity-30 transition-colors cursor-pointer"
        aria-label="Increase quantity"
      >
        <Plus size={14} />
      </button>
    </div>
  );
};

export default QuantitySelector;
