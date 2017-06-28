/**
 * Created by se90514 on 2017-06-27.
 */
import React from 'react';


export default ({
                    value,
                    disabled,
                    onChangeFiledDate

                }) => (

    <div>
        <label for="filedDate<">Filed date</label>
        <div class="input-group input-group-sm">

            <input id="filedDate" type="date" class="form-control " name="filedDate"
                   value={value} disabled={disabled} onChange={onChangeFiledDate}/>
            <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
        </div>
    </div>
);
