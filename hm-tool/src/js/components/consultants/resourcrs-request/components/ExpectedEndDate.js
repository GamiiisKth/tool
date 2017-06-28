/**
 * Created by se90514 on 2017-06-27.
 */
import React from 'react';


export default ({
                    value,
                    disabled,
                    onChangeExpectedEndDate

                }) => (

    <div>
        <label for="expectedEndDate">Expected end date</label>
        <div class="input-group input-group-sm">

            <input id="expectedEndDate" type="date" class="form-control " name="expectedEndDate"
                   value={value} disabled={disabled} onChange={onChangeExpectedEndDate}/>
            <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
        </div>
    </div>
);
