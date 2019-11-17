import React, { useState, useEffect, useRef } from 'react';

import './Weather.css';



export default function Weather(props)
{
    const axios = require('axios');
    const city = props.param;
    const [ temp, setTemp] = useState("");
    const [ humidity, setHumidity] = useState("");    

    async function setWeather(city) {
        if (temp !== "") {
            return ("ok");
        } else {
            await axios.get(`https://api.openweathermap.org/data/2.5/find?q=${city}&units=imperial&appid=f92c1f4990b0574d4a4e4d3dd556f388`)
            .then(resp => {
                var temp_far = resp.data.list[0].main.temp; 
                var temp_cel = Math.round((temp_far - 32) * 5/9);
                setTemp(temp_cel);
                setHumidity(resp.data.list[0].main.humidity);
            })
        }
    }
    setWeather(city);
    
    function useInterval(callback, delay) {
        const savedCallback = useRef();

        useEffect(() => {
            savedCallback.current = callback;
        });

        useEffect(() => {
            function tick() {
                savedCallback.current();
            }
            if (delay !== null) {
                let id = setInterval(tick, delay);
                return () => clearInterval(id);
            }
        }, [delay]);
    }

    useInterval(() => {
        setWeather(city);
    }, 10000);

    return (
        <div className="Weather_container">
            <h1>
                Weather
            </h1>
            <hr></hr>
            <p className="City">{city}</p><br/>
            <p className="Temp">{temp} °C</p>
            <p className="Temp">{humidity} % of humidity</p>
        </div>
    );
}