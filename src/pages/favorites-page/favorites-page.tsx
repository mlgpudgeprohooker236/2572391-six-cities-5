import { Helmet } from 'react-helmet-async';
import { Offer } from '../../types/offer';
import OffersList from '../../components/offers-list/offers-list';
import Header from '../../components/header/header';
import { useAppSelector } from '../../hooks/use-app-selector';
import FavoritesEmpty from './favorites-empty';

function getFavoritesByCity(offers: Offer[]): Record<string, Offer[]> {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  const favoritesByCity = favoriteOffers.reduce((cities, offer) => {
    (cities[offer.city.name] ||= []).push(offer);
    return cities;
  }, {} as Record<string, Offer[]>);

  return favoritesByCity;
}

export default function FavoritesPage(): JSX.Element {
  const offers = useAppSelector((state) => state.favorites);
  const favoritesByCity = getFavoritesByCity(offers);

  if(offers.length === 0) {
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
                        <a className="locations__item-link" href="#">
                          <span>{city}</span>
                        </a>
                      </div>
                    </div>
                    <OffersList
                      offers={favorites}
                      className='favorites__places'
                      cardClassName='favorites'
                      onCardHover={() => {}}
                      onCardLeave={() => {}}
                    />
                  </li>
                ))
              }
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}
