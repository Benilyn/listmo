import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {editProject, postProject} from '../actions/action-project.js';
import {Field, reduxForm, reset, change} from 'redux-form';

export class EditProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRedirect: false
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(change("EditProject", "projectTitle",this.props.project.projectTitle));
    this.props.dispatch(change("EditProject", "projectDueDate",this.props.project.projectDueDate));
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
      <form className="edit-project-form"
            onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        <div className="project-title">
          <Field
              name="projectTitle"
              component="input"
              type="text"
              placeholder="Title"
          />
        </div>
        <div  className="project-duedate">
          <Field
              name="projectDueDate"
              component="input"
              type="text"
              placeholder="Due Date"
          />
        </div>
        <div  className="project-detail">
          <Field
              name="projectDetail"
              component="input"
              type="text"
              placeholder="Details"
          />
        </div>
        <div className="buttons">
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
  console.log(projectId);
  const testing= state;
  console.log(testing)
  const project = state.listmoReducer.projects.filter(function(item) {
        console.log(item._id,projectId);
        return item._id === projectId
  //return project
})[0] || {};
  console.log(project);
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
