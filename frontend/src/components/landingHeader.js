import "antd/dist/antd.css";
import "./landingHeader.css";
import React from 'react';
import { Layout, Menu, Button, Image} from 'antd';
import { Link } from 'react-router-dom';

const { Header} = Layout;

function LandingHeader() {
    return (
        <Header className="header">
                <div className="leftAlign">
                    <Menu mode="horizontal" className="menuHeader">
                        <Menu.Item className="menuFont">
                            <Link to ="/" className="colorBlue">
                                <Image preview={false} className="headerLogo" src={process.env.PUBLIC_URL+ '/PE-Logo-Header.png'}/>
                            </Link>
                        </Menu.Item>
                        <Menu.Item className="menuFont">
                            <Link to ="#menu1" className="colorBlue">Menu 1</Link>
                        </Menu.Item>
                        <Menu.Item className="menuFont">
                            <Link to ="#menu2" className="colorBlue">Menu 2</Link>
                        </Menu.Item>
                        <Menu.Item className="menuFont">
                            <Link to ="#menu3" className="colorBlue">Menu 3</Link>
                        </Menu.Item>
                    </Menu>
                </div>
                <div className="rightAlign">
                    <Menu mode="horizontal" className="menuHeader">
                            
                            <Menu.Item className="menuFont">
                                <Button type="primary" shape="round" className="buttonProperty" style={{ background: "#00C8FF", borderColor: "#00C8FF" }}>TRACK YOUR PACKAGE</Button>
                            </Menu.Item>
                    </Menu>
                </div>
        </Header>
    );
};

export default LandingHeader;