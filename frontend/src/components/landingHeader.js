import "antd/dist/antd.css";
import "./landingHeader.css";
import React from 'react';
import { Layout, Menu, Row, Col, Button} from 'antd';

const { Header} = Layout;

function LandingHeader() {
    return (
        <Header className="header">
            <Menu>
                <Row>
                    <Col span={4}><center><a href="/">Logo here</a></center></Col>
                    <Col span={2}><center><a href="/dashboard">Dashboard</a></center></Col>
                    <Col span={2}><center><a href="/tracking">Tracking</a></center></Col>
                    <Col span={2}><center></center></Col>
                    <Col span={2}><center></center></Col>
                    <Col span={2}><center></center></Col>
                    <Col span={2}><center></center></Col>
                    <Col span={4}><center><Button type="primary" shape="round" className="buttonProperty" style={{ background: "#00C8FF", borderColor: "#00C8FF" }}>SIGN IN WITH GOOGLE</Button></center></Col>
                    <Col span={4}><center><Button type="primary" shape="round" className="buttonProperty" style={{ background: "#00C8FF", borderColor: "#00C8FF" }}>TRACK YOUR PACKAGE</Button></center></Col>
                </Row>
            </Menu>
        </Header>
    );
};

export default LandingHeader;