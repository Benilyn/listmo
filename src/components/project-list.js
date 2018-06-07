import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {API_BASE_URL} from '../config.js';


import Project from './project';
import AddProject from './add-project';
import {addProject, getProject} from '../actions/action-project.js';

export class ProjectList extends React.Component {

	componentDidMount() {
		this.props.dispatch(getProject())
	} //*componentDidMount

	addProject(projectTitle) {
		this.props.dispatch(addProject(projectTitle));
	}

	render() {
		let projectList = this.props.projects.map((project, index) => {
			return(
				<li className="project-link" key={index}>
					<Link to={`/project-list/${index}`}>
						{project.projectTitle}
					</Link>
				</li>
			) //return
		}) //*projectList

		return (
			<div className="project-list">
				<ul className="project-container">
					{projectList}
				</ul>
				<div className="add-project">
					<AddProject
						type="project"
						onAdd={projectTitle => this.addProject(projectTitle)}
					/>
				</div>
{/*
				<ul className="project-list">
					<h3>{this.props.title}</h3>
					{projects}
				</ul>
*/}



			</div>
		); {/*return*/}
	}
}

ProjectList.defaultProps = {
    title: 'Project List'
};

const mapStateToProps = state => ({
    projects: state.listmoReducer.projects || []

});

export default connect(mapStateToProps)(ProjectList);
