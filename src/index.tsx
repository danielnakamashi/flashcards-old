import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as Redux } from 'react-redux';
import store from 'Src/store';
import App from 'Containers/App';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Redux store={store}>
    <App />
  </Redux>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
