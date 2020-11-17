import React from 'react';
import { Row, Col, Timeline } from 'antd';
import './trackingPage.css';

function Tracking() {

    return ( 
        <div> 
            <Row> 
                <Col span={12}>
                    <div className="tracking-header">                        
                        <div className="tracking-title"> Tracking </div>
                        <div className="tracking-number"> Tracking Number </div>
                    </div>   
                    <Timeline mode="right">
                        <Timeline.Item label="Status is here" color="blue">
                            <p className="tracking-date">MM YY DD</p>
                            <p>HH MM SS</p>
                        </Timeline.Item>
                        <Timeline.Item label="Status is here" color="blue">
                            <p className="tracking-date">MM YY DD</p>
                            <p>HH MM SS</p>
                        </Timeline.Item>
                        <Timeline.Item label="Status is here" color="blue">
                            <p className="tracking-date">MM YY DD</p>
                            <p>HH MM SS</p>
                        </Timeline.Item>
                        <Timeline.Item label="Status is here" color="blue">
                            <p className="tracking-date">MM YY DD</p>
                            <p>HH MM SS</p>
                        </Timeline.Item>
                        <Timeline.Item label="Status is here" color="gray">
                            <p className="tracking-date">MM YY DD</p>
                            <p>HH MM SS</p>
                        </Timeline.Item>
                        <Timeline.Item label="Status is here" color="gray">
                            <p className="tracking-date">MM YY DD</p>
                            <p>HH MM SS</p>
                        </Timeline.Item>
                    </Timeline>
                </Col>
                <Col span={12} className="tracking-side">
                </Col>
            </Row>
        </div>
    );
};

export default Tracking;