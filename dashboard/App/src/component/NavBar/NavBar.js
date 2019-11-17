import React from 'react';
import {withRouter} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

export default withRouter(function NavBar({history})
{
    return (
        <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
                <Nav.Link onClick={() => history.push('HomePage')}>Home</Nav.Link>
                <Nav.Link onClick={() => history.push('widget-handling')}>Widgets</Nav.Link>
                <Nav.Link onClick={() => history.push('ProfilePage')}>Profile</Nav.Link>
            </Nav>
        </Navbar>     
    )
})
