import React from 'react';
import { Row, Col, Button} from 'antd';

function AddressContainer(props) {
    return (
        <div className="addressContainer">
            <Row className="right">
                <Button type="text" className="editAddress" onClick={props.showModal2}>
                    EDIT ADDRESS
                </Button>
            </Row>
            <div className="details">
                <Row className="addressName">
                    {props.name}
                </Row>
                <Col span={15}>
                    <Row>
                        {props.completeAddress}
                    </Row>
                </Col>
            </div>
        </div>
    )   
}

export default AddressContainer;