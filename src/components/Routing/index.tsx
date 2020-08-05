import React, { FC } from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';

type Props = RouteProps;

const PrivateRoute: FC<Props> = ({
  ...props
}) => {
  const client = true;

  return !client ? (
    <Redirect to={'/cadastre-se'} />
  ) : (
    <Route {...props} />
  );
};

export default PrivateRoute;
