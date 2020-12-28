import React, {} from 'react';
import { Row, Col, Timeline, Input, Checkbox, Form, Typography, Radio } from 'antd';
import './bookDeliveryPage.css';
import DeliverySuccess from '../components/deliverySuccess';
import AddSenderAddress from '../components/addSenderAddress';
import AddRecipientAddress from '../components/addRecipientAddress';
const { Paragraph } = Typography;

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

function BookDelivery() {

    return ( 
        <div className="wrapper">
            <div className="circleWrapper">
                <div className="outerCircle">
                    <div className="innerCircle">
                        <div className="innerCircle">
                            <div className="innerCircle">
                                <div className="innerCircle">
                                    <div className="innerCircle">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="title">
                Book a Delivery
            </div>
            <div className="contentWrapper">
                <Row className="weather">
                    WEATHER
                </Row>
                <Form layout="vertical" requiredMark={false}>
                    <Row className="detailContent" gutter = {[100,0]}>
                        <Col span={12}>
                            <Row className="addressWrapper">
                                <div className="addressContent">
                                    <Timeline color="blue">
                                        <Timeline.Item>
                                            <Row className="smallFontSize bold">Sender's Address</Row>
                                                <Row>Add sender address. 
                                                    <AddSenderAddress/>
                                                </Row>
                                                <br/>
                                            <Row className="smallFontSize borderTop bold">Receiver's Address</Row>
                                                <Row>Add recipient address.
                                                    <AddRecipientAddress/>
                                                </Row>
                                        </Timeline.Item>
                                        <Timeline.Item/>
                                    </Timeline>
                                </div>
                            </Row>
                            <Row className="itemWrapper">
                                <Row className="itemDetailsContent">
                                    <Col span={24}>
                                        <Row className="mediumFontSize">
                                            ITEM DETAILS
                                        </Row>
                                    </Col>
                                    <Col span={12}>
                                        <Row className="paddingBottom paddingRight">
                                            <Form.Item rules={[{ required: true, message: 'Please enter an item name' }]} label="Item Name" name="itemName">
                                                <Input/>
                                            </Form.Item>
                                        </Row>
                                        <Row className="paddingBottom">
                                            <Form.Item rules={[{ required: true, message: 'Please select a parcel size' }]} label="Parcel Size" name="parcelSize">
                                                    <Radio.Group initialValues="s">
                                                        <Row>
                                                            <Col span={12}>
                                                                <Radio.Button value="s" className="maxWidth">
                                                                    Small
                                                                </Radio.Button>
                                                            </Col>
                                                            <Col span={12}>
                                                            <Radio.Button value="m" className="maxWidth">
                                                                Medium
                                                            </Radio.Button>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col span={12}>
                                                                <Radio.Button value="l" className="maxWidth">
                                                                    Large
                                                                </Radio.Button>
                                                            </Col>
                                                            <Col span={12}>
                                                                <Radio.Button value="b" className="maxWidth">
                                                                    Box
                                                                </Radio.Button>
                                                            </Col>
                                                        </Row>
                                                    </Radio.Group>
                                            </Form.Item>
                                        </Row>
                                    </Col>
                                    <Col span={12} className="paddingTop">
                                        <Row className="paddingBottom ">
                                            <Col span={24}>
                                                <Form.Item name="CODOption" valuePropName="checked">
                                                    <Checkbox onChange={onChange}>
                                                        Cash on Delivery Option
                                                    </Checkbox>
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                        <Row className="paddingBottom">
                                            <Form.Item rules={[{ required: true, message: 'Please enter a valid item price', pattern: '(^[0-9]+$)' }]} label="Item Price to be Collected" name="itemPrice"><Input/></Form.Item>
                                        </Row>
                                        <Row className="paddingBottom">
                                            <Form.Item label="Item Photo (Optional)" name="itemPhoto"><Input/></Form.Item>
                                        </Row>
                                    </Col>
                                </Row>
                            </Row>
                        </Col>
                        <Col span={12}>
                            <Row className="dateWrapper">
                                <Row className="dateContent">
                                    <Col span={24}>
                                        PICK UP DATE
                                    </Col>
                                    <Col span={10} className="paddingRight">
                                        <Form.Item rules={[{ required: true, message: 'Please enter a valid month', pattern: '(^0?[1-9]$)|(^1[0-2]$)' }]} label="Month" name="month"><Input placeholder="MM"/></Form.Item>
                                    </Col>
                                    <Col span={7} className="paddingRight">
                                        <Form.Item rules={[{ required: true, message: 'Please enter a valid day', pattern: '(^0?[1-9]$|^[1-2][0-9]$|^3[0-1]$)' }]} label="Day" name="day"><Input placeholder="DD"/></Form.Item>
                                    </Col>
                                    <Col span={7}>
                                        <Form.Item rules={[{ required: true, message: 'Please enter a valid year', pattern: '(^[0-9]+$)' }]} label="Year" name="year"><Input placeholder="YYYY"/></Form.Item>
                                    </Col>
                                </Row>
                            </Row>
                            <Row className="feeWrapper">
                                <Row className="feeContent">
                                    <Col span={24}>
                                        FEES AND BREAKDOWN
                                    </Col>
                                    <Col span={16}>
                                        <Typography>
                                            <Paragraph>
                                                ~~~~~~~~~~~~~~~~~~~~~
                                            </Paragraph>
                                            <Paragraph>
                                                ~~~~~~~~~~~~~~~~~~~~~~~~~~
                                            </Paragraph>
                                        </Typography>
                                    </Col>
                                    <Col span={8}>
                                        <Paragraph>
                                            ~~~~~~~~~~~~~
                                        </Paragraph>
                                        <Paragraph>
                                            ~~~~~~~~~~
                                        </Paragraph>
                                        <Paragraph>
                                            ~~~~
                                        </Paragraph>
                                        <Paragraph>
                                            ~~~~
                                        </Paragraph>
                                        <Paragraph>
                                            ₱ ~~~~
                                        </Paragraph>
                                    </Col>
                                </Row>
                            </Row>
                            <Row className="bookButtonWrapper">
                                <Row className="bookButtonContent">
                                    <DeliverySuccess/>
                                </Row>
                            </Row>
                        </Col>
                    </Row>
                </Form>
            </div>

        </div>
    );
};

export default BookDelivery;