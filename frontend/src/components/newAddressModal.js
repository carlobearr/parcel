import React, {useState} from 'react';
import { Button, Modal, Input, Form } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { newAddress } from "../api/addressHandler";

function NewAddressModal(props) {
    const [form] = Form.useForm();
    const [isModalVisible1, setIsModalVisible1] = useState(false);

    const showModal1 = () => {
        setIsModalVisible1(true);
        form.resetFields();
    };
    
    const handleCancel1 = () => {
        setIsModalVisible1(false);
    };

    const handleOk1 = () => {
        if (document.getElementById('addressName').value !== "" && document.getElementById('completeAddress').value !== "") {
            setIsModalVisible1(false);
            props.setupdateAddress(true);
            props.setAddressList(false);
        }
            document.getElementById('addFormSubmit').click();
        
    };

    return (
        <div>
            <Button id="addAddressButton" className="addAddressButton" type="text" icon={<PlusOutlined />} onClick={showModal1}/>

            <Modal
                centered
                title="ADD ADDRESS"
                visible={isModalVisible1}
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