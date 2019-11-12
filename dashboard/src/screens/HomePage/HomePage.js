import React from 'react';
import {withRouter} from 'react-router-dom';
import './HomePage.css'
import { HeaderAuth } from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer'
import NavBar from '../../component/NavBar/NavBar';
import Weather from '../../component/Widget/Weather/Weather';
import Pokedex from '../../component/Widget/Pokedex/Pokedex';

export default withRouter(function HomePage({history}) {
    return (
        <React.Fragment>
            <div className="HomePage">
                <HeaderAuth/>
                <NavBar />
                <Footer/>
            </div>
        </React.Fragment>  
    );
})