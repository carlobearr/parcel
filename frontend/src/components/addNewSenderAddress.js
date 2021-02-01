import React, {useState} from 'react';
import { Button} from 'antd';
import NewAddressModal from './newAddressModal';
import './addNewSenderAddress.css';

function AddNewSenderAddress(props) {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);        
    };
    
    return (
        <div>
            <Button id="addNewAddressButton" className="useNewAddressButton" onClick={showModal}>
                USE NEW ADDRESS
            </Button>
            <NewAddressModal isModalVisible1={isModalVisible} setIsModalVisible1={setIsModalVisible} {...props}/>
        </div>
    );
};

export default AddNewSenderAddress;