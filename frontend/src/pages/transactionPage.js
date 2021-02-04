import React, {useState} from 'react';
import "antd/dist/antd.css";
import "./addressPage.css";
import TransactionContainer from '../components/transactionContainer';
import { Row, Col, Button} from 'antd';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
function TransactionPage() {
    const [isSortLatest, setIsSortLatest] = useState(true);
    return(
        <div className="wrapperWholePage">
            <div className="container">
                <Row>
                    <Col span={23}>
                        <p className="myAddresses">Transactions</p>
                    </Col>
                    <Col span={1}>
                        { isSortLatest === true ?
                        <Button className="addAddressButton" type="text" icon={<CaretDownOutlined/>} onClick={() => setIsSortLatest(false)}/>
                        :
                        <Button className="addAddressButton" type="text" icon={<CaretUpOutlined/>} onClick={() => setIsSortLatest(true)}/>
                        }
                    </Col>
                </Row>
                <TransactionContainer/>
                
            </div>
        </div>
    );
};

export default TransactionPage;