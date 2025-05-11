import { Helmet } from 'react-helmet-async';
import OffersList from '../../components/offers-list/offers-list';
import { Header } from '../../components/header/header';
import { useAppSelector } from '../../hooks/use-app-selector';
import FavoritesEmpty from './favorites-empty';
import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';
import { getFavorites, getIsFavoritesLoading } from '../../store/slices/favorites-data/selectors';
import { OfferPreview } from '../../types/offer';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useMemo } from 'react';
import { fetchFavoritesAction } from '../../store/api-actions/offer-api-actions';
import Spinner from '../../components/spinner/spinner';
import { PlaceCardOptions } from '../../components/place-card/place-card-options';

function getFavoritesByCity(offers: OfferPreview[]): Record<string, OfferPreview[]> {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  const favoritesByCity = favoriteOffers.reduce((cities, offer) => {
    (cities[offer.city.name] ||= []).push(offer);
    return cities;
  }, {} as Record<string, OfferPreview[]>);

  return favoritesByCity;
}

export default function FavoritesPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const offers = useAppSelector(getFavorites);
  const favoritesByCity = getFavoritesByCity(offers);
  const isFavoritesLoading = useAppSelector(getIsFavoritesLoading);

  useMemo(() => {
    dispatch(fetchFavoritesAction());
  }, []);

  if(isFavoritesLoading) {
    return <Spinner />;
  }

  if (offers.length === 0) {
    return <FavoritesEmpty />;
  }

  return (
    <div className="page">
      <Helmet>
        <title>6 cities. Favorites</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {
                Object.entries(favoritesByCity).map(([city, favorites]) => (
                  <li key={city} className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <Link to={AppRoute.Root} className="locations__item-link">
                          <span>{city}</span>
                        </Link>
                      </div>
                    </div>
                    <OffersList
                      options={PlaceCardOptions.Favorite}
                      offers={favorites}
                      className='favorites__places'
                      cardClassName='favorites'
                    />
                  </li>
                ))
              }
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link to={AppRoute.Root} className="footer__logo-link">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}
