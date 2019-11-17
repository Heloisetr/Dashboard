import React from 'react';
import { withRouter } from 'react-router-dom';

import Header from '../../components/Header/Header'
import FacebookLog from '../../components/FacebookLog/FacebookLog'

export default withRouter(function FacebookLoginPage({history})
{
    return (
        <React.Fragment>
            <Header />
            <FacebookLog />
        </React.Fragment>
    )
})