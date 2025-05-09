// Calling an API on button click using redux-saga
import { call, put, all, takeLatest } from 'redux-saga/effects';

// Axios
import axios from '../../../services/axios.js';

// Types
import * as types from '../types.js';

// Actions
import * as Actions from './actions.js';

// Lodash
import get from 'lodash.get';

// Toastify
import { toast } from 'react-toastify';

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
  try {
    const response = yield call(axios.post, '/token', payload);
    yield put({
      type: types.LOGIN_SUCCESS,
      payload: response.data,
    });

    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    toast.success('Login realizado com sucesso.');
  } catch (error) {
    toast.error('Usuário e/ou Senha são inválidos.');
    yield put(Actions.ButtonLoginClickFailure());
  }
}

function* persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token');

  if (!token) return;

  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

export default all([
  // This will watch for the BUTTON_CLICK_REQUEST action and call the ButtonLoginClickRequest function when it is dispatched
  takeLatest(types.LOGIN_REQUEST, ButtonLoginClickRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
]);
