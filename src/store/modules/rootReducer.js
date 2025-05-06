// This file is responsible for combining all the reducers in the application.
import { combineReducers } from 'redux';

// Reducers
import ButtonClickReducer from './login/reducer';

export default combineReducers({
  login: ButtonClickReducer,
});
