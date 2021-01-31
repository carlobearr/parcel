import "antd/dist/antd.css";
import "./landingFooter.css";
import React from 'react';
import { Layout, Row, Col, Avatar, Image} from 'antd';
import { Typography } from 'antd';
const { Paragraph } = Typography;

const { Footer} = Layout;

function LandingFooter() {

    return (
        <Footer className="footer">       
            <Row>
                <Col span={3}>
                    <Image preview={false} className="footerLogo" src={process.env.PUBLIC_URL+ '/PE-Logo-Footer.png'}/>
                </Col>
            </Row>
            <Row>
                <Col span={3} className="menuFooterFont"><center><Paragraph  style={{ color: "#FFFFFF"}}>Fast, Reliable, and Colorful</Paragraph></center></Col>
                <Col offset={17} className="">
                    <Avatar size="large" className="marginRight" src={process.env.PUBLIC_URL+ '/facebook.png'}></Avatar>
                    <Avatar size="large" className="marginRight" src={process.env.PUBLIC_URL+ '/twitter.png'}></Avatar>
                    <Avatar size="large" className="marginRight" src={process.env.PUBLIC_URL+ '/instagram.png'}></Avatar>
                    <Avatar size="large" className="marginRight" src={process.env.PUBLIC_URL+ '/discord.png'}></Avatar>
                </Col>
            </Row>
        </Footer>
    );
};

export default LandingFooter;