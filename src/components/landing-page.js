import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import './landing-page.css';
import LoginForm from './login-form';

export class LandingPage extends React.Component {


	render() {
		let isLoggedIn = localStorage.getItem('authToken');
			{return (isLoggedIn) ? <Redirect to="/project-list"/> :
			<div className="landing-page">
				<LoginForm />
				<Link to="/register">Register</Link>
			</div>}

	}

}

export default connect()(LandingPage);
