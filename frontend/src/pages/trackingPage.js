import React, {useState} from 'react';
import { Row, Col, Timeline, Button, Form, Input } from 'antd';
import './trackingPage.css';
import {getTracker} from '../api/trackerHandler';

function Tracking() {

    const [tracking, setTracking] = useState(null);

    const submitTracking = (tracker) => {
        async function get() {
            const result = await getTracker(tracker);
            if(result) {
                setTracking(result);
                document.getElementsByClassName("tracking-number")[0].innerHTML = result.trackingNumber;
            }
        }

        get();
    }

    const generateTimeline = () => {
        var timeline = [];

        tracking.status.forEach((stat,i) => {
            var date = stat.date;

            date = date.substr(date.indexOf(' ') + 1);
            const month = date.substr(0, date.indexOf(' '));
            
            date = date.substr(date.indexOf(' ') + 1);
            const day = date.substr(0, date.indexOf(' '));
            
            date = date.substr(date.indexOf(' ') + 1);
            const year = date.substr(0, date.indexOf(' '));

            date = date.substr(date.indexOf(' ') + 1);
            const time = date.substr(0, date.indexOf(' '));

            timeline.push(<Timeline.Item label={stat.title} color="blue" key={i}>
                        <p className="tracking-date">{month.toUpperCase()} {year} {day}</p>
                        <p>{time}</p>
                    </Timeline.Item>);
        });

        if(timeline.length < 6)  {
            timeline.push(  <Timeline.Item label="Waiting for next update" color="gray" key={timeline.length}>
                                <p className="tracking-date">Next Up</p>
                                <p>Waiting</p>
                            </Timeline.Item>)
        }
        return timeline;
    }

    return ( 
        <div> 
            <Row> 
                <Col span={12}>
                    <div className="tracking-header">                        
                        <div className="tracking-title"> Tracking </div>
                        {tracking !== null ?
                            <div className="tracking-number"></div>
                            :
                            <div></div>
                        }
                    </div>
                    {tracking !== null ?
                        <Timeline mode="right">
                            {generateTimeline()}
                        </Timeline>
                        :
                        <Form className="tracking-form" onFinish={submitTracking}>
                            <Row gutter={[10, 15]}>
                                <Col span={16}>
                                    <Form.Item rules={[{pattern: /TRCK-\d\d\d-\d\d\d/, message: 'Invalid tracking number format.'}]} name="trackingNumber"><Input placeholder="Tracking Number"></Input></Form.Item>
                                </Col>
                                <Col span={2}>
                                    <Form.Item>
                                        <Button className="tracking-submit" htmlType="submit"> Track Delivery</Button>
                                    </Form.Item>
                                    </Col>
                            </Row>
                        </Form>
                    }
                </Col>
                <Col span={12} className="tracking-side">
                </Col>
            </Row>
        </div>
    );
};

export default Tracking;