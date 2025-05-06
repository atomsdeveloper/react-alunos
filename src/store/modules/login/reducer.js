import * as types from '../types';

const initialState = {
  value: '',
};

export default function ButtonClickReducer(state = initialState, action) {
  switch (action.type) {
    case types.BUTTON_CLICK:
      return {
        ...state,
        value: action.payload,
      };
    case types.BUTTON_CLICK_REQUEST:
      console.log('Case ConsoleLog: Requesting...');
      return {
        ...state,
        value: action.payload,
      };
    case types.BUTTON_CLICK_SUCCESS:
      console.log('Case ConsoleLog: Success!');
      return {
        ...state,
        value: action.payload,
      };
    case types.BUTTON_CLICK_FAILURE:
      console.log('Case ConsoleLog: Failure!');
      return {
        ...state,
        value: action.payload,
      };
    default:
      return {
        ...state,
        value: action.payload,
      };
  }
}
