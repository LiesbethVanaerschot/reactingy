import React, { Component } from 'react';
import Main from './components/routing/main';
import Leaves from './components/leaves/leaves';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
        <Leaves/>
        <div className="pattern-fixed">
        </div>
      </div>
    );
  }
}

export default App;
