import * as user_actions from '../actions/action-user.js';

const initialState = {
	user: []
};

export const registerReducer = (state=initialState, action) => {
	if(action.type === user_actions.ADD_USER) {
		return Object.assign({}, state, {
			user: [...state.user, {
				firstName: action.firstName,
				lastName: action.lastName,
				email: action.email,
				username: action.username
			}]
		});
	} {/*actions.ADD_USER*/}

	if(action.type === user_actions.CLEAR_USER) {
		return initialState;
	}
	return state;
}
