import React from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {Redirect, withRouter} from 'react-router-dom';
//import {clearAuth} from '../actions/action-auth';
import {logoutUser} from '../actions/action-auth.js';
import {saveAuthToken, clearAuthToken} from '../local-storage';
import './header.css';

export class Header extends React.Component {

	logOut() {
		clearAuthToken();
		this.props.history.push("/");
	}


	render() {
		let logOutButton;

			logOutButton = (
				<button className="logout"
					onClick={() => this.logOut()}>
					Log Out
				</button>);


const self = this;

		return (
			<div className='headerParent'>
			<div>
				{self.props.isLoggedOut && (<Redirect to="/" />)}
			</div>
			<div className="header">
				<div className="menu-button">
					{localStorage.getItem('authToken') ? <div className="logout-button">{logOutButton}</div> : ""}
				</div>
				<h1><a href="/">listmo app</a></h1>
			</div>
			</div> //headerParent
		);
	}
}

const mapStateToProps = state => {
	//console.log(state);
	return ({
		user: state.authReducer.currentUser,
		isLoggedOut: state.authReducer.isloggedOut === true
})};

export default withRouter(connect(mapStateToProps)(Header));
