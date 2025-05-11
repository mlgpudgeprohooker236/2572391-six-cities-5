import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import RatingBar from '../rating-bar/rating-bar';
import Bookmark from '../bookmark/bookmark';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { setFavoriteAction } from '../../store/api-actions/offer-api-actions';
import { OfferPreview } from '../../types/offer';
import { FavoritesActionType } from '../../types/favorites-action-type';
import { PlaceCardOptionsType } from './place-card-options';

type PlaceCardProps = {
  options: PlaceCardOptionsType;
  offer: OfferPreview;
  className: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function PlaceCard({ options, offer, className, onMouseEnter, onMouseLeave }: PlaceCardProps): JSX.Element {
  const dispatch = useAppDispatch();

  const updateFavorites = (offerId: string, isFavorite: boolean) => {
    dispatch(setFavoriteAction(
      {
        offerId,
        actionType: isFavorite ? FavoritesActionType.Remove : FavoritesActionType.Add
      }
    ));
  };

  return (
    <article className={`${className}__card place-card`}
      onMouseEnter={() => onMouseEnter ? onMouseEnter() : null}
      onMouseLeave={() => onMouseLeave ? onMouseLeave() : null}
    >
      {
        offer.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.OfferBase}/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width={options.imageWidth} height={options.imageHeight} alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <Bookmark className="place-card" width={18} height={19} isFavorite={offer.isFavorite} onClick={() => updateFavorites(offer.id, offer.isFavorite)} />
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
