import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Button, Dropdown} from 'react-bootstrap';


import './NYBooks.css';
import Widget from '../Widget';
import { set } from 'mongoose';

export default function NYBooks(props)
{
    const axios = require('axios');
    const [ Writter, setWritter] = useState("Stephen King");
    const [ _index, setIndex] = useState(0);
    const [ _book_title, setBookTitle] = useState("");
    const [ _byline, setByline] = useState("");
    const [ _url, setUrl] = useState("");
    const [ _date, setDate] = useState("");
    const [ reviews, setReviews] = useState([]);

    async function setNYBooks() {
        await axios.get(`https://api.nytimes.com/svc/books/v3/reviews.json?author=${Writter}&api-key=Np6dBGDV09g8a82j0DVBR4gTFPqRC5HO`)
        .then(resp => {
            setBookTitle(resp.data.results[_index].book_title);
            setByline(resp.data.results[_index].byline);   
            setUrl(resp.data.results[_index].url);
            setDate(resp.data.results[_index].publication_dt);
            setReviews(resp.data.results);
        })
    }
    setNYBooks();

    function setComplet(index) {
        setBookTitle(reviews[index].book_title);
        setByline(reviews[index].byline);
        setUrl(reviews[index].url);
        setDate(reviews[index].publication_dt);
    }

    function GetAllPost() {
        return (
            <React.Fragment>
                {reviews.map((review, index) => {
                    if (index > 10) {
                        return;
                    }
                    return (
                        <Dropdown.Item>{review.book_title} by {review.byline}</Dropdown.Item>
                    )
                })}
            </React.Fragment>
            
        )
    }

    return (
        <div className="NYTimes_container">
            <h1>
                New York Times
            </h1>
            <h3>Books Review</h3>
            <hr></hr>
            <Dropdown>
                <Dropdown.Toggle variant="success">Reviews</Dropdown.Toggle>
                <Dropdown.Menu title="Channels">
                    {GetAllPost()}
                </Dropdown.Menu>
            </Dropdown>
            <p className="Title">{_book_title}</p>
            <p className="Views">{_byline}</p>
            <p className="Title">{_date}</p>
            <p className="Views">{_url}</p>
        </div>
    );
}