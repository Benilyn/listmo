import React from 'react';
import {connect} from 'react-redux';

export class Task extends React.Component {
	

	render() {
		let details;
			details = (
				<div className="task-details">
					<span>Due: {this.props.taskDueDate}</span><br />
					<span>{this.props.taskDetail}</span>
				</div>);
		

		return (
			<div className="task-info" >
				<h4>{this.props.taskTitle}</h4>
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
