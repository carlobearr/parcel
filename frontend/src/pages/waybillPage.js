import "antd/dist/antd.css";
import "./addressPage.css";
import React, {useState, useEffect} from 'react';
import { Row, Col, Spin} from 'antd';
import AddNewRecipientAddress from '../components/addNewRecipientAddress';
import WaybillContainer from '../components/waybillContainer';
import {getWaybillList} from '../api/waybillHandler';

function WaybillPage() {

    const [waybillList, setWaybillList] = useState(false);
    const [updateList, setUpdateList] = useState(true);

    useEffect(() => {
        async function getList() {
            setWaybillList(await getWaybillList());
            setUpdateList(false);
            
        }
        if(updateList) {
            getList();
        }
    }, [waybillList, updateList]);

    return (
        <div className="wrapper">
            <div className="container">
                <Row>
                    <Col span={23}>
                        <p className="myAddresses">Waybills</p>
                    </Col>
                    <Col span={1}>
                        <AddNewRecipientAddress setUpdateList={setUpdateList} title={'addWaybill'}/>
                    </Col>
                </Row>
                { waybillList !== false ?
                            waybillList !== null ?  
                            waybillList.map((waybillDetails, i) => {     
                                return <WaybillContainer {...waybillDetails} setUpdateList={setUpdateList} key={i} />
                            })
                            :
                            <div className="spin details">
                                <p className="addressName">No waybills saved.</p>
                                <p>Click the '+' icon to create a new one!</p>
                            </div>
                        :
                        <Spin className="spin" size="large"/>
                    }
            </div>
        </div>
    );

};

export default WaybillPage;