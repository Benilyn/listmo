import * as actions from '../actions/action-index.js';

const initialState = {
	projects: [{
		title: 'Project 1',
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
		title: 'Project 2',
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
		return Object.assign({}, state, {
			projects: [...state.projects, {
				title: action.title,
				projectTask: []
			}]
		}); 
	} {/*actions.ADD_PROJECT*/}

	if (action.type === actions.ADD_TASK) {
		let projects = state.projects.map((project, index) => {
			if (index !== parseInt(action.projectIndex, 10)) {
				return project;
			}
			return Object.assign({}, project, {
				projectTask: [...project.projectTask, {
					taskTitle: action.taskTitle,
					taskDue: action.taskDue,
					taskDetail: action.taskDetail
				}] 
			});  
		}); 
		return Object.assign({}, state, {
			projects
		});	
	} 


	return state;
	
} 