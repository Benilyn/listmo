import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import {listmoReducer} from './reducers/reducers-index.js';
import {registerReducer} from './reducers/reducers-forms.js';
import {authReducer} from './reducers/reducers-auth.js';
import { composeWithDevTools } from 'redux-devtools-extension';




export default createStore(
    combineReducers({
        form: formReducer,
        listmoReducer,
        authReducer,
        registerReducer
    }),
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);
