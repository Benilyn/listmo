import React from 'react';
import {connect} from 'react-redux';
import {postProject} from '../actions/action-project.js';
import {Field, reduxForm, reset} from 'redux-form';

import '../css/add-project.css';

export class AddProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values) {
    this.setEditing(true);
    this.props.dispatch(postProject({
      projectTitle: values.projectTitle,
      projectDueDate: values.projectDueDate,
      projectDetail: values.projectDetail,
      user: this.props.user})
    );
    this.props.reset();
    this.setEditing(false);
  }

  setEditing(editing) {
    this.setState({editing});
  }

  render() {
    if(!this.state.editing) {
      return (
        <div className="add-project-button"
          onClick = {() => this.setEditing(true)}>
            <button className="add-button">
              Add {this.props.type}
            </button>
        </div>
      );
    }
    return (
      <form className="add-project-form"
            onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        <div className="add-project-title">
          <Field
              name="projectTitle"
              component="input"
              type="text"
              placeholder="Title"
          />
        </div>
        <div  className="add-project-duedate">
          <Field
              name="projectDueDate"
              component="input"
              type="date"
              placeholder="Due Date"
          />
        </div>
        <div  className="add-project-detail">
          <Field
              name="projectDetail"
              component="input"
              type="text"
              placeholder="Details"
          />
        </div>
        <div className="add-project-buttons">
          <button type="submit">
            Add
          </button>
          <button className="middle-button" type="button" onClick={() => this.props.dispatch(reset('AddProject'))}>
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

const mapStateToProps = state => {
  return {
    addProject: state.projects,
    user: state.authReducer.currentUser
  };
};

AddProject = connect(mapStateToProps)(AddProject);

export default reduxForm({
  form: 'AddProject'
})(AddProject);
