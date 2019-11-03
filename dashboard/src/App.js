import React, {useEffect} from 'react';
import { withRouter, BrowserRouter, Route} from 'react-router-dom';

import './App.css';
import AuthLogInPage from './screens/AuthLogInPage/AuthLoginPage';
import AuthSignUpPage from './screens/AuthSignUpPage/AuthSignUpPage';
import WidgetAddPage from './screens/WidgetAddPage/WidgetAddPage';

const Routing = withRouter(function({history}) {

  useEffect( () => [history.location]);

  return (
    <React.Fragment>
      <Route exact path="/" component={AuthLogInPage} />
      <Route exact path="/AuthSignUpPage" component={AuthSignUpPage}/>
      <Route exact path="/widget-handling" component={WidgetAddPage} />
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
