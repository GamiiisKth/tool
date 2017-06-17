/**
 * Created by se90514 on 2017-06-15.
 */

import React from 'react';
import Select from 'react-select';

import 'react-select/dist/react-select.css';



export default (props)=>(


    <div class="col-sm-4">
        <Select
            onChange={this.handleChange.bind(this)}
            options={props.options}
            simpleValue
            value={props.value}/>
    </div>
);
