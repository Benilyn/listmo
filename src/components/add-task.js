import React from 'react';
import {connect} from 'react-redux';
import {addTask, postTask} from '../actions/action-task.js';
import {Field, reduxForm, reset} from 'redux-form';

let project;
export class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values) {

    this.setEditing(true);
    this.props.dispatch(postTask({
      taskTitle: values.taskTitle,
      taskDueDate: values.taskDueDate,
      taskDetail: values.taskDetail,
      taskProject: this.props.project.id},
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
        <div className="add-button"
          onClick = {() => this.setEditing(true)}>
            <button className="add-button">
              Add {this.props.type}
            </button>
        </div>
      );
    }
    return (
      <form className="add-task-form"
            onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        <div className="task-title">
          <Field
              name="taskTitle"
              component="input"
              type="text"
              placeholder="Title"
          />
        </div>
        <div  className="task-duedate">
          <Field
              name="taskDueDate"
              component="input"
              type="date"
              placeholder="Due Date"
          />
        </div>
        <div  className="task-detail">
          <Field
              name="taskDetail"
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
  const {projectId} = props.match.params;

  return {
    projectId: projectId,
    addTask: state.projectTask,
    user: state.authReducer.currentUser
  };
};

AddTask = connect(mapStateToProps)(AddTask);

export default reduxForm({
  form: 'AddTask'
})(AddTask);
