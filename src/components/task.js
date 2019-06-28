import React from 'react';
import {connect} from 'react-redux';

export class Task extends React.Component {
	

	render() {
		let details;
			details = (
				<div className="task-details">
					<span>Due: {new Date(this.props.taskDueDate).toDateString()}</span><br />
					<span className="details">{this.props.taskDetail}</span>
				</div>);
		

		return (
			<div className="task-info" >
				<p>{this.props.taskTitle}</p>
				{details}
			</div>
		)
	}

}

Task.defaultProps = {
	taskTitle: '',
	taskDueDate: '',
	taskDetail: '',
	taskCreated: ''
};



export default connect()(Task);
