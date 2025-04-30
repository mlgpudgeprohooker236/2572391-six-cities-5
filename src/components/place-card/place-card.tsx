import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';
import { AppRoute } from '../../const';
import RatingBar from '../rating-bar/rating-bar';
import Bookmark from '../bookmark/bookmark';

type PlaceCardProps = {
  offer: Offer;
  className: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function PlaceCard({ offer, className, onMouseEnter, onMouseLeave }: PlaceCardProps): JSX.Element {
  return (
    <article className={`${className}__card place-card`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {
        offer.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.OfferBase}/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <Bookmark className="place-card" width={18} height={19} isFavorite={offer.isFavorite}/>
        </div>
        <RatingBar className='place-card' rating={offer.rating} />
        <h2 className="place-card__name">
          <Link to={`${AppRoute.OfferBase}/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}
