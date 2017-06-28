/**
 * Created by se90514 on 2017-06-27.
 */
import React from 'react';


export default ({
                    value,
                    disabled,
                    onChangeEarlyRollOffDate

                }) => (

    <div>
        <label for="earlyRollOffDate">Early roll off date</label>
        <div class="input-group input-group-sm">

            <input id="earlyRollOffDate" type="date" class="form-control " name="earlyRollOffDate"
                   value={value} disabled={disabled} onChange={onChangeEarlyRollOffDate}/>
            <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
        </div>
    </div>
);
