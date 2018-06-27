import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {Redirect} from 'react-router-dom';
import {loginUser} from '../actions/action-auth.js';

export class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: false
		};
		this.onSubmit = this.onSubmit.bind(this);
	}


	onSubmit(values) {
        this.loginUser(true);
        this.props.dispatch(loginUser(values.userName, values.password));
        console.log('testing login');

    }


    loginUser(isLoggedIn) {
		this.setState({isLoggedIn});
	} //loginUser


	render() {
			if (this.state.isLoggedIn) {
				return (
		       		<Redirect to="/project-list" />
		       	)
			} //if (this.state.isRegistered)

			let error;
	    if (this.props.error) {
	        error = (
	            <div className="login-error">
	                {this.props.error}
	            </div>
					); //error
	    } //if (this.props.error)

	    return (
				<form className="login-form" onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
					<h3>User Login</h3>
					<div className="loginUserName">
						<Field
							component="input"
							type="text"
							name="userName"
							id="userName"
							placeholder="Username"
						/>
					</div>
					<div className="loginPassword">
						<Field
							component="input"
							type="password"
							name="password"
							id="password"
							placeholder="Password"
						/>
					</div>
					<button type="submit">
						Submit
					</button>
				</form>
			) //return form
	} //render()

} //export class LoginForm extends React.Component

const mapStateToProps = state => {
    return {
        loginForm: state.user
    };
};

LoginForm = connect(mapStateToProps)(LoginForm);

export default reduxForm({
	form: 'login'
})(LoginForm);
