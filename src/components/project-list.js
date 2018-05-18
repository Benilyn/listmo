import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Project from './project';
import AddProject from './add-project';
import {addProject} from '../actions/action-index';

export class ProjectList extends React.Component {
	addProject(projectTitle) {
		this.props.dispatch(addProject(projectTitle));
	}

	render() {
		const projects = this.props.projects.map((project, index) =>
			<li className="project-link" key={index}>
				<Link to={`/project-list/${index}`}>
					{project.projectTitle}
				</Link>
			</li>
		); {/*const projects*/}

		return (
			<div className="project-list">
				<ul className="project-list">
					<h3>{this.props.title}</h3>
					{projects}

					<div className="add-project">
						<AddProject
							type="project"
							onAdd={projectTitle => this.addProject(projectTitle)}
						/>
					</div>
				</ul>
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
