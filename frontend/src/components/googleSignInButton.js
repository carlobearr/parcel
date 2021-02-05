import { React } from 'react';
import { GoogleLogin } from 'react-google-login';
import { setSignIn } from '../api/sessionHandler';
import { Redirect,  withRouter } from 'react-router-dom';

import './googleSignInButton.css';


function GoogleSignInButton(props) {
    const clientID = "55520656354-nv3m9jg3sdvucbsopa4o5ebuttimidrf.apps.googleusercontent.com";
    
    const successSignIn = async(googleUser) => {
        const response = await setSignIn(googleUser);
        if(response.user) {
            props.setIsLoggedIn(response.user);
            props.history.push(response.redir);
        }
    }

    return (
        <div>
            <GoogleLogin
                clientId={ clientID }
                buttonText='Google Sign In'
                icon={false}
                onSuccess={successSignIn}
            />
        </div>
    )   
}

export default withRouter(GoogleSignInButton);