const initialState = {
  locale: 'en-US'
};

export const setLocale = (locale) => {
  return {
    type: 'SET_LOCALE',
    payload: {
      locale
    }
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOCALE':
      return Object.assign({}, state, {
        locale: action.payload.locale
      });
    default:
      return state;
  }
}
