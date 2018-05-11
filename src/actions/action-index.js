export const ADD_PROJECT = 'ADD_PROJECT';
export const addProject = title => ({
	type: ADD_PROJECT,
	title
}); {/*addProject*/}

export const ADD_TASK = 'ADD_TASK';
export const addTask = (projectTask, projectIndex) => ({
	type: ADD_TASK,
	projectTask,
	projectIndex
}); {/*addProject*/}
