import React, {useState} from 'react';
import {Button, Popover, OverlayTrigger, Badge, Modal} from 'react-bootstrap';

import './Widget.css'

const images = {
    "meteo": require("./assets/meteo.png"),
    "calendar": require("./assets/calendar.png")
};

export default function Widget(props)
{
    
    const [show, setShow] = useState(false);
    const [name, setName] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                    <Modal.Body><input type="text" name="name" placeholder={props.params} onChange={e => setName(e.target.value)}></input></Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
                </div>
            </div>
        </React.Fragment>
    );
}