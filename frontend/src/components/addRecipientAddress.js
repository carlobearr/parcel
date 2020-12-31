import React, {useState} from 'react';
import { Button} from 'antd';
import './addSenderAddress.css'; //This file uses sender's css since both of them look the same
import DeliveryAddressModal from './deliveryAddressModal';

function AddRecipientAddress(props) {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    return (
        <div>
            <Button id="addRecipientAddress" shape="circle" className="addButton" onClick={showModal}>+</Button>
            <DeliveryAddressModal title="Recipient" isModalVisible={isModalVisible}  setIsModalVisible={setIsModalVisible} {...props}/>
        </div>
    );
};

export default AddRecipientAddress;