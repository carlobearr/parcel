import React from 'react';
import {Row, Col, Form, Input, Button} from 'antd';
import './editProfile.css';

function Tracking() {
    return (
        <div className="editProfilePage">
            <div className="editProfileMain">
                <Form layout="vertical">
                    <Row gutter={4}>
                        <Col span={12}>
                            <h1>Edit Profile</h1>
                        </Col>
                    </Row>
                    <Row gutter={4}>
                        <Col span={6}>
                            <Form.Item label="First name" name="firstName"><Input/></Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item label="Last name" name="lastName"><Input/></Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={4}>
                        <Col span={12}>
                            <Form.Item label="Email Address" name="email"><Input/></Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={4}>
                        <Col span={12}>
                            <Form.Item label="Cellphone Number" name="cellphoneNumber"><Input/></Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={4}>
                        <Col span={12}>
                            <Form.Item label="New Password" name="password"><Input/></Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={4}>
                        <Col span={12}>
                            <Form.Item label="Confirm Password" name="confirmPassword"><Input/></Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={4}>
                        <Col span={24}>
                            <Button>Submit</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>  
    );
}

export default Tracking;