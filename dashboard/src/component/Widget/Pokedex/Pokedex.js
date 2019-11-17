import React, { useState } from 'react';
import './Pokedex.css';

export default function Pokedex(props)
{
    const axios = require('axios');
    const [ name, setName] = useState(props.param);
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
            setImage(resp.data.sprites.front_default);
        })
    }
    setPokedex(name);

    return (
        <div className="Pokedex_container">
            <h1>
                Pokedex
            </h1>
            <hr></hr>
            <div className="image">
                <img src={image} alt={name}></img>
                <p><strong>{name}</strong></p>
            </div>
            <div className="caract">
                <p>Height : <strong>{height}</strong> feet</p>
                <p>Weight : <strong>{weight}</strong> pounds</p>
                <p>Type : <strong>{type}</strong></p>
            </div>
        </div>
    )
}