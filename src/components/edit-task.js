import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {editTask, postTask} from '../actions/action-task.js';
import {Field, reduxForm, reset, change} from 'redux-form';

export class EditTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setRedirect: false
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    console.log(this.props.task);
    this.props.dispatch(change("EditTask", "taskTitle",this.props.task.taskTitle));
    this.props.dispatch(change("EditTask", "taskDueDate",this.props.task.taskDueDate));
    this.props.dispatch(change("EditTask", "taskDetail",this.props.task.taskDetail));
  } //*componentDidMount



  onSubmit(values) {
    console.log(values);
    console.log('editing task', this.props.task._id);
    this.props.dispatch(editTask({
      id: this.props.task._id,
      taskTitle: values.taskTitle,
      taskDueDate: values.taskDueDate,
      taskDetail: values.taskDetail})
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
              type="text"
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
	const taskId = props.match.params.taskId;
  const projectId = props.match.params.projectId;
	const task = state.listmoReducer.projects[projectId].projectTask[taskId] || {};
	return {
		taskId,
		task,
    initialValues: task
	}
}

EditTask = connect(mapStateToProps)(EditTask);

export default reduxForm({
  form: 'EditTask'
})(EditTask);
