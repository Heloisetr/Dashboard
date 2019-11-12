import React, { useState } from 'react';
import {withRouter} from 'react-router-dom';

import {HeaderAuth} from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer'

import './WidgetAddPage.css';
import NavBar from '../../component/NavBar/NavBar';

export default withRouter(function WidgetAddPage({history}) {
    const axios = require('axios');
    
    const [ email, setEmail ] = useState("");
    const [ user_name, setName ] = useState("");
    const [ firstname, setFirstname ] = useState("");
    const [ password, setPassword ] = useState("");

    // Data need to be a json 
    async function setRegister(new_user) {
        axios.get('https://api.openweathermap.org/data/2.5/find?q=Bordeaux&units=imperial&appid=f92c1f4990b0574d4a4e4d3dd556f388')
        //axios.post('http://localhost:5000/', {new_user})
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
        setRegister(new_user);
    }

    return (
        <React.Fragment>
            <div>
                <HeaderAuth />
                <NavBar />
                <div className="Add-background">
                    <div className="Add-container">
                        <form onSubmit={submitHandler}>
                            <label htmlFor="email">Email: </label>
                                <input type="email" name="email" onChange={e => setEmail(e.target.value)} /><br/>
                            <label htmlFor="name">Name: </label>
                                <input type="text" name="name" onChange={e => setName(e.target.value)} /><br/>
                            <label htmlFor="firstname">Firstname: </label>
                                <input type="text" name="firstname" onChange={e => setFirstname(e.target.value)} /><br/>
                            <label htmlFor="email">Password: </label>
                                <input type="password" name="password" onChange={e => setPassword(e.target.value)} /><br/>
                            <input type="submit"/>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        </React.Fragment>
    );
})