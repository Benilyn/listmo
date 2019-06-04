import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {API_BASE_URL} from '../config.js';

import './project-list.css';
import Project from './project';
import AddProject from './add-project';
import {addProject, getProject , deleteProject, editProject} from '../actions/action-project.js';

export class ProjectList extends React.Component {

	componentDidMount() {
// need to remove setTimeout, used only so we can proceed with finishing project
	//	setTimeout(() => {
			if(localStorage.getItem('authToken')) {
				this.props.dispatch(getProject(localStorage.getItem('authToken')))
			}
	//	}, 500);


	} //*componentDidMount

	addProject(projectTitle) {
		this.props.dispatch(addProject(projectTitle));
	} //addProject(projectTitle)

	deleteProject(project) {
		console.log('delete project ', project._id);
		this.props.dispatch(deleteProject(project._id, this.props.user));
	}



	render() {
		let projectList;
		console.log(this.props.projects);
		if (this.props.projects.length) {
		projectList = this.props.projects
//					.sort(function(a, b) {
//					return a.id - b.id; })
			.map((project, index) => {
			return(
				<li className="project-link" key={index}>
					<Link to={`/project-list/${project._id}`}>
						{project.projectTitle}
					</Link>
					<div className="project-list-buttons">
						<button id="delete-project"
									onClick={() => {
										if (window.confirm(`Are you sure you want to delete this Project?`))
										this.deleteProject(project)}}>
								Delete
						</button>
						<Link to={`/project-list/edit/${project._id}`}>
							<button id="edit-project">
								Edit
							</button>
						</Link>
					</div>

				</li>
			) //return
		}) //*projectList
	}
		return (
			<div className="project-list">
				<h3> Project </h3>
				<ul className="project-container">
					{projectList}
				</ul>
				<div className="add-project">
					<AddProject
						type="project"
						onAdd={projectTitle => this.addProject(projectTitle)}
					/>
				</div>
			</div>
		); {/*return*/}
	}
}

ProjectList.defaultProps = {
    title: 'Project List'
};

const mapStateToProps = state => {
	console.log(state.authReducer);
	return ({

    projects: state.listmoReducer.projects || [],
		user: state.authReducer.currentUser

})};

export default connect(mapStateToProps)(ProjectList);
