import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';

import Header from './header';
import ProjectList from './project-list';
import Project from './project';

export class Listmo extends React.Component {
	render() {
		return (
	        <div className="listmo">
	        	<Header />
	            <Route exact path="/" component={ProjectList} />
	            <Route exact path="/:projectId" component={Project} />
	        </div>
    	);
	}
	
}

export default withRouter(connect()(Listmo))
