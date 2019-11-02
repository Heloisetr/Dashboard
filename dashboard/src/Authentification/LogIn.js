import React, {Component} from 'react';
//import logo from '../logo.svg';
import './Auth.css';
import {Header} from './Header'
import {BodyLog} from './Body'
import { Footer } from './Footer';
//import {Link, Router, Switch, Route} from 'react-router-dom'
//import SignUp from './SignUp'


export default class AppLogIn extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <BodyLog/>
        <Footer/>
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