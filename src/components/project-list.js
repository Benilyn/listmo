import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {API_BASE_URL} from '../config.js';


import Project from './project';
import AddProject from './add-project';
import {addProject, getProject , deleteProject, editProject} from '../actions/action-project.js';

export class ProjectList extends React.Component {

	componentDidMount() {
		console.log(this.props.user);
		if(this.props.user) {
			this.props.dispatch(getProject(this.props.user))
		}
	} //*componentDidMount

	addProject(projectTitle) {
		this.props.dispatch(addProject(projectTitle));
	} //addProject(projectTitle)

	deleteProject(project) {
		console.log('delete project ', project.id);
		this.props.dispatch(deleteProject(project.id));
	}



	render() {
		let projectList = this.props.projects.map((project, index) => {
			return(
				<li className="project-link" key={index}>
					<Link to={`/project-list/${index}`}>
						{project.projectTitle}
					</Link>
					<button id="delete-project"
							onClick={() => this.deleteProject(project)}>
							Delete
					</button>
					<Link to={`/project-list/edit/${index}`}>
						<button id="edit-project">
							Edit
						</button>
					</Link>


				</li>
			) //return
		}) //*projectList

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
	console.log(state);
	return ({

    projects: state.listmoReducer.projects || [],
		user: state.authReducer.currentUser

})};

export default connect(mapStateToProps)(ProjectList);
