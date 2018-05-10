import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {listmoReducer} from './reducers/reducers-index.js';

export default createStore(listmoReducer, applyMiddleware(thunk));

