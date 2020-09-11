import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { IntlProvider } from 'react-intl';
import en_US from './i18n/en_US.js';
import zh_TW from './i18n/zh_TW.js';

import './index.css';
import App from './App';
import storage from './redux';


const Root = () => {
  const store = createStore(storage, applyMiddleware(ReduxThunk));
  const [locale, setLocale] = useState(navigator.language)

  const messages = locale.includes('zh') ? zh_TW : en_US;

  return (
    <Provider store={store}>
      <React.StrictMode>
        <IntlProvider locale={locale} key={locale} defaultLocale="en" messages={messages}>
          <App setLocale={setLocale} />
        </IntlProvider>
      </React.StrictMode>
    </Provider>
  )
}

render(
  <Root />,
  document.getElementById('root'),
);

