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
          <div className="pattern-fixed">
          </div>
      </div>
    );
  }
}

export default App;
