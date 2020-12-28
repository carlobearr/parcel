import React, {useState} from 'react';
import { Button, Modal, Form, Row, Input} from 'antd';
import './addSenderAddress.css'; //This file uses sender's css since both of them look the same
import AddNewRecipientAddress from '../components/addNewRecipientAddress';

function AddRecipientAddress(props) {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };
    
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    return (
        <div>
            <Button id="addRecipientAddress" shape="circle" className="addButton" onClick={showModal}>+</Button>
            <Modal
                title="ADD RECIPIENT ADDRESS"
                centered
                width="40%"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
            >
                <div>
                    <Form layout="vertical" requiredMark={false}>
                        <Form.Item rules={[{ required: true, message: 'Please input an address' }]} label="Recipient Address" name="recipientAddress" className="padding">
                            <Input/>
                        </Form.Item>
                        <Row justify="center" className="addSenderPadding">
                            <AddNewRecipientAddress/>
                        </Row>
                        <Row justify="center" className="addSenderPadding">
                            <Button id="addRecipientAddressButton" htmlType="submit" type="primary" shape="round" className="useAddressButton" onClick={handleOk}>
                                USE ADDRESS
                            </Button>
                        </Row>
                    </Form>
                </div>
            </Modal>
        </div>
    );
};

export default AddRecipientAddress;