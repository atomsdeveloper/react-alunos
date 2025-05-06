// Types
import * as types from '../types';

export function ButtonClick() {
  return {
    type: types.BUTTON_CLICK,
    payload: 'Olá Mundo!',
  };
}
