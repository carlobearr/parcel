import React, {useState} from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './addSenderAddress.css';
import DeliveryAddressModal from './deliveryAddressModal';

function AddSenderAddress(props) {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    return (
        <div>
            <Button id="addSenderAddress" shape="circle" className="addButton" onClick={showModal} icon={<PlusOutlined />}></Button>
            <DeliveryAddressModal title="Sender" isModalVisible={isModalVisible}  setIsModalVisible={setIsModalVisible} {...props}/>
        </div>
    );
};

export default AddSenderAddress;