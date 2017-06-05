import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form'
import DisplayArea from './DisplayArea'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Work Logger</h1>
        <Form />
        <DisplayArea />
      </div>
    );
  }
}

export default App;
