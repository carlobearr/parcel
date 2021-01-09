import React, { useState, useEffect } from 'react';
import { Layout, Spin } from 'antd';
import UserHeader from './components/userHeader';
import LandingHeader from './components/landingHeader';
import LandingFooter from './components/landingFooter';
import Routes from './Routes';
import './App.css';
import { getSessionUser } from './api/sessionHandler';

const { Content } = Layout;

const App = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [redirect, setRedirect] = useState(null); 

    useEffect(() => {
        async function updateLoggedIn() {
            setIsLoggedIn(await getSessionUser());
        }
        if(isLoggedIn === null || isLoggedIn === false) {
            updateLoggedIn();
        }
    }, [isLoggedIn]);

    return ( 
        <Layout > 
            {
                (isLoggedIn !== null) ?
                <UserHeader></UserHeader> 
                :
                <LandingHeader></LandingHeader>
            } 
            <Content style = {{ background: "#FFFFFF", height: "100%" }}>
                {isLoggedIn === false ?
                    <Spin className="spin"/>
                    :
                    <Routes isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} redirect={redirect} setRedirect={setRedirect}></Routes>
                }
            </Content> 
            <LandingFooter></LandingFooter> 
        </Layout>
    );
};

export default App;