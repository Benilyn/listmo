import React from 'react';
import {connect} from 'react-redux';

export function Task(props) {
	return (
		<div className="task-name">
			{props.text}
		</div>
	)
}

Task.defaultProps = {
	text: ''
};

export default connect()(Task);