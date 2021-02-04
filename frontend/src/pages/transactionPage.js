import React, {useState, useEffect} from 'react';
import "antd/dist/antd.css";
import "./addressPage.css";
import TransactionContainer from '../components/transactionContainer';
import { Row, Col, Button, Spin} from 'antd';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { getDeliveries } from '../api/deliveryHandler';
import "./transactionPage.css";

function TransactionPage() {
    const [isSortLatest, setIsSortLatest] = useState(true);
    const [transactionList, setTransactionList] = useState(false);

    useEffect(() => {
        async function getTransactions() {
            if(transactionList === false) {
                setTransactionList(await getDeliveries());
            }
        }

        getTransactions();
    }, [transactionList]);

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
                {transactionList !== false ? 
                    transactionList !== null ?
                        transactionList.map((transaction, i) => {
                            return <TransactionContainer transaction={transaction} key={i}></TransactionContainer>
                        })
                    :
                    <div className="spin details">
                            <p className="addressName">No transactions yet.</p>
                            <p>Book a delivery now!</p>
                    </div>
                    :
                    <Spin className="spin"></Spin>
                    
                }
            </div>
        </div>
    );
};

export default TransactionPage;