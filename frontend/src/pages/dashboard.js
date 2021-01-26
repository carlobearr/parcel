import "antd/dist/antd.css";

import "./dashboard.css";
import React from 'react';
import Weather from '../components/weather';
import { Layout } from 'antd';
import { Row, Col } from 'antd';
const { Header, Footer, Sider, Content } = Layout;



function Dashboard() {

    return ( 
        <div>

            <Layout>
                <Header className="dashboardheader"><div class="normal">Welcome Back,</div><div class="bold">Insert Name Here</div></Header>
               
                <Content className="opaque">


                <Weather></Weather>
                </Content>
                <Content  className="dashboardcontainer">
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
                        <Row>
                        <Col span={6}><div className="stats"><div className="valuetd statnum">10</div><br></br>Total Deliveries</div></Col>
                        <Col span={6}><div className="stats"><div className="valuesd statnum">10</div><br></br>Successful Deliveries</div></Col>
                        <Col span={6}><div className="stats"><div className="valuepd statnum">10</div><br></br>Pending Deliveries</div></Col>
                        <Col span={6}><div className="stats"><div className="valuefd statnum">10</div><br></br>Failed Deliveries</div></Col>
                        </Row>
                        <Row>
                        <div className="bodyheader">Delivery Trends</div>
                        </Row>
                        <Row>
                        <Col span={24}><div className="statsgraph">graph</div></Col>
                        </Row>
                    </Col>
                </Row>
                </Content>
                
            </Layout>
        </div>
    );
};

export default Dashboard;
