import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import {Button, Popover, OverlayTrigger, Badge, Modal} from 'react-bootstrap';

import GoogleLog from '../../component/GoogleLog/GoogleLog.js'
import FacebookLog from '../../component/FacebookLog/FacebookLog.js';


import './Widget.css'

const images = {
    "meteo": require("./assets/meteo.png"),
    "calendar": require("./assets/calendar.png")
};

export default withRouter(function Widget(props)
{
    const axios = require('axios');
    var userInfos = require('../../userInfos.json');
    
    const [show, setShow] = useState(false);
    const [coshow, setCoShow] = useState(false);
    const [fbshow, setFbShow] = useState(false);
    const [params, setParams] = useState("");
    //const [auth, setAuth] = useState("");
    //const [token, setToken] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCoClose = () => setCoShow(false);
    //const handleCoShow = () => setCoShow(true);

    function ContinueShow() {
            handleCoClose();
            handleShow();
    }

    const handleFbClose = () => setFbShow(false);
    const handleFbShow = () => setFbShow(true);

    function ContinueFbShow() {
            handleFbClose();
            handleShow();
    }


/*
    async function addToken(token) {
        axios.post('http://localhost:8080/youtube', {token})
        .then(resp => {
        })
    }
*/

    async function addWidget(new_widget) {
        axios.post('http://localhost:8080/widget', {new_widget})
        .then(resp => {
            console.log("OK", resp);
            handleClose();
        })
    }
/*    
    async function connectUser() {
        axios.get('http://localhost:8080/youtube')
        .then(resp => {
            console.log("AUTH OK", resp);
            setAuth(resp.data);
            handleCoShow();
        })
    }

    function connectionHandler() {
        connectUser();
    }

    function connectionHandlerFB() {
        handleFbShow();
    }
*/
    function submitHandler(event) {
        const user_widget = {
            email: userInfos.email,
            name: props.name,
            param: params 
        };
        let res = addWidget(user_widget);
        console.log(res);
        props.history.push('HomePage');
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
                    {props.connection === "Youtube" &&
                        <Button variant="danger" className="Widget-button Widget-add">Soon </Button>
                    }
                    {props.connection === "Facebook" &&
                        <Button variant="success" className="Widget-button Widget-add" onClick={handleFbShow}>Connect </Button>
                    }
                    {props.connection === "none" &&
                        <Button variant="success" className="Widget-button Widget-add" onClick={handleShow}>Add </Button>
                    }
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
                    <Modal show={coshow} onHide={handleCoClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Youtube Connection</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <GoogleLog/>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleCoClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={ContinueShow}>
                            Continue
                        </Button>
                        </Modal.Footer>
                    </Modal>
                    <Modal show={fbshow} onHide={handleFbClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Facebook Connection</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <FacebookLog/>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleFbClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={ContinueFbShow}>
                            Continue
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </React.Fragment>
    );
})