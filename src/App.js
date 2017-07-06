import React, { Component } from 'react';
import Main from './components/routing/main';
import Header from './components/header';

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
      </div>
    );
  }
}

export default App;
