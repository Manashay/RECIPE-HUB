import { Star, StarHalf } from "lucide-react";

const RatingStars = ({ rating = 0 }) => {
  const fullStars = Math.floor(rating); // Number of whole stars
  const hasHalfStar = rating % 1 !== 0; // Check for any decimal
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Remaining slots

  return (
    <div className="flex items-center gap-1">
      {/* 1. Full Stars */}
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`f-${i}`} size={14} className="text-yellow-500"  fill="#EC5833" color="#EC5833" />
      ))}

      {/* 2. The Half Star */}
      {hasHalfStar && (
        <StarHalf size={14} className="text-yellow-500" fill="#EC5833" color="#EC5833" />
      )}

      {/* 3. Empty Stars */}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`e-${i}`} size={14} className="text-gray-300" color="#EC5833" />
      ))}
    </div>
  );
};

export default RatingStars;