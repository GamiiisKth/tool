/**
 * Created by se90514 on 2017-06-28.
 */

import React from 'react';


export default ({
                    value,
                    disabled,
                    onChangeResourceRequestId,
                }) => (
    <div class="input-group input-group-sm">
        <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
        <input id="rrId" type="text" class="form-control" name="rrId"
               placeholder="RR Id" disabled={disabled} value={value} onChange={onChangeResourceRequestId}/>
    </div>

);
