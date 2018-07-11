import * as project_actions from '../actions/action-project.js';
import * as task_actions from '../actions/action-task.js';

const initialState = {
	projects: []
}; {/*initialState*/}

export const listmoReducer = (state=initialState, action) => {
	if (action.type === project_actions.ADD_PROJECT) {
		console.log(action);
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
			if (index !== parseInt(action.projectIndex, 10)) {
				return project;
			}
			console.log(action);
			return Object.assign({}, project, {
				projectTask: [...project.projectTask, {
					taskTitle: action.projectTask.taskTitle,
					taskDueDate: action.projectTask.taskDueDate,
					taskDetail: action.projectTask.taskDetail,
					taskProject: action.projectTask.taskProject
				}]
			});
		});
		return Object.assign({}, state, {
			projects
		});
	}

	if (action.type === project_actions.GET_PROJECT_SUCCESS) {
		console.log(action.projects);
		return Object.assign({}, state, {
			projects: action.projects
		})
	}

	if (action.type === task_actions.GET_TASK_SUCCESS) {
		console.log(action.tasks);
		return Object.assign({}, state, {
			tasks: action.tasks
		})
	}

	return state;

}
