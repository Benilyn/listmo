import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';

import Header from './header';
import LandingPage from './landing-page';
import RegisterUser from './register-user';
import ProjectList from './project-list';
import Project from './project';

export class Listmo extends React.Component {
	render() {
		return (
	        <div className="listmo">
	        	<Header />
	        	<Route exact path="/" component={LandingPage} />
	        	<Route exact path="/register" component={RegisterUser} />
	            <Route exact path="/project-list" component={ProjectList} />
	            <Route exact path="/project-list/:projectId" component={Project} />
	        </div>
    	);
	}
	
}

export default withRouter(connect()(Listmo))
