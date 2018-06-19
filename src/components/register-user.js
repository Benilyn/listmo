import React from 'react';
import {connect} from 'react-redux';
import {addUser, postUser} from '../actions/action-user.js';
import {Field, reduxForm, reset} from 'redux-form';
import {Redirect} from 'react-router-dom';

export class RegisterUser extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isRegistered: false
		};
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(values) {
        console.log(values);
        this.registerUser(true);
        this.props.dispatch(postUser({
        	firstName: values.firstName,
        	lastName: values.lastName,
        	email: values.email,
        	userName: values.userName,
        	password: values.password})
       	);
        console.log('testing registration-form');

    }

    registerUser(isRegistered) {
		this.setState({isRegistered});
	}

	render() {
		if (this.state.isRegistered) {
			return (
        	<Redirect to="/" />
        );
		}

		return (
			<form
				className="registration-form"
				onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
				<h3>{this.props.form}</h3>
				<div className="firstName">
					<Field
						component="input"
						type="text"
						name="firstName"
						placeholder="First Name"
					/>
				</div>
				<div className="lasttName">
					<Field
						component="input"
						type="text"
						name="lastName"
						placeholder="Last Name"
					/>
				</div>
				<div className="email">
					<Field
						component="input"
						type="text"
						name="email"
						placeholder="Email"
					/>
				</div>
				<div className="userName">
					<Field
						component="input"
						type="text"
						name="userName"
						placeholder="Username"
					/>
				</div>
				<div className="password">
					<Field
						component="input"
						type="password"
						name="password"
						placeholder="Password"
					/>
				</div>
				<div className="confirmPassword">
					<Field
						component="input"
						type="password"
						name="confirmPassword"
						placeholder="Confirm Password"
					/>
				</div>
				 <div>
			        <button type="submit">
			          Submit
			        </button>
			        <button type="button" onClick={reset}>
			          Clear Values
			        </button>
			      </div>

			</form>
		)
	}

}

const mapStateToProps = state => {
    return {
        userForm: state.user
    };
};

RegisterUser = connect(mapStateToProps)(RegisterUser);

export default reduxForm({
	form: 'RegisterUser'
})(RegisterUser);
