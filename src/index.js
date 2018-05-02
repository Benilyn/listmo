import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Listmo from './components/listmo';
import store from './store';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
      <Listmo />
  </Provider>,
  document.getElementById('root')
);
