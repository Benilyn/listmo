import React from 'react';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';

import Task from './task';
import AddTask from './add-task';
import {addTask, deleteTask} from '../actions/action-task.js';
import '../css/project.css';
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
		this.props.dispatch(deleteProject(editProject.id));
		const { history } = this.props;
		history.push('/project-list');

	}

	componentDidMount() {
		if(localStorage.getItem('authToken')) {
			this.props.dispatch(getProject(localStorage.getItem('authToken')))
		}
	}


	deleteTask(task) {
		this.props.dispatch(deleteTask(task._id));
	}

	render() {
		const projectTask = this.props.projectTask.map((task, index) =>
			<li className="task-name" key={index}>
				<Task {...task} />
				<div className="task-list-buttons">
					<button id="delete-task"
							onClick={() => {
								console.log(task);
								if (window.confirm(`Are you sure you want to delete this task?`))
								this.deleteTask(task)}}>
							Delete
					</button>
					<button id="edit-task">
						<Link to={`/task/edit/${task._id}`}>
							Edit
						</Link>
					</button>
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
				<div className="task-list">
					<h3>{this.props.title}</h3>
					<ul className="task-list-container">	
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
	return {
		user: state.authReducer.currentUser,
		projectId,
		projectTitle: project.projectTitle,
		projectDueDate: project.projectDueDate,
		projectDetail: project.projectDetail,
		projectTask: project.projectTask ? Object.keys(project.projectTask).map(projectTask =>
			project.projectTask[projectTask]
		): []
	}
}

export default withRouter(connect(mapStateToProps)(Project));
