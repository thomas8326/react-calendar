import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import storage from './reducers';
import './index.css';
import App from './App';

const store = createStore(storage, applyMiddleware(ReduxThunk));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

