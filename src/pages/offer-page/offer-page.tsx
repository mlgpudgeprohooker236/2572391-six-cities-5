import { Helmet } from 'react-helmet-async';
import { Header } from '../../components/header/header';
import { useMemo, useRef } from 'react';
import { useAppSelector } from '../../hooks/use-app-selector';
import Spinner from '../../components/spinner/spinner';
import { Navigate, useParams } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { getIsOfferDetailsLoading } from '../../store/slices/offer-data/selectors';
import { fetchOfferDetailsAction } from '../../store/api-actions/offer-api-actions';
import { OfferDetails } from './components/offer-details/offer-details';
import { NearbyOffers } from './components/nearby-offers/nearby-offers';
import { getHasFailedToLoadOfferDetails } from '../../store/slices/offer-data/selectors';
import { AppRoute } from '../../const';

export default function OfferPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const { offerId } = useParams();
  const isFirstFetch = useRef(true);
  const failedToLoadOfferDetails = useAppSelector(getHasFailedToLoadOfferDetails);
  const isOfferDetailsLoading = useAppSelector(getIsOfferDetailsLoading);

  useMemo(() => {
    if (offerId) {
      isFirstFetch.current = true;
      dispatch(fetchOfferDetailsAction(offerId));
    }
  }, [offerId, dispatch]);

  if (isOfferDetailsLoading && isFirstFetch.current) {
    isFirstFetch.current = false;
    return <Spinner />;
  }

  if(failedToLoadOfferDetails || !offerId) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  return (
    <div className="page">
      <Helmet>
        <title>6 cities. Offer</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--offer">
        <OfferDetails offerId={offerId}/>
        <NearbyOffers offerId={offerId}/>
      </main>
    </div>
  );
}
