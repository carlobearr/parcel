import React, {useState} from 'react';
import { Row, Col, Form, Layout } from 'antd';
import './bookDeliveryPage.css';
import BookDeliveryAddress from '../components/bookDeliveryAddress';
import BookDeliveryItemDetails from '../components/bookDeliveryItemDetails'
import BookDeliveryDate from '../components/bookDeliveryDate';
import BookDeliveryFees from '../components/bookDeliveryFees';
import DeliverySuccess from '../components/deliverySuccess';
import { createDelivery } from '../api/deliveryHandler';
import Weather from '../components/weather';

const { Header,Content } = Layout;

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
            <Layout>
                <Header className="dashboardheader">
                    <div class="title">Book a Delivery</div>
                </Header>
                
                <Content className="opaque">
                    <div className="dashboardcontainer">
                        <Weather></Weather>
                    </div>
                </Content>

  
            <div className="contentWrapper">
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

        </Layout>
        </div>
    );
};

export default BookDelivery;