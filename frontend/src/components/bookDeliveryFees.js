import React from 'react';
import { Row, Col, Button } from 'antd';

function BookDeliveryFees(props) {

    return (
        <div>
            <Row className="feeWrapper">
                <Row className="feeContent">
                    <Col span={24}>
                        <Row>
                            <Col span={24}>
                                FEES AND BREAKDOWN
                            </Col>
                        </Row>
                        <Row className="feeMargin">
                            <Col span={15}>
                                <Row>
                                    Distance
                                </Row>
                                <Row>
                                    Size
                                </Row>
                                <Row className="borderTop">
                                    Total
                                </Row>
                            </Col>
                            <Col span={9}>
                                <Row>
                                    {props.distance}
                                </Row>
                                <Row>
                                    {props.value}
                                </Row>
                                <Row className="borderTop">
                                    {props.totalPrice}
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Row>
            <Row className="bookButtonWrapper">
                <Row className="bookButtonContent">
                    <Button className="bookButton" htmlType="submit">BOOK A DELIVERY</Button>
                </Row>
            </Row>
        </div>
    );
};

export default BookDeliveryFees;