/**
 * Created by se90514 on 2017-06-27.
 */
import React from 'react';


export default ({
                    value,
                    disabled,
                    onChangeRequestDate

                }) => (

    <div>
        <label for="requestDate">Request Date</label>
        <div class="input-group input-group-sm">

            <input id="requestDate" type="date" class="form-control " name="requestDate"
                   value={value} disabled={disabled} onChange={onChangeRequestDate}/>
            <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
        </div>
    </div>
);
