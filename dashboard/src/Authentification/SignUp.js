import React, {Component} from 'react';
import logo from '../logo.svg';
import './Auth.css';

const Body = (props) =>  (
  <p>
    Edit <code>src/App.js</code>{props.text}.
  </p>
);

class Header extends Component {
    render() {
      return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" width="50" height="50" />
          <p className="App-title">{this.props.title}</p>
        </header>
      );
    }
}

export default class SignUp extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
        <p>toto ets la</p>
      </div>
    );
  }
}