import React from 'react';


export default ({

                    value,
                    disabled,
                    onLastWorkingDateChange,
                }) => (
    <div class="input-group input-group-sm">
        <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
        <input id="lastWorkingDate" type="text" class="form-control" name="lastWorkingDate"
               placeholder="Last working date" disabled={disabled} value={value} onChange={onLastWorkingDateChange} />
    </div>

);