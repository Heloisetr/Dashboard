import React from 'react';

import { GoogleLogin } from 'react-google-login'

export default function GoogleLog() {
    
    const responseGoogle = (response) => {
        console.log(response);
    }

    return (
        <GoogleLogin
            clientId="298907328658-02vcj2kgg62ohsu2srpoloppt3huabu4.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
    )
}