import React, { Component } from 'react';
import Main from './components/routing/main';
import Header from './components/header';
import LBOne from './components/leaves/LBOne';
import LBTwo from './components/leaves/LBTwo';
import RBOne from './components/leaves/RBOne';
import RBTwo from './components/leaves/RBTwo';
import LOOne from './components/leaves/LOOne';
import LOTwo from './components/leaves/LOTwo';
import ROOne from './components/leaves/ROOne';
import ROTwo from './components/leaves/ROTwo';
import ROThree from './components/leaves/ROThree';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
            I have changed it!
        </p>
        <Header />
        <Main />
          <div className="LB">
              <LBOne />
              <LBTwo />
          </div>
          <div className="LO">
              <LOOne />
              <LOTwo />
          </div>
          <div className="RB">
              <RBOne />
              <RBTwo />
          </div>
          <div className="RO">
            <ROOne/>
            <ROTwo/>
            <ROThree/>
          </div>
      </div>
    );
  }
}

export default App;
