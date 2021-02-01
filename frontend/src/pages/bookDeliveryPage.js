import React, {useState} from 'react';
import { Row, Col, Form } from 'antd';
import './bookDeliveryPage.css';
import BookDeliveryAddress from '../components/bookDeliveryAddress';
import BookDeliveryItemDetails from '../components/bookDeliveryItemDetails'
import BookDeliveryDate from '../components/bookDeliveryDate';
import BookDeliveryFees from '../components/bookDeliveryFees';
import DeliverySuccess from '../components/deliverySuccess';
import { createDelivery } from '../api/deliveryHandler';
import Weather from '../components/weather';

function BookDelivery() {
    const [form] = Form.useForm();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [sendColor, setsendColor] = useState('gray');
    const [recColor, setrecColor] = useState('gray');
    const [trackingNum, setTrackingNum] = useState(null);
    function getYear() {
        var d = new Date();
        d = d.getFullYear();
        return d;
    }

    const submitDelivery = (formValues) => {
        async function bookDelivery() {
            setIsModalVisible(true);
            const result = await createDelivery(formValues);
            if(result.saved) {
                setTrackingNum(result.saved);
            }
            if(result.err) {
                console.log(result.err);    //change error handling
            }
        }

        bookDelivery();
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
                <Weather></Weather>
                <Form layout="vertical" requiredMark={false} form={form} initialValues={{month: '1', day: '1', year: getYear()}} onFinish={submitDelivery}>
                    <Row className="detailContent" gutter = {[100,0]}>
                        <Col span={12}>
                            <BookDeliveryAddress sendColor={sendColor} setsendColor={setsendColor} recColor={recColor} setrecColor={setrecColor} form={form}/>
                            <BookDeliveryItemDetails/>
                        </Col>
                        <Col span={12}>
                            <BookDeliveryDate form={form}/>
                            <BookDeliveryFees />
                        </Col>
                    </Row>
                </Form>
            </div>
            <DeliverySuccess trackingNum={trackingNum} isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}/>
        </div>
    );
};

export default BookDelivery;