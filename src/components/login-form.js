import React from 'react';
import {connect} from 'react-redux';
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
				Login Form
				<Button />
			</form>
		)	
    }

	
}


export default connect()(LoginForm);