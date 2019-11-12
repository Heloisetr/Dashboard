import React, { useState } from 'react';
import {HeaderAuth} from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer'
import {withRouter} from 'react-router-dom';
import './AuthSignUpPage.css';


export default withRouter(function AuthSignUpPage({history})
{
    const axios = require('axios');
    
    const [ email, setEmail ] = useState("");
    const [ user_name, setName ] = useState("");
    const [ firstname, setFirstname ] = useState("");
    const [ password, setPassword ] = useState("");

    async function setRegister(new_user) {
        axios.post('http://localhost:5000/', {new_user})
        .then(resp => {
            console.log ("OK", resp);
        })
    }

    function submitHandler(event)
    {
        const new_user = {
            name: user_name,
            email: email,
            firstname: firstname,
            password: password
        };
        let res = setRegister(new_user);
    }

    return (
        <React.Fragment>
            <HeaderAuth />
            <div className="App_Body_Forms">
                <form onSubmit={submitHandler}>
                    <h3>Create your account</h3>
                    <input type="text" name="name" placeholder="Name" onChange={e => setName(e.target.value)} required/><br/>
                    <input type="text" name="firstname" placeholder="Firstname" onChange={e => setFirstname(e.target.value)} required/><br/>
                    <input type="email" name="email" placeholder="Email" onChange={e => setEmail(e.target.value)} required/><br/>
                    <input type="password" name="pwd" placeholder="Password" onChange={e => setPassword(e.target.value)} required/><br/>
                    <input type="submit" value="Sign Up" name="submit"/>   
                </form>
            </div>  
            <Footer />
        </React.Fragment>
    )
})