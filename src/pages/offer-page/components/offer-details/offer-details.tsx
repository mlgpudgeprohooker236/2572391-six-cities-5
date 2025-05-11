import { memo, useCallback, useEffect, useRef } from 'react';
import Bookmark from '../../../../components/bookmark/bookmark';
import CommentForm from '../comment-form/comment-form';
import Map from '../../../../components/map/map';
import RatingBar from '../../../../components/rating-bar/rating-bar';
import { ReviewsList } from '../reviews-list/reviews-list';
import { AvatarOptions } from '../../../../components/user-avatar/avatar-options';
import UserAvatar from '../../../../components/user-avatar/user-avatar';
import { useAppDispatch } from '../../../../hooks/use-app-dispatch';
import { fetchOfferDetailsAction, setFavoriteAction } from '../../../../store/api-actions/offer-api-actions';
import { useAppSelector } from '../../../../hooks/use-app-selector';
import { getIsOfferDetailsLoading, getOfferDetails } from '../../../../store/slices/offer-data/selectors';
import Spinner from '../../../../components/spinner/spinner';
import { getNearbyOffers } from '../../../../store/slices/nearby-offers-data/selectors';
import { AuthorizationStatus, OfferDetailsPageSettings } from '../../../../const';
import { getAuthoriztionStatus } from '../../../../store/slices/user-data/selectors';
import { FavoritesActionType } from '../../../../types/favorites-action-type';
import capitalize from '../../../../utils/strings';

type OfferDetailsProps = {
  offerId: string;
}

function OfferDetailsComponent({ offerId }: OfferDetailsProps): JSX.Element {
  const dispatch = useAppDispatch();
  const didMount = useRef(false);
  const isAuthorized = useAppSelector(getAuthoriztionStatus) === AuthorizationStatus.Auth;
  const offer = useAppSelector(getOfferDetails);
  const offersNearby = useAppSelector(getNearbyOffers);
  const isOfferDetailsLoading = useAppSelector(getIsOfferDetailsLoading);

  const filteredNearbyOffers = offersNearby
    .toSorted((a, b) => a.id.localeCompare(b.id))
    .slice(0, OfferDetailsPageSettings.MaxOffersNearbyDisplayed);

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      return;
    }

    if (!isOfferDetailsLoading) {
      dispatch(fetchOfferDetailsAction(offerId));
    }
  }, []);

  const updateFavorites = useCallback(
    () => {
      dispatch(setFavoriteAction(
        {
          offerId: offer!.id,
          actionType: offer?.isFavorite ? FavoritesActionType.Remove : FavoritesActionType.Add
        }
      ));
    },
    [offer?.isFavorite, dispatch]
  );

  if (offer === null) {
    return <Spinner />;
  }

  return (
    <section className="offer">
      <div className="offer__gallery-container container">
        <div className="offer__gallery">
          {
            offer.images.slice(0, OfferDetailsPageSettings.MaxOfferImagesDisplayed).map((imageUrl) => (
              <div className="offer__image-wrapper" key={imageUrl}>
                <img className="offer__image" src={imageUrl} alt="Photo studio" />
              </div>
            ))
          }
        </div>
      </div>
      <div className="offer__container container">
        <div className="offer__wrapper">
          {offer.isPremium &&
            <div className="offer__mark">
              <span>Premium</span>
            </div>}
          <div className="offer__name-wrapper">
            <h1 className="offer__name">
              {offer.title}
            </h1>
            <Bookmark className="offer" width={31} height={33} isFavorite={offer.isFavorite} onClick={updateFavorites} />
          </div>
          <RatingBar className='offer' rating={offer.rating} showValue />
          <ul className="offer__features">
            <li className="offer__feature offer__feature--entire">
              {capitalize(offer.type)}
            </li>
            <li className="offer__feature offer__feature--bedrooms">
              {`${offer.bedrooms} ${offer.bedrooms > 1 ? 'Bedrooms' : 'Bedroom'}`}
            </li>
            <li className="offer__feature offer__feature--adults">
              {`Max ${offer.maxAdults} ${offer.maxAdults > 1 ? 'adults' : 'adult'}`}
            </li>
          </ul>
          <div className="offer__price">
            <b className="offer__price-value">&euro;{offer.price}</b>
            <span className="offer__price-text">&nbsp;night</span>
          </div>
          <div className="offer__inside">
            <h2 className="offer__inside-title">What&apos;s inside</h2>
            <ul className="offer__inside-list">
              {
                offer.goods.map((good) => (
                  <li className="offer__inside-item" key={good}>
                    {good}
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="offer__host">
            <h2 className="offer__host-title">Meet the host</h2>
            <UserAvatar options={AvatarOptions.Host} user={offer.host} />
            <div className="offer__description">
              <p className="offer__text">
                {offer.description}
              </p>
            </div>
          </div>
          <section className="offer__reviews reviews">
            <ReviewsList offerId={offer.id} />
            {isAuthorized && <CommentForm offerId={offer.id} />}
          </section>
        </div>
      </div>
      <Map className="offer" cityLocation={offer.city.location} points={[offer, ...filteredNearbyOffers]} selectedPointId={offer.id} />
    </section>
  );
}

export const OfferDetails = memo(OfferDetailsComponent);


