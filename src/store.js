import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import {listmoReducer} from './reducers/reducers-index.js';
import {registerReducer} from './reducers/reducers-forms.js';

export default createStore(
    combineReducers({
        form: formReducer,
        listmoReducer
    }),
    applyMiddleware(thunk)
);
