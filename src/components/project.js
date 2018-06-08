import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import Task from './task';
import AddTask from './add-task';
import {addTask} from '../actions/action-task.js';
import './project.css';
import {deleteProject, getProject} from '../actions/action-project.js';


let editProject;
export class Project extends React.Component {


	addTask(taskTitle) {
		console.log(taskTitle);
		this.props.dispatch(addTask(taskTitle, this.props.projectId));
	}

	deleteProject(editProject) {
		console.log('delete project ', editProject.id);
		this.props.dispatch(deleteProject(editProject.id));
		const { history } = this.props;
		history.push('/project-list');
//		<Redirect to="/project-list" />

	}

	componentDidMount() {
		this.props.dispatch(getProject());
	}

	render() {
		const projectTask = this.props.projectTask.map((taskTitle, index) =>
			<li className="task-name" key={index}>
				<Task {...taskTitle} />
			</li>

		);
		return (
			<div className="tasks-lists">
				<div className="project-info">
					<h2>{this.props.projectTitle}</h2>
					<span>Due: {this.props.projectDueDate}</span><br />
					<span>{this.props.projectDetail}</span><br />
					<button id="delete-project"
							onClick={() => this.deleteProject(editProject)}>
							Delete
					</button>
				</div>
				<h3>{this.props.title}</h3>
				{projectTask}
				<div className="add-task">
					<AddTask
						type="task"
						project={editProject}
						onAdd={taskTitle => this.addTask(taskTitle)}
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
	const project = state.listmoReducer.projects[projectId] || {};
//	console.log(project);
	editProject = project;
	return {
		projectId,
		projectTitle: project.projectTitle,
		projectDueDate: project.projectDueDate,
		projectDetail: project.projectDetail,
		projectTask: project.projectTask ? Object.keys(project.projectTask).map(projectTaskId =>
			project.projectTask[projectTaskId]
		): []
	}
}

export default withRouter(connect(mapStateToProps)(Project));
