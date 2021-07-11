import React from 'react';
import { Route } from 'react-router-dom';
import { PublicLayout } from '../layouts';

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(matchProps) => (
      <PublicLayout>
        <Component {...matchProps} />
      </PublicLayout>
    )}
  />
);

export default PublicRoute;
