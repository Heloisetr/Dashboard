import React from 'react';

import FacebookLogin from 'react-facebook-login';

export default function FacebookLog() { 
    const responseFacebook = (response) => {
        console.log(response);
    }

    
    return (
        <React.Fragment>
            <FacebookLogin
                appId="532030047615482"
                autoLoad={true}
                fields="name,email,picture"
                callback={responseFacebook}
            />
        </React.Fragment>
    )
}