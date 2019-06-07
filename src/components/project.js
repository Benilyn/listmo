import React from 'react';
import {connect} from 'react-redux';
import {Redirect, withRouter, Link} from 'react-router-dom';

import Task from './task';
import AddTask from './add-task';
import EditTask from './edit-task';
import {addTask, deleteTask} from '../actions/action-task.js';
import './project.css';
import {deleteProject, getProject} from '../actions/action-project.js';


let editProject;
export class Project extends React.Component {


	addTask(values) {
		let projectTask = {
			taskTitle: values.taskTitle,
			taskDueDate: "",
			taskDetail: "",
			taskProject: this.props.projectId
		}
		this.props.dispatch(addTask(projectTask, this.props.projectId));
	}

	deleteProject(editProject) {
		console.log('delete project ', editProject.id);
		this.props.dispatch(deleteProject(editProject.id));
		const { history } = this.props;
		history.push('/project-list');
//		<Redirect to="/project-list" />

	}

	componentDidMount() {
		//this.props.dispatch(getProject(this.props.user));
		if(localStorage.getItem('authToken')) {
			console.log('authToken exists');
			this.props.dispatch(getProject(localStorage.getItem('authToken')))
		}
	}


	deleteTask(task) {
		console.log('delete task ', task._id);
		this.props.dispatch(deleteTask(task._id, this.props.user));
	}

	render() {
		const projectTask = this.props.projectTask.map((task, index) =>
			<li className="task-name" key={index}>
				<Task {...task} />
				<div className="task-buttons">
					<button id="delete-task"
							onClick={() => {
								if (window.confirm(`Are you sure you want to delete this task?`))
								this.deleteTask(task)}}>
							Delete
					</button>
					<Link to={`/task/edit/${this.props.projectId}/${task._id}`}>
						<button id="edit-task">
							Edit
						</button>
					</Link>
				</div>
			</li>

		);
		return (
			<div className="project-detail">
				<div className="project-info">
					<h2>{this.props.projectTitle}</h2>
					<span>Due: {this.props.projectDueDate}</span><br />
					<span>{this.props.projectDetail}</span><br />
				</div>
				<div className="task-list-container">
					<ul className="task-list">
						<h3>{this.props.title}</h3>
						{projectTask}
					</ul>

				<div className="task-button-container">
					<div className="add-task">
						<AddTask
							type="task"
							project={editProject}
							onAdd={taskTitle => this.addTask(taskTitle)} {...this.props} />
					</div>
				</div>
				</div>
			</div>
		)
	}


}

Project.defaultProps = {
	title: 'Task List'
};

const mapStateToProps = (state, props) => {
	const {projectId} = props.match.params;
	const project = state.listmoReducer.projects.filter(function(item) {
			return item._id === projectId
		})[0] || {};
	editProject = project;
	console.log(project);
	return {
		user: state.authReducer.currentUser,
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
