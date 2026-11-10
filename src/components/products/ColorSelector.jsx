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

      <div className="flex items-center gap-2.5">
        {colors.map((color) => {
          const isSelected = selectedColor?.name === color.name;
          return (
            <button
              key={color.name}
              type="button"
              onClick={() => onSelectColor(color)}
              title={color.name}
              className={`relative w-7 h-7 rounded-full border transition-all cursor-pointer ${
                isSelected
                  ? 'ring-2 ring-burgundy ring-offset-2 border-charcoal/30'
                  : 'border-light-grey hover:scale-110'
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
