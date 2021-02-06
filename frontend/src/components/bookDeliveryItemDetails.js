import React from 'react';
import { Row, Col, Input, Checkbox, Form, Radio } from 'antd';

function BookDeliveryItemDetails(props) {
    const onChange = e => {
        props.setValue(e.target.value);
        props.setTotalPrice(props.distance + e.target.value);
      };

    const codOption = e => {
        //cod option true?
    }
    
    return (
        <div>
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
                                    <Radio.Group onChange={onChange} value={props.value}>
                                        <Row>
                                            <Col span={12}>
                                                <Radio.Button value={20} className="maxWidth">
                                                    Small
                                                </Radio.Button>
                                            </Col>
                                            <Col span={12}>
                                            <Radio.Button value={30} className="maxWidth">
                                                Medium
                                            </Radio.Button>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={12}>
                                                <Radio.Button value={40} className="maxWidth">
                                                    Large
                                                </Radio.Button>
                                            </Col>
                                            <Col span={12}>
                                                <Radio.Button value={50} className="maxWidth">
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
                                    <Checkbox value={true} onChange={codOption}>
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
        </div>
    );
};

export default BookDeliveryItemDetails;