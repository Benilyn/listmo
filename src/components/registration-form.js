import React from 'react';
import {connect} from 'react-redux';
import {addUser} from '../actions/action-index';
import {Field, reduxForm, reset} from 'redux-form';
import {Redirect, withRouter} from 'react-router-dom';

export class RegistrationForm extends React.Component {

	onSubmit(values) {
        console.log(values);
    //    this.props.dispatch(addUser(user));
        console.log('testing registration-form');
        return (
        	<Redirect to="/" />
        );   	
    }

	render() {
		
		return (
			<form className="registration-form" onSubmit={e => this.onSubmit(e)}>
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
						name="lasttName" 
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

RegistrationForm = connect(mapStateToProps)(RegistrationForm);

export default reduxForm({
	form: 'Register User'
})(RegistrationForm);