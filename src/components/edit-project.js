import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {editProject, postProject, getProject} from '../actions/action-project.js';
import {Field, reduxForm, reset, change} from 'redux-form';

import '../css/edit-project.css';

export class EditProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRedirect: false
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const projectDue = new Date(this.props.project.projectDueDate).toDateString();
    this.props.dispatch(getProject(this.props.user));
    this.props.dispatch(change("EditProject", "projectTitle",this.props.project.projectTitle));
    this.props.dispatch(change("EditProject", "projectDueDate",projectDue));
    this.props.dispatch(change("EditProject", "projectDetail",this.props.project.projectDetail));
  } //*componentDidMount



  onSubmit(values) {
    this.props.dispatch(editProject({
      id: this.props.project._id,
      projectTitle: values.projectTitle,
      projectDueDate: values.projectDueDate,
      projectDetail: values.projectDetail,
      projectTask: values.projectTask})
    );
    this.setRedirect(true);
  }


  setRedirect(isRedirect) {
    this.setState({isRedirect})
  }



  render() {
    if (this.state.isRedirect) {
			return (
        	<Redirect to="/project-list" />
        );
		}


    return (
      <form id="edit-project-form"
            onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
            
        <div id="edit-project-title">
          <Field
              name="projectTitle"
              component="input"
              type="text"
              placeholder="Title"
          />
        </div>
        <div  id="edit-project-duedate">
          <Field
              name="projectDueDate"
              component="input"
              type="text"
              placeholder="Due Date"
          />
        </div>
        <div  id="edit-project-detail">
          <Field
              name="projectDetail"
              component="input"
              type="text"
              placeholder="Details"
          />
        </div>
        <div id="edit-project-buttons" className="edit-project-buttons-container">
          <button type="submit">
            Submit
          </button>
          <button type="button" onClick = {() => this.setRedirect(true)}>
            Cancel
          </button>
        </div>
      </form>
    );
  }
}
const mapStateToProps = (state, props) => {
	const {projectId} = props.match.params;
  const project = state.listmoReducer.projects.filter(function(item) {
        return item._id === projectId
  //return project
})[0] || {};
	return {
		projectId,
		project,
    initialValues: project
	}

}

EditProject = connect(mapStateToProps)(EditProject);

export default reduxForm({
  form: 'EditProject'
})(EditProject);
