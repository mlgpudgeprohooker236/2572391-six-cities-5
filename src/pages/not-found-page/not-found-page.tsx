import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Helmet } from 'react-helmet-async';

export default function NotFoundPage(): JSX.Element {
  return (
    <div className="page page--not-found">
      <Helmet>
        <title>6 cities. Page not found</title>
      </Helmet>
      <main className="page__main page__main--not-found">
        <h1>Requested page was not found!</h1>
        <Link to={AppRoute.Root}>
          Return to main page
        </Link>
      </main>
    </div>
  );
}
