import React from 'react';


export default ({

                    value,
                    disabled,
                    onBackFillChange,
                }) => (
    <div class="input-group input-group-sm">
        <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
        <input id="backFillFor" type="text" class="form-control" name="backFillFor"
               placeholder="Back fill for" disabled={disabled} value={value} onChange={onBackFillChange}/>
    </div>

);