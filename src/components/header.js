import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {clearAuth} from '../actions/action-auth';
import {clearAuthToken} from '../local-storage';
import './header.css';

export class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoggedOut: false
		};
	}

	logOut() {
		console.log('loggin out');
		this.props.dispatch(clearAuth());
		clearAuthToken();
		this.logoutUser(true);
	}

	logoutUser(isLoggedOut) {
		this.setState({isLoggedOut});
	}


	render() {
		const logOutButton = (
			<button className="logout"
				onClick={() => this.logOut()}>
				Log Out
			</button>)

		if (this.state.isLoggedOut) {
			return (
	     		<Redirect to="/" />
	     );
		}

		return (


			<div className="header">
				<h1>listmo app</h1>
				<div className="logout-button">{logOutButton}</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	user: state.authReducer.currentUser
//    isloggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Header);
