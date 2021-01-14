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
                        <Row><div className="piechart">pie chart</div></Row>
                        <Row>Legend</Row>
                        <Row><Col span={12}>1</Col><Col span={12}>2</Col></Row>
                        <Row><Col span={12}>3</Col><Col span={12}>4</Col></Row>
                    </Col>
                    <Col span={18}>
                        <Row>
                        Account Summary
                        </Row>
                        <Row>
                        <Col span={6}><div className="stats">stat1</div></Col>
                        <Col span={6}><div className="stats">stat2</div></Col>
                        <Col span={6}><div className="stats">stat3</div></Col>
                        <Col span={6}><div className="stats">stat4</div></Col>
                        </Row>
                        <Row>
                        Delivery Trends
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
