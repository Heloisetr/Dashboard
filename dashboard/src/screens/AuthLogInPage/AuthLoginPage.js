import React from 'react';
import {withRouter} from 'react-router-dom';
import {HeaderAuth} from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer';
import './AuthLogInPage.css';


export default withRouter(function AuthLogInPage({history}) {
    return (
      <React.Fragment>
      <div className="App">
        <HeaderAuth/>
        <div className="App_Body_Forms">
            <form method="POST">
                <h3>Log In to your account</h3>
                <input type="email" name="email" placeholder="Email" required/><br/>
                <input type="password" name="pwd" placeholder="Password" required/><br/>
                <button onClick={() => history.push('/HomePage')}>LogIN</button>
                <p>Need an account ? <button onClick={() => history.push('/AuthSignUpPage')}>Sign up</button></p>
            </form>
        </div>
        <Footer/>
      </div>
      </React.Fragment>
    );
})

/*
<input type="submit" value="Log In" name="submit"/>   
                */
