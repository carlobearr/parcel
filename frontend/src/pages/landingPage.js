import "antd/dist/antd.css";
import "./landingPage.css";
import React from 'react';
import { Row, Col, Typography, Avatar, Image } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import GoogleSignInButton from '../components/googleSignInButton';
const { Text } = Typography;

function Landing() {
    return ( 
        <div className="wrapperWholePage">
            <div id="top" className="wrapper">
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
                            <GoogleSignInButton></GoogleSignInButton>
                        </div>
                    </Col>
                    <Col className="maxHeight"span={14}>
                        <div className="picturePadding">
                        <Image preview={false} className="landingPicture" src={process.env.PUBLIC_URL+ '/PE-Landing.png'}/>
                        </div>
                    </Col>
                    <Col className="bottomCenter1" span={24}>
                        <div className="caretDownBlue">
                            <CaretDownOutlined/>
                        </div>
                    </Col>
                </Row>
            </div>
            <div id="menu1" className="wrapper" style={{background: "#00C8FF"}}>
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
                    <Col className="bottomCenter2" span={24}>
                        <div className="caretDownWhite">
                            <CaretDownOutlined/>
                        </div>
                    </Col>
                </Row>
            </div>
            <div id="menu2" className="wrapper">
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
                    <Col className="bottomCenter2" span={24}>
                        <div className="caretDownBlue">
                            <CaretDownOutlined/>
                        </div>
                    </Col>
                </Row>
            </div>
            <div id="menu3" className="wrapper">
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