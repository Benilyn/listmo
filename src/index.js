import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import Listmo from './components/listmo';
import store from './store';
import './index.css';

ReactDOM.render(
	<Provider store={store}>
		<Router>
     		<Listmo />
     	</Router>
	</Provider>,
  document.getElementById('root')
);
