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
            <svg width="100%" viewBox="0 0 1440 463" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M327 138C327 276.071 215.071 388 77 388C-61.0712 388 -173 276.071 -173 138C-173 -0.0711975 -61.0712 -112 77 -112C215.071 -112 327 -0.0711975 327 138Z" fill="#00C8FF"/>
                <path d="M577 183C577 321.071 465.071 433 327 433C188.929 433 77 321.071 77 183C77 44.9288 188.929 -67 327 -67C465.071 -67 577 44.9288 577 183Z" fill="#00C8FF"/>
                <path d="M839 163C839 301.071 727.071 413 589 413C450.929 413 339 301.071 339 163C339 24.9288 450.929 -87 589 -87C727.071 -87 839 24.9288 839 163Z" fill="#00C8FF"/>
                <path d="M1089 213C1089 351.071 977.071 463 839 463C700.929 463 589 351.071 589 213C589 74.9288 700.929 -37 839 -37C977.071 -37 1089 74.9288 1089 213Z" fill="#00C8FF"/>
                <path d="M1333 183C1333 321.071 1221.07 433 1083 433C944.929 433 833 321.071 833 183C833 44.9288 944.929 -67 1083 -67C1221.07 -67 1333 44.9288 1333 183Z" fill="#00C8FF"/>
                <path d="M1589 200C1589 338.071 1477.07 450 1339 450C1200.93 450 1089 338.071 1089 200C1089 61.9288 1200.93 -50 1339 -50C1477.07 -50 1589 61.9288 1589 200Z" fill="#00C8FF"/>
            </svg>
            <Layout className="opaque dashboardcontainer">

                <Header className="dashboardheader"><div class="normal">Welcome Back,</div><div class="bold">Insert Name Here</div></Header>
               
                <Content>
                <Weather>
                </Weather>
                <Row>
                    <Col span={6}>
                    LEGEND
                    </Col>
                    <Col span={18}>
                        <Row>
                        Account Summary
                        </Row>
                        <Row>
                        <Col span={6}>data1</Col>
                        <Col span={6}>data2</Col>
                        <Col span={6}>data3</Col>
                        <Col span={6}>data4</Col>
                        </Row>
                        <Row>
                        Delivery Trends
                        </Row>
                        <Row>
                        <Col span={12}>data1</Col>
                        <Col span={12}>data2</Col>
                        </Row>
                    </Col>
                </Row>
                </Content>
                
            </Layout>
        </div>
    );
};

export default Dashboard;
