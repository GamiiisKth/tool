/**
 * Created by se90514 on 2017-06-27.
 */
import React from 'react';


export default ({
                    value,
                    disabled,
                    onChangeDMJustificationDate

                }) => (

    <div>
        <label for="dMJustificationDate">DM justification date</label>
        <div class="input-group input-group-sm">

            <input id="dMJustificationDate" type="date" class="form-control " name="dMJustificationDate"
                   value={value} disabled={disabled} onChange={onChangeDMJustificationDate}/>
            <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
        </div>
    </div>
);
