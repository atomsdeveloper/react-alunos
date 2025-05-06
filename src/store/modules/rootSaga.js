// This file is responsible for combining all the sagas in the application
// and exporting a single root saga function that can be used by the Redux store.
import { all } from 'redux-saga/effects';

// Importing the login saga from the login module
import loginSaga from './login/sagas.js';

// This is the root saga that combines all the sagas in the application
// It uses the `all` effect from redux-saga to run multiple sagas in parallel
export default function* rootSaga() {
  yield all([loginSaga]);
}
