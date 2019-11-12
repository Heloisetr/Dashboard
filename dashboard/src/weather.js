import React from 'react';

const Weather = props =>
  <div className='weather'>
    <p>City: </p>
    <p>{props.city}</p>

    <p>Temperature: </p>
    <p>{props.temp}</p>

    <p>Sky: </p>
    <p>{props.clouds}</p>
  </div>
  
export default Weather;