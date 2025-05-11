import classNames from 'classnames';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getAuthoriztionStatus } from '../../store/slices/user-data/selectors';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

type BookmarkProps = {
  className: string;
  width: number;
  height: number;
  isFavorite?: boolean;
  onClick: () => void;
}

export default function Bookmark({ className, width, height, isFavorite, onClick }: BookmarkProps): JSX.Element {
  const navigate = useNavigate();
  const isAuthorized = useAppSelector(getAuthoriztionStatus) === AuthorizationStatus.Auth;
  const handleClick = useCallback(() => {
    if(!isAuthorized) {
      navigate(AppRoute.Login);
      return;
    }

    onClick();
  },[onClick, isAuthorized]);

  return (
    <button className={classNames(
      { [`${className}__bookmark-button--active`]: isFavorite },
      `${className}__bookmark-button button`)} type="button" onClick={handleClick}
    >
      <svg className={`${className}__bookmark-icon`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}
