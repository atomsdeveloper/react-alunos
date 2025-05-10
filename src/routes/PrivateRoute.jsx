// React Router
import { Route, Navigate, useLocation } from 'react-router-dom';

// Types
import PropTypes from 'prop-types';

// Redux
import { useSelector } from 'react-redux';

export default function PrivateRoute({ children, isClosed = false, ...rest }) {
  const location = useLocation();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (isClosed && !isLoggedIn) {
    return (
      // Redirect to login page if the route is closed and user is not logged in
      // Pass the current location to the login page so it can redirect back after login
      // This is useful for when the user tries to access a protected route directly
      // and needs to be redirected to the login page first
      <Navigate
        to={{ pathname: '/login', state: { prevPath: location.pathname } }}
      />
    );
  }
  return children;
}
PrivateRoute.propTypes = {
  children: PropTypes.oneOf([PropTypes.elementType, PropTypes.func]).isRequired,
  isClosed: PropTypes.bool,
};
