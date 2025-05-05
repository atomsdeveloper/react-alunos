// React Router
import { Route, Redirect } from 'react-router-dom';

// Types
import PropTypes from 'prop-types';

export default function MyRoute({
  component: Component,
  isClosed = false,
  ...rest
}) {
  const isLoggedIn = true; // Replace with your actual authentication logic

  if (isClosed && !isLoggedIn) {
    return (
      // Redirect to login page if the route is closed and user is not logged in
      // Pass the current location to the login page so it can redirect back after login
      // This is useful for when the user tries to access a protected route directly
      // and needs to be redirected to the login page first
      <Redirect
        to={{ pathname: '/login', state: { prevPath: rest.location.pathname } }}
      />
    );
  }
  return <Route {...rest} component={Component} />;
}
MyRoute.propTypes = {
  component: PropTypes.oneOf([PropTypes.elementType, PropTypes.func])
    .isRequired,
  isClosed: PropTypes.bool,
};
