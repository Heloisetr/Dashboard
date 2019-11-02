import React from 'react';
import ReactDOM from 'react-dom';
import AppT from './Authentification/LoginIn';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppT />, div);
  ReactDOM.unmountComponentAtNode(div);
});
