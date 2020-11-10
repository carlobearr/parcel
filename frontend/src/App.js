import React, { Fragment, useEffect, useState } from 'react';
import { InputNumber } from 'antd';

const App = () => {
    useEffect(() => {
        const getAPI = async () => {
            const response = await fetch('http://localhost:8080/');
            const data = await response.json();

            try {
                console.log(data);
                setNote(data);
            } catch (error) {
                console.log(error);
            }
        };
        getAPI();
    }, []);

    const [note, setNote] = useState([]);

    return (
      <Fragment>
        {JSON.stringify(note)}
        <InputNumber min={1} max={10} defaultValue={3} />
      </Fragment>
    );
};

export default App;