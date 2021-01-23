import React, {useState} from 'react';
import {Row, Col, Form, Input, Button, Avatar} from 'antd';
import './editProfile.css';
import {editUser} from '../api/profileHandler';

function EditProfile(props) {

    const [update, setUpdate] = useState("");

    const submitEdit = (formVal) => {
        async function updateUser() {
            const result = await editUser(formVal);

            if(result.updated) {
                setUpdate("Updated!");
            }
            else if(result.err) {
                setUpdate("Update failed, try again later.");
            }
            
        }

        updateUser();
    }

    return (
        <div className="editProfilePage">
            <div className="editProfileMain">
                <Form layout="vertical" onFinish={submitEdit}>
                    <Row>
                        <Col span={16}>
                            <Row>
                                <p className="myAddresses">Edit Profile</p>
                            </Row>
                            <Row gutter={[0,15]}>
                                <Col span={20}>
                                    <Form.Item label="Full Name" name="name" initialValue={props.isLoggedIn.name}><Input/></Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={[0,15]}>
                                <Col span={20}>
                                    <Form.Item label="Email Address" name="email" initialValue={props.isLoggedIn.email}><Input/></Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={[0,15]}>
                                <Col span={20}>
                                    <Form.Item label="Cellphone Number" name="cellphoneNumber" initialValue={props.isLoggedIn.cellphoneNumber}><Input placeholder="Not required."/></Form.Item>
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
                            <p className="edit-updates">{update}</p>
                            <Button className="submitRight" htmlType="submit">SAVE PROFILE</Button>
                        </div>
                    </Col>
                </Form>
            </div>
        </div>  
    );
}

export default EditProfile;