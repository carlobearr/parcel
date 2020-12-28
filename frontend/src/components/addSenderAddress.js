import React, {useState} from 'react';
import { Button, Modal, Form, Row, Input} from 'antd';
import './addSenderAddress.css';
import AddNewSenderAddress from '../components/addNewSenderAddress';

function AddSenderAddress(props) {
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
            <Button id="addSenderAddress" shape="circle" className="addButton" onClick={showModal}>+</Button>
            <Modal
                title="ADD SENDER ADDRESS"
                centered
                width="40%"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
            >
                <div>
                    <Form layout="vertical" requiredMark={false}>
                        <Form.Item rules={[{ required: true, message: 'Please input an address' }]} label="Sender Address" name="senderAddress" className="padding">
                            <Input/>
                        </Form.Item>
                        <Row justify="center" className="addSenderPadding">
                            <AddNewSenderAddress/>
                        </Row>
                        <Row justify="center" className="addSenderPadding">
                            <Button id="addSenderAddressButton" htmlType="submit" type="primary" shape="round" className="useAddressButton" onClick={handleOk}>
                                USE ADDRESS
                            </Button>
                        </Row>
                    </Form>
                </div>
            </Modal>
        </div>
    );
};

export default AddSenderAddress;