import React from 'react';
import { Row, Col, Form } from 'antd';
import './bookDeliveryPage.css';
import BookDeliveryAddress from '../components/bookDeliveryAddress';
import BookDeliveryItemDetails from '../components/bookDeliveryItemDetails'
import BookDeliveryDate from '../components/bookDeliveryDate';
import BookDeliveryFees from '../components/bookDeliveryFees';

function BookDelivery() {
    const [form] = Form.useForm();

    function getYear() {
        var d = new Date();
        d = d.getFullYear();
        return d;
    }

    const testingVal = (form) => {
        console.log(form);
    }
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
                <Form layout="vertical" requiredMark={false} form={form} initialValues={{month: '1', day: '1', year: getYear()}} onFinish={testingVal}>
                    <Row className="detailContent" gutter = {[100,0]}>
                        <Col span={12}>
                            <BookDeliveryAddress/>
                            <BookDeliveryItemDetails/>
                        </Col>
                        <Col span={12}>
                            <BookDeliveryDate form={form}/>
                            <BookDeliveryFees/>
                        </Col>
                    </Row>
                </Form>
            </div>

        </div>
    );
};

export default BookDelivery;