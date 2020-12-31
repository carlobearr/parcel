import React from 'react';
import { Button, Modal, Form, Row, Input } from 'antd';
import './addSenderAddress.css'; //This file uses sender's css since both of them look the same
import AddNewRecipientAddress from '../components/addNewRecipientAddress';

function DeliveryAddressModal(props) {  
    
    const handleCancel = () => {
        if (document.getElementById(props.title + 'Address').value === "") {
            //form.resetFields();
        }
        props.setIsModalVisible(false);
    };

    const handleOk = () => {
        if (document.getElementById(props.title + 'Address').value !== "") {
            props.setIsModalVisible(false);
        }
    };
    
    const submitAddress = (address) => {
        props['set' + props.title + 'Address'](address[props.title + 'Address']);
    }
    const title = "ADD " + props.title + " ADDRESS";
    const label = props.title + " address";
    const name = props.title + "Address";
    const buttonId = "add" + props.title + "AddressButton";
    return (
        <Modal
            title={title.toUpperCase()}
            centered
            width="40%"
            visible={props.isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
        >
            <div>
                <Form layout="vertical" requiredMark={false} onFinish={submitAddress}>
                    <Form.Item rules={[{ required: true, message: 'Please select an address' }]} label={label} name={name} className="padding">
                        <Input />
                    </Form.Item>
                    <Row justify="center" className="addSenderPadding">
                        <AddNewRecipientAddress />
                    </Row>
                    <Row justify="center" className="addSenderPadding">
                        <Button id={buttonId} htmlType="submit" type="primary" shape="round" className="useAddressButton" onClick={handleOk}>
                            USE ADDRESS
                        </Button>
                    </Row>
                </Form>
            </div>
        </Modal>
    );
};

export default DeliveryAddressModal;