import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import App from './js/components/app';
import Reducers from './js/reducers/index';
import './css/index.scss';

const store = createStore(Reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-container'),
);

if (typeof (module.hot) !== 'undefined') {
  module.hot.accept();
}
