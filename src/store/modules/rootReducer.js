// This file is responsible for combining all the reducers in the application.
import { combineReducers } from 'redux';

// Reducers
import auth from './auth/reducer';

export default combineReducers({
  auth,
});
