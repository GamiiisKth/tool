/**
 * Created by se90514 on 2017-06-27.
 */
import React from 'react';


export default  ({
                    value,
                    disabled,
                    onChangeClientRequestedDate

                }) => (

    <div>
        <label for="clientRequestedDate">Client requested date</label>
        <div class="input-group input-group-sm">

            <input id="clientRequestedDate" type="date" class="form-control " name="clientRequestedDate"
                   value={value} disabled={disabled} onChange={onChangeClientRequestedDate}/>
            <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
        </div>
    </div>
);