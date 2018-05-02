import React from 'react';
import {connect} from 'react-redux';


import Project from './project';
import AddForm from './add-form';
import {addProject} from '../actions/action-index';



export class Listmo extends React.Component {
	addProject(title) {
		this.props.dispatch(addProject(title));
	}

	render() {
		const projects = this.props.projects.map((project, index) =>
			<ul className="project-name" key={index}>
				<Project index={index} {...project} />
			</ul>
		);
		return (
			<div className="listmo">
				<h3>{this.props.title}</h3>
				{projects}
				<li className="add-project">
					<AddForm
						type="project"
						onAdd={title => this.addProject(title)}
					/>	
				</li>
			</div>
		)
	}	
}
Listmo.defaultProps = {
    title: 'Listmo'
};

const mapStateToProps = state => ({
    projects: state.projects || []
});

export default connect(mapStateToProps)(Listmo);