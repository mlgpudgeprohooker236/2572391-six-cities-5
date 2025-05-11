import { Helmet } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus, Cities } from '../../const';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { ChangeEvent, FormEvent, useCallback, useRef, useState } from 'react';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import { toast } from 'react-toastify';
import { getAuthoriztionStatus } from '../../store/slices/user-data/selectors';
import { loginAction } from '../../store/api-actions/user-api-actions';
import { getRandom } from '../../utils/number';
import { setActiveCity } from '../../store/slices/application-data/application-data';

function validateFormData(email: string, password: string): boolean {
  return (/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(email)
    && /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]+$/.test(password));
}

export default function LoginPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authStatus = useAppSelector(getAuthoriztionStatus);
  const [formData, setFormData] = useState({email: '', password: ''});
  const [cityName, city] = Object.entries(Cities)[getRandom(0, Object.entries(Cities).length - 1)];
  const cityEntry = useRef({cityName, city});

  const handleClickOnCityLabel = useCallback(() => {
    dispatch(setActiveCity(cityEntry.current.city));
    navigate(AppRoute.Root);
  }, []);

  const handleFieldChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  }, [formData, dispatch]);

  const handleSubmit = useCallback((evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const { email, password } = formData;
    if (email && password && validateFormData(email, password)) {
      dispatch(loginAction(
        {
          login: email,
          password: password
        }
      ));
      return;
    }

    toast('Wrong email or password format!\n'
        + 'Password must contain latin letters and digits\n'
        + 'Email must be non empty and have correct format');
  }, [formData, dispatch]);

  if(authStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Root} />;
  }

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 cities. Login</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to={AppRoute.Root} className="header__logo-link">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" onChange={handleFieldChange} required />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" onChange={handleFieldChange} required />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link to={AppRoute.Root} className="locations__item-link" onClick={handleClickOnCityLabel}>
                <span>{cityEntry.current.cityName}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
