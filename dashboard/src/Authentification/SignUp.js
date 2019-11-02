import React, {Component} from 'react';
import logo from '../logo.svg';
import './Auth.css';
import { BodySign } from './Body';
import { Footer } from './Footer';



export default class SignUp extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <BodySign/>
        <Footer/>
      </div>
    );
  }
}