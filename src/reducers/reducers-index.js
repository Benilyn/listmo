import * as actions from '../actions/action-index.js';

const initialState = {
	projects: []
}; {/*initialState*/}

export const listmoReducer = (state=initialState, action) => {
	if (action.type === actions.ADD_PROJECT) {
		console.log(action);
		return Object.assign({}, state, {
			projects: [...state.projects, {
				projectTitle: action.project.projectTitle,
				projectDueDate: action.project.projectDueDate,
				projectDetail: action.project.projectDetail,
				projectTask: []
			}]
		});
	} {/*actions.ADD_PROJECT*/}

	if (action.type === actions.ADD_TASK) {
		let projects = state.projects.map((project, index) => {
			if (index !== parseInt(action.projectIndex, 10)) {
				return project;
			}
			console.log(action);
			return Object.assign({}, project, {
				projectTask: [...project.projectTask, {
					taskTitle: action.projectTask.taskTitle,
					taskDueDate: action.projectTask.taskDueDate,
					taskDetail: action.projectTask.taskDetail
				}]
			});
		});
		return Object.assign({}, state, {
			projects
		});
	}

	if (action.type === actions.GET_PROJECT_SUCCESS) {
		console.log(action.projects);
		return Object.assign({}, state, {
			projects: action.projects
		})
	}

	return state;

}
