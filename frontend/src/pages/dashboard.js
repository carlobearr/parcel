import "antd/dist/antd.css";
import "./dashboard.css";
import React, {useState, useEffect} from 'react';
import Weather from '../components/weather';
import { Row, Col, Spin } from 'antd';
import "../api/deliveryHandler";
import { getDeliveries } from '../api/deliveryHandler';
import {getTracker} from '../api/trackerHandler';

function Dashboard({isLoggedIn}){

    const [total, setTotal] = useState(false);
    const [success, setSuccess] = useState(false);
    const [pending, setPending] = useState(false);

    useEffect(() => {
        async function getStats() {
            const deliveries = await getDeliveries();
            if(total === false && deliveries) {
                setTotal(deliveries.length);
                var counter = 0;
                await deliveries.forEach(async(delivery) => { 
                    var tracker = await getTracker(delivery);
                    
                    if(tracker.status.length === 6) {
                        counter += 1;        
                    }
                    setSuccess(counter);
                    setPending(deliveries.length - counter);
                });
            }
            if(!deliveries) {
                setTotal('Error');
                setSuccess('Error');
                setPending('Error');
            }
        }

        getStats();
    }, [total]);
    return ( 
        <div className="wrapper">
                <div className="dashboardheader">
                    <div className="normal">Welcome Back,</div>
                    <div className="bold">{isLoggedIn.name}</div>
                </div>
                
                <div className="opaque">
                    <div className="dashboardcontainer">
                        <Weather></Weather>
                    </div>
                </div>
                
                <div className="dashboardcontainer">
                    <Row>
                        <Col span={6}>
                            <Row><div className="piechart"></div></Row>
                            <Row><div className="centered">Legend</div></Row>
                            <Row><Col span={12}>Successful Delivery</Col><Col span={12}>Failed Delivery</Col></Row>
                            <Row><Col span={12}>Pending Delivery</Col><Col span={12}></Col></Row>
                        </Col>
                        <Col span={18}>
                            <Row>
                            <div className="bodyheader">Account Summary</div>
                            </Row>
                            
                            {total === false || success === false || pending === false ?
                                <Spin className="spin"></Spin>
                                :
                                <Row>
                                    <Col span={6}><div className="stats"><div className="valuetd statnum"><div>{total}</div></div><br></br>Total Deliveries</div></Col>
                                    <Col span={6}><div className="stats"><div className="valuesd statnum"><div>{success}</div></div><br></br>Successful Deliveries</div></Col>
                                    <Col span={6}><div className="stats"><div className="valuepd statnum"><div>{pending}</div></div><br></br>Pending Deliveries</div></Col>
                                    <Col span={6}><div className="stats"><div className="valuefd statnum"><div>0</div></div><br></br>Failed Deliveries</div></Col>
                                </Row>

                            }
                            
                            <Row>
                            <div className="bodyheader">Delivery Trends</div>
                            </Row>
                            <Row>
                            <Col span={24}><div className="statsgraph">graph</div></Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                
        </div>
    );
};

export default Dashboard;


