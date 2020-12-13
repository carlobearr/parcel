import "antd/dist/antd.css";
import "./addressPage.css";
import React, {useState, useEffect} from 'react';
import { Row, Col, Button, Modal, Input, Form, Spin } from 'antd';
import AddressContainer from '../components/addressContainer';
import { PlusOutlined } from '@ant-design/icons';
import { newAddress, getAddressList } from "../api/addressHandler";

function AddressPage() {

    const [isModalVisible1, setIsModalVisible1] = useState(false);
    const [isModalVisible2, setIsModalVisible2] = useState(false);
    const [addressList, setAddressList] = useState(false);
    const [updateAddress, setupdateAddress] = useState(false);

    useEffect(() => {
        async function fetchAddress() {
            setAddressList(await getAddressList());
        }
        setupdateAddress(false);
        fetchAddress();
    }, [updateAddress]);

      const showModal1 = () => {
        setIsModalVisible1(true);
      };

      const showModal2 = () => {
        setIsModalVisible2(true);
      };
    
      const handleOk1 = () => {
        document.getElementById('addFormSubmit').click();
        setIsModalVisible1(false);
        setupdateAddress(true);
        setAddressList(false);
      };
    
      const handleCancel1 = () => {
        setIsModalVisible1(false);
      };
    
      const handleOk2 = () => {
        document.getElementById('editFormSubmit').click();
        setIsModalVisible2(false);
      };

      const handleOk3 = () => {
        document.getElementById('deleteFormSubmit').click();
        setIsModalVisible2(false);
      };
    
      const handleCancel2 = () => {
        setIsModalVisible2(false);
      };

    return (
        <div className="wrapperWholePage">
            <div className="container">
                <Row>
                    <Col span={23} className="title">
                        <p className="myAddresses">My Addresses</p>
                    </Col>
                    <Col span={1} className="title">
                        <Button id="addAddressButton" className="addAddressButton" type="text" icon={<PlusOutlined />} onClick={showModal1}/>
                    </Col>
                </Row>
                <div>
                    <Row>
                        { addressList !== false ?
                              addressList !== null ?  
                                addressList.map((addressDetails, i) => {
                                    return <AddressContainer key={i} {...addressDetails} {...showModal2}></AddressContainer>
                                })
                                :
                                <div className="spin details">
                                  <p className="addressName">No addresses saved.</p>
                                  <p>Click the '+' icon to create a new one!</p>
                                </div>
                            :
                            <Spin className="spin" size="large"/>
                        }
                    </Row>
                </div>
            </div>

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

            <Modal
                title="EDIT ADDRESS"
                visible={isModalVisible2}
                onOk={handleOk2}
                onCancel={handleCancel2}
                footer={[
                    <Button id="deleteAddressModalButton" key="submit" type="primary" shape="round" className="addButton" onClick={handleOk3}>
                      DELETE ADDRESS
                    </Button>,
                    <Button id="editAddressModalButton" key="submit" type="primary" shape="round" className="addButton" onClick={handleOk2}>
                    EDIT ADDRESS
                    </Button>
                  ]}
            >
                <div className="padding">
                    <Form layout="vertical" >
                        <Form.Item label="Address Name" name="addressName"><Input/></Form.Item>
                        <Form.Item label="Complete Address" name="completeAddress"><Input/></Form.Item>
                        <Form.Item label="Other Address Details" name="details"><Input/></Form.Item>
                        <Form.Item hidden><Button id="editformSubmit" htmlType="submit">Submit</Button></Form.Item>
                    </Form>
                </div>
                <div className="fill">

                </div>
            </Modal>

        </div>  
    );
};

export default AddressPage;