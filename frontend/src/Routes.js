import { Switch, Route } from 'react-router-dom';
import Landing from './pages/landingPage';
import Dashboard from './pages/dashboard';
import Tracking from './pages/trackingPage';
import React from 'react';

function Routes() {
    return (
        <Switch>
        <Route path="/" exact component={Landing}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/tracking" component={Tracking}/>
        </Switch>
    )
};

export default Routes;