import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Route access types
import PrivateRoute from './PrivateRoute';

//Pages import
import Landing from './pages/landingPage';
import Dashboard from './pages/dashboard';
import Tracking from './pages/trackingPage';
import EditProfile from './pages/editProfile';
import BookDelivery from './pages/bookDeliveryPage';
import AddressPage from './pages/addressPage';
import WaybillPage from './pages/waybillPage'
import { Redirect } from 'react-router-dom';

function Routes(props) {
    return (
        <Switch>
            <Route path="/" exact render={() => 
                    props.isLoggedIn ?
                    <Redirect to='/dashboard'/>
                    :
                    <Landing {...props}/>

                } 
            set/>
            <PrivateRoute path="/dashboard" component={Dashboard} {...props}/>
            <Route path="/tracking" component={Tracking}/>
            <PrivateRoute path="/edit" component={EditProfile} {...props}/>
            <PrivateRoute path="/address" component={AddressPage} {...props}/>
            <PrivateRoute path='/booking' component={BookDelivery} {...props}/>
            <PrivateRoute path='/waybills' component={WaybillPage} {...props}/>
        </Switch>
    )
};

export default Routes;