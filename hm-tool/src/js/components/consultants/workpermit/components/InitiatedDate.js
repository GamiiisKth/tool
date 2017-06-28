/**
 * Created by se90514 on 2017-06-27.
 */
import React from 'react';


export default ({
                    value,
                    disabled,
                    onChangeInitiatedDate

                }) => (

    <div>
        <label for="initiatedDate<">Initiated date</label>
        <div class="input-group input-group-sm">

            <input id="initiatedDate" type="date" class="form-control " name="initiatedDate"
                   value={value} disabled={disabled} onChange={onChangeInitiatedDate}/>
            <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
        </div>
    </div>
);
