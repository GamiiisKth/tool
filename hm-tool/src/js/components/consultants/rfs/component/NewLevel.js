

import React from 'react';


export default ({

                    value,
                    disabled,
                    onNewLevelChange,
                }) => (
    <div class="input-group input-group-sm">
        <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
        <input id="newLevel" type="text" class="form-control" name="newLevel"
               placeholder="New level" disabled={disabled} value={value} onChange={onNewLevelChange} />
    </div>

);