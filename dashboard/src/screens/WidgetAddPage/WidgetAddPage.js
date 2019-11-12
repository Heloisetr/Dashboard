import React from 'react';
import {withRouter} from 'react-router-dom';

import {HeaderAuth} from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer'

import './WidgetAddPage.css';
import NavBar from '../../component/NavBar/NavBar';

export default withRouter(function WidgetAddPage({history}) {
    return (
        <React.Fragment>
            <div>
                <HeaderAuth />
                <NavBar />
                <div className="Add-background">
                    <div className="Add-container">
                        test
                    </div>
                </div>
                <Footer />
            </div>
        </React.Fragment>
    );
})