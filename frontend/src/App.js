import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Landing from './components/landingPage';
import Dashboard from './components/dashboard';
import Tracking from './components/trackingPage';

const { Header, Footer, Content } = Layout;

const App = () => {
    return ( 
        <Layout>
            <Header> Header </Header> 
            <Content>  
                <Router>
                    <Switch>
                        <Route path="/" exact component={Landing}/>
                        <Route path="/dashboard" component={Dashboard}/>
                        <Route path="/tracking" component={Tracking}/>
                    </Switch>
                </Router>
            </Content> 
            <Footer> Footer </Footer> 
        </Layout>
    );
};

export default App;