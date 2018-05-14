import React from 'react';
import {connect} from 'react-redux';

import RegistrationForm from './registration-form';

export function RegisterXXX() {
	return (
		<div className="register">
			<RegistrationForm />
		</div>
	)
}


export default connect()(Register);