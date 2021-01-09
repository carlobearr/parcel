import React, { useState,useEffect } from 'react';
import { Row, Timeline, Form, Input} from 'antd';
import AddSenderAddress from '../components/addSenderAddress';
import AddRecipientAddress from '../components/addRecipientAddress';

function BookDeliveryAddress(props) {
    const [senderAddress, setSenderAddress] = useState(null);
    const [recipientAddress, setRecipientAddress] = useState(null);

    useEffect(() => {
        if(senderAddress !== null) {
            props.setsendColor('blue');

        }
        if(recipientAddress !== null) {
            props.setrecColor('blue');
        }
        props.form.setFieldsValue({senderAddress, recipientAddress});
    }, [props, senderAddress, recipientAddress]);
 
    return (
        <div>
            <Row className="addressWrapper paddingBottom">
                <div className="addressContent">
                    <Timeline>
                        <Timeline.Item  color={props.sendColor}>
                            <Row className="smallFontSize bold">Sender's Address</Row>
                            <Row>
                                {senderAddress === null ?
                                    <Form.Item name="senderAddress" rules={[{ required: true, message: 'Please select an address.' }]}>
                                         <Input className="deliveryAddress" placeholder="Add sender address." />
                                    </Form.Item>
                                    :
                                    <Form.Item name="senderAddress" rules={[{ required: true, message: 'Please select an address.' }]} initialValue={senderAddress}>
                                        <Input className="deliveryAddress"  />
                                    </Form.Item>
                                }
                                <AddSenderAddress senderAddress={senderAddress} setSenderAddress={setSenderAddress}/>
                            </Row>
                            <br/>
                            <Row className="smallFontSize borderTop bold">
                                Receiver's Address
                            </Row>
                            <Row>
                                {recipientAddress === null ?
                                    <Form.Item name="recipientAddress" rules={[{ required: true, message: 'Please select an address.' }]}>
                                        <Input className="deliveryAddress" placeholder="Add recipient address."/>
                                    </Form.Item>
                                    :
                                    <Form.Item name="recipientAddress" rules={[{ required: true, message: 'Please select an address.' }]} initialValue={recipientAddress}>
                                        <Input className="deliveryAddress" />
                                    </Form.Item>
                                }
                                <AddRecipientAddress recipientAddress={recipientAddress} setRecipientAddress={setRecipientAddress}/>
                            </Row> 
                        </Timeline.Item>
                        <Timeline.Item color={props.recColor}/>
                    </Timeline>
                </div>
            </Row>
        </div>
    );
};

export default BookDeliveryAddress;