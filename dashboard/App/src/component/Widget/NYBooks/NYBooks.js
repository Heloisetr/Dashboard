import React, {useState} from 'react';
import {Dropdown} from 'react-bootstrap';

import './NYBooks.css';

export default function NYBooks(props)
{
    const axios = require('axios');
    const Writter = props.param;
    const _index = 0;
    const [ _book_title, setBookTitle] = useState("");
    const [ _byline, setByline] = useState("");
    const [ _url, setUrl] = useState("");
    const [ _date, setDate] = useState("");
    const [ reviews, setReviews] = useState([]);

    async function setNYBooks() {
        if ( _book_title !== "") {
            return ("ok");
        } else {
            await axios.get(`https://api.nytimes.com/svc/books/v3/reviews.json?author=${Writter}&api-key=Np6dBGDV09g8a82j0DVBR4gTFPqRC5HO`)
            .then(resp => {
                setBookTitle(resp.data.results[_index].book_title);
                setByline(resp.data.results[_index].byline);   
                setUrl(resp.data.results[_index].url);
                setDate(resp.data.results[_index].publication_dt);
                setReviews(resp.data.results);
            })
        }
    }
    setNYBooks();

    function setComplet(index) {
        if (index === "") {
            index = 0;
        }
        if (index > 10) {
            index = 10;
        } else if (index < 0) {
            index = 0;
        }
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
                        return ("");
                    }
                    return (
                    <Dropdown.Item key={index}>{index} : {review.book_title} by {review.byline}</Dropdown.Item>
                    )
                })}
            </React.Fragment>
            
        )
    }

    return (
        <div className="NYBooks_container">
            <h1>
                New York Times
            </h1>
            <h3>Books Review</h3>
            <hr></hr>
            <h3>{Writter}</h3>
            <Dropdown>
                <Dropdown.Toggle variant="success">Reviews</Dropdown.Toggle>
                <Dropdown.Menu title="Channels">
                    {GetAllPost()}
                </Dropdown.Menu>
            </Dropdown>
            <input type="number" name="index" placeholder="0" onChange={e => setComplet(e.target.value)} />
            <p className="BooksData">{_book_title}</p>
            <p className="BooksData">{_byline}</p>
            <p className="BooksData">{_date}</p>
            <a href={_url}>
                <button type="button" className="btn btn-info btn-sm">Click Here</button>
            </a>
        </div>
    );
}