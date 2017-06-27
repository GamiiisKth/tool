/**
 * Created by se90514 on 2017-06-22.
 */
import React from 'react';


export default ({
                    value,
                    disabled,
                    onPoEndDateChange

                }) => (

    <div>
        <label for="poEndDate">Po end date</label>
        <div class="input-group input-group-sm">

            <input id="poEndDate" type="date" class="form-control " name="poEndDate"
                   value={value} disabled={disabled} onChange={onPoEndDateChange}/>
            <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
        </div>
    </div>
);
