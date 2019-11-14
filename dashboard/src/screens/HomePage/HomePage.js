import React from 'react';
import {withRouter} from 'react-router-dom';
import './HomePage.css'
import { HeaderAuth } from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer'
import NavBar from '../../component/NavBar/NavBar';
import Weather from '../../component/Widget/Weather/Weather';
import Pokedex from '../../component/Widget/Pokedex/Pokedex';
import NYTimes from '../../component/Widget/NYTimes/NYTimes';
import Cinema from '../../component/Widget/Cinema/Cinema';
import Widget from '../../component/Widget/Widget';

export default withRouter(function HomePage({history}) {
    function GetUserWidgets() {
        const axios = require('axios');
        var userInfos = require('../../userInfos.json');

        axios.get('http://localhost:5000/widget', {
            params:{
                email_s: userInfos.email
            }
        })
        .then(resp => {
        })
        var widgets = require('../../temp/userWidget.json');

        return (
            <React.Fragment>
                    {widgets.map((widget) => {
                        if (widget.name == "CityWeather") {
                            return (
                                <div className="HomePage-widget">
                                    <Weather param={widget.params}/>
                                </div>
                            )
                        } else if (widget.name == "PokemonInfos") {
                            return (
                                <div className="HomePage-widget">
                                    <Pokedex param={widget.params}/>
                                </div>
                            )
                        } else if (widget.name == "NYTimes") {
                            return (
                                <div className="HomePage-widget">
                                    <NYTimes param={widget.params}/>
                                </div>
                            )
                        } else if (widget.name == "MovieSearch") {
                            return (
                                <div className="HomePage-widget">
                                    <Cinema param={widget.params}/>
                                </div>
                            )
                        } else if (widget.name == "TVShowSearch") {
                            return (
                                <div className="HomePage-widget">
                                    <Cinema param={widget.params}/>
                                </div>
                            )
                        } 
                    })}
            </React.Fragment>
        )
    }
    return (
        <React.Fragment>
            <div className="HomePage">
                <HeaderAuth/>
                <NavBar />
                <div className="HomePage-container">
                    {GetUserWidgets()}
                </div>
                <Footer/>
            </div>
        </React.Fragment>
    );
})