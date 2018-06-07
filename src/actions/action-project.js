import {API_BASE_URL} from '../config.js';

// addProject
export const ADD_PROJECT = 'ADD_PROJECT';
export const addProject = project => ({
	type: ADD_PROJECT,
	project
});

// getProjectSuccess
export const GET_PROJECT_SUCCESS = 'GET_PROJECT_SUCCESS';
export const getProjectSuccess = projects => ({
	type: GET_PROJECT_SUCCESS,
	projects
});

// postProject
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
		}) //body: JSON.stringify
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
