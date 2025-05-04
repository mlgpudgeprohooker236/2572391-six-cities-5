import { Helmet } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Link, useNavigate } from 'react-router-dom';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { loginAction } from '../../store/api-actions';
import { useAppSelector } from '../../hooks/use-app-selector';
import { toast } from 'react-toastify';

function validateFormData(email: string, password: string): boolean {
  return (/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(email)
    && /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]+$/.test(password));
}

export default function LoginPage(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector((state) => state.authorizationStatus);

  useEffect(() => {
    if (authStatus === AuthorizationStatus.Auth) {
      navigate(AppRoute.Root);
    }
  }, [authStatus]);

  const initialFormState: {
    email: string;
    password: string;
  } = {
    email: '',
    password: ''
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleFieldChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const email = formData.email;
    const password = formData.password;

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
  };

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
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
