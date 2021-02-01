import React from 'react';
import {Row, Col} from 'antd';
import AddNewRecipientAddress from '../components/addNewRecipientAddress';

function WaybillContainer(props) {
    
    return(
        <Row>
            <Col span={24} className="addressContainer">
                <Row className="right">
                    <AddNewRecipientAddress setUpdateList={props.setUpdateList} waybill={props} title={'editWaybill'}/>
                </Row>
                <div className="details">
                    <Row className="addressName">
                        <Col span={5}>
                            {props.recipientName}
                        </Col>
                        <Col span={1}>
                            |
                        </Col>
                        <Col span={5}>
                            {props.recipientContact}
                        </Col>
                    </Row>
                    <Col span={15}>
                        {props.recipientAddress}
                    </Col>
                </div>
            </Col>
        </Row>
    )
}

export default WaybillContainer;