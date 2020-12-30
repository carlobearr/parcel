import React, {useState, useEffect} from 'react';
import { Button, Modal, Input, Form, Row, Col, Checkbox} from 'antd';
import './addNewSenderAddress.css'; //This file uses sender's css since both of them look the same

function AddNewRecipientAddress(props) {
    const [form] = Form.useForm();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [checkConsignee, setCheckConsignee] = useState(false);

    /* 
    Validates consignee when checked. This causes the warning
    'Warning: Instance created by `useForm` is not connected to any Form element. Forget to pass `form` prop?'
    when add recipient address button is clicked because form hasn't initialized yet.
    */
    useEffect(() => {
        form.validateFields(['consigneeName','consigneeContactDetails']);
      }, [checkConsignee]);

    const onChange = (e) => {
        setCheckConsignee(e.target.checked);
    };

    const showModal = () => {
        setIsModalVisible(true);
    };
    
    const handleCancel = () => {
        if ((document.getElementById('recipientName').value === "" && document.getElementById('recipientContactDetails').value === "" && document.getElementById('recipientCompleteAddress').value === "") && checkConsignee === false) {
            setCheckConsignee(false);
            form.resetFields();
        }
        setIsModalVisible(false);
    };

    const handleOk = () => {
        if (document.getElementById('recipientName').value !== "" && document.getElementById('recipientContactDetails').value !== "" && document.getElementById('recipientCompleteAddress').value !== "") {
            setIsModalVisible(false);
        }
    };

    return (
        <div>
            <Button id="addNewAddressButton" className="useNewAddressButton" onClick={showModal}>
                USE NEW ADDRESS
            </Button>
            <Modal
                title="USE NEW RECIPIENT ADDRESS"
                centered
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
            >
                <Form layout="vertical" requiredMark={false} form={form}>
                    <div className="padding">
                        <Row gutter ={[25,0]}>
                            <Col span={13}>
                                <Form.Item rules={[{ required: true, message: "Please enter recipient's name" }]} label="Recipient's Name" name="recipientName">
                                    <Input/>
                                </Form.Item>
                            </Col>
                            <Col span={11}>
                                <Form.Item rules={[{ required: true, message: "Please enter a valid recipient's contact details", pattern: '(^[0-9]+$)' }]} label="Recipient's Contact Details" name="recipientContactDetails">
                                    <Input/>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Form.Item rules={[{ required: true, message: "Please enter recipient's complete address" }]} label="Recipient's Complete Address" name="recipientCompleteAddress">
                            <Input/>
                        </Form.Item>
                        <Form.Item label="Other Address Details" name="otherAddressDetails">
                            <Input/>
                        </Form.Item>
                        <Row gutter ={[25,0]}>
                            <Col span={14}>
                                <Form.Item name="ConsigneeWillReceive" valuePropName="checked">
                                    <Checkbox checked={checkConsignee} onChange={onChange} className="poppins">
                                        Consignee will Receive the Parcel
                                    </Checkbox>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={[25,0]}>
                            <Col span={13}>
                                <Form.Item rules={[{ required: checkConsignee, message: "Please enter consignee's name" }]} label="Consignee's Name" name="consigneeName">
                                    <Input/>
                                </Form.Item>
                            </Col>
                            <Col span={11}>
                                <Form.Item rules={[{ required: checkConsignee, message: "Please enter a valid consignee's contact details", pattern: '(^[0-9]+$)' }]} label="Consignee's Contact Details" name="consigneeContactDetails">
                                    <Input/>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row justify="center" className="addSenderPadding"/>
                    </div>
                    <div className="fill"/>
                    <Row justify="center" className="useAddressPaddingBottom">
                        <Button id="useNewRecipientAddressButton" htmlType="submit" type="primary" shape="round" className="useAddressButton" onClick={handleOk}>
                            USE ADDRESS
                        </Button>
                    </Row>
                </Form>
            </Modal>
        </div>
    );
};

export default AddNewRecipientAddress;