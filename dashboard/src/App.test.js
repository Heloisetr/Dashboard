import React from 'react';
import ReactDOM from 'react-dom';
import AppLogIn from './Authentification/LogIn';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppLogIn />, div);
  ReactDOM.unmountComponentAtNode(div);
});
