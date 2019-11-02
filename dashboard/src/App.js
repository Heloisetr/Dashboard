import React, {useEffect} from 'react';
import { withRouter, BrowserRouter, Route} from 'react-router-dom';

import './App.css';
import AuthLogInPage from './screens/AuthLogInPage/AuthLoginPage';
import AuthSignUpPage from './screens/AuthSignUpPage/AuthSignUpPage';

const Routing = withRouter(function({history}) {

  useEffect( () => [history.location]);

  return (
    <React.Fragment>
      <Route exact path="/" component={AuthLogInPage} />
      <Route exact path="/AuthSignUpPage" component={AuthSignUpPage}/>
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
