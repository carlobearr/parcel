import React, {useState} from 'react';
import { Button } from 'antd';
import './addSenderAddress.css';
import DeliveryAddressModal from './deliveryAddressModal';

function AddSenderAddress() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    return (
        <div>
            <Button id="addSenderAddress" shape="circle" className="addButton" onClick={showModal}>+</Button>
            <DeliveryAddressModal title="Sender" isModalVisible={isModalVisible}  setIsModalVisible={setIsModalVisible}/>
        </div>
    );
};

export default AddSenderAddress;