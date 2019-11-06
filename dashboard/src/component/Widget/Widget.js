import React from 'react';
import {Button, Popover, OverlayTrigger, Badge} from 'react-bootstrap';

import './Widget.css'

const images = {
    "meteo": require("./assets/meteo.png"),
    "calendar": require("./assets/calendar.png")
};

export default function Widget(props)
{
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
                    <Button variant="success" className="Widget-button Widget-add">Add</Button>
                </div>
            </div>
        </React.Fragment>
    );
}