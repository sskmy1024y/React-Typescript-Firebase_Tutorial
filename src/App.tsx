import * as React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Game from './Games/Game';
import HelloMessage from './HelloMessage';
import Navbar from './Navbar';

import './App.css';

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Router>
          <div>
            <Navbar />
            <hr/>
            <Route exact={true} path='/' component={HelloMessage} />
            <Route path='/Game' component={Game} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
