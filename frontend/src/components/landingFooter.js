import "antd/dist/antd.css";
import "./landingFooter.css";
import React from 'react';
import { Layout, Row, Col, Avatar, Menu, Image} from 'antd';
import { Typography } from 'antd';
const { Paragraph } = Typography;

const { Footer} = Layout;

function LandingFooter() {

    return (
        <Footer className="footer">
            <Row>
                <Col span={24}>
                    <Menu mode="horizontal" className="menuFooter">
                        <Menu.Item className="menuFont">
                            Menu 1
                        </Menu.Item>
                        <Menu.Item className="menuFont">
                            Menu 2
                        </Menu.Item>
                        <Menu.Item className="menuFont">
                            Menu 3
                        </Menu.Item>
                        <Menu.Item className="menuFont">
                            Menu 4
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>         
            <Row>
                <Col span={3}>
                    <Image preview={false} className="footerLogo" src={process.env.PUBLIC_URL+ '/PE-Logo-Footer.png'}/>
                </Col>
            </Row>
            <Row>
                <Col span={3} className="menuFont"><center><Paragraph  style={{ color: "#FFFFFF"}}>insert subheader text here</Paragraph></center></Col>
            </Row>
            <Row className="rightAlign">
                <div className="marginRight"><center><Avatar style={{backgroundColor: "#FFFFFF"}}></Avatar></center></div>
                <div className="marginRight"><center><Avatar style={{backgroundColor: "#FFFFFF"}}></Avatar></center></div>
                <div className="marginRight"><center><Avatar style={{backgroundColor: "#FFFFFF"}}></Avatar></center></div>
                <div className="marginRight"><center><Avatar style={{backgroundColor: "#FFFFFF"}}></Avatar></center></div>
            </Row>
        </Footer>
    );
};

export default LandingFooter;