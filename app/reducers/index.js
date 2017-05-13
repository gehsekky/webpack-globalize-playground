import Globalize from 'globalize';

Globalize.formatMessage('message');

const initialState = {
  locale: 'en-US',
  message: ''
};

export const setLocale = (locale) => {
  return {
    type: 'SET_LOCALE',
    payload: { locale }
  };
}

export const setMessage = (message) => {
  return {
    type: 'SET_MESSAGE',
    payload: { message }
  };
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOCALE':
      Globalize.locale(action.payload.locale);

      return Object.assign({}, state, {
        locale: action.payload.locale
      });
    case 'SET_MESSAGE':
      return Object.assign({}, state, {
        message: Globalize.formatMessage('message')
      });
    default:
      return state;
  }
}
