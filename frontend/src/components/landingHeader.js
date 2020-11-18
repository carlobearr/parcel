import "antd/dist/antd.css";
import "./landingHeader.css";
import React from 'react';
import { Layout, Menu, Col, Button} from 'antd';
import { Link } from 'react-router-dom';

const { Header} = Layout;

function LandingHeader() {
    return (
        <Header className="header">
                <Col className="leftAlign">
                    <Menu mode="horizontal" className="menuHeader">
                        <Menu.Item className="menuFont">
                            <Link to ="/" className="colorBlue">Logo here</Link>
                        </Menu.Item>
                        <Menu.Item className="menuFont">
                            <Link to ="/dashboard" className="colorBlue">Dashboard</Link>
                        </Menu.Item>
                        <Menu.Item className="menuFont">
                            <Link to ="/tracking" className="colorBlue">Tracking</Link>
                        </Menu.Item>
                    </Menu>
                </Col>
                <Col className="rightAlign">
                    <Menu mode="horizontal" className="menuHeader">
                        <Menu.Item className="menuFont">
                            <Button type="primary" shape="round" className="buttonProperty" style={{ background: "#00C8FF", borderColor: "#00C8FF" }}>TRACK YOUR PACKAGE</Button>
                        </Menu.Item>
                    </Menu>
                </Col>
        </Header>
    );
};

export default LandingHeader;