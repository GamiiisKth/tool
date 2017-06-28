/**
 * Created by se90514 on 2017-06-27.
 */
import React from 'react';


export default ({
                    value,
                    disabled,
                    onChangeEndDate

                }) => (

    <div>
        <label for="startDate">End date</label>
        <div class="input-group input-group-sm">

            <input id="endDate" type="date" class="form-control " name="endDate"
                   value={value} disabled={disabled} onChange={onChangeEndDate}/>
            <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
        </div>
    </div>
);
