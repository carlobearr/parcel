import React from 'react';
import {Row, Col, Button} from 'antd';

function TransactionContainer(props) {
    
    return(
        <Row>
            <Col span={24} className="addressContainer">
                <div className="details">
                    <Row className="addressName">
                        <Col span={5}>
                            Customer Name
                        </Col>
                        <Col span={1}>
                            |
                        </Col>
                        <Col span={5}>
                            +63 xxx xxx xxxx
                        </Col>
                    </Row>
                    <Row>
                        <Col span={15}>
                            Street type, Street name, House number, Neighborhood, Municipality, Postal code, City, State, Country
                        </Col>
                        <Col offset={4}>
                            <div className="statusContainer">
                                <div>
                                    <center>STATUS</center>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    )
}

export default TransactionContainer;