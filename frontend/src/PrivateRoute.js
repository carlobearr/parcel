import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute({component: Component, isLoggedIn, ...rest}) {
    return(
        <Route {...rest}
            render={props => 
                isLoggedIn ? 
                <Component isLoggedIn={isLoggedIn} {...props}/>
                :
                <Redirect to={{pathname: '/', state: {from: props.location} }}/>
            }
        />
    )
}

export default PrivateRoute;