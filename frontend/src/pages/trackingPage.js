import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import { Row, Col, Timeline, Button, Form, Input, Spin } from 'antd';
import './trackingPage.css';
import {getTracker} from '../api/trackerHandler';

function Tracking(props) {

    const [tracking, setTracking] = useState(false);
    const [form] = Form.useForm();

    const submitTracking = (tracker) => {
        async function get() {
            const result = await getTracker(tracker);
            if(result) {                
                setTracking(result);
                props.history.push('/tracking/' + result.trackingNumber);
            }
        }

        get();
    }

    useEffect(() => {
        async function initializeTracking() {
            if(tracking === false) {
                if(props.match.params.trackingId) {
                    setTracking(await getTracker({trackingNumber: props.match.params.trackingId}));
                }
                else {
                    setTracking(null);
                }
            }
        
        }
        initializeTracking()
    }, [tracking, props.match.params.trackingId]);

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

    const trackAgain = () => {
        document.getElementsByClassName('tracking-number')[0].innerHTML = 'Track Again';
    }

    const showTracking = () => {
        document.getElementsByClassName('tracking-number')[0].innerHTML = tracking.trackingNumber;
    }

    const resetTracking = () => {
        setTracking(null);
        props.history.push('/tracking');
        form.resetFields(['trackingNumber']);
    }
    return ( 
        <div className="wrapper"> 
            <Row> 
                <Col span={12}>
                    <div className="tracking-header">                        
                        <div className="tracking-title"> Tracking </div>
                        {tracking !== null ?
                            <div className="tracking-number" onMouseOver={trackAgain} onMouseLeave={showTracking} onClick={resetTracking}>{tracking.trackingNumber}</div>
                            :
                            <div></div>
                        }
                    </div>
                    {tracking === false ?
                        <Spin className="spin"></Spin>
                        :
                        tracking === null ?
                            <Form className="tracking-form" onFinish={submitTracking} form={form}>
                                <Row gutter={[10, 15]}>
                                    <Col span={16}>
                                        <Form.Item rules={[{pattern: /TRCK-\d\d\d-\d\d\d/, message: 'Invalid tracking number.'}]} name="trackingNumber"><Input placeholder="Tracking Number"></Input></Form.Item>
                                    </Col>
                                    <Col span={2}>
                                        <Form.Item>
                                            <Button className="tracking-submit" htmlType="submit"> Track Delivery</Button>
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Form>
                            :
                            <Timeline mode="right">
                                {generateTimeline()}
                            </Timeline>
                    }
                </Col>
                <Col span={12} className="tracking-side">
                </Col>
            </Row>
        </div>
    );
};

export default withRouter(Tracking);