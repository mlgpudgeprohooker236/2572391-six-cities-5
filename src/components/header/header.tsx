import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks/use-app-selector';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { logoutAction } from '../../store/api-actions/user-api-actions';
import { getFavorites } from '../../store/slices/favorites-data/selectors';
import { getAuthInfo, getAuthoriztionStatus } from '../../store/slices/user-data/selectors';
import { memo, useCallback } from 'react';

function HeaderComponent() {
  const dispatch = useAppDispatch();
  const favoritesCount = useAppSelector(getFavorites).length;
  const isAuthorized = useAppSelector(getAuthoriztionStatus) === AuthorizationStatus.Auth;
  const userData = useAppSelector(getAuthInfo);

  const handleLogout = useCallback(() => {
    dispatch(logoutAction());
  }, [dispatch]);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={AppRoute.Root} className="header__logo-link">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {
                isAuthorized ?
                  <>
                    <li className="header__nav-item user">
                      <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile">
                        <img className="header__avatar-wrapper user__avatar-wrapper" src={userData?.avatarUrl}>
                        </img>
                        <span className="header__user-name user__name">{userData?.email}</span>
                        <span className="header__favorite-count">{favoritesCount}</span>
                      </Link>
                    </li>
                    <li className="header__nav-item">
                      <Link to="#" className="header__nav-link" onClick={handleLogout}>
                        <span className="header__signout">Sign out</span>
                      </Link>
                    </li>
                  </>
                  :
                  <li className="header__nav-item user">
                    <Link to={AppRoute.Login} className="header__nav-link header__nav-link--profile">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__login">Sign in</span>
                    </Link>
                  </li>
              }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export const Header = memo(HeaderComponent);
