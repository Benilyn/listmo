import {API_BASE_URL} from '../config.js';

export const ADD_USER = 'ADD_USER';
export const addUser = user => ({
	type: ADD_USER,
	user
}); //const addUser


export const postUser = user => dispatch => {
	fetch(`${API_BASE_URL}/user`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			firstName: user.firstName,
        	lastName: user.lastName,
        	email: user.email,
        	userName: user.userName,
        	password: user.password
		})
	})
	.then(res => res.json())
	.then(success => dispatch(addUser(success)))
	.catch(err => {
		console.log(err);
		return Promise.reject(err);
	});
};
