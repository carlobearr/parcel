import React, {useState} from 'react';
import { Button, Modal, Input, Form, Row} from 'antd';
import './addNewSenderAddress.css';

function AddNewSenderAddress(props) {
    const [form] = Form.useForm();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);        
    };
    
    const handleCancel = () => {
        if (document.getElementById('senderName').value === "" && document.getElementById('senderContactDetails').value === "" && document.getElementById('senderCompleteAddress').value === "") {
            form.resetFields();
        }
        setIsModalVisible(false);
    };

    const handleOk = () => {
        if (document.getElementById('senderName').value !== "" && document.getElementById('senderContactDetails').value !== "" && document.getElementById('senderCompleteAddress').value !== "") {
            setIsModalVisible(false);
        }
    };

    return (
        <div>
            <Button id="addNewAddressButton" className="useNewAddressButton" onClick={showModal}>
                USE NEW ADDRESS
            </Button>
            <Modal
                title="USE NEW SENDER ADDRESS"
                centered
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
            >
                <Form layout="vertical" requiredMark={false} form={form}>
                    <div className="padding">
                        <Form.Item rules={[{ required: true, message: 'Please enter your name' }]} label="Sender's Name" name="senderName">
                            <Input/>
                        </Form.Item>
                        <Form.Item rules={[{ required: true, message: 'Please enter a valid contact details', pattern: '(^[0-9]+$)' }]} label="Sender's Contact Details" name="senderContactDetails">
                            <Input/>
                        </Form.Item>
                        <Form.Item rules={[{ required: true, message: 'Please enter your complete address' }]} label="Sender's Complete Address" name="senderCompleteAddress">
                            <Input/>
                        </Form.Item>
                        <Form.Item label="Other Address Details" name="otherAddressDetails">
                            <Input/>
                        </Form.Item>
                        <Row justify="center" className="addSenderPadding"/>
                    </div>
                    <div className="fill"/>
                    <Row justify="center" className="useAddressPaddingBottom">
                        <Button id="useNewSenderAddressButton" htmlType="submit" type="primary" shape="round" className="useAddressButton" onClick={handleOk}>
                            USE ADDRESS
                        </Button>
                    </Row>
                </Form>
            </Modal>
        </div>
    );
};

export default AddNewSenderAddress;