import React from 'react';
import {Field, reduxForm, reset} from 'redux-form';
import {Redirect, withRouter} from 'react-router-dom';

export class RegistrationForm extends React.Component {
	onSubmit(event) {
        event.preventDefault();
        console.log('testing registration-form');
        return (
        	<Redirect to="/" />
        );   	
    }

	render() {
		const Button = withRouter(({ history }) => (
			  <button
			    type='button'
			    onClick={() => { history.push('/') }}
			  >
			    Submit
			  </button>
		))
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
						name="usertName" 
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
			        <Button />
			        <button type="button" onClick={reset}>
			          Clear Values
			        </button>
			      </div>
				
			</form>
		)
	}
	
}


export default reduxForm({
	form: 'Register User'
})(RegistrationForm);