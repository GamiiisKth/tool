/**
 * Created by se90514 on 2017-06-20.
 */

import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';




export default ({placeholder,options,value,onChangeIbmBand})=>(
    <Select
        placeholder={placeholder}
        onChange={(e) => onChangeIbmBand(e)}
        options={options}
        simpleValue
        value={value}
    />

);

