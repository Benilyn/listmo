import {API_BASE_URL} from '../config.js';
import {addProject, getProject} from '../actions/action-project.js';

export const ADD_TASK = 'ADD_TASK';
export const addTask = (projectTask, projectId) => ({
	type: ADD_TASK,
	projectTask,
	projectId
}); {/*addProject*/}

// getTaskSuccess
export const GET_TASK_SUCCESS = 'GET_TASK_SUCCESS';
export const getTaskSuccess = tasks => ({
	type: GET_TASK_SUCCESS,
	tasks
});

export const postTask = (task, cb) => dispatch => {
	console.log(task);
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
	.then(success => cb())
	.catch(err => {
		console.log(err);
		return Promise.reject(err);
	}); //fetch(`${API_BASE_URL}/task`
}; //const postTask

// getTask
export const getTask = () => dispatch => {
	fetch(`${API_BASE_URL}/task`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	}) //fetch(`${API_BASE_URL}/task`
	.then(res => res.json())
	.then(tasks => dispatch(getTaskSuccess(tasks)))
	.catch(err => {
		console.log(err);
		return Promise.reject(err);
	}); //catch
}; //const getTask

// deleteTask
export const deleteTask = (taskId, user) => dispatch => {
	fetch(`${API_BASE_URL}/task/${taskId}`, {
		method: 'DELETE'
	}) //fetch
	.then(res => dispatch(getProject(user)))
	.catch(err => {
		console.log(err);
		return Promise.reject(err);
	}); //.catch
}; //const deleteTask

//editTask
export const editTask = (task, user) => dispatch => {
	fetch(`${API_BASE_URL}/task/${task.id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			id: task.id,
			taskTitle: task.taskTitle,
			taskDueDate: task.taskDueDate,
			taskDetail: task.taskDetail
		}) //body: JSON.stringify
	}) //fetch (`${API_BASE_URL}/task/${taskId}`
		.then(res => res.json())
		.then(res => dispatch(getProject(user)))
		.catch(err => {
			console.log(err);
			return Promise.reject(err);
		}); //.catch


}; //editTask
