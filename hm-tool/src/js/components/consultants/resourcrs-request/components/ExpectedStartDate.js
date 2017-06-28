/**
 * Created by se90514 on 2017-06-27.
 */
import React from 'react';


export default ({
                    value,
                    disabled,
                    onChangeExpectedStartDate

                }) => (

    <div>
        <label for="expectedStartDate">Expected start date</label>
        <div class="input-group input-group-sm">

            <input id="expectedStartDate" type="date" class="form-control " name="expectedStartDate"
                   value={value} disabled={disabled} onChange={onChangeExpectedStartDate}/>
            <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
        </div>
    </div>
);
