import { Review } from '../../types/review';
import ReviewItem from '../review-item/review-item';

type ReviewListProps = {
  reviews: Review[];
}

export default function ReviewsList({ reviews }: ReviewListProps): JSX.Element {
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {
          reviews.sort((a,b) => (new Date(b.date).getTime() - new Date(a.date).getTime())).map((review) => (
            <ReviewItem review={review} key={review.id} />
          ))
        }
      </ul>
    </>
  );
}
