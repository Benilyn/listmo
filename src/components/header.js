import React from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {clearAuth} from '../actions/action-auth';
import {clearAuthToken} from '../local-storage';
import './header.css';

export class Header extends React.Component {

	logOut() {
		console.log('loggin out');
		this.props.dispatch(clearAuth());
		clearAuthToken();
		console.log('logged out');
	}


	render() {
		let logOutButton;
		let backButton;
		if (this.props.user) {
			logOutButton = (
				<button className="logout"
					onClick={() => this.logOut()}>
					Log Out
				</button>)
//			backButton = (
//				<button className="back"
//					onClick={browserHistory.goBack}>
//					Back
//				</button>
//			)
		}

//{self.state.isLoggedOut && (<Redirect to="/" />)}
//		if (this.state.isLoggedOut) {
//			return (
//	     		<Redirect to="/" />
	//     );
//		}
const self = this;

		return (
			<div className='headerParent'>
			<div>
				{self.props.isLoggedOut && (<Redirect to="/" />)}
			</div>
			<div className="header">
				<div className="menu-button">
					<div className="logout-button">{logOutButton}</div>

				</div>
				<h1>listmo app</h1>
			</div>
			</div> //headerParent
		);
	}
}

const mapStateToProps = state => ({
	user: state.authReducer.currentUser,
	isLoggedOut: state.authReducer.isloggedOut === true
//    isloggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Header);
