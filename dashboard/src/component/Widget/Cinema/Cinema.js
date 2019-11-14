import React, { useState } from 'react';
import {ProgressBar} from 'react-bootstrap';

import './Cinema.css';

export default function Movie()
{
    const axios = require('axios');
    const [movie_search, setMovieSearch] = useState("joker");
    const [movie_name, setMovieName] = useState("");
    const [movie_snippet, setMovieSnippet] = useState("");
    const [movie_released, setMovieReleased] = useState("");
    const [movie_average, setMovieAverage] = useState("");

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
        <div className="Movie_container">
            <h1>
                Movie
            </h1> 
            <hr></hr>
            <div className="Title">
                <h2>{movie_name}</h2>
            </div>
            <p className="date">{movie_released}</p><br/>
            <p className="resume">{movie_snippet}</p>
            <div className="viewers">
                <p><strong>Viewers Score</strong></p>
                <ProgressBar now={movie_average} label={`${movie_average}%`} />
            </div>
        </div>
    )
}

export function TVShow()
{
    const axios = require('axios');
    const [tvshow_search, setTvshowSearch] = useState("arrow");
    const [tvshow_name, setTvshowName] = useState("");
    const [tvshow_snippet, setTvshowSnippet] = useState("");
    const [tvshow_released, setTvshowReleased] = useState("");
    const [tvshow_average, setTvshowAverage] = useState("");

    async function setTvShow(tvshow_search)
    {
        await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=3281ecc6259127ad1d57d693304f646f&query=${tvshow_search}`)
        .then(resp => {
            console.log("OK", resp);
            setTvshowName(resp.data.results[0].name);
            setTvshowSnippet(resp.data.results[0].overview);
            setTvshowReleased(resp.data.results[0].first_air_date);
            setTvshowAverage(10 * resp.data.results[0].vote_average);
        })
    }
    setTvShow(tvshow_search);

    return (
        <div className="TvShow_container">
            <h1>
                TV Show
            </h1> 
            <hr></hr>
            <div className="Title">
                <h2>{tvshow_name}</h2>
            </div>
            <p className="date">{tvshow_released}</p><br/>
            <p className="resume">{tvshow_snippet}</p>
            <div className="viewers">
                <p><strong>Viewers Score</strong></p>
                <ProgressBar now={tvshow_average} label={`${tvshow_average}%`} />
            </div>
        </div>
    )
}