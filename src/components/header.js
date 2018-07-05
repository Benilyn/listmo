import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/action-auth';
import {clearAuthToken} from '../local-storage';
import './header.css';

export class Header extends React.Component {
	logOut() {
		this.props.dispatch(clearAuth());
		clearAuthToken();
	}
	render() {

				const logOutButton = (
				<button className="logout"
					onClick={() => this.logOut()}>
					Log Out
				</button>
			)

		return (
			<div className="header">
				<h1>listmo app</h1>
				<div className="logout-button">{logOutButton}</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
//    isloggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Header);
