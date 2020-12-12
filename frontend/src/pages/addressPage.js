import "antd/dist/antd.css";
import "./addressPage.css";
import React, {useState, useEffect} from 'react';
import { Row, Col, Button, Modal, Input, Form } from 'antd';
import AddressContainer from '../components/addressContainer';
import { PlusOutlined } from '@ant-design/icons';
import { newAddress, getAddressList } from "../api/addressHandler";

function AddressPage() {

    const [isModalVisible1, setIsModalVisible1] = useState(false);
    const [isModalVisible2, setIsModalVisible2] = useState(false);
    const [addressList, setAddressList] = useState(null);
    useEffect(() => {
        async function fetchAddress() {
            setAddressList(await getAddressList());
        }
        fetchAddress();
    }, []);

      const showModal1 = () => {
        setIsModalVisible1(true);
      };

      const showModal2 = () => {
        setIsModalVisible2(true);
      };
    
      const handleOk1 = () => {
        document.getElementById('formSubmit').click();
        setIsModalVisible1(false);
      };
    
      const handleCancel1 = () => {
        setIsModalVisible1(false);
      };
    
      const handleOk2 = () => {
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
                        { addressList ?
                            
                            addressList.map((addressDetails, i) => {
                                return <AddressContainer key={i} {...addressDetails} {...showModal2}></AddressContainer>
                            })
                            :
                            <p>Empty</p>
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
                    <Button id="addAddressButton" key="submit" type="primary" shape="round" className="addButton" onClick={handleOk1}>
                      ADD ADDRESS
                    </Button>,
                  ]}
            >
                <div className="padding">
                    <Form layout="vertical" onFinish={newAddress}>
                        <Form.Item label="Address Name" name="addressName"><Input/></Form.Item>
                        <Form.Item label="Complete Address" name="completeAddress"><Input/></Form.Item>
                        <Form.Item label="Other Address Details" name="details"><Input/></Form.Item>
                        <Form.Item hidden><Button id="formSubmit" htmlType="submit">Submit</Button></Form.Item>    
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
                    <Button id="addAddressButton" key="submit" type="primary" shape="round" className="addButton" onClick={handleOk2}>
                      DELETE ADDRESS
                    </Button>,
                    <Button id="addAddressButton" key="submit" type="primary" shape="round" className="addButton" onClick={handleOk2}>
                    EDIT ADDRESS
                    </Button>
                  ]}
            >
                <div className="padding">
                    <form>
                        <label className="formDetails" htmlFor="addressName">Address Name</label>
                        <Input id="editAddressName"/>
                        <label className="formDetails" htmlFor="completeAddress">Complete Address</label>
                        <Input id="editCompleteAddress"/>
                        <label className="formDetails" htmlFor="addressDetails">Other Address Details</label>
                        <Input id="editAddressDetails"/>
                    </form>
                </div>
                <div className="fill">

                </div>
            </Modal>

        </div>  
    );
};

export default AddressPage;