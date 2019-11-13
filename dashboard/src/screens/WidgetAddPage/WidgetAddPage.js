import React from 'react';
import {withRouter} from 'react-router-dom';

import {HeaderAuth} from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer'

import './WidgetAddPage.css';
import NavBar from '../../component/NavBar/NavBar';
import Widget from '../../component/Widget/Widget';

export default withRouter(function WidgetAddPage({history}) {

    function GetAllWidgets() {
        var widgets = require('../../Widget.json');

        return (
            <React.Fragment>
                {widgets.data.map((widget) => {
                    return (
                        <Widget name={widget.name} 
                                image={widget.image_key} 
                                params={widget.params[0].name} 
                                params_type={widget.params[0].type}
                                badge={widget.badge}/>
                    )
                })}
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <div>
                <HeaderAuth />
                <NavBar />
                <div className="Add-background">
                    <div className="Add-container">
                        {GetAllWidgets()}
                    </div>
                </div>
                <Footer />
            </div>
        </React.Fragment>
    );
})