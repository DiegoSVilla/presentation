import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './header/Header.js';
import './css/App.css';

class App extends Component {
  componentDidUpdate() {
    ReactDOM.findDOMNode(this).scrollTop = 0
  }
  render() {
    return (
      <div className="App">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default App;
