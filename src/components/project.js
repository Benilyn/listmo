import React from 'react';
import {connect} from 'react-redux';

import Task from './task';
import AddForm from './add-form';
import {addTask} from '../actions/action-index';
import './project.css';

export class Project extends React.Component {
	addTask(text) {
		this.props.dispatch(addTask(text, this.props.index));
	}

	render() {
		const tasks = this.props.tasks.map((task, index) =>
			<li className="task-name" key={index}>
				<Task index={index} {...task}/>
			</li>
		);
		return (
			<div className="tasks-lists">
				<h2>{this.props.title}</h2>
				{tasks}
				<li className="add-task">
					<AddForm
						type="task"
						onAdd={text => this.addTask(text)}
					/>
				</li>
			</div>
		)
	}

	
}

Project.defaultProps = {
	title: ''
};


export default connect()(Project);