import React, { useState } from 'react';

import './Weather.css';



export default function Weather()
{
    const axios = require('axios');
    const [ city, setCity] = useState("Bordeaux");
    const [ temp, setTemp] = useState("");
    const [ humidity, setHumidity] = useState("");    

    async function setWeather(city) {
        //setCity("Bordeaux");
        await axios.get(`https://api.openweathermap.org/data/2.5/find?q=${city}&units=imperial&appid=f92c1f4990b0574d4a4e4d3dd556f388`)
        .then(resp => {
            console.log("OK", resp);
            var temp_far = resp.data.list[0].main.temp; 
            var temp_cel = Math.round((temp_far - 32) * 5/9);
            setTemp(temp_cel);
            setHumidity(resp.data.list[0].main.humidity);
        })
    }
    setWeather(city);
    


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