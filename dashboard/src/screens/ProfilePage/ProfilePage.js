import React from 'react';
import {HeaderAuth} from '../../component/Header/Header'
import Footer from '../../component/Footer/Footer'
import NavBar from '../../component/NavBar/NavBar';

import './ProfilePage.css'

export default function ProfilePage()
{
    var userInfos = require('../../userInfos.json');

    return(
        <React.Fragment>
            <HeaderAuth/>
            <NavBar />
            <div className="ProfilePage">
                <h3 className="ProfilePage-title">My informations :</h3><br/><br/><br/>
                <div className="info_container">
                    <div className="name_info">
                        <p><strong>Name</strong><br/>{userInfos.name}</p>
                        <p><strong>Firstname</strong><br/>{userInfos.firstname}<br /></p>
                    </div>
                    <div className="email_info">
                        <p><strong>Email</strong><br/>{userInfos.email}</p>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}