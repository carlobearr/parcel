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
                <UserHeader name={isLoggedIn.name}></UserHeader> 
                :
                <LandingHeader></LandingHeader>
            } 
            <Content style = {{ background: "#FFFFFF", height: "100%" }}>
                {isLoggedIn === false ?
                    <Spin className="spin extra-margin"/>
                    :
                    <Routes isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Routes>
                }
            </Content>
            {isLoggedIn === null ?
                <LandingFooter></LandingFooter> 
                :
                <div/>
            }
        </Layout>
    );
};

export default App;