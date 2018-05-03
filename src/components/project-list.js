import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Project from './project';
import AddForm from './add-form';
import {addProject} from '../actions/action-index';

export class ProjectList extends React.Component {
	addProject(title) {
		this.props.dispatch(addProject(title));
	}

	render() {
		const projects = this.props.projects.map((project, index) =>
			<li className="li-link" key={index}>
				<Link to={`/${index}`} {...project}>
					<Project index={index} {...project} />
				</Link>
			</li>
		); {/*const projects*/}

		return (
			<div className="project-list">
				<ul className="project-list">
					<h3>{this.props.title}</h3>
					{projects}

					<div className="add-project">
						<AddForm
							type="project"
							onAdd={title => this.addProject(title)}
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
    projects: state.projects || []
});

export default connect(mapStateToProps)(ProjectList);