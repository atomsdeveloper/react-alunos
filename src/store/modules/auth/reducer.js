import * as types from '../types';

const initialState = {
  isLoggedIn: false,
  token: null,
  user: {},
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    // AUTH
    case types.LOGIN_REQUEST: {
      const newState = { ...state };

      newState.isLoading = true;

      return newState;
    }

    case types.LOGIN_SUCCESS: {
      const newState = { ...state };

      newState.isLoggedIn = true;
      newState.isLoading = false;
      newState.token = action.payload.data.token;
      newState.user = action.payload.data.user;

      return newState;
    }

    case types.LOGIN_FAILURE: {
      delete axios.defaults.headers.Authorization;
      const newState = { ...initialState };

      return newState;
    }

    // REGISTER
    case types.REGISTER_REQUEST: {
      console.log('REDUCER -> Register Request', state);
      const newState = { ...state };

      newState.isLoading = true;

      return newState;
    }
    case types.REGISTER_UPDATE_SUCCESS: {
      console.log('REDUCER -> Register Update', state);
      const newState = { ...state };

      newState.user.name = action.payload.name;
      newState.user.email = action.payload.email;
      newState.user.isLoading = false;

      return newState;
    }
    case types.REGISTER_CREATED_SUCCESS: {
      const newState = { ...state };

      newState.user.isLoading = false;

      return newState;
    }
    case types.REGISTER_FAILURE: {
      const newState = { ...state };

      newState.isLoading = false;

      return newState;
    }

    default:
      return state;
  }
}
