import React, { Component } from 'react';
import './App.css';
import TranslateContainer from './container/TranslateContainer';
import Translation from './component/Translation';

class App extends Component {
  render() {
    return (
      <div className="App">
          <TranslateContainer />
          <Translation transKey="example_say_hello" />
      </div>
    );
  }
}

export default App;
