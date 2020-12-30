import React, {useState} from 'react';
import { Row, Col, Timeline, Input, Checkbox, Form, Typography, Radio, Select } from 'antd';
import './bookDeliveryPage.css';
import DeliverySuccess from '../components/deliverySuccess';
import AddSenderAddress from '../components/addSenderAddress';
import AddRecipientAddress from '../components/addRecipientAddress';
const { Paragraph } = Typography;
const { Option } = Select;
const monthData = ['1', '2','3','4', '5','6','7', '8','9','10', '11','12'];

const thirtyDay = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'];
const thirtyOneDay = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'];
const twentyEightDay = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28'];
const twentyNineDay = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29'];

const monthInYearData = {
    1: thirtyOneDay,
    2: twentyEightDay,
    3: thirtyOneDay,
    4: thirtyDay,
    5: thirtyOneDay,
    6: thirtyDay,
    7: thirtyOneDay,
    8: thirtyOneDay,
    9: thirtyDay,
    10: thirtyOneDay,
    11: thirtyDay,
    12: thirtyOneDay
};

const monthInLeapYearData = {
    1: thirtyOneDay,
    2: twentyNineDay,
    3: thirtyOneDay,
    4: thirtyDay,
    5: thirtyOneDay,
    6: thirtyDay,
    7: thirtyOneDay,
    8: thirtyOneDay,
    9: thirtyDay,
    10: thirtyOneDay,
    11: thirtyDay,
    12: thirtyOneDay
};

function getYear() {
    var d = new Date();
    d = d.getFullYear();
    return d;
}

