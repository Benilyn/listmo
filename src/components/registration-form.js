import React from 'react';
import {connect} from 'react-redux';


export function RegistrationForm() {
	return (
		<div className="registration-form">
			Registration Form
		</div>
	)
}


export default connect()(RegistrationForm);