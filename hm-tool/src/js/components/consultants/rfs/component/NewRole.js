


import React from 'react';


export default ({

                    value,
                    disabled,
                    onNewRoleChange,
                }) => (
    <div class="input-group input-group-sm">
        <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
        <input id="newRoll" type="text" class="form-control" name="newRoll"
               placeholder="New roll" disabled={disabled} value={value} onChange={onNewRoleChange} />
    </div>

);