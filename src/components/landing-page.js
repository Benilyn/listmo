import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import '../css/landing-page.css';
import LoginForm from './login-form';

export class LandingPage extends React.Component {


	render() {
		let isLoggedIn = localStorage.getItem('authToken');
			{return (isLoggedIn) ? <Redirect to="/project-list"/> :
			<div className="landing-page">
				<LoginForm />
				<div className="register-user-link">
					<p>Don't have an account?</p>
					<Link to="/register" className="register-link">Register here</Link>
				</div>
				<div className="guest-login">
						<p className="guest-login-top">To login as Guest, please use:</p>
						<p>Username: guest</p>
						<p>Password: password</p>
				</div>
			</div>}

	}

}

export default connect()(LandingPage);
