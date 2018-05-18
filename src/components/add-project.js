import React from 'react';
import {connect} from 'react-redux';
import {addProject} from '../actions/action-index';
import {Field, reduxForm, reset} from 'redux-form';

export class AddProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values) {
    console.log(values);
    this.props.dispatch(addProject(values));
    console.log('testing add-form for projects');
    this.setEditing(false);
  }

  setEditing(editing) {
    this.setState({editing});
  }

  render() {
    if(!this.state.editing) {
      return (
        <div className="add-button"
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
              name="projectDuedate"
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

const mapStateToProps = state => {
  return {
    addProject: state.projects
  };
};

AddProject = connect(mapStateToProps)(AddProject);

export default reduxForm({
  form: 'AddProject'
})(AddProject);
