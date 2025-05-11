import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks/use-app-selector';
import Spinner from '../spinner/spinner';
import { getAuthoriztionStatus, getIsAuthBeingChecked } from '../../store/slices/user-data/selectors';

type PrivateRouteProps = {
  children: JSX.Element;
};

export default function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { children } = props;
  const authorizationStatus = useAppSelector(getAuthoriztionStatus);
  const isAuthBeingChecked = useAppSelector(getIsAuthBeingChecked);

  if(isAuthBeingChecked) {
    return <Spinner />;
  }

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Root} />
  );
}
