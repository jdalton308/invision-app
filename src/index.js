
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import './css/app.scss';

import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import store from './redux/reducers';


ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('app') );