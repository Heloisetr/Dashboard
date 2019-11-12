import React, { useState } from 'react';
import {withRouter} from 'react-router-dom';
import {HeaderAuth} from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer';
import './AuthLogInPage.css';


export default withRouter(function AuthLogInPage({history})
{
  const axios = require('axios');

  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  async function setLogin(new_user) {
    axios.get('http://localhost:5000/', {new_user})
    .then(resp => {
        console.log ("OK", resp);
    })
  }

  function submitHandler(event)
  {
      const user = {
          email: email,
          password: password
      };
      let res = setLogin(user);
      console.log(res);
  }

  return (
    <React.Fragment>
    <div className="App">
      <HeaderAuth/>
      <div className="App_Body_Forms">
          <form onSubmit={submitHandler}>
              <h3>Log In to your account</h3>
              <input type="email" name="email" placeholder="Email" onChange={e => setEmail(e.target.value)} required/><br/>
              <input type="password" name="pwd" placeholder="Password" onChange={e => setPassword(e.target.value)} required/><br/>
              <input type="submit" value="Log In" name="submit"/>   
              <p>Need an account ? <button onClick={() => history.push('/AuthSignUpPage')}>Sign up</button></p>
          </form>
      </div>
      <Footer/>
    </div>
    </React.Fragment>
  );
})
