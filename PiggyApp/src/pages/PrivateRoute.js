// PrivateRoute.js
import React from 'react';
import { Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';

const PrivateRoute = ({ component, ...args }) => {
  const WrappedComponent = withAuthenticationRequired(component);

  return <Route component={WrappedComponent} {...args} />;
};

export default PrivateRoute;
