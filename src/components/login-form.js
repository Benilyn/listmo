import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm, SubmissionError} from 'redux-form';
import {Redirect, withRouter} from 'react-router-dom';
import {API_BASE_URL} from '../config';

export class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: false
		};
		this.onSubmit = this.onSubmit.bind(this);
	}


	onSubmit(values) {

		const login = (userName, password) => {
			return (
					fetch(`{API_BASE_URL}/login`, {
							method: 'POST',
							headers: {
									'Content-Type': 'application/json'
							},
							body: JSON.stringify({
									userName,
									password
							})
					}) //fetch
					.then(res => res.json())
					.then(console.log('login', userName))
					.then (this.loginUser(true))
					.catch(err => {
								const {code} = err;
								const message =
										code === 401
												? 'Incorrect username or password'
												: 'Unable to login, please try again';
								return Promise.reject(
										new SubmissionError({
												_error: message
										}) //SubmissionError
								); //Promise.reject
						}) //.catch

				) //return
			} //const login
	} //onSubmit


loginUser(isLoggedIn) {
	this.setState({isLoggedIn});
} //loginUser


render() {
		if (this.state.isRegistered) {
				return (
	        	<Redirect to="/project-list" />
	        );
		} //if (this.state.isRegistered)

		let error;
    if (this.props.error) {
        error = (
            <div className="login-error">
                {this.props.error}
            </div>
				); //error
    } //if (this.props.error)

//		const Button = withRouter(({ history }) => (
//			  <button
//			    type='button'
//			    onClick={() => { history.push('/project-list') }}>
//			    Login
//			  </button>
//		)) //const Button

    return (
			<form className="login-form" onSubmit={values => this.onSubmit(values)}>
				<h3>User Login</h3>
				<div className="loginUserName">
					<Field
						component="input"
						type="text"
						name="userName"
						id="userName"
						placeholder="UserName"
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
//	onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'userName'))
})(LoginForm);
