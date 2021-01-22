import "antd/dist/antd.css";
import "./addressPage.css";
import React, {useState} from 'react';
import { Row, Col} from 'antd';
import AddNewRecipientAddress from '../components/addNewRecipientAddress';

function WaybillPage() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    return (
        <div className="wrapperWholePage">
            <div className="container">
                <Row>
                    <Col span={23}>
                        <p className="myAddresses">Waybills</p>
                    </Col>
                    <Col span={1}>
                        <AddNewRecipientAddress title={'addWaybill'}/>
                    </Col>
                </Row>
                <Row>
                    <Col span={24} className="addressContainer">
                        <Row className="right">
                            <AddNewRecipientAddress title={'editWaybill'}/>
                        </Row>
                        <div className="details">
                            <Row className="addressName">
                                <Col span={5}>
                                    Customer Name
                                </Col>
                                <Col span={1}>
                                    |
                                </Col>
                                <Col span={5}>
                                    +63 xxx xxx xxxx
                                </Col>
                            </Row>
                            <Col span={15}>
                                Street type, Street name, House number, Neighborhood, Municipality, Postal code, City, State, Country
                            </Col>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );

};

export default WaybillPage;