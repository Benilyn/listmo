import * as actions from '../actions/action-index.js';

const initialState = {
	projects: [{
		title: 'Project 1',
		tasks: [{
			text: 'Task 1'
		}, {
			text: 'Task 2'
		}]
	}, {
		title: 'Project 2',
		tasks: [{
			text: 'Task A'
		}, {
			text: 'Task B'
		}]
	}]
}; {/*initialState*/}

export const listmoReducer = (state=initialState, action) => {
	if (action.type === actions.ADD_PROJECT) {
		return Object.assign({}, state, {
			projects: [...state.projects, {
				title: action.title,
				tasks: []
			}]
		}); 
	} {/*actions.ADD_PROJECT*/}

	if (action.type === actions.ADD_TASK) {
		let projects = state.projects.map((project, index) => {
			if (index !== action.projectIndex) {
				return project;
			}
			return Object.assign({}, project, {
				tasks: [...project.tasks, {
					text: action.text
				}] 
			});  
		}); 
		return Object.assign({}, state, {
			projects
		});	
	} 


	return state;
	
} 