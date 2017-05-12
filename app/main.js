import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { createStore } from 'redux';
import rootReducer from './reducers';
import App from './components/App';

let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-mount')
);