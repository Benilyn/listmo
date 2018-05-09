import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import LoginForm from './login-form';
import ProjectList from './project-list';


export class LandingPage extends React.Component {
	

	render() {
		return (
			<div className="landing-page">
				<LoginForm />
				<Link to="/register">Register</Link>
			</div>
		)
	}
	
}

export default connect()(LandingPage);