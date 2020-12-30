import { Row, Col, Typography } from 'antd';
import DeliverySuccess from './deliverySuccess';
const { Paragraph } = Typography;

function BookDeliveryFees(props) {
    
    return (
        <div>
            <Row className="feeWrapper">
                <Row className="feeContent">
                    <Col span={24}>
                        FEES AND BREAKDOWN
                    </Col>
                    <Col span={16}>
                        <Typography>
                            <Paragraph>
                                ~~~~~~~~~~~~~~~~~~~~~
                            </Paragraph>
                            <Paragraph>
                                ~~~~~~~~~~~~~~~~~~~~~~~~~~
                            </Paragraph>
                        </Typography>
                    </Col>
                    <Col span={8}>
                        <Paragraph>
                            ~~~~~~~~~~~~~
                        </Paragraph>
                        <Paragraph>
                            ~~~~~~~~~~
                        </Paragraph>
                        <Paragraph>
                            ~~~~
                        </Paragraph>
                        <Paragraph>
                            ~~~~
                        </Paragraph>
                        <Paragraph>
                            ₱ ~~~~
                        </Paragraph>
                    </Col>
                </Row>
            </Row>
            <Row className="bookButtonWrapper">
                <Row className="bookButtonContent">
                    <DeliverySuccess/>
                </Row>
            </Row>
        </div>
    );
};

export default BookDeliveryFees;