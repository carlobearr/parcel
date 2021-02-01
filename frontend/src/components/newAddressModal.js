import React from 'react';
import { Button, Modal, Input, Form } from 'antd';
import { newAddress } from "../api/addressHandler";

function NewAddressModal(props) {
    const [form] = Form.useForm();
    
    const handleCancel1 = () => {
        props.setIsModalVisible1(false);
    };

    const handleOk1 = () => {
        if (document.getElementById('addressName').value !== "" && document.getElementById('completeAddress').value !== "") {
            props.setIsModalVisible1(false);
            props.setupdateAddress(true);
            props.setAddressList(false);
        }
            document.getElementById('addFormSubmit').click();
        
    };

    return (
        <div>
            <Modal
                centered
                title="ADD ADDRESS"
                visible={props.isModalVisible1}
                onOk={handleOk1}
                onCancel={handleCancel1}
                footer={[
                    <Button id="addAddressModalButton" key="submit" type="primary" shape="round" className="addressAddButton" onClick={handleOk1}>
                      ADD ADDRESS
                    </Button>,
                  ]}
            >
                <div className="padding">
                    <Form layout="vertical" onFinish={newAddress} requiredMark={false} form={form}>
                        <Form.Item rules={[{required: true, message: 'Please enter an address name'}]} label="Address Name" name="addressName"><Input/></Form.Item>
                        <Form.Item rules={[{required: true, message: 'Please enter your complete address'}]} label="Complete Address" name="completeAddress"><Input/></Form.Item>
                        <Form.Item label="Other Address Details" name="details"><Input/></Form.Item>
                        <Form.Item hidden><Button id="addFormSubmit" htmlType="submit">Submit</Button></Form.Item>  
                    </Form>
                </div>
                <div className="fill">

                </div>
            </Modal>
        </div>
    );
};

export default NewAddressModal;