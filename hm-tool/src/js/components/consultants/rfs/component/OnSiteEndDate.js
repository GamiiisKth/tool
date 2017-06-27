/**
 * Created by se90514 on 2017-06-22.
 */
import React from 'react';


export default ({
                    value,
                    disabled,
                    onOnSiteEndDateChange

                }) => (

    <div>
        <label for="onSiteEndDate">On site end date</label>
        <div class="input-group input-group-sm">

            <input id="onSiteEndDate" type="date" class="form-control " name="onSiteEndDate"
                   value={value} disabled={disabled} onChange={onOnSiteEndDateChange}/>
            <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
        </div>
    </div>
);
