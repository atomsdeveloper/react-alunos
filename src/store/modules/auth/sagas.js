// Calling an API on button click using redux-saga
import { call, put, all, takeLatest } from 'redux-saga/effects';

// Toastify
import { toast } from 'react-toastify';

// Types
import * as types from '../types.js';

// Request function to simulate an API call
// This function simulates an API call that takes 2 seconds to complete
// const req = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('ok');
//     }, 600);
//   });

// Redux Saga with function* generator function
// This is a generator function that will be used in the saga middleware
function* ButtonLoginClickRequest({ payload }) {
  console.log('Saga: ', payload);
}

export default all([
  // This will watch for the BUTTON_CLICK_REQUEST action and call the ButtonLoginClickRequest function when it is dispatched
  takeLatest(types.LOGIN_REQUEST, ButtonLoginClickRequest),
]);
