import React from 'react';
import { Button, Modal, Form, Row, Spin} from 'antd';
import './deliverySuccess.css';
import { Link } from 'react-router-dom';

function DeliverySuccess(props) {

    function copyTrackNumber() {
        var el = document.createElement('textarea');
        // Set value (string to be copied)
        el.value = props.trackingNum;
        // Set non-editable to avoid focus and move outside of view
        el.setAttribute('readonly', '');
        el.style = {position: 'absolute', left: '-9999px'};
        document.body.appendChild(el);
        // Select text inside element
        el.select();
        // Copy text to clipboard
        document.execCommand('copy');
        // Remove temporary element
        document.body.removeChild(el);
    }

    const handleCancel = () => {
        props.setIsModalVisible(false);
    };

    const handleOk = () => {
        props.setIsModalVisible(false);
    };

    return (
        <Modal
            centered
            width="33%"
            visible={props.isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
        >
            <div>
                <Form layout="vertical">
                    {props.trackingNum === null? 
                            <div className="modalWrapper">
                                <Spin className="spin"/>
                            </div>
                            :
                            <div className="modalWrapper">
                            <Row justify="center" className="trackNumber trackNumberPaddingTop">
                                {props.trackingNum}
                            </Row>
                            <Row justify="center" className="trackMessage">
                                Your delivery is successfully made.
                            </Row>
                            <Row justify="center" className="trackMessage trackMessagePaddingBottom">
                                Please wait for the confirmation message.
                            </Row>
                            <Row justify="center">
                                <Button className="trackButton" onClick={copyTrackNumber}>
                                    COPY TRACKING NUMBER
                                </Button>
                            </Row>
                            <Row justify="center" className="trackParcelPaddingBottom">
                                <Button className="trackButton">
                                    TRACK PARCEL
                                </Button>
                            </Row>
                            <Row justify="center">
                                <Link to="/dashboard" className="backHomeButton">
                                    <center>GO BACK HOME</center>
                                </Link>
                            </Row>
                        </div>
                    }
                </Form>
            </div>
        </Modal>
    );
};

export default DeliverySuccess;