import * as project_actions from '../actions/action-project.js';
import * as task_actions from '../actions/action-task.js';

const initialState = {
	projects: []
}; {/*initialState*/}

export const listmoReducer = (state=initialState, action) => {
	if (action.type === project_actions.ADD_PROJECT) {
		return Object.assign({}, state, {
			projects: [...state.projects, {
				id: action.project.id,
				projectTitle: action.project.projectTitle,
				projectDueDate: action.project.projectDueDate,
				projectDetail: action.project.projectDetail,
				projectTask: [],
				user: action.project.user
			}]
		});
	} {/*actions.ADD_PROJECT*/}

	if (action.type === task_actions.ADD_TASK) {
		let projects = state.projects.map((project, index) => {
			if (project._id === action.projectId) {
				console.log(action,project);
				return Object.assign({}, project, {
					projectTask: [...project.projectTask, action.projectTask]
				});
			} else {
				return project
			}
		});
		return Object.assign({}, state, {
			projects
		});
	}

	if (action.type === project_actions.GET_PROJECT_SUCCESS) {
		return Object.assign({}, state, {
			projects: action.projects
		})
	}

	if (action.type === task_actions.GET_TASK_SUCCESS) {
		return Object.assign({}, state, {
			tasks: action.tasks
		})
	}

	return state;

}
