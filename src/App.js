import React from 'react';
import logo from './logo.svg';
import './App.css';
import User from './components/User';
import Home from './components/Home';
import Card from './components/Card';
import Nav from './components/Nav';
import Photo from './components/Photo';
import Main from './components/Main';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/user" component={User} />
          <Route path="/home" component={Home} />
          <Route path="/card" component={Card} />
          <Route path="/photo" component={Main} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
