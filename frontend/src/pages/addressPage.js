import "antd/dist/antd.css";
import "./addressPage.css";
import React, {useState, useEffect} from 'react';
import { Row, Col, Button, Modal, Input, Form, Spin } from 'antd';
import AddressContainer from '../components/addressContainer';
import { getAddressList, getAddress, editAddress, deleteAddress } from "../api/addressHandler";
import NewAddressModal from '../components/newAddressModal';

function AddressPage() {
    const [isModalVisible2, setIsModalVisible2] = useState(false);
    const [addressList, setAddressList] = useState(false);  //set initial to false for loading modal
    const [updateAddress, setupdateAddress] = useState(false);
    const [currentEdit, setCurrentEdit] = useState(false);

    useEffect(() => {
        async function fetchAddress() {
            setAddressList(await getAddressList());
        }
        setupdateAddress(false);
        fetchAddress();
    }, [updateAddress]);

    const showModal2 = async(event) => {
        setIsModalVisible2(true);
        const edit = await getAddress(event);
        setCurrentEdit(edit);
    };
    
    const handleEdit = () => {
        if (document.getElementById('addressName').value !== "" && document.getElementById('completeAddress').value !== "") {
            setIsModalVisible2(false);
        }
        document.getElementById('editformSubmit').click();
    };

    const handleDelete = async() => {
        await deleteAddress(currentEdit.name);
        setCurrentEdit(false);
        setIsModalVisible2(false); 
        setupdateAddress(true);
        setAddressList(false);
    };
    
    const handleCloseEdit = () => {
        setCurrentEdit(false);
        setIsModalVisible2(false);
    };

    const submitEdit = async (formValues) => {
        if (document.getElementById('addressName').value !== "" && document.getElementById('completeAddress').value !== "") {
            setCurrentEdit(false);
            await editAddress(formValues, currentEdit.name);
            setupdateAddress(true);
            setAddressList(false);
        }
    }

    return (
        <div className="wrapperWholePage">
            <div className="container">
                <Row>
                    <Col span={23}>
                        <p className="myAddresses">My Addresses</p>
                    </Col>
                    <Col span={1}>
                        <NewAddressModal setupdateAddress={setupdateAddress} setAddressList={setAddressList}/>
                    </Col>
                </Row>
                <Row>
                    { addressList !== false ?
                            addressList !== null ?  
                            addressList.map((addressDetails, i) => {     
                                return <AddressContainer {...addressDetails} showModal2={showModal2} key={i} />
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


            <Modal
                title="EDIT ADDRESS"
                visible={isModalVisible2}
                onCancel={handleCloseEdit}
                footer={[
                    <Button id="deleteAddressModalButton" key="delete" type="primary" shape="round" className="addButton" onClick={handleDelete}>
                      DELETE ADDRESS
                    </Button>,
                    <Button id="editAddressModalButton" key="edit" type="primary" shape="round" className="addButton" onClick={handleEdit}>
                    EDIT ADDRESS
                    </Button>
                  ]}
            >
                <div className="padding">
                    {currentEdit !== false ?
                        currentEdit !== null ?
                            <Form layout="vertical" onFinish={submitEdit} requiredMark={false}>
                                <Form.Item rules={[{required: true, message: 'Please enter an address name'}]} label="Address Name" name="addressName" initialValue={currentEdit.name}><Input/></Form.Item>
                                <Form.Item rules={[{required: true, message: 'Please enter your complete address'}]} label="Complete Address" name="completeAddress" initialValue={currentEdit.completeAddress}><Input/></Form.Item>
                                <Form.Item label="Other Address Details" name="details" initialValue={currentEdit.details}><Input/></Form.Item>
                                <Form.Item hidden><Button id="editformSubmit" htmlType="submit">Submit</Button></Form.Item>
                            </Form>
                            :
                            <div className="spin details">
                                <div className="addressName">Error fetching address.</div>    
                            </div>
                        :
                        <Spin className="spin" size="large"/>
                    }
                </div>
                <div className="fill">

                </div>
            </Modal>
        </div>  
    );
};

export default AddressPage;