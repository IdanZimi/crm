import React, { Component } from 'react';
import './css/App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import actions from './components/actions.js'
import analytics from './components/analytics.js'
import Clients from './components/clients.js'

class App extends Component {
  
  render() {
    return (
      <Router>
        <div className="App">
          <div className="navbar">
            <div className="main-links">
              <ul>
              <li><Link to="/clients">Clients</Link></li>
              <li><Link to="/actions">Actions</Link></li>
              <li><Link to="/analytics">Analytics</Link></li>
              </ul>
            </div>
          </div>
          <div className="main-routes">
            <Route path="/clients" exact component={Clients} />
            <Route path="/actions" exact component={actions} />
            <Route path="/analytics" exact component={analytics} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
