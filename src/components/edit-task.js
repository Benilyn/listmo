import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {editTask, postTask} from '../actions/action-task.js';
import {Field, reduxForm, reset, change} from 'redux-form';
import {getProject} from '../actions/action-project.js';

import '../css/edit-task.css';

export class EditTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setRedirect: false
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const taskDue = new Date(this.props.task.taskDueDate).toDateString();
    this.props.dispatch(getProject(this.props.user));
    this.props.dispatch(change("EditTask", "taskTitle",this.props.task.taskTitle));
    this.props.dispatch(change("EditTask", "taskDueDate",taskDue));
    this.props.dispatch(change("EditTask", "taskDetail",this.props.task.taskDetail));
  } //*componentDidMount



  onSubmit(values) {
    this.props.dispatch(editTask({
      id: this.props.task._id,
      taskTitle: values.taskTitle,
      taskDueDate: values.taskDueDate,
      taskDetail: values.taskDetail,
      taskProject: this.props.taskProject,
      taskCreated: this.props.taskCreated}, this.props.user)
    );
    this.setRedirect(true);

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
      <form id="edit-task-form"
            onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        <div id="edit-task-title">
          <Field
              name="taskTitle"
              component="input"
              type="text"
              placeholder="Title"
          />
        </div>
        <div  id="edit-task-duedate">
          <Field
              name="taskDueDate"
              component="input"
              type="text"
              placeholder="Due Date"
          />
        </div>
        <div  id="edit-task-detail">
          <Field
              name="taskDetail"
              component="input"
              type="text"
              placeholder="Details"
          />
        </div>
        <div id="edit-task-buttons">
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
	const {taskId} = props.match.params;
  let task = null;
  
  const project = state.listmoReducer.projects.filter(function(project) {
      let pass = false;
      project.projectTask.forEach(pTask=>{
        if(pTask._id == taskId){
          pass = true;
          task = pTask;
        }
      });
      return pass
    })[0] || {};
    const projectId = project._id;
    
  return {
    user: state.authReducer.currentUser,
		taskId,
		task,
    projectId,
    project,
    initialValues: task
	}
}

EditTask = connect(mapStateToProps)(EditTask);

export default reduxForm({
  form: 'EditTask'
})(EditTask);
