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
	console.log(project);
	fetch(`${API_BASE_URL}/project`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${localStorage.getItem('authToken')}`
		},
		body: JSON.stringify({
			projectTitle: project.projectTitle,
			projectDueDate: project.projectDueDate,
			projectDetail: project.projectDetail,
			projectTask: project.projectTask
		}) //body: JSON.stringify
	}) //fetch(`${API_BASE_URL}/project`
	.then(res => res.json())
	.then(success => dispatch(addProject(success)))
	.catch(err => {
		console.log(err);
		return Promise.reject(err);
	}); //.catch
}; //const postProject

// getProject
export const getProject = (authToken) => dispatch => {
	fetch(`${API_BASE_URL}/project/user`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${localStorage.getItem('authToken')}`
		}
	}) //fetch(`${API_BASE_URL}/project`
	.then(res => res.json())
	.then(projects => dispatch(getProjectSuccess(projects)))
	.catch(err => {
		console.log(err);
		return Promise.reject(err);
	}); //catch
}; //const postProject

// deleteProject
export const deleteProject = (project, user) => dispatch => {
	fetch(`${API_BASE_URL}/project/${project}`, {
		method: 'DELETE'
	}) //fetch
	.then(res => dispatch(getProject(user)))
	.catch(err => {
		console.log(err);
		return Promise.reject(err);
	}); //.catch
}; //const postProject

//editProject
export const editProject = (project, user) => dispatch => {
	console.log(project);
	fetch(`${API_BASE_URL}/project/${project.id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${localStorage.getItem('authToken')}`
		},
		body: JSON.stringify({
			id: project.id,
			projectTitle: project.projectTitle,
			projectDueDate: project.projectDueDate,
			projectDetail: project.projectDetail,
			projectTask: project.projectTask
		}) //body: JSON.stringify
	}) //fetch (`${API_BASE_URL}/project/${project}`
		.then(res => res.json())
		.then(res => dispatch(getProject(user)))
		.catch(err => {
			console.log(err);
			return Promise.reject(err);
		}); //.catch


}; //editProject
