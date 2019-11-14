import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';

import './NYTimes.css';

export default function NYTimes({history})
{
    const axios = require('axios');
    const [ article_search, setArticleSearch] = useState("north korea");
    const [ article_headline, setArticleHeadLine] = useState("");
    const [ article_snippet, setArticleSnippet] = useState("");
    const [ article_url, setArticleURL] = useState("");
    const [ article_image, setArticleImage] = useState("");

    async function setNYTimes(article_search) {
        await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${article_search}&api-key=Np6dBGDV09g8a82j0DVBR4gTFPqRC5HO`)
        .then(resp => {
            console.log("OK", resp);
            var nb_article = Math.round(0 + (Math.random() * 5));
            console.log(nb_article);
            setArticleHeadLine(resp.data.response.docs[0].headline.main);
            setArticleURL(resp.data.response.docs[0].web_url);   
            setArticleSnippet(resp.data.response.docs[0].snippet);
            setArticleImage("https://www.nytimes.com/" + resp.data.response.docs[0].multimedia[0].url); 
        })
    }
    setNYTimes(article_search);
    return (
        <div className="NYTimes_container">
            <h1>
                New York Times
            </h1>
            <hr></hr>
            <div className="Title">
                <h2>{article_headline}</h2><br></br>
            </div>
            <p>{article_snippet}</p>
            <img src={article_image} alt="test"></img>
            <a href={article_url}>
                <button type="button" class="btn btn-info btn-sm">Click Here</button>
            </a>
        </div>
    );
}