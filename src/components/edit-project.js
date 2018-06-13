import React from 'react';
import {connect} from 'react-redux';
import {editProject, postProject} from '../actions/action-project.js';
import {Field, reduxForm, reset} from 'redux-form';

export class EditProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: true
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values) {
    console.log(values);
    console.log('editing project', this.props.project.id);
    this.props.dispatch(editProject({
      id: this.props.project.id,
      projectTitle: values.projectTitle,
      projectDueDate: values.projectDueDate,
      projectDetail: values.projectDetail,
      projectTask: values.projectTask})
    );
    this.setEditing(false);
  }

  setEditing(editing) {
    this.setState({editing});
  }



  render() {

    return (
      <form className="add-project-form"
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
              type="date"
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
            Add
          </button>
          <button type="button" onClick={reset}>
            clear
          </button>
          <button type="button" onClick = {() => this.setEditing(false)}>
            Cancel
          </button>
        </div>
      </form>
    );
  }
}
const mapStateToProps = (state, props) => {
	const projectId = props.match.params.projectId;
	const project = state.listmoReducer.projects[projectId] || {};
	return {
		projectId,
		projectTitle: project.projectTitle,
		projectDueDate: project.projectDueDate,
		projectDetail: project.projectDetail,
		projectTask: project.projectTask ? Object.keys(project.projectTask).map(projectTaskId =>
			project.projectTask[projectTaskId]
		): []
	}
}

EditProject = connect(mapStateToProps)(EditProject);

export default reduxForm({
  form: 'EditProject'
})(EditProject);
