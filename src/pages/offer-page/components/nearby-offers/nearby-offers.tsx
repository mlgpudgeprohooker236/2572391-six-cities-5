import { memo, useEffect, useRef } from 'react';
import OffersList from '../../../../components/offers-list/offers-list';
import Spinner from '../../../../components/spinner/spinner';
import { OfferDetailsPageSettings } from '../../../../const';
import { useAppDispatch } from '../../../../hooks/use-app-dispatch';
import { useAppSelector } from '../../../../hooks/use-app-selector';
import { getIsNearbyOffersLoading, getNearbyOffers } from '../../../../store/slices/nearby-offers-data/selectors';
import { fetchNearbyOffersAction } from '../../../../store/api-actions/offer-api-actions';
import { PlaceCardOptions } from '../../../../components/place-card/place-card-options';

type NearbyOffersProps = {
  offerId: string;
}

function NearbyOffersComponent({ offerId }: NearbyOffersProps): JSX.Element {
  const dispatch = useAppDispatch();
  const offers = useAppSelector(getNearbyOffers);
  const didMount = useRef(false);
  const isFirstFetch = useRef(true);
  const isNeabyOffersLoading = useAppSelector(getIsNearbyOffersLoading);

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      dispatch(fetchNearbyOffersAction(offerId));
    }
  });

  if (isNeabyOffersLoading && isFirstFetch.current) {
    isFirstFetch.current = false;
    return <Spinner />;
  }

  const filteredOffers = offers
    .toSorted((a, b) => a.id.localeCompare(b.id))
    .slice(0, OfferDetailsPageSettings.MaxOffersNearbyDisplayed);

  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <OffersList
          options={PlaceCardOptions.Offer}
          className="near-places__list places__list"
          cardClassName="near-places"
          offers={filteredOffers}
        />
      </section>
    </div>
  );
}

export const NearbyOffers = memo(NearbyOffersComponent);
