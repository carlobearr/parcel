import React, { useState,useEffect } from 'react';
import { Row, Timeline, Form, Input} from 'antd';
import AddSenderAddress from '../components/addSenderAddress';
import AddRecipientAddress from '../components/addRecipientAddress';

function BookDeliveryAddress(props) {
    const [senderAddress, setSenderAddress] = useState(null);
    const [recipientAddress, setRecipientAddress] = useState(null);
    const [sendColor, setsendColor] = useState('gray');
    const [recColor, setrecColor] = useState('gray');

    useEffect(() => {
        if(senderAddress !== null) {
            setsendColor('blue');
        }
        if(recipientAddress !== null) {
            setrecColor('blue');
        }
    }, [senderAddress, recipientAddress]);
 
    return (
        <div>
            <Row className="addressWrapper paddingBottom">
                <div className="addressContent">
                    <Timeline>
                        <Timeline.Item  color={sendColor}>
                            <Row className="smallFontSize bold">Sender's Address</Row>
                                <Row>
                                    {senderAddress === null ?
                                        <span>Add sender address.</span>
                                        :
                                        <Form.Item name="senderAddress" initialValue={senderAddress}><Input className="deliveryAddress" /></Form.Item>

                                    }
                                    <AddSenderAddress senderAddress={senderAddress} setSenderAddress={setSenderAddress}/>
                                </Row>
                                <br/>
                            <Row className="smallFontSize borderTop bold">
                                Receiver's Address
                            </Row>
                            <Row>
                                {recipientAddress === null ?
                                    <span>Add recipient address.</span>
                                    :
                                    <Form.Item name="recipientAddress" initialValue={recipientAddress}><Input className="deliveryAddress" /></Form.Item>
                                }
                                <AddRecipientAddress recipientAddress={recipientAddress} setRecipientAddress={setRecipientAddress}/>
                            </Row> 
                        </Timeline.Item>
                        <Timeline.Item color={recColor}/>
                    </Timeline>
                </div>
            </Row>
        </div>
    );
};

export default BookDeliveryAddress;