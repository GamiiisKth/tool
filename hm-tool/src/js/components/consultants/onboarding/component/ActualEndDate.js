/**
 * Created by se90514 on 2017-06-27.
 */
import React from 'react';


export default ({
                    value,
                    disabled,
                    onChangeActualEndDate

                }) => (

    <div>
        <label for="actualEndDate">Actual end date</label>
        <div class="input-group input-group-sm">

            <input id="actualEndDate" type="date" class="form-control " name="actualEndDate"
                   value={value} disabled={disabled} onChange={onChangeActualEndDate}/>
            <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
        </div>
    </div>
);
