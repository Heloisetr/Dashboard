import React from 'react';
import { withRouter } from 'react-router-dom';

import Widget from '../../components/Widget/Widget.js'

import './WidgetHandler.css'

export default withRouter(function WidgetHandler({history})
{
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
            <div className="WidgetHandler">
                {GetAllWidgets()}
            </div>
        </React.Fragment>
    );
})