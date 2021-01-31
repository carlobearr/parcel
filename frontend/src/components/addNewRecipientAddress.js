import React, {useState, useEffect} from 'react';
import { Button, Modal, Input, Form, Row, Col, Checkbox} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './addNewSenderAddress.css'; //This file uses sender's css since both of them look the same
import {createWaybill} from '../api/waybillHandler';
import { editWaybill} from '../api/waybillHandler';

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
        form.validateFields(['consigneeName','consigneeContact']);
      }, [checkConsignee, form]);

    const onChange = (e) => {
        setCheckConsignee(e.target.checked);
    };

    const showModal = () => {
        setIsModalVisible(true);
    };
    
    const handleCancel = () => {
        if ((document.getElementById('recipientName').value === "" && document.getElementById('recipientContact').value === "" && document.getElementById('recipientAddress').value === "") && checkConsignee === false) {
            setCheckConsignee(false);
            form.resetFields();
        }
        setIsModalVisible(false);
    };

    const handleOk = () => {
        if (document.getElementById('recipientName').value !== "" && document.getElementById('recipientContact').value !== "" && document.getElementById('recipientAddress').value !== "") {
            setIsModalVisible(false);
        }
    };

    const submitWaybill = (formVals) => {
        async function newWaybill() {
            if(props.title === 'addWaybill' || props.title === 'bookDelivery') {
                const result = await createWaybill(formVals);
                if(props.setUpdateList) {
                    props.setUpdateList(result);
                }
                if(props.setRecipientAddressList) {
                    props.setRecipientAddressList(false);
                }
                setIsModalVisible(false);
            }
            else {
                const result = await editWaybill(formVals, props.waybill._id);
                if(props.setUpdateList) {
                    props.setUpdateList(result);
                }
            }  
        }

        newWaybill();
    }

    const waybill = () => {
        if(!props.waybill) {
            return {
                recipientName: "", 
                recipientContact: "",
                recipientAddress: "",
                consigneeWillReceive: false,
                consigneeName: "",
                consigneeContact: ""
            }
        }
        else {
            return props.waybill;
        }
    }
    return (
        <div>
            { props.title === 'bookDelivery' ? 
            <Button id="addNewAddressButton" className="useNewAddressButton" onClick={showModal}>
                USE NEW ADDRESS
            </Button> 
            :
            (
                props.title === 'addWaybill' ?
                <Button id="addAddressButton" className="addAddressButton" type="text" icon={<PlusOutlined />} onClick={showModal}/>
                :
                <Button type="text" className="editAddress" onClick={showModal}>
                    EDIT WAYBILL
                </Button>
                )
            }
            <Modal
                title={
                    props.title === 'bookDelivery' ?
                    'USE NEW RECIPIENT ADDRESS'
                    :
                    (
                        props.title === 'addWaybill' ?
                        "ADD NEW RECIPIENT ADDRESS"
                        :
                        "EDIT RECIPIENT ADDRESS"
                    )
                    }
                centered
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
            >
                <Form layout="vertical" requiredMark={false} form={form} onFinish={submitWaybill}>
                    <div className="padding">
                        <Row gutter ={[25,0]}>
                            <Col span={13}>
                                <Form.Item initialValue={waybill().recipientName} rules={[{ required: true, message: "Please enter recipient's name" }]} label="Recipient's Name" name="recipientName">
                                    <Input/>
                                </Form.Item>
                            </Col>
                            <Col span={11}>
                                <Form.Item initialValue={waybill().recipientContact} rules={[{ required: true, message: "Please enter a valid recipient's contact details", pattern: '(^[0-9]+$)' }]} label="Recipient's Contact Details" name="recipientContact">
                                    <Input/>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Form.Item initialValue={waybill().recipientAddress} rules={[{ required: true, message: "Please enter recipient's complete address" }]} label="Recipient's Complete Address" name="recipientAddress">
                            <Input/>
                        </Form.Item>
                        <Form.Item label="Other Address Details" name="addressDetails">
                            <Input/>
                        </Form.Item>
                        <Row gutter ={[25,0]}>
                            <Col span={14}>
                                <Form.Item initialValue={waybill().consigneeWillReceive} name="consigneeWillReceive" valuePropName="checked">
                                    <Checkbox checked={checkConsignee} onChange={onChange} className="poppins">
                                        Consignee will Receive the Parcel
                                    </Checkbox>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={[25,0]}>
                            <Col span={13}>
                                <Form.Item initialValue={waybill().consigneeName} rules={[{ required: checkConsignee, message: "Please enter consignee's name" }]} label="Consignee's Name" name="consigneeName">
                                    <Input/>
                                </Form.Item>
                            </Col>
                            <Col span={11}>
                                <Form.Item initialValue={waybill().consigneeContact} rules={[{ required: checkConsignee, message: "Please enter a valid consignee's contact details", pattern: '(^[0-9]+$)' }]} label="Consignee's Contact Details" name="consigneeContact">
                                    <Input/>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row justify="center" className="addSenderPadding"/>
                    </div>
                    <div className="fill"/>
                    <Row justify="center" className="useAddressPaddingBottom">
                        {props.title === 'bookDelivery' ?
                        <Button id="useNewRecipientAddressButton" htmlType="submit" type="primary" shape="round" className="useAddressButton" onClick={handleOk}>
                            USE ADDRESS
                        </Button>
                        :
                        (
                        props.title === 'addWaybill' ?
                        <Button id="useNewRecipientAddressButton" htmlType="submit" type="primary" shape="round" className="useAddressButton" onClick={handleOk}>
                            ADD ADDRESS
                        </Button>
                        :
                        <Button id="useNewRecipientAddressButton" htmlType="submit" type="primary" shape="round" className="useAddressButton" onClick={handleOk}>
                            EDIT ADDRESS
                        </Button>
                        )
                        }
                    </Row>
                </Form>
            </Modal>
        </div>
    );
};

export default AddNewRecipientAddress;