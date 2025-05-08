// Types
import * as types from '../types';

// Action Creators
export function ButtonLoginClickRequest(payload) {
  return {
    type: types.LOGIN_REQUEST,
    payload,
  };
}
export function ButtonLoginClickSuccess(payload) {
  return {
    type: types.LOGIN_SUCCESS,
    payload,
  };
}
export function ButtonLoginClickFailure(payload) {
  return {
    type: types.LOGIN_FAILURE,
    payload,
  };
}
