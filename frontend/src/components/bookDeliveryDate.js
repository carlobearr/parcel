import React, {useState} from 'react';
import { Row, Col, Form, Select } from 'antd';
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

function BookDeliveryDate(props) {
    const [months, setMonths] = useState(monthInYearData[monthData[0]]);
    const [days, setDay] = useState(monthInYearData[monthData[0]][0]);

    const handleMonthChange = value => {
        //if year is changed
        if (value >= getYear()) {
            //if leap year
            if (value%4 === 0) {
                setMonths(monthInLeapYearData[monthData[props.form.getFieldValue('month')-1]]);
            }
            //if not a leap year
            else {
                //change date to feb 28 only if feb 29 is selected in a not leap year
                if (props.form.getFieldValue('day') === '29' && props.form.getFieldValue('month') === '2') {
                    props.form.setFieldsValue({day:'28'})
                }
                setMonths(monthInYearData[monthData[props.form.getFieldValue('month')-1]]);
            }
        }
        //if month is changed
        else {
            //reset day to 1 to avoid invalid input ex. selecting jan 31 then switching to april 31
            props.form.setFieldsValue({day:'1'});
            if (props.form.getFieldValue('year') % 4 === 0) {
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
        <div>
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
        </div>
    );
};

export default BookDeliveryDate;