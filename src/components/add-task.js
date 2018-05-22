import React from 'react';
import {connect} from 'react-redux';
import {addTask} from '../actions/action-index';
import {Field, reduxForm, reset} from 'redux-form';

export class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values) {
  //  console.log(values);
    this.props.onAdd(values);
//    console.log('testing add-form for task');
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
              name="taskDuedate"
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

const mapStateToProps = state => {
  console.log(state);
  return {
    addTask: state.projectTask,
    addProject: state.projects
  };
};

AddTask = connect(mapStateToProps)(AddTask);

export default reduxForm({
  form: 'AddTask'
})(AddTask);
