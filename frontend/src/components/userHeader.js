import "antd/dist/antd.css";
import "./landingHeader.css";
import React from 'react';
import { Layout, Menu, Dropdown, Button, Image, Avatar} from 'antd';
import { Link } from 'react-router-dom';
import { setLogout } from '../api/sessionHandler';

const { Header } = Layout;

function UserHeader() {
    const userMenu = (
        <Menu >
            <Menu.Item className="menuFont">
                Name of User
            </Menu.Item>
            <Menu.Item>
                <Link to="/edit" className="menuFont">
                    Edit Profile
                </Link>
            </Menu.Item>
            <Menu.Item className="menuFont">
                <Link to="/address">
                    My Addresses
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link to="#" className="menuFont">
                    Help
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link to="#" onClick={setLogout} className="menuFont">
                    Logout
                </Link>
            </Menu.Item>
        </Menu>
    );
    
    return (
        <Header className="header">
                <div className="leftAlign">
                    <Menu mode="horizontal" className="menuHeader">
                        <Menu.Item className="menuFont">
                            <Link to ="/" className="colorBlue">
                                <Image preview={false} className="headerLogo" src={process.env.PUBLIC_URL+ '/PE-Logo-Header.png'}/>
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to ="/dashboard" className="menuFont">DASHBOARD</Link>
                        </Menu.Item>
                        <Menu.Item className="menuFont">
                            <Link to ="#" className="menuFont">TRANSACTION</Link>
                        </Menu.Item>
                        <Menu.Item className="menuFont">
                            <Link to ="#" className="menuFont">CREATE WAYBILL</Link>
                        </Menu.Item>
                        <Menu.Item className="menuFont">
                            <Link to ="/tracking" className="menuFont">TRACK</Link>
                        </Menu.Item>
                    </Menu>
                </div>
                <div className="rightAlign">
                    <Menu mode="horizontal" className="menuHeader">
                            
                        <Menu.Item className="menuFont">
                            <Button href="/book-a-delivery" type="primary" shape="round" className="buttonProperty" style={{ background: "#00C8FF", borderColor: "#00C8FF", color: 'white', fontFamily: 'Poppins, sans-serif' }}>BOOK A DELIVERY</Button>
                        </Menu.Item>
                        <Menu.Item className="menuFont">
                            <Dropdown overlay={userMenu} placement="bottomCenter">    
                                <Avatar size="large"/>
                            </Dropdown>
                        </Menu.Item>
                            
                    </Menu>
                </div>
        </Header>
    );
};

export default UserHeader;