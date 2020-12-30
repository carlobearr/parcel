import { Row, Timeline} from 'antd';
import AddSenderAddress from '../components/addSenderAddress';
import AddRecipientAddress from '../components/addRecipientAddress';

function BookDeliveryAddress(props) {
    
    return (
        <div>
            <Row className="addressWrapper paddingBottom">
                <div className="addressContent">
                    <Timeline color="blue">
                        <Timeline.Item>
                            <Row className="smallFontSize bold">Sender's Address</Row>
                                <Row>Add sender address. 
                                    <AddSenderAddress/>
                                </Row>
                                <br/>
                            <Row className="smallFontSize borderTop bold">
                                Receiver's Address
                            </Row>
                            <Row>Add recipient address.
                                <AddRecipientAddress/>
                            </Row>
                        </Timeline.Item>
                    <Timeline.Item/>
                    </Timeline>
                </div>
            </Row>
        </div>
    );
};

export default BookDeliveryAddress;