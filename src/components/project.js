import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Task from './task';
import AddForm from './add-form';
import {addTask} from '../actions/action-index';
import './project.css';

export class Project extends React.Component {
	addTask(text) {
		this.props.dispatch(addTask(text, this.props.projectId));
	}

	render() {
		const projectTask = this.props.projectTask.map((taskTitle, index) =>
			<li className="task-name" key={index}>
				<Task {...taskTitle} />
			</li>

		);
		return (
			<div className="tasks-lists">
				<h2>{this.props.projectName}</h2>
				<h3>{this.props.title}</h3>
				{projectTask}
				<div className="add-task">
					<AddForm
						type="task"
						onAdd={text => this.addTask(text)}
					/>
				</div>
			</div>
		)
	}

	
}

Project.defaultProps = {
	title: 'Task List'
};

const mapStateToProps = (state, props) => {
	const projectId = props.match.params.projectId;
	console.log(state);
	const project = state.projects[projectId];
	return {
		projectId,
		projectName: project.title,
		projectTask: Object.keys(project.projectTask).map(projectTaskId =>
			project.projectTask[projectTaskId]
		)
	}
}

export default connect(mapStateToProps)(Project);