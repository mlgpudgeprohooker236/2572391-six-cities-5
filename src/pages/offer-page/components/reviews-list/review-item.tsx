import RatingBar from '../../../../components/rating-bar/rating-bar';
import { AvatarOptions } from '../../../../components/user-avatar/avatar-options';
import UserAvatar from '../../../../components/user-avatar/user-avatar';
import { Review } from '../../../../types/review';
import { getReviewTimeTagDateString, getReviewDateString } from '../../../../utils/date';


type ReviewProps = {
  review: Review;
}


export default function ReviewItem({ review }: ReviewProps): JSX.Element {
  const reviewDate = new Date(review.date);
  return (
    <li className="reviews__item">
      <UserAvatar options={AvatarOptions.Review} user={review.user} />
      <div className="reviews__info">
        <RatingBar className='reviews' rating={review.rating} />
        <p className="reviews__text">
          {review.comment}
        </p>
        <time
          className="reviews__time"
          dateTime={getReviewTimeTagDateString(reviewDate)}
        >
          {getReviewDateString(reviewDate)}
        </time>
      </div>
    </li>
  );
}
