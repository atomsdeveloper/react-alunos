const initialState = {
  value: '',
};

export default function consoleLog(state = initialState, action) {
  switch (action.type) {
    case 'BUTTON_CLICK':
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
}
