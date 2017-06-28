/**
 * Created by se90514 on 2017-06-20.
 */

import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';




export default ({placeholder,options,value,onChangeType})=>(
    <Select
        placeholder={placeholder}
        onChange={(e) => onChangeType(e)}
        options={options}
        simpleValue
        value={value}
    />

);

