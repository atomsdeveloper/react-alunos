// Calling an API on button click using redux-saga
import { call, put, all, takeLatest } from 'redux-saga/effects';

// Toastify
import { toast } from 'react-toastify';

// Types
import * as types from '../types.js';

// Request function to simulate an API call
// This function simulates an API call that takes 2 seconds to complete
const req = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('ok');
    }, 600);
  });

// Redux Saga with function* generator function
// This is a generator function that will be used in the saga middleware
function* ButtonClickRequest() {
  try {
    const response = yield call(req);
    yield put({ type: types.BUTTON_CLICK_SUCCESS });
    toast.success('Success: ' + response, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    // Log the response to the console
    console.log(response);
  } catch (error) {
    yield put({ type: types.BUTTON_CLICK_FAILURE });
    toast.error('Error: ' + error.message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    // Log the error to the console
    console.error(error);
  }
}

export default all([
  // This will watch for the BUTTON_CLICK_REQUEST action and call the ButtonClickRequest function when it is dispatched
  takeLatest(types.BUTTON_CLICK_REQUEST, ButtonClickRequest),
]);
