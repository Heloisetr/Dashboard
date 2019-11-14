import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import {Button, Popover, OverlayTrigger, Badge, Modal} from 'react-bootstrap';

import './Widget.css'
import Axios from 'axios';

const images = {
    "meteo": require("./assets/meteo.png"),
    "calendar": require("./assets/calendar.png")
};

export default withRouter(function Widget(props, {history})
{
    const axios = require('axios');
    var userInfos = require('../../userInfos.json');
    
    const [show, setShow] = useState(false);
    const [params, setParams] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    async function addWidget(new_widget) {
        axios.post('http://localhost:5000/widget', {new_widget})
        .then(resp => {
            console.log("OK", resp);
            handleClose();
        })
        axios.get('http://localhost:5000/widget', {
            params:{
                email_s: new_widget.email
            }
        })
        .then(resp => {
            history.push('HomePage');
        })
    }

    function submitHandler(event) {
        const user_widget = {
            email: userInfos.email,
            name: props.name,
            param: params 
        };
        let res = addWidget(user_widget);
        console.log(res);
    }

    const popinfos = (
        <Popover id="Widget-popover">
            <Popover.Title as="h3">Parameters</Popover.Title>
            <Popover.Content>
                Here's the parameters that you need to provide<br/>
                <strong>{props.params}</strong> {props.params_type}
            </Popover.Content>
        </Popover>
    );

    return (
        <React.Fragment>
            <div className="Widget-container">
                <img className="Widget-image" src={images[props.image]} alt=""/>
                <h3 className="Widget-name">{props.name}<br/><Badge variant="secondary">{props.badge}</Badge></h3>
                <div className="Widget-button-container">
                    <OverlayTrigger trigger="click" placement="right" overlay={popinfos}>
                        <Button variant="info" className="Widget-button">Parameters</Button>
                    </OverlayTrigger>
                    <Button variant="success" className="Widget-button Widget-add" onClick={handleShow}>Add </Button>
                    <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>{props.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><input type="text" name="name" placeholder={props.params} onChange={e => setParams(e.target.value)}></input></Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={submitHandler}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
                </div>
            </div>
        </React.Fragment>
    );
})