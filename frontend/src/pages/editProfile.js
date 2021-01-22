import React from 'react';
import {Row, Col, Form, Input, Button, Avatar} from 'antd';
import './editProfile.css';

function EditProfile(props) {
    return (
        <div className="editProfilePage">
            <div className="editProfileMain">
                <Form layout="vertical">
                    <Row>
                        <Col span={16}>
                            <Row>
                                <p className="myAddresses">Edit Profile</p>
                            </Row>
                            <Row gutter={[20,15]}>
                                <Col span={14}>
                                    <Form.Item label="First Name" name="firstName" initialValue={props.isLoggedIn.name}><Input/></Form.Item>
                                </Col>
                                <Col span={10}>
                                    <Form.Item label="Last Name" name="lastName" initialValue={props.isLoggedIn.name}><Input/></Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={[0,15]}>
                                <Col span={24}>
                                    <Form.Item label="Email Address" name="email" initialValue={props.isLoggedIn.email}><Input/></Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={[0,15]}>
                                <Col span={15}>
                                    <Form.Item label="Cellphone Number" name="cellphoneNumber"><Input/></Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={[0,15]}>
                                <Col span={24}>
                                    <Form.Item label="New Password" name="newPassword"><Input/></Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={[0,26]}>
                                <Col span={24}>
                                    <Form.Item label="Confirm Password" name="confirmPassword"><Input/></Form.Item>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={4}>
                            <div className="profileCenter">
                                <Avatar className="profilePicture" size={200}/>
                            </div>
                        </Col>
                    </Row>
                    <Col offset={17}>
                        <div className="profileCenter">
                            <Button className="submitRight">SAVE PROFILE</Button>
                        </div>
                    </Col>
                </Form>
            </div>
        </div>  
    );
}

export default EditProfile;