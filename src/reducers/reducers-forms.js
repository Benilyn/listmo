import * as actions from '../actions/action-index.js';

const initialState = {
	user: [{
		firstName: '',
		lastName: '',
		email: '',
		username: ''
	}]
};

export const registerReducer = (state=initialState, action) => {
	if(action.type === actions.ADD_USER) {
		return Object.assign({}, state, {
			user: [...state.user, {
				firstName: action.firstName,
				lastName: action.lastName,
				email: action.email,
				username: action.username
			}]
		}); 
	} {/*actions.ADD_USER*/}
}