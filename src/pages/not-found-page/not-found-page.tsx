import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Helmet } from 'react-helmet-async';
import { Header } from '../../components/header/header';
import './styles.css';

export default function NotFoundPage(): JSX.Element {
  return (
    <div className="page page--not-found">
      <Helmet>
        <title>6 cities. Page not found</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--not-found">
        <div className="page__not-found-container container">
          <section className="not-found">
            <h1 className="visually-hidden">Page not found</h1>
            <div className="not-found__status-wrapper">
              <b className="not-found__status">Page not found.</b>
              <p className="not-found__status-description">We could not find requested page</p>
              <div className='link-to-main--wrapper'>
                <Link to={AppRoute.Root} className="link-to-main">
                  <span>Return to main page</span>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="footer">
        <Link to={AppRoute.Root} className="footer__logo-link">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}
