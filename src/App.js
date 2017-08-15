import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Navbar from './components/Navbar';
import logo from './logo.svg';
import './App.css';

// Routes
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import NotFound from './components/NotFound';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route component={NotFound} />
          </Switch>
          <Navbar />
        </div>
      </Router>
    );
  }
}

export default App;
