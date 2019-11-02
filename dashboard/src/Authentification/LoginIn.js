import React, {Component} from 'react';
import logo from '../logo.svg';
import './Auth.css';
//import {Link, Router, Switch, Route} from 'react-router-dom'
import SignUp from './SignUp'

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


export default class AppT extends Component {
  render() {
    return (
      <div className="App">
        <Header title="je test le reactjs"/>
        <Body text=" nul a chier"/>
      </div>
    );
  }
}

/*
export default class AppT extends Component {
  render() {
    return (
      <div className="App">
        <Header title="je test le reactjs"/>
        <Body text=" nul a chier"/>
        <Router>
         <Link to="/LoginIn">Test</Link>
          <Switch>
            <Route path="/LoginIn">
              <SignUp />
            </Route>
          </Switch>
         </Router>
      </div>
    );
  }
}
*/
/*
<a className="App-link"
            href="https://reactjs.org"
           target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          */