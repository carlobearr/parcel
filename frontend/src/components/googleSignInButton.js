import { React } from 'react';
import { GoogleLogin } from 'react-google-login';
import { setSignIn } from '../api/sessionHandler';
import './googleSignInButton.css';


function GoogleSignInButton() {
    const clientID = "55520656354-nv3m9jg3sdvucbsopa4o5ebuttimidrf.apps.googleusercontent.com";
    
    return (
        <div>
            <GoogleLogin
                clientId={ clientID }
                buttonText='Google Sign In'
                icon={false}
                onSuccess={setSignIn}
            />
            
        </div>
    )   
}

export default GoogleSignInButton;