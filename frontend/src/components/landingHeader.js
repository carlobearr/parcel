import "antd/dist/antd.css";
import "./landingHeader.css";
import React from 'react';
import { Layout, Menu, Row, Button} from 'antd';

const { Header} = Layout;

function LandingHeader() {
    return (
        <Header className="header">
            <Menu>
                <Row className="leftAlign">
                    <Menu mode="horizontal" className="menuHeader">
                        <Menu.Item className="menuFont">
                            <a href="/" className="colorBlue">Logo here</a>
                        </Menu.Item>
                        <Menu.Item className="menuFont">
                            <a href="/dashboard" className="colorBlue">Dashboard</a>
                        </Menu.Item>
                        <Menu.Item className="menuFont">
                            <a href="/tracking" className="colorBlue">Tracking</a>
                        </Menu.Item>
                    </Menu>
                </Row>
                <Row className="rightAlign">
                    <Menu mode="horizontal" className="menuHeader">
                        <Menu.Item className="menuFont">
                            <Button type="primary" shape="round" className="buttonProperty" style={{ background: "#00C8FF", borderColor: "#00C8FF" }}>SIGN IN WITH GOOGLE</Button>
                        </Menu.Item>
                        <Menu.Item className="menuFont">
                            <Button type="primary" shape="round" className="buttonProperty" style={{ background: "#00C8FF", borderColor: "#00C8FF" }}>TRACK YOUR PACKAGE</Button>
                        </Menu.Item>
                    </Menu>
                </Row>
            </Menu>
        </Header>
    );
};

export default LandingHeader;