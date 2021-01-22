import React from 'react';
import {Row, Col, Form, Input, Button} from 'antd';
import './editProfile.css';

function EditProfile(props) {
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
                        <Col span={12}>
                            <Form.Item label="Full name" name="fullName" initialValue={props.isLoggedIn.name}><Input/></Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={4}>
                        <Col span={12}>
                            <Form.Item label="Email Address" name="email" initialValue={props.isLoggedIn.email}><Input/></Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={4}>
                        <Col span={12}>
                            <Form.Item label="Cellphone Number" name="cellphoneNumber"><Input/></Form.Item>
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

export default EditProfile;