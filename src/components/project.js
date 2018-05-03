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
		const tasks = this.props.tasks.map((task, index) =>
			<li className="task-link" key={index}>
				<Link to={`/${index}`} {...task}>
					{task.text} {task.date}
				</Link>
			</li>

		);
		return (
			<div className="tasks-lists">
				<h2>{this.props.title}</h2>
				{tasks}
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
	title: ''
};

const mapStateToProps = (state, props) => {
	const projectId = props.match.params.projectId;
	console.log(state);
	const project = state.projects[projectId];
	return {
		projectId,
		projectName: project.title,
		tasks: Object.keys(project.tasks).map(taskId =>
			project.tasks[taskId]
		)
	}
}

export default connect(mapStateToProps)(Project);