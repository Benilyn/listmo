import {API_BASE_URL} from '../config.js';
import {addProject} from '../actions/action-project.js';

export const ADD_TASK = 'ADD_TASK';
export const addTask = (projectTask, projectIndex) => ({
	type: ADD_TASK,
	projectTask,
	projectIndex
}); {/*addProject*/}

export const postTask = task => dispatch => {
	fetch(`${API_BASE_URL}/task`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			taskTitle: task.taskTitle,
			taskDueDate: task.taskDueDate,
			taskDetail: task.taskDetail,
			taskProject: task.taskProject
		})
	})
	.then(res => res.json())
	.then(success => dispatch(addProject(success)))
	.catch(err => {
		console.log(err);
		return Promise.reject(err);
	}); //fetch(`${API_BASE_URL}/task`
}; //const postTask
