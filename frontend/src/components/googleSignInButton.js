import { React, useEffect } from 'react';
import './googleSignInButton.css';

function GoogleSignInButton() {
    useEffect(() => {
        //attach google script import
        const script = document.createElement('script');

        script.src = 'https://apis.google.com/js/platform.js';
        script.async = true;
        script.defer = true;

        document.body.appendChild(script);
    });

    return( 
        <div className="g-signin2" data-onsuccess="onSignIn" data-width="300"></div>
    )
}

export default GoogleSignInButton;