/**
 * Created by se90514 on 2017-06-21.
 */

import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

export default ({
                    onAssignedToChange,
                    value,
                    placeholder,
                    options,

                }) => (
    <Select
        placeholder={placeholder}
        onChange={onAssignedToChange}
        options={options}
        simpleValue
        value={value}/>
);