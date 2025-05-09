// Types
import * as types from '../types';

// AUTH
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
// REGISTER
export function ButtonRegisterClickRequest(payload) {
  return {
    type: types.REGISTER_REQUEST,
    payload,
  };
}
export function ButtonRegisterUpdateClickSuccess(payload) {
  return {
    type: types.REGISTER_UPDATE_SUCCESS,
    payload,
  };
}
export function ButtonRegisterCreatedClickSuccess(payload) {
  return {
    type: types.REGISTER_CREATED_SUCCESS,
    payload,
  };
}
export function ButtonRegisterClickFailure(payload) {
  return {
    type: types.REGISTER_FAILURE,
    payload,
  };
}
