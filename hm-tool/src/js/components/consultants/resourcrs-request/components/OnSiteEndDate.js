/**
 * Created by se90514 on 2017-06-27.
 */
import React from 'react';


export default ({
                    value,
                    disabled,
                    onChangeOnSiteEndDate

                }) => (

    <div>
        <label for="OnSiteEndDate">OnSite end date</label>
        <div class="input-group input-group-sm">

            <input id="OnSiteEndDate" type="date" class="form-control " name="OnSiteEndDate"
                   value={value} disabled={disabled} onChange={onChangeOnSiteEndDate}/>
            <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
        </div>
    </div>
);
