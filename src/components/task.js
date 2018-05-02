import React from 'react';

export default function Task(props) {
	return (
		<div className="task-name">
			{props.text}
		</div>
	)
}

Task.defaultProps = {
	text: ''
};