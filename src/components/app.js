import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';

import './app.css';
import Header from './header';
import LandingPage from './landing-page';
import RegisterUser from './register-user';
import ProjectList from './project-list';
import Project from './project';
import EditProject from './edit-project';
import Task from './task';
import EditTask from './edit-task';

export class App extends React.Component {
	render() {
		return (

	        <div className="listmo">
	        	<Header />
	        	<Route exact path="/" component={LandingPage} />
	        	<Route exact path="/register" component={RegisterUser} />
	          <Route exact path="/project-list" component={ProjectList} />
	          <Route exact path="/project-list/:projectId" component={Project} />
						<Route exact path="/project-list/edit/:projectId" component={EditProject} />
						<Route exact path="/task/edit/:projectId/:taskId" component={EditTask} />
	        </div>

    	);
	}

}

export default withRouter(connect()(App))
