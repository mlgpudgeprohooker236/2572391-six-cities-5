import { Review } from '../../types/review';
import { getReviewDateString } from '../../utils/date';
import RatingBar from '../rating-bar/rating-bar';
import { AvatarOptions } from '../user-avatar/avatar-options';
import UserAvatar from '../user-avatar/user-avatar';

type ReviewProps = {
  review: Review;
}


export default function ReviewItem({ review }: ReviewProps): JSX.Element {
  return (
    <li className="reviews__item">
      <UserAvatar options={AvatarOptions.Review} user={review.user} />
      <div className="reviews__info">
        <RatingBar className='reviews' rating={review.rating} />
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime={review.date.toDateString()}>{getReviewDateString(review.date)}</time>
      </div>
    </li>
  );
}
