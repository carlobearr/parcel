import React, {useState} from 'react';
import { Button, Modal, Form, Row} from 'antd';
import './deliverySuccess.css';

function DeliverySuccess(props) {
    
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };
    
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleOk = () => {
        setIsModalVisible(false);
        props.setupdateAddress(true);
        props.setAddressList(false);
    };

    return (
        <div>
            <Button className="bookButton" htmlType="submit" onClick={showModal}>BOOK A DELIVERY</Button>

            <Modal
                centered
                width="33%"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
            >
                <div>
                    <Form layout="vertical">
                        <div className="modalWrapper">
                            <Row justify="center" className="trackNumber trackNumberPaddingTop">
                                TRCK-001-NUM
                            </Row>
                            <Row justify="center" className="trackMessage">
                                Your delivery is successfully made.
                            </Row>
                            <Row justify="center" className="trackMessage trackMessagePaddingBottom">
                                Please wait for the confirmation message.
                            </Row>
                            <Row justify="center">
                                <Button className="trackButton">
                                    COPY TRACKING NUMBER
                                </Button>
                            </Row>
                            <Row justify="center" className="trackParcelPaddingBottom">
                                <Button className="trackButton">
                                    TRACK PARCEL
                                </Button>
                            </Row>
                            <Row justify="center">
                                <Button className="backHomeButton">
                                GO BACK HOME
                                </Button>
                            </Row>

                        </div>

                    </Form>
                </div>
            </Modal>
        </div>
    );
};

export default DeliverySuccess;