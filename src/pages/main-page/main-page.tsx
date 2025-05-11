import { Helmet } from 'react-helmet-async';
import OffersList from '../../components/offers-list/offers-list';
import { Header } from '../../components/header/header';
import Map from '../../components/map/map';
import { useCallback, useMemo, useRef, useState } from 'react';
import { useAppSelector } from '../../hooks/use-app-selector';
import CitiesList from './components/cities-list/cities-list';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { SortingOption } from '../../types/sorting-option';
import sortOffersByOption from '../../utils/offer';
import Spinner from '../../components/spinner/spinner';
import { getActiveCity } from '../../store/slices/application-data/selectors';
import { getIsOffersLoading, getOffers } from '../../store/slices/offers-data/selectors';
import { setActiveCity } from '../../store/slices/application-data/application-data';
import SortingOptions from './components/sorting-options/sorting-options';
import OffersListEmpty from './components/offers-list-empty/offers-list-empty';
import classNames from 'classnames';
import { Cities } from '../../const';
import { PlaceCardOptions } from '../../components/place-card/place-card-options';

export default function MainPage(): JSX.Element {
  const [activeCardId, setActiveCardById] = useState<string | null>(null);
  const [currentSortingOption, setSortingOption] = useState<SortingOption>(SortingOption.Popular);
  const isFirstFetch = useRef(true);
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector(getActiveCity);
  const offers = useAppSelector(getOffers);
  const isOffersDataLoading = useAppSelector(getIsOffersLoading);

  const sortedOffers = useMemo(() => {
    const offersForCurrentCity = offers.filter((offer) => offer.city.name === currentCity.name);
    return sortOffersByOption(offersForCurrentCity, currentSortingOption);
  }, [currentSortingOption, currentCity, offers]);

  const handleCardHover = useCallback((offerId: string | null) => {
    setActiveCardById(offerId);
  }, []);

  if (isOffersDataLoading && isFirstFetch.current) {
    isFirstFetch.current = false;
    return (
      <Spinner />
    );
  }

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <Header />

      <main className={classNames(
        'page__main',
        'page__main--index',
        { 'page__main--index-empty': offers.length === 0 }
      )}
      >
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList
            cities={Object.values(Cities)}
            selectedCity={currentCity}
            onSelectChange={(selectedCity) => dispatch(setActiveCity(selectedCity))}
          />
        </div>
        <div className="cities">
          {offers.length === 0 ? <OffersListEmpty cityName={currentCity.name} /> :
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{sortedOffers.length} places to stay in {currentCity.name}</b>
                <SortingOptions
                  currentSortingOption={currentSortingOption}
                  onSortingChange={(sortingOption) => setSortingOption(sortingOption)}
                />
                <OffersList
                  options={PlaceCardOptions.Offer}
                  className="cities__places-list places__list tabs__content"
                  cardClassName="cities"
                  offers={sortedOffers}
                  onCardHover={handleCardHover}
                />
              </section>
              <div className="cities__right-section">
                <Map
                  className='cities'
                  cityLocation={currentCity.location}
                  points={sortedOffers}
                  selectedPointId={activeCardId}
                />
              </div>
            </div>}
        </div>
      </main>
    </div>
  );
}
