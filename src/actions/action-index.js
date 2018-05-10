export const ADD_PROJECT = 'ADD_PROJECT';
export const addProject = title => ({
	type: ADD_PROJECT,
	title
}); {/*addProject*/}

export const ADD_TASK = 'ADD_TASK';
export const addTask = (text, projectIndex) => ({
	type: ADD_TASK,
	text,
	projectIndex
}); {/*addProject*/}

export const ADD_USER = 'ADD_USER';
export const addUser = user => ({
	type: ADD_USER,
	user
}); {/*addUser*/}
