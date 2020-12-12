import React from 'react';
import { Row, Col, Button} from 'antd';

function AddressContainer(addressDetails ,showModal2) {
    return (
        <div className="addressContainer">
            <Row className="right">
                <Button id="editAddressButton" type="text" className="editAddress" onClick={showModal2}>
                    EDIT ADDRESS
                </Button>
            </Row>
            <div className="details">
                <Row className="addressName">
                    {addressDetails.name}
                </Row>
                <Col span={15}>
                    <Row>
                        {addressDetails.completeAddress}
                    </Row>
                </Col>
            </div>
        </div>
    )   
}

export default AddressContainer;