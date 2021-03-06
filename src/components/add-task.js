import React from 'react';
import {connect} from 'react-redux';
import { postTask} from '../actions/action-task.js';
import {Field, reduxForm, reset} from 'redux-form';
import {getProject} from '../actions/action-project.js';

import '../css/add-task.css';

let project;
export class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
		this.props.dispatch(getProject(this.props.user));
	}

  onSubmit(values) {

    this.setEditing(true);
    this.props.dispatch(postTask({
      taskTitle: values.taskTitle,
      taskDueDate: values.taskDueDate,
      taskDetail: values.taskDetail,
      taskProject: this.props.projectId},
      ()=>{
        this.props.onAdd(values);
        this.props.reset();
        this.setEditing(false);
      })
    );

  }


  setEditing(editing) {
    this.setState({editing});
  }

  render() {
    if(!this.state.editing) {
      return (
        <div id="add-task-button"
          onClick = {() => this.setEditing(true)}>
            <button className="add-button">
              Add {this.props.type}
            </button>
        </div>
      );
    }
    return (
      <form id="add-task-form"
            onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        <div className="add-task-title">
          <Field
              name="taskTitle"
              component="input"
              type="text"
              placeholder="Title"
          />
        </div>
        <div  id="add-task-duedate">
          <Field
              name="taskDueDate"
              component="input"
              type="date"
              placeholder="Due Date"
          />
        </div>
        <div  id="add-task-detail">
          <Field
              name="taskDetail"
              component="input"
              type="text"
              placeholder="Details"
          />
        </div>
        <div id="add-task-buttons">
          <button type="submit">
            Add
          </button>
          <button className="middle-button" type="button" onClick={() => this.props.dispatch(reset('AddTask'))}>
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
  const {projectId} = props.match.params;
  return {
    projectId,
    project,
    addTask: state.projectTask,
    user: state.authReducer.currentUser
  };
};

AddTask = connect(mapStateToProps)(AddTask);

export default reduxForm({
  form: 'AddTask'
})(AddTask);
