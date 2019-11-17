import React/*, { useState }*/ from 'react';
import { DropdownButton } from 'react-bootstrap';

import './Youtube.css';

export default function Youtube(props)
{
    const axios = require('axios');
    //const [ search, setSearch] = useState(props.param)
    //const [ channels, setChannels] = useState("");
    
    async function getChannels() {
        axios.get('http://localhost:8080/youtube/channels', {
            params:{
                name: props.param
            }
        })
        .then(resp => {
            //setChannels(resp.data);
        })
    }

    getChannels();

    //const [ index, setIndex] = useState(0);
    //const [ views, setViews] = useState(channels[index].statistics.viewCount);
    //const [ name, setName] = useState(channels[index].snippet.title);
/*
    function setComplet(index_m) {
        setIndex(index_m);
        //setViews(channels[index].statistics.viewCount);
        //setName(channels[index].snippet.title);
    }
*/
    return (
        <React.Fragment>
            <div className="View_container">
                <h1>
                    Views Counter
                </h1>
                <hr></hr>
                <DropdownButton title="Channels">
                    
                </DropdownButton>
                <p className="Title">View</p>
                <p className="Views">0</p>
            </div>
        </React.Fragment>
    );
}