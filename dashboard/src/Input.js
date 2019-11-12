import React from 'react';

const Input = props =>
  <form onSubmit={this.preventSubmit}>
    <input type='text' placeholder='Enter City Name...' onKeyDown={props.queryWeather}/>
  </form>

export default Input;x