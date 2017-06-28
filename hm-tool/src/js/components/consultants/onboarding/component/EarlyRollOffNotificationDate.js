/**
 * Created by se90514 on 2017-06-27.
 */
import React from 'react';


export default ({
                    value,
                    disabled,
                    onChangeEarlyRollOffNotificationDate

                }) => (

    <div>
        <label for="earlyRollOffNotificationDate">Early roll off notification date</label>
        <div class="input-group input-group-sm">

            <input id="earlyRollOffNotificationDate" type="date" class="form-control " name="earlyRollOffNotificationDate"
                   value={value} disabled={disabled} onChange={onChangeEarlyRollOffNotificationDate}/>
            <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
        </div>
    </div>
);
