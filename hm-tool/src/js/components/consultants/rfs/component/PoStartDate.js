/**
 * Created by se90514 on 2017-06-22.
 */

import React from 'react';


export default ({
                    value,
                    disabled,
                    onPoStartDateDateChange

                }) => (

    <div>
        <label for="poStartDate">Po start date</label>
        <div class="input-group input-group-sm">

            <input id="poStartDate" type="date" class="form-control " name="poStartDate"
                   value={value} disabled={disabled} onChange={onPoStartDateDateChange}/>
            <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
        </div>
    </div>
);
