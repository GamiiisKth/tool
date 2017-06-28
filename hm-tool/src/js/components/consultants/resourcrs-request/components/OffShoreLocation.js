/**
 * Created by se90514 on 2017-06-28.
 */

import React from 'react';


export default ({
                    value,
                    disabled,
                    onChangeOffShoreLocation,
                }) => (
    <div class="input-group input-group-sm">
        <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
        <input id="OffShoreLocation" type="text" class="form-control" name="OffShoreLocation"
               placeholder="OffShore Location" disabled={disabled} value={value} onChange={onChangeOffShoreLocation}/>
    </div>

);
