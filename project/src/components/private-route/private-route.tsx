import { Navigate } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../route';

type PrivateRouteProps = {
    authStatus: AuthStatus;
    children: JSX.Element;
};

export const PrivateRoute = (props: PrivateRouteProps): JSX.Element => {
  const {authStatus, children} = props;
  return (
    authStatus === AuthStatus.Auth ? children : < Navigate to={AppRoute.SignIn} />
  );
};
