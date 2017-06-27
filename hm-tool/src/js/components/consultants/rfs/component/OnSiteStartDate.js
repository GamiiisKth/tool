/**
 * Created by se90514 on 2017-06-22.
 */
import React from 'react';


export default ({
                    value,
                    disabled,
                    onOnSiteStartDateChange

                }) => (

    <div>
        <label for="onSiteStartDate">On site start date</label>
        <div class="input-group input-group-sm">

            <input id="onSiteStartDate" type="date" class="form-control " name="onSiteStartDate"
                   value={value} disabled={disabled} onChange={onOnSiteStartDateChange}/>
            <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
        </div>
    </div>
);
