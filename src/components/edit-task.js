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
    console.log('editing task', this.props.task);
    this.props.dispatch(editTask({
      id: this.props.task._id,
      taskTitle: values.taskTitle,
      taskDueDate: values.taskDueDate,
      taskDetail: values.taskDetail}, this.props.user)
    );
    this.setRedirect(true);
//    const { history } = this.props;
//		history.push(`/project-list/{:projectId}`);

  }


  setRedirect(isRedirect) {
    this.setState({isRedirect})
  }



  render() {
    if (this.state.isRedirect) {
			return (
        	<Redirect to={`/project-list/${this.props.projectId}`} />
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
  console.log(state);
	const taskId = props.match.params.taskId;
  console.log("taskId", taskId);
  const projectId = props.match.params.projectId;
  console.log("projectId", projectId);


  const project = state.listmoReducer.projects.filter(function(item) {
      console.log(item.id == projectId);
      return item.id == projectId;
    })[0] || {};

    const task = project.projectTask.filter(function(item) {
      console.log(item._id, taskId);

      return item._id == taskId;
    })[0] || {};

    console.log(task);

  return {
    user: state.authReducer.currentUser,
		taskId,
		task,
    projectId,
    initialValues: task
	}
}

EditTask = connect(mapStateToProps)(EditTask);

export default reduxForm({
  form: 'EditTask'
})(EditTask);
