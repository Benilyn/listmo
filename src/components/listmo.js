import React from 'react';
import ProjectList from './project-list';
import {BrowserRouter as Router, Route} from 'react-router-dom';


export default function Listmo() {
	return (
      <Router>
        <div className="listmo">
            <ProjectList />
        </div>
    </Router>
    );
}
