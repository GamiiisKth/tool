/**
 * Created by se90514 on 2017-06-28.
 */

import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';




export default ({placeholder,options,value,onChangeOnSiteLocation})=>(
    <Select
        placeholder={placeholder}
        onChange={(e) => onChangeOnSiteLocation(e)}
        options={options}
        simpleValue
        value={value}
    />

);

