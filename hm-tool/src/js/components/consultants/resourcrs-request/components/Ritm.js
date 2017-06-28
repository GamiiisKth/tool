/**
 * Created by se90514 on 2017-06-28.
 */

import React from 'react';


export default ({
                    value,
                    disabled,
                    onChangeRitm,
                }) => (
    <div class="input-group input-group-sm">
        <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
        <input id="employeeId" type="text" class="form-control" name="employeeId"
               placeholder="RFS Id" disabled={disabled} value={value} onChange={onChangeRitm}/>
    </div>

);
