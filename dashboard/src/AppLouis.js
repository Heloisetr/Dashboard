import React, {useEffect} from 'react';
import { withRouter, BrowserRouter, Route} from 'react-router-dom';

import GoogleLoginPage from './screens/GoogleLoginPage/GoogleLoginPage'
import FacebookLoginPage from './screens/FacebookLoginPage/FacebookLoginPage'

import './App.css';

const Routing = withRouter(function({history}) {

  useEffect( () => [history.location]);

  return (
    <React.Fragment>
      <Route exact path="/google" component={GoogleLoginPage}></Route>
      <Route exact path="/fb" component={FacebookLoginPage}></Route>
    </React.Fragment>
  );
});

function App() {

  function PageSelect() {
    return <Routing />;
  }

  return (
    <BrowserRouter>
      {PageSelect()}
    </BrowserRouter>
  );
}

export default App;
