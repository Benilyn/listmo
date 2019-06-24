import React from 'react';
import {connect} from 'react-redux';
import {Redirect, withRouter} from 'react-router-dom';
import {saveAuthToken, clearAuthToken} from '../local-storage';
import '../css/header.css';

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
				
				<h1><a href="/">ListMo</a></h1>
			</div>
			<div className="menu-button">
					{localStorage.getItem('authToken') ? <div className="logout-button">{logOutButton}</div> : ""}
			</div>
			</div> //headerParent
		);
	}
}

const mapStateToProps = state => {
	return ({
		user: state.authReducer.currentUser,
		isLoggedOut: state.authReducer.isloggedOut === true
})};

export default withRouter(connect(mapStateToProps)(Header));
