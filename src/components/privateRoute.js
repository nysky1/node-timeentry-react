import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import appConfig from '../config/appConfig';
import hasToken from '../helpers/token'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      hasToken() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: appConfig.UNAUTHORIZED_ENDPOINT,
            state: { from: props.location }
          }}
        />
      )
    }
  />
);
 
export default PrivateRoute;