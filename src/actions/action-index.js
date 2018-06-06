import {API_BASE_URL} from '../config.js';

export const ADD_PROJECT = 'ADD_PROJECT';
export const addProject = project => ({
	type: ADD_PROJECT,
	project
}); {/*addProject*/}

export const ADD_TASK = 'ADD_TASK';
export const addTask = (projectTask, projectIndex) => ({
	type: ADD_TASK,
	projectTask,
	projectIndex
}); {/*addProject*/}

export const postProject = project => dispatch => {
	fetch(`${API_BASE_URL}/project`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			projectTitle: project.projectTitle,
			projectDueDate: project.projectDueDate,
			projectDetail: project.projectDetail,
			projectTask: project.projectTask
		})
	})
	.then(res => res.json())
	.then(success => dispatch(addProject(success)))
	.catch(err => {
		console.log(err);
		return Promise.reject(err);
	}); //fetch(`${API_BASE_URL}/project`
}; //const postProject


export const getProject = () => dispatch => {
	fetch(`${API_BASE_URL}/project`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	})
	.then(res => res.json())
	.then(projects => dispatch(getProjectSuccess(projects)))
	.catch(err => {
		console.log(err);
		return Promise.reject(err);
	}); //fetch(`${API_BASE_URL}/project`
}; //const postProject

export const GET_PROJECT_SUCCESS = 'GET_PROJECT_SUCCESS';
export const getProjectSuccess = projects => ({
	type: GET_PROJECT_SUCCESS,
	projects
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
