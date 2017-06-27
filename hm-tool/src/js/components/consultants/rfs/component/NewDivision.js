import React from 'react';


export default ({

                    value,
                    disabled,
                    onNewDivisionChange,
                }) => (
    <div class="input-group input-group-sm">
        <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
        <input id="newDivision" type="text" class="form-control" name="newDivision"
               placeholder="New division" disabled={disabled} value={value} onChange={onNewDivisionChange} />
    </div>

);