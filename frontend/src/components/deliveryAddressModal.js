import React, { useState, useEffect } from 'react';
import { Button, Modal, Form, Row, Select, Spin, Input } from 'antd';
import './addSenderAddress.css'; //This file uses sender's css since both of them look the same
import AddNewRecipientAddress from '../components/addNewRecipientAddress';
import AddNewSenderAddress from '../components/addNewSenderAddress';
import { getAddressList } from '../api/addressHandler';

const { Option } = Select;

function DeliveryAddressModal(props) {  
    const [form] = Form.useForm();
    const [senderAddressList, setSenderAddressList ] = useState(false);
    const [updateAddress, setUpdateAddress] = useState(true);

    useEffect(() => {
        async function getAddresses() {
            if(updateAddress) {
                setSenderAddressList(await getAddressList());
                setUpdateAddress(false);
            }
        }
        getAddresses();
    }, [updateAddress, senderAddressList]);

    const handleCancel = () => {
        if (document.getElementById(props.title + 'Address').value === "") {
            form.resetFields();
        }
        props.setIsModalVisible(false);
    };
    
    const submitAddress = (address) => {
        props['set' + props.title + 'Address'](address[props.title + 'Address']);
        props.setIsModalVisible(false);
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
            onCancel={handleCancel}
            footer={null}
        >
            <div>
                <Form layout="vertical" requiredMark={false} onFinish={submitAddress} form={form}>
                    <Form.Item rules={[{ required: true, message: 'Please select an address' }]} label={label} name={name} className="padding">
                        {props.title === 'Sender' ?
                            <Select>
                                {senderAddressList === false ?
                                    <Option><Spin className="spin" /></Option>
                                    :
                                    senderAddressList !== null ?
                                        senderAddressList.map((addressDetails, i) => {
                                            return <Option value={addressDetails.name} key={i}>{addressDetails.name}</Option>
                                        })
                                        :
                                        null

                                }                            
                            </Select>
                            :
                            <Input />
                        }   
                    </Form.Item>
                    <Row justify="center" className="addSenderPadding">
                        { props.title === 'Sender' ?
                            <AddNewSenderAddress setupdateAddress={setUpdateAddress} setAddressList={setSenderAddressList}/>
                            :
                            <AddNewRecipientAddress />
                        }
                    </Row>
                    <Row justify="center" className="addSenderPadding">
                        <Button id={buttonId} htmlType="submit" type="primary" shape="round" className="useAddressButton">
                            USE ADDRESS
                        </Button>
                    </Row>
                </Form>
            </div>
        </Modal>
    );
};

export default DeliveryAddressModal;