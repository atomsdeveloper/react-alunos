// This file is responsible for combining all the reducers in the application.
import { combineReducers } from 'redux';

// Reducers
import consoleLog from './login/reducer';

export default combineReducers({
  login: consoleLog,
});
