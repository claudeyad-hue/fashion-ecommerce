const ColorSelector = ({ colors = [], selectedColor, onSelectColor }) => {
  if (!colors || colors.length === 0) return null;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs">
        <span className="uppercase tracking-wider font-semibold text-charcoal">
          Color:{' '}
          <span className="font-normal text-warm-grey">
            {selectedColor?.name || colors[0]?.name}
          </span>
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
        {colors.map((color) => {
          const isSelected = selectedColor?.name === color.name;
          return (
            <button
              key={color.name}
              type="button"
              onClick={() => onSelectColor(color)}
              title={color.name}
              className={`relative w-9 h-9 sm:w-8 sm:h-8 rounded-full border transition-all cursor-pointer flex items-center justify-center ${
                isSelected
                  ? 'ring-2 ring-burgundy ring-offset-2 border-charcoal/30 scale-105'
                  : 'border-light-grey hover:scale-110 active:scale-95'
              }`}
              style={{ backgroundColor: color.hex }}
            >
              {isSelected && (
                <span className="sr-only">Selected {color.name}</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ColorSelector;
