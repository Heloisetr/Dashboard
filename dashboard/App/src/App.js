import React, {useEffect} from 'react';
import { withRouter, BrowserRouter, Route} from 'react-router-dom';

import './App.css';
import AuthLogInPage from './screens/AuthLogInPage/AuthLoginPage';
import AuthSignUpPage from './screens/AuthSignUpPage/AuthSignUpPage';
import WidgetAddPage from './screens/WidgetAddPage/WidgetAddPage';
import HomePage from './screens/HomePage/HomePage';
import ProfilePage from './screens/ProfilePage/ProfilePage';

import 'bootstrap/dist/css/bootstrap.min.css';

const Routing = withRouter(function({history}) {

  useEffect( () => [history.location]);

  return (
    <React.Fragment>
      <Route exact path="/" component={AuthLogInPage} />
      <Route exact path="/AuthSignUpPage" component={AuthSignUpPage}/>
      <Route exact path="/widget-handling" component={WidgetAddPage} />
      <Route exact path="/HomePage" component={HomePage} />
      <Route exact path="/ProfilePage" component={ProfilePage} />
    </React.Fragment>
  );
});

function App() {

  function PageSelect() {
    return <Routing />;
  }

  return (
    <BrowserRouter forceRefresh={true}>
      {PageSelect()}
    </BrowserRouter>
  );
}

export default App;
