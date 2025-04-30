type RatingBarProps = {
  className: string;
  rating: number;
  showValue?: boolean;
}

export default function RatingBar({ className, rating, showValue } : RatingBarProps) {
  const perRatingUnitPercentage = 20;
  return (
    <div className={`${className}__rating rating`}>
      <div className={`${className}__stars rating__stars`}>
        <span style={{ width: `${rating * perRatingUnitPercentage}%` }} />
        <span className="visually-hidden">Rating</span>
      </div>
      {
        showValue && <span className={`${className}__rating-value rating__value`}>{rating}</span>
      }
    </div>
  );
}
