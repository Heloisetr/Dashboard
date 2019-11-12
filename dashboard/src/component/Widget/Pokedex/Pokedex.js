import React, { useState } from 'react';
import './Pokedex.css';

export default function Pokedex()
{
    const axios = require('axios');
    const [ name, setName] = useState("liepard");
    const [ height, setHeight] = useState("");
    const [ weight, setWeight] = useState("");
    const [ type, setType] = useState("");
    const [ image, setImage] = useState("");

    async function setPokedex(name) {
        await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(resp => {
            console.log("OK", resp);
            setHeight(resp.data.height);
            setWeight(resp.data.weight);
            setType(resp.data.types[0].type.name);
            setImage(resp.data.sprites.back_default);
        })
    }
    setPokedex(name);

    return (
        <div className="Pokedex_container">
            <p>the height is : {height}</p>
            <p>the weight is : {weight}</p>
            <p>the type is : {type}</p>
            <img src={image} alt="test"></img>
        </div>
    )
}