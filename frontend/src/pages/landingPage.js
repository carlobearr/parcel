import "antd/dist/antd.css";
import "./landingPage.css";
import React from 'react';
import { Row, Col, Typography, Avatar, Image } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import GoogleSignInButton from '../components/googleSignInButton';
const { Text } = Typography;

function Landing(props) {
    return ( 
        <div className="wrapperWholePage">
            <div id="top" className="wrapper">
                <Row>
                    <Col className="maxHeight" span={10}>
                        <div className="headerPadding1">
                            <Text className="promotionalHeader" style={{color:"#00C8FF"}}>
                                Get your parcels delivered in a quick, safe, and efficient way
                            </Text>
                        </div>
                        <div className="subheaderPadding1">
                            <Text className="promotionalSubheader" style={{color:"#00C8FF"}}>
                                Pelican Express  has dedicated drivers that bring your packages to wherever you want them to be at.
                            </Text>
                        </div>
                        <div className="buttonPadding">
                            <GoogleSignInButton {...props}></GoogleSignInButton>
                        </div>
                    </Col>
                    <Col className="maxHeight"span={14}>
                        <div className="picturePadding landingPicture">
                            <Image preview={false} src={process.env.PUBLIC_URL+ '/PE-Landing.png'}/>
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
                            Deliver your parcels with Pelican Express with these 3 steps
                        </Text>
                    </Col>
                    <Col span={24} className="subheaderPadding2">
                    <Text className="promotionalSubheader" style={{color: "#FFFFFF"}}>
                        
                        </Text>
                    </Col>
                </Row>
                <Row>
                    <Col span={8} className="boxPadding">
                        <div className="box1">
                            <Row className="avatarMargin">
                                <Avatar size={150} className="blueIcon" src={process.env.PUBLIC_URL+ '/login.png'}></Avatar>
                            </Row>
                            <Row className="boxSubheader1">
                                Login your account
                            </Row>
                        </div>
                    </Col>
                    <Col span={8} className="boxPadding">
                        <div className="box1">
                            <Row className="avatarMargin">
                                <Avatar size={150} className="blueIcon" src={process.env.PUBLIC_URL+ '/schedule.png'}></Avatar>
                            </Row>
                            <Row className="boxSubheader1">
                                Schedule a Pick-up
                            </Row>
                        </div>
                    </Col>
                    <Col span={8} className="boxPadding">
                        <div className="box1">
                            <Row className="avatarMargin">
                                <Avatar size={150} className="blueIcon" src={process.env.PUBLIC_URL+ '/wait.png'}></Avatar>
                            </Row>
                            <Row className="boxSubheader1">
                                Wait for Pick-up
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
                            Here are some words from our customers
                        </Text>
                    </Col>
                    <Col span={24} className="subheaderPadding2">
                    <Text className="promotionalSubheader" style={{color: "#00C8FF"}}>
                        
                        </Text>
                    </Col>
                </Row>
                <Row>
                    <Col span={6} className="boxPadding">
                        <div className="box2">
                            <Row className="avatarMargin">
                                <Avatar size={100} className="whiteIcon" src={process.env.PUBLIC_URL+ '/martin.png'}></Avatar>
                            </Row>
                            <Row className="boxSubheader2">
                                Martin Sanchez
                            </Row>
                            <Row className="boxSubheader2">
                                Their fast and efficient service, responsible riders, and great after sales service.
                            </Row>
                        </div>
                    </Col>
                    <Col span={6} className="boxPadding">
                        <div className="box2">
                            <Row className="avatarMargin">
                                <Avatar size={100} className="whiteIcon" src={process.env.PUBLIC_URL+ '/carlo.png'}></Avatar>
                            </Row>
                            <Row className="boxSubheader2">
                                Carlo Santos
                            </Row>
                            <Row className="boxSubheader2">
                                Can’t recommend this service enough, reliable and easy to use. Always my first choice.
                            </Row>
                        </div>
                    </Col>
                    <Col span={6} className="boxPadding">
                        <div className="box2">
                            <Row className="avatarMargin">
                                <Avatar size={100} className="whiteIcon" src={process.env.PUBLIC_URL+ '/bryan.png'}></Avatar>
                            </Row>
                            <Row className="boxSubheader2">
                                Bryan Tio
                            </Row>
                            <Row className="boxSubheader2">
                                Great service always. Easy to deal with as well.
                            </Row>
                        </div>
                    </Col>
                    <Col span={6} className="boxPadding">
                        <div className="box2">
                            <Row className="avatarMargin">
                                <Avatar size={100} className="whiteIcon" src={process.env.PUBLIC_URL+ '/howard.png'}></Avatar>
                            </Row>
                            <Row className="boxSubheader2">
                                Howard Montecillo
                            </Row>
                            <Row className="boxSubheader2">
                                10/10. Never fails me. Would try again.
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
            <div id="menu3" className="wrapper4">
                <Row>
                    <Col span={24} className="avatarMargin">
                        <Row className="page4">
                            What are you waiting for?
                        </Row>
                        <Row className="page4">
                            Try our services now!
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Landing;