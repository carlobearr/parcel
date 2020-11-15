import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import LandingHeader from './components/landingHeader';
import LandingFooter from './components/landingFooter';
import Landing from './components/landingPage';
import Dashboard from './components/dashboard';
import Tracking from './components/trackingPage';

const { Header, Footer, Content } = Layout;

const App = () => {
    return ( 
        <Layout>
            <LandingHeader></LandingHeader>
            <Content style={{ background: "#FFFFFF", height: "calc(100vh - 55px)" }}>  
                <Router>
                    <Switch>
                        <Route path="/" exact component={Landing}/>
                        <Route path="/dashboard" component={Dashboard}/>
                        <Route path="/tracking" component={Tracking}/>
                    </Switch>
                </Router>
            </Content>
            <LandingFooter></LandingFooter>
        </Layout>
    );
};

export default App;