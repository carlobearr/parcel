import "antd/dist/antd.css";
import "./landingPage.css";
import React from 'react';
import { Row, Col, Typography, Button, Avatar } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';

const { Text } = Typography;

function Landing() {
    return ( 
        <div className="wrapperWholePage">
            <div className="wrapper">
                <Row>
                    <Col className="maxHeight" span={10}>
                        <div className="headerPadding1">
                            <Text className="promotionalHeader" style={{color:"#00C8FF"}}>
                                    Insert promotional header text here.
                            </Text>
                        </div>
                        <div className="subheaderPadding1">
                            <Text className="promotionalSubheader" style={{color:"#00C8FF"}}>
                            Insert subheader promotional text here. Insert subheader promotional text here.Insert subheader promotional text here.Insert subheader promotional text here.
                            </Text>
                        </div>
                        <div className="buttonPadding">
                        <Button type="primary" shape="round" className="buttonProperty" style={{ background: "#00C8FF", borderColor: "#00C8FF" }}>SIGN IN WITH GOOGLE</Button>
                        </div>
                    </Col>
                    <Col className="maxHeight"span={14}>
                        <div className="picturePadding">
                            <center>
                                Picture here
                            </center>
                        </div>
                    </Col>
                    <Col span={24}>
                        <div className="caretDownBlue">
                            <CaretDownOutlined/>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="wrapper" style={{background: "#00C8FF"}}>
                <Row >
                    <Col span={24} className="headerPadding2">
                        <Text className="promotionalHeader" style={{color: "#FFFFFF"}}>
                            Insert header text here.
                        </Text>
                    </Col>
                    <Col span={24} className="subheaderPadding2">
                    <Text className="promotionalSubheader" style={{color: "#FFFFFF"}}>
                        Insert subheader text here. Insert text here. Insert subheader text here. Insert subheader text here.
                        </Text>
                    </Col>
                </Row>
                <Row>
                    <Col span={8} className="boxPadding">
                        <div className="box1">
                            <Row className="avatarMargin">
                                <Avatar size={80} className="blueIcon"></Avatar>
                            </Row>
                            <Row className="boxSubheader1">
                                Insert subheader text here. Insert text here. Insert subheader text here. Insert subheader text here.
                            </Row>
                        </div>
                    </Col>
                    <Col span={8} className="boxPadding">
                        <div className="box1">
                            <Row className="avatarMargin">
                                <Avatar size={80} className="blueIcon"></Avatar>
                            </Row>
                            <Row className="boxSubheader1">
                                Insert subheader text here. Insert text here. Insert subheader text here. Insert subheader text here.
                            </Row>
                        </div>
                    </Col>
                    <Col span={8} className="boxPadding">
                        <div className="box1">
                            <Row className="avatarMargin">
                                <Avatar size={80} className="blueIcon"></Avatar>
                            </Row>
                            <Row className="boxSubheader1">
                                Insert subheader text here. Insert text here. Insert subheader text here. Insert subheader text here.
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <div className="caretDownWhite">
                        <CaretDownOutlined/>
                    </div>
                </Row>
            </div>
            <div className="wrapper">
                <Row >
                    <Col span={24} className="headerPadding2">
                        <Text className="promotionalHeader" style={{color: "#00C8FF"}}>
                            Insert header text here.
                        </Text>
                    </Col>
                    <Col span={24} className="subheaderPadding2">
                    <Text className="promotionalSubheader" style={{color: "#00C8FF"}}>
                        Insert subheader text here. Insert text here. Insert subheader text here. Insert subheader text here.
                        </Text>
                    </Col>
                </Row>
                <Row>
                    <Col span={6} className="boxPadding">
                        <div className="box2">
                            <Row className="avatarMargin">
                                <Avatar size={80} className="whiteIcon"></Avatar>
                            </Row>
                            <Row className="boxSubheader2">
                                Insert subheader text here. Insert text here. Insert subheader text here. Insert subheader text here.
                            </Row>
                        </div>
                    </Col>
                    <Col span={6} className="boxPadding">
                        <div className="box2">
                            <Row className="avatarMargin">
                                <Avatar size={80} className="whiteIcon"></Avatar>
                            </Row>
                            <Row className="boxSubheader2">
                                Insert subheader text here. Insert text here. Insert subheader text here. Insert subheader text here.
                            </Row>
                        </div>
                    </Col>
                    <Col span={6} className="boxPadding">
                        <div className="box2">
                            <Row className="avatarMargin">
                                <Avatar size={80} className="whiteIcon"></Avatar>
                            </Row>
                            <Row className="boxSubheader2">
                                Insert subheader text here. Insert text here. Insert subheader text here. Insert subheader text here.
                            </Row>
                        </div>
                    </Col>
                    <Col span={6} className="boxPadding">
                        <div className="box2">
                            <Row className="avatarMargin">
                                <Avatar size={80} className="whiteIcon"></Avatar>
                            </Row>
                            <Row className="boxSubheader2">
                                Insert subheader text here. Insert text here. Insert subheader text here. Insert subheader text here.
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <div className="caretDownBlue">
                        <CaretDownOutlined/>
                    </div>
                </Row>
            </div>
            <div className="wrapper4">
                <Row>
                    <Col span={24} className="page4">
                        SOMETHING
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Landing;