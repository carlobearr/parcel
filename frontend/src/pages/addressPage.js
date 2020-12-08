import "antd/dist/antd.css";
import "./addressPage.css";
import React, {useState} from 'react';
import { Row, Col, Button, Modal, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
function AddressPage() {

    const [isModalVisible1, setIsModalVisible1] = useState(false);
    const [isModalVisible2, setIsModalVisible2] = useState(false);

      const showModal1 = () => {
        setIsModalVisible1(true);
      };

      const showModal2 = () => {
        setIsModalVisible2(true);
      };
    
      const handleOk1 = () => {
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
                        <div className="addressContainer">
                            <Row className="right">
                                <Button id="editAddressButton" type="text" className="editAddress" onClick={showModal2}>
                                    EDIT ADDRESS
                                </Button>
                            </Row>
                            <div className="details">
                                <Row className="addressName">
                                    Address Name
                                </Row>
                                <Col span={15}>
                                    <Row>
                                    Street type, Street name, House number Neighborhood, Municipality Postal code, City, State, Country
                                    </Row>
                                </Col>
                            </div>
                        </div>
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
                    <form>
                        <label className="formDetails" htmlFor="addressName">Address Name</label>
                        <Input id="addAddressName"/>
                        <label className="formDetails" htmlFor="completeAddress">Complete Address</label>
                        <Input id="addCompleteAddress"/>
                        <label className="formDetails" htmlFor="addressDetails">Other Address Details</label>
                        <Input id="addAddressDetails"/>
                    </form>
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