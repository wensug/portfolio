import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
        </div>
      </Router>

    );
  }
}
export default App;


