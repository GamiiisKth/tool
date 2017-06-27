/**
 * Created by se90514 on 2017-06-20.
 */

import React from 'react';

export default ({
    value,
    disabled,
    onCreatedDateChange

})=>(
    <div>
        <label for="availabilityDate">Created Date</label>
        <div class="input-group input-group-sm">

            <input id="availabilityDate" type="date" class="form-control " name="availabilityDate"
                   value={value} disabled={disabled} onChange={onCreatedDateChange}/>
            <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
        </div>
    </div>
)

