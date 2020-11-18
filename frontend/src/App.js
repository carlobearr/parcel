import React from 'react';
import { Layout } from 'antd';
import LandingHeader from './components/landingHeader';
import LandingFooter from './components/landingFooter';
import Routes from './Routes';
import './App.css';

const { Content } = Layout;

const App = () => {
    return ( 
        <Layout>
            <LandingHeader></LandingHeader>
            <Content style={{ background: "#FFFFFF", height: "100%" }}>  
                <Routes></Routes>
            </Content>
            <LandingFooter></LandingFooter>
        </Layout>
    );
};

export default App;