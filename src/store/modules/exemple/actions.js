// Types
import * as types from '../types';

// Action Creators
export function ButtonClick() {
  return {
    type: types.BUTTON_CLICK,
    payload: 'Olá Mundo!',
  };
}
export function ButtonClickRequest() {
  return {
    type: types.BUTTON_CLICK_REQUEST,
    payload: 'Requesting...',
  };
}
export function ButtonClickSuccess() {
  return {
    type: types.BUTTON_CLICK_SUCCESS,
    payload: 'Success!',
  };
}
export function ButtonClickFailure() {
  return {
    type: types.BUTTON_CLICK_FAILURE,
    payload: 'Failure!',
  };
}
