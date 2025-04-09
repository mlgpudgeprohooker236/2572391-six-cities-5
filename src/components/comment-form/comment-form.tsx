import { ChangeEvent, Fragment, useState } from 'react';
import { CommentFormSettings } from '../../const';

const Rating = {
  'Terriby': 1,
  'Badly': 2,
  'NotBad': 3,
  'Good': 4,
  'Perfect': 5,
} as const;

export default function CommentForm(): JSX.Element {

  const initialFormState: {
    rating: typeof Rating[keyof typeof Rating] | 0;
    review: string;
  } = {
    rating: 0,
    review: ''
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleFieldChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = evt.target;
    if(evt.target.type === 'radio') {
      setFormData({... formData, [name]: parseInt(value, 10)});
      return;
    }
    setFormData({ ...formData, [name]: value });
  };

  const isFormDataValid =
    formData.review.length >= CommentFormSettings.CommentMinLength
    && formData.rating !== null;

  // NOTE: Передаем radioButton-ы в обратном порядке,
  // т.к. для нормального hover-а на рейтинге используется row-reverse,
  // который в свою очередь используется по причине отсутствия в css селектора для предыдущего элемента.
  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          Object.entries(Rating).sort((a,b) => b[1] - a[1]).map(([ratingTitle, rating]) => (
            <Fragment key={rating}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={rating}
                id={`${rating}-stars`}
                type="radio"
                checked={formData.rating === rating}
                onChange={handleFieldChange}
              />
              <label htmlFor={`${rating}-stars`} className="reviews__rating-label form__rating-label" title={ratingTitle}>
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </Fragment>
          ))
        }
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.review}
        onChange={handleFieldChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isFormDataValid}>Submit</button>
      </div>
    </form>
  );
}
