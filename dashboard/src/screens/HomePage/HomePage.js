import React from 'react';
import {withRouter} from 'react-router-dom';
import './HomePage.css'
import { HeaderAuth } from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer'
import NavBar from '../../component/NavBar/NavBar';
import Weather from '../../component/Widget/Weather/Weather';
import Pokedex from '../../component/Widget/Pokedex/Pokedex';
import NYTimes from '../../component/Widget/NYTimes/NYTimes';

export default withRouter(function HomePage({history}) {
    function GetUserWidgets() {
        //var widgets = require('../../temp/userWidget.json');
/*
        return (
            <React.Fragment>
                {widgets.data.map((widget) => {
                    if (widget.name == "CityWeather") {
                        return (
                            <Weather/>
                        )
                    } else if (widget.name == "Pokedex") {
                        return (
                            <Pokedex/>
                        )
                    }
                })}
            </React.Fragment>
        )*/
    }
    return (
        <React.Fragment>
            <div className="HomePage">
                <HeaderAuth/>
                <NavBar />
                {GetUserWidgets()}
                <Footer/>
            </div>
        </React.Fragment>
    );
})