/**
 * Created by se90514 on 2017-06-20.
 */

import React from 'react';

export default ({
                    value,
                    disabled,
                    onChangeTitle,
                }) => (
    <div class="input-group input-group-sm">
        <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
        <input id="title" type="text" class="form-control" name="title"
               placeholder="Title" disabled={disabled} value={value} onChange={onChangeTitle}/>
    </div>

);
