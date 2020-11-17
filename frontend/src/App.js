import React from 'react';
import { Layout } from 'antd';
import LandingHeader from './components/landingHeader';
import LandingFooter from './components/landingFooter';
import Routes from './Routes';

const { Content } = Layout;

const App = () => {
    return ( 
        <Layout>
            <LandingHeader></LandingHeader>
            <Content style={{ background: "#FFFFFF", height: "calc(100vh - 55px)" }}>  
                <Routes></Routes>
            </Content>
            <LandingFooter></LandingFooter>
        </Layout>
    );
};

export default App;