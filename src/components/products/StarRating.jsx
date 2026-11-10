import { Star } from 'lucide-react';

const StarRating = ({ rating = 5, reviewCount, size = 14, showText = true }) => {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center text-amber-500">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={size}
            className={`${
              star <= Math.round(rating)
                ? 'fill-amber-400 text-amber-400'
                : 'fill-light-grey text-light-grey'
            }`}
          />
        ))}
      </div>
      {showText && (
        <span className="text-xs font-semibold text-charcoal ml-0.5">
          {rating.toFixed(1)}
          {reviewCount !== undefined && (
            <span className="text-warm-grey font-normal ml-1">({reviewCount})</span>
          )}
        </span>
      )}
    </div>
  );
};

export default StarRating;