function BookDelivery() {
    const [form] = Form.useForm();
    const [value, setValue] = useState('');
    const [months, setMonths] = useState(monthInYearData[monthData[0]]);
    const [days, setDay] = useState(monthInYearData[monthData[0]][0]);

    const onChange = e => {
      setValue(e.target.value);
    };

    const handleMonthChange = value => {
        //if year is changed
        if (value >= getYear()) {
            //if leap year
            if (value%4 === 0) {
                setMonths(monthInLeapYearData[monthData[form.getFieldValue('month')-1]]);
            }
            //if not a leap year
            else {
                //change date to feb 28 only if feb 29 is selected in a not leap year
                if (form.getFieldValue('day') === '29' && form.getFieldValue('month') === '2') {
                    form.setFieldsValue({day:'28'})
                }
                setMonths(monthInYearData[monthData[form.getFieldValue('month')-1]]);
            }
        }
        //if month is changed
        else {
            //reset day to 1 to avoid invalid input ex. selecting jan 31 then switching to april 31
            form.setFieldsValue({day:'1'});
            if (form.getFieldValue('year') % 4 === 0) {
                setMonths(monthInLeapYearData[value]);
            }
            else {
                setMonths(monthInYearData[value]);
            }
        }
      };
    
    const onDayChange = value => {
        setDay(value);
    };

    return ( 
        <div className="wrapper">
            <div className="circleWrapper">
                <div className="outerCircle">
                    <div className="innerCircle">
                        <div className="innerCircle">
                            <div className="innerCircle">
                                <div className="innerCircle">
                                    <div className="innerCircle">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="title">
                Book a Delivery
            </div>
            <div className="contentWrapper">
                <Row className="weather">
                    WEATHER
                </Row>
                <Form layout="vertical" requiredMark={false} form={form} initialValues={{month: monthData[0], day: 1, year: 2020}}>
                    <Row className="detailContent" gutter = {[100,0]}>
                        <Col span={12}>
                            <Row className="addressWrapper">
                                <div className="addressContent">
                                    <Timeline color="blue">
                                        <Timeline.Item>
                                            <Row className="smallFontSize bold">Sender's Address</Row>
                                                <Row>Add sender address. 
                                                    <AddSenderAddress/>
                                                </Row>
                                                <br/>
                                            <Row className="smallFontSize borderTop bold">Receiver's Address</Row>
                                                <Row>Add recipient address.
                                                    <AddRecipientAddress/>
                                                </Row>
                                        </Timeline.Item>
                                        <Timeline.Item/>
                                    </Timeline>
                                </div>
                            </Row>
                            <Row className="itemWrapper">
                                <Row className="itemDetailsContent">
                                    <Col span={24}>
                                        <Row className="mediumFontSize">
                                            ITEM DETAILS
                                        </Row>
                                    </Col>
                                    <Col span={12}>
                                        <Row className="paddingBottom paddingRight">
                                            <Form.Item rules={[{ required: true, message: 'Please enter an item name' }]} label="Item Name" name="itemName">
                                                <Input/>
                                            </Form.Item>
                                        </Row>
                                        <Row className="paddingBottom">
                                            <Form.Item rules={[{ required: true, message: 'Please select a parcel size' }]} label="Parcel Size" name="parcelSize">
                                                    <Radio.Group onChange={onChange} value={value}>
                                                        <Row>
                                                            <Col span={12}>
                                                                <Radio.Button value={'s'} className="maxWidth">
                                                                    Small
                                                                </Radio.Button>
                                                            </Col>
                                                            <Col span={12}>
                                                            <Radio.Button value={"m"} className="maxWidth">
                                                                Medium
                                                            </Radio.Button>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col span={12}>
                                                                <Radio.Button value={"l"} className="maxWidth">
                                                                    Large
                                                                </Radio.Button>
                                                            </Col>
                                                            <Col span={12}>
                                                                <Radio.Button value={"b"} className="maxWidth">
                                                                    Box
                                                                </Radio.Button>
                                                            </Col>
                                                        </Row>
                                                    </Radio.Group>
                                            </Form.Item>
                                        </Row>
                                    </Col>
                                    <Col span={12} className="paddingTop">
                                        <Row className="paddingBottom ">
                                            <Col span={24}>
                                                <Form.Item name="CODOption" valuePropName="checked">
                                                    <Checkbox onChange={onChange}>
                                                        Cash on Delivery Option
                                                    </Checkbox>
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                        <Row className="paddingBottom">
                                            <Form.Item rules={[{ required: true, message: 'Please enter a valid item price', pattern: '(^[0-9]+$)' }]} label="Item Price to be Collected" name="itemPrice"><Input/></Form.Item>
                                        </Row>
                                        <Row className="paddingBottom">
                                            <Form.Item label="Item Photo (Optional)" name="itemPhoto"><Input/></Form.Item>
                                        </Row>
                                    </Col>
                                </Row>
                            </Row>
                        </Col>
                        <Col span={12}>
                            <Row className="dateWrapper">
                                <Row className="dateContent">
                                    <Col span={24}>
                                        PICK UP DATE
                                    </Col>
                                    <Col span={10} className="paddingRight">
                                        <Form.Item rules={[{ required: true, message: 'Please enter a valid month' }]} label="Month" name="month">
                                        <Select
                                            onChange={handleMonthChange}
                                        >
                                            {
                                                monthData.map(month => (
                                                    <Option
                                                        key={month}
                                                    >
                                                        {month}
                                                    </Option>
                                                ))
                                            }
                                        </Select>
                                        </Form.Item>
                                    </Col>
                                    <Col span={7} className="paddingRight">
                                        <Form.Item rules={[{ required: true, message: 'Please enter a valid day' }]} label="Day" name="day">
                                        <Select
                                            value={days}
                                            onChange={onDayChange}
                                        >
                                            {
                                                months.map(mapDay => (
                                                    <Option 
                                                        key={mapDay}
                                                    >
                                                        {mapDay}
                                                    </Option>
                                                ))
                                                
                                            }
                                        </Select>
                                        </Form.Item>
                                    </Col>
                                    <Col span={7}>
                                        <Form.Item rules={[{ required: true, message: 'Please enter a valid year' }]} label="Year" name="year">
                                        <Select
                                            placeholder="YYYY"
                                            onChange={handleMonthChange}
                                        >
                                            <Option value={getYear()}>{getYear()}</Option>
                                            <Option value={getYear()+1}>{getYear()+1}</Option>
                                            <Option value={getYear()+2}>{getYear()+2}</Option>
                                            <Option value={getYear()+3}>{getYear()+3}</Option>
                                            <Option value={getYear()+4}>{getYear()+4}</Option>
                                            <Option value={getYear()+5}>{getYear()+5}</Option>
                                            <Option value={getYear()+6}>{getYear()+6}</Option>
                                            <Option value={getYear()+7}>{getYear()+7}</Option>
                                            <Option value={getYear()+8}>{getYear()+8}</Option>
                                            <Option value={getYear()+9}>{getYear()+9}</Option>
                                            <Option value={getYear()+10}>{getYear()+10}</Option>
                                        </Select>
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Row>
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
                                    <DeliverySuccess value={value}/>
                                </Row>
                            </Row>
                        </Col>
                    </Row>
                </Form>
            </div>

        </div>
    );
};

export default BookDelivery;