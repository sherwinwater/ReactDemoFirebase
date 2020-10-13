import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserComponent from './components/UserComponent';
import HomeComponent from './components/HomeComponent';
import Card from './components/Card';
import Nav from './components/Nav';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/user" component={UserComponent} />
          <Route path="/home" component={HomeComponent} />
          <Route path="/card" component={Card} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
