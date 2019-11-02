import React from 'react'
import logo from './logo.svg';
import './Header.css';

export default function Header()
{
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
        </header>
    )
}

export function HeaderAuth()
{
  return (
    <header className="Header_auth">
      <h3>DASHBOARD</h3>
    </header>
  )
}