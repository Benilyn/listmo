import React from 'react';
import {connect} from 'react-redux';

export class Task extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hidden: true
		}
	}

	hideTaskDetails(hidden) {
		this.setState({hidden});
	}

//	const Details = (() => {
//		<div className="task-details">
//			{this.props.date}
//		</div>
//	});

	render() {
		let details;
		if(!this.state.hidden === true) {
			details = <div onClick={() => this.hideTaskDetails(true)}>
				<span>Due: {this.props.taskDueDate}</span><br />
				<span>{this.props.taskDetail}</span>
			</div>
		}

		return (
			<div className="task-info" >
				<h4 onClick={() => this.hideTaskDetails(false)}>{this.props.taskTitle}</h4>
				{details}
			</div>
		)
	}

}

Task.defaultProps = {
	taskTitle: '',
	taskDueDate: '',
	taskDetail: ''
};



export default connect()(Task);
