import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css'

import store from './app/store'

ReactDOM.render(
    <Provider store={store}>
      <Routes>
        <App />
      </Routes>
    </Provider>,
  document.getElementById('root')
);
