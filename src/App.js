import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header'
import Homepage from './components/Homepage';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact'

class App extends Component {
  render() {
    return (
      <Router>
         <Header />
          <div className='App'>
            <Switch>
              <Route exact path='/' component={Homepage} />
              <Route path='/projects' component={Projects} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
            </Switch>
          </div>
      </Router>

    );
  }
}
export default App;


