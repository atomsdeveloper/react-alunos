import * as types from '../types';

const initialState = {
  isLoggedIn: false,
  token: false,
  user: {},
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      console.log('Login Success: ', action.payload);
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
      };
    case types.LOGIN_SUCCESS:
      console.log('Login Success: ', action.payload);
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload.token,
        user: action.payload.user,
      };
    case types.LOGIN_FAILURE:
      console.log('Login Feilure: ', action.payload);
      return {
        ...state,
        isLoggedIn: false,
        token: '',
        user: {},
      };

    default:
      return state;
  }
}
