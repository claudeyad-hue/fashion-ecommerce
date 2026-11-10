import { Ruler } from 'lucide-react';

const SizeSelector = ({ sizes = [], selectedSize, onSelectSize, onOpenSizeGuide }) => {
  if (!sizes || sizes.length === 0) return null;

  return (
    <div className="space-y-2.5">
      <div className="flex items-center justify-between text-xs">
        <span className="uppercase tracking-wider font-semibold text-charcoal">
          Size:{' '}
          <span className="font-normal text-warm-grey">
            {selectedSize || 'Select a size'}
          </span>
        </span>
        {onOpenSizeGuide && (
          <button
            type="button"
            onClick={onOpenSizeGuide}
            className="text-burgundy hover:underline inline-flex items-center gap-1 text-[11px] font-medium cursor-pointer"
          >
            <Ruler size={13} /> Size Guide
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => {
          const isSelected = selectedSize === size;
          return (
            <button
              key={size}
              type="button"
              onClick={() => onSelectSize(size)}
              className={`min-w-11 min-h-[42px] px-3.5 py-2 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer border flex items-center justify-center ${
                isSelected
                  ? 'bg-charcoal text-white border-charcoal shadow-sm'
                  : 'bg-white text-charcoal border-light-grey hover:border-charcoal active:bg-ivory'
              }`}
            >
              {size}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SizeSelector;
