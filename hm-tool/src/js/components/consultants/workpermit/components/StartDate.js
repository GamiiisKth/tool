/**
 * Created by se90514 on 2017-06-27.
 */
import React from 'react';


export default ({
                    value,
                    disabled,
                    onChangeStartDate

                }) => (

    <div>
        <label for="startDate">Start date</label>
        <div class="input-group input-group-sm">

            <input id="startDate" type="date" class="form-control " name="startDate"
                   value={value} disabled={disabled} onChange={onChangeStartDate}/>
            <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
        </div>
    </div>
);
