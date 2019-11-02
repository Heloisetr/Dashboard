import React from 'react';
import {HeaderAuth} from '../../component/Header/Header';
import { Footer } from '../../component/Footer/Footer';
import {withRouter} from 'react-router-dom';
import './AuthSignUpPage.css';


export default withRouter(function AuthSignUpPage({history})
{
    return (
        <React.Fragment>
            <HeaderAuth />
            <div className="App_Body_Forms">
                <form method="POST">
                    <h3>Create your account</h3>
                    <input type="text" name="name" placeholder="Name" required/><br/>
                    <input type="text" name="firstname" placeholder="Firstname" required/><br/>
                    <input type="email" name="email" placeholder="Email" required/><br/>
                    <input type="password" name="pwd" placeholder="Password" required/><br/>
                    <input type="submit" value="Sign Up" name="submit"/>   
                </form>
            </div>  
            <Footer />
        </React.Fragment>
    )
})