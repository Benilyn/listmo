import * as actions from '../actions/action-index.js';

const initialState = {
	projects: [{
		projectTitle: 'Project 1',
		projectDueDate: 'Dec. 21, 2018',
		projectDetail: 'details for Project1',
		projectTask: [{
			taskTitle: 'Task 1',
			taskDue: 'Nov 30, 2018',
			taskDetail: 'Details for Task1, Project1'
		}, {
			taskTitle: 'Task 2',
			taskDue: 'Dec 31, 2018',
			taskDetail: 'Details for Task2, Project1'
		}]
	}, {
		projectTitle: 'Project 2',
		projectDueDate: 'Jan. 31, 2019',
		projectDetail: 'details for Project2',
		projectTask: [{
			taskTitle: 'Task A',
			taskDue: 'Jan 31, 2019',
			taskDetail: 'Details for Task1, Project2'
		}, {
			taskTitle: 'Task B',
			taskDue: 'Feb 28, 2019',
			taskDetail: 'Details for Task2, Project2'
		}]
	}]
}; {/*initialState*/}

export const listmoReducer = (state=initialState, action) => {
	if (action.type === actions.ADD_PROJECT) {
		console.log(action);
		return Object.assign({}, state, {
			projects: [...state.projects, {
				projectTitle: action.project.projectTitle,
				projectDueDate: action.project.projectDuedate,
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
					taskDue: action.projectTask.taskDue,
					taskDetail: action.projectTask.taskDetail
				}]
			});
		});
		return Object.assign({}, state, {
			projects
		});
	}


	return state;

}
