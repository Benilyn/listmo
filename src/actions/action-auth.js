import jwtDecode from 'jwt-decode';
import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {saveAuthToken, clearAuthToken} from '../local-storage';

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = authToken => ({
    type: SET_AUTH_TOKEN,
    authToken
});

export const CLEAR_AUTH = 'CLEAR_AUTH';
export const clearAuth = isLoggedOut => ({
    type: CLEAR_AUTH,
    isLoggedOut
});

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const authRequest = () => ({
    type: AUTH_REQUEST
});

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSuccess = (authToken, isLoggedOut) => ({
    type: AUTH_SUCCESS,
    authToken,
    isLoggedOut
});

export const AUTH_ERROR = 'AUTH_ERROR';
export const authError = error => ({
    type: AUTH_ERROR,
    error
});


const storeAuthInfo = (authToken, dispatch) => {
  console.log('storeAuthInfo', authToken);
  if (authToken) {
    //const decodedToken = jwtDecode(authToken.authToken);
    //console.log(decodedToken);
    dispatch(authSuccess(authToken));
    saveAuthToken(authToken);
  }
  else {
    console.log('must login');
  }

};

export const loginUser = (userName, password) => dispatch => {
  dispatch(authRequest());
  return (
    fetch(`${API_BASE_URL}/login`, {
  		method: 'POST',
  		headers: {
  			'Content-Type': 'application/json'
  		},
  		body: JSON.stringify({
          	username: userName,
          	password
  		}) //body
  	}) //fetch
    .then(res => res.json())
    .then(res => storeAuthInfo(res.authToken, dispatch))
  	.catch(err => {
      console.log('testing if I make it this far');
      console.log(err);
      const {code} = err;
                const message =
                    code === 401
                        ? 'Incorrect username or password'
                        : 'Unable to login, please try again';
      console.log(err);
      dispatch(authError(err));
  		return Promise.reject(
          new SubmissionError({
              _error: message
          })
      ); //return Promise.reject
  	}) //.catch
  )	//return
}; //const loginUser

export const refreshAuthToken = () => (dispatch, getState) => {
    dispatch(authRequest());
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/auth/refresh`, {
        method: 'POST',
        headers: {
            // Provide our existing token as credentials to get a new one
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => res.json())
        .then(({authToken}) => storeAuthInfo(authToken, dispatch))
        .catch(err => {
            // We couldn't get a refresh token because our current credentials
            // are invalid or expired, or something else went wrong, so clear
            // them and sign us out
            dispatch(authError(err));
            dispatch(clearAuth());
            clearAuthToken(authToken);
        });
};
