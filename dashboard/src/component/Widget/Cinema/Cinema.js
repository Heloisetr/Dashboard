import React, { useState } from 'react';

import './Cinema.css';

export default function Movie()
{
    const axios = require('axios');
    const [movie_search, setMovieSearch] = useState("joker");
    const [movie_name, setMovieName] = useState("");
    const [movie_snippet, setMovieSnippet] = useState("");
    const [movie_released, setMovieReleased] = useState("");
    const [movie_average, setMovieAverage] = useState("");
    const [movie_picture, setMoviePicture] = useState("");

    async function setCinema(movie_search)
    {
        await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=3281ecc6259127ad1d57d693304f646f&query=${movie_search}`)
        .then(resp => {
            console.log("OK", resp);
            setMovieName(resp.data.results[0].title);
            setMovieSnippet(resp.data.results[0].overview);
            setMovieReleased(resp.data.results[0].release_date);
            setMovieAverage(10 * resp.data.results[0].vote_average);
        })
    }
    setCinema(movie_search);

    return (
        <div> 
            <p>{movie_name}</p>
            <p>{movie_snippet}</p>
            <p>{movie_released}</p>
            <p>{movie_average}</p>
        </div>
    )
}

export function TVShow()
{
    const axios = require('axios');
    //const []
    return (
        <div>

        </div>
    )
}