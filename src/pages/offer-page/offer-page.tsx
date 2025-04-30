import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import CommentForm from '../../components/comment-form/comment-form';
import ReviewsList from '../../components/reviews-list/reviews-list';
import { Review } from '../../types/review';
import { OfferDetails } from '../../types/offer-details';
import RatingBar from '../../components/rating-bar/rating-bar';
import { Offer } from '../../types/offer';
import UserAvatar from '../../components/user-avatar/user-avatar';
import { AvatarOptions } from '../../components/user-avatar/avatar-options';
import Map from '../../components/map/map';
import OffersList from '../../components/offers-list/offers-list';
import { useState } from 'react';
import Bookmark from '../../components/bookmark/bookmark';

type OfferPageProps = {
  offer: OfferDetails;
  reviews: Review[];
  offersNearby: Offer[];
}

export default function OfferPage({ offer, reviews, offersNearby }: OfferPageProps): JSX.Element {
  const [activeCardId, setActiveCardId] = useState<string | null>();
  const selectedOffer = offersNearby.find((nearbyOffer) => nearbyOffer.id === activeCardId);

  return (
    <div className="page">
      <Helmet>
        <title>6 cities. Offer</title>
      </Helmet>
      <Header />

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {
                offer.images.map((imageUrl) => (
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
                <Bookmark className="offer" width={31} height={33} isFavorite={offer.isFavorite} />
              </div>
              <RatingBar className='offer' rating={offer.rating} showValue />
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offer.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {`${offer.bedrooms} Bedrooms`}
                </li>
                <li className="offer__feature offer__feature--adults">
                  {`Max ${offer.maxAdults} adults`}
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
                <ReviewsList reviews={reviews} />
                <CommentForm />
              </section>
            </div>
          </div>
          <Map className="offer" city={offer.city} points={offersNearby} selectedPoint={selectedOffer} />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OffersList
              className="near-places__list"
              cardClassName="near-places"
              offers={offersNearby}
              onCardHover={setActiveCardId}
              onCardLeave={() => setActiveCardId(null)}
            />
          </section>
        </div>
      </main>
    </div>
  );
}
