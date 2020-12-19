import React, {useState} from 'react';
import { Button, Modal, Input, Form } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { newAddress } from "../api/addressHandler";

function NewAddressModal(props) {
    
    const [isModalVisible1, setIsModalVisible1] = useState(false);

    const showModal1 = () => {
        setIsModalVisible1(true);
    };
    
    const handleCancel1 = () => {
        setIsModalVisible1(false);
    };

    const handleOk1 = () => {
        document.getElementById('addFormSubmit').click();
        setIsModalVisible1(false);
        props.setupdateAddress(true);
        props.setAddressList(false);
    };

    return (
        <div>
            <Button id="addAddressButton" className="addAddressButton" type="text" icon={<PlusOutlined />} onClick={showModal1}/>

            <Modal
                title="ADD ADDRESS"
                visible={isModalVisible1}
                onOk={handleOk1}
                onCancel={handleCancel1}
                footer={[
                    <Button id="addAddressModalButton" key="submit" type="primary" shape="round" className="addButton" onClick={handleOk1}>
                      ADD ADDRESS
                    </Button>,
                  ]}
            >
                <div className="padding">
                    <Form layout="vertical" onFinish={newAddress}>
                        <Form.Item label="Address Name" name="addressName"><Input/></Form.Item>
                        <Form.Item label="Complete Address" name="completeAddress"><Input/></Form.Item>
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