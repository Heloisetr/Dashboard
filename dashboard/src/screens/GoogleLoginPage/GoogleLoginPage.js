import React from 'react';
import { withRouter } from 'react-router-dom';

import Header from '../../components/Header/Header'
import GoogleLog from '../../components/GoogleLog/GoogleLog'

export default withRouter(function GoogleLoginPage({history})
{
    return (
        <React.Fragment>
            <Header />
            <GoogleLog />
        </React.Fragment>
    )
})