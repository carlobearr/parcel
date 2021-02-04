import React, {useState, useEffect} from 'react';
import {Row, Col, Spin} from 'antd';
import { getTracker} from '../api/trackerHandler';

function TransactionContainer({transaction}) {
    
    const [status, setStatus] = useState(false);
    
    useEffect(() => {
        async function getStatus() {
            if(status === false) {
                const tracker = await getTracker(transaction);
                if(tracker !== null) {
                    if(tracker.status.length === 1) {
                        setStatus('pending');
                    }
                    else if (tracker.status.length < 6) {
                        setStatus('in-progress');
                    }
                    else if(tracker.status.length === 6){
                        setStatus('finished');
                    }
                }
                else {
                    setStatus('error');
                }
            }
        }
        getStatus();
    }, [status, transaction]);
    return(
        <Row>
            <Col span={24} className="addressContainer">
                <div className="details">
                    <Row className="addressName">
                        <Col span={5}>
                            {transaction.recipientAddress.recipientName}
                        </Col>
                        <Col span={1}>
                            |
                        </Col>
                        <Col span={5}>
                            {transaction.trackingNumber}
                        </Col>
                    </Row>
                    <Row>
                        <Col span={15}>
                            {transaction.recipientAddress.recipientAddress}
                        </Col>
                        <Col offset={4}>
                        {status !== false ?
                            <div className={"statusContainer " + status}>
                                <div>
                                    {status}
                                </div>      
                            </div>
                            :
                            <Spin></Spin>
                        }
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    )
}

export default TransactionContainer;