import React, { Component } from 'react';
import { HashRouter as Router} from 'react-router-dom';
import 'normalize.css';
import './App.css';
import Header from './components/Header/Header'
import Homepage from './components/Homepage';

class App extends Component {
  render() {
    return (
      <Router>
          <div className='App'>
            <Header />
            <Homepage />
          </div>
      </Router>

    );
  }
}
export default App;


