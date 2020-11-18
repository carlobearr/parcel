import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Pages import
import Landing from './pages/landingPage';
import Dashboard from './pages/dashboard';
import Tracking from './pages/trackingPage';
import EditProfile from './pages/editProfile';

function Routes() {
    return (
        <Switch>
        <Route path="/" exact component={Landing}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/tracking" component={Tracking}/>
        <Route path="/edit" component={EditProfile}/>
        </Switch>
    )
};

export default Routes;