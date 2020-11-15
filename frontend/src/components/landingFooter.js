import "antd/dist/antd.css";
import "./landingFooter.css";
import React from 'react';
import { Layout, Row, Col, Avatar} from 'antd';
import { Typography } from 'antd';

const { Title, Paragraph} = Typography;

const { Footer} = Layout;

function LandingFooter() {
    return (
        <Footer className="footer">
            <>
                <Row>
                    <Col span={2}><center></center></Col>
                    <Col span={2}><center></center></Col>
                    <Col span={2}><center></center></Col>
                    <Col span={2}><center></center></Col>
                    <Col span={2}><center></center></Col>
                    <Col span={2}><center></center></Col>
                    <Col span={2}><center></center></Col>
                    <Col span={2}><center>MENU</center></Col>
                    <Col span={2}><center>MENU</center></Col>
                    <Col span={2}><center>MENU</center></Col>
                    <Col span={2}><center>MENU</center></Col>
                    <Col span={2}><center>MENU</center></Col>
                </Row>
                <Row>
                    <Col span={3} className="logo" ><center><Title level={2} style={{ color: "#FFFFFF"}}>logo here</Title></center></Col>
                </Row>
                <Row>
                    <Col span={3} className="subheader"><center><Paragraph  style={{ color: "#FFFFFF"}}>insert subheader text here</Paragraph></center></Col>
                </Row>
                <Row>
                    <Col span={2}><center></center></Col>
                    <Col span={2}><center></center></Col>
                    <Col span={2}><center></center></Col>
                    <Col span={2}><center></center></Col>
                    <Col span={2}><center></center></Col>
                    <Col span={2}><center></center></Col>
                    <Col span={2}><center></center></Col>
                    <Col span={2}><center></center></Col>
                    <Col span={2}><center></center></Col>
                    <Col span={2}><center></center></Col>
                    <Col span={1}><center><Avatar style={{ backgroundColor: "#FFFFFF"}}></Avatar></center></Col>
                    <Col span={1}><center><Avatar style={{ backgroundColor: "#FFFFFF"}}></Avatar></center></Col>
                    <Col span={1}><center><Avatar style={{ backgroundColor: "#FFFFFF"}}></Avatar></center></Col>
                    <Col span={1}><center><Avatar style={{ backgroundColor: "#FFFFFF"}}></Avatar></center></Col>
                </Row>
            </>
        </Footer>
    );
};

export default LandingFooter;