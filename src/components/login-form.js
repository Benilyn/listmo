import React from 'react';
import {Field, reduxForm, reset} from 'redux-form';
import {Redirect, withRouter} from 'react-router-dom';


export class LoginForm extends React.Component {
	onSubmit(event) {
        event.preventDefault();
        console.log('test');
        return (
        	<Redirect to="/project-list" />
        )
        	
    }
	

    render() {
    	const Button = withRouter(({ history }) => (
			  <button
			    type='button'
			    onClick={() => { history.push('/project-list') }}
			  >
			    Login
			  </button>
		))
    	return (
			<form className="login-form" onSubmit={e => this.onSubmit(e)}>
				<h3>{this.props.form}</h3>
				<div className="loginUserName">
					<Field 
						component="input" 
						type="text" 
						name="userName" 
						placeholder="Userame" 
					/>
				</div>
				<div className="loginPassword">
					<Field 
						component="input" 
						type="password" 
						name="password" 
						placeholder="Password" 
					/>
				</div>
				<Button />
			</form>
		)	
    }

	
}

export default reduxForm({
	form: 'User Login'
})(LoginForm);
