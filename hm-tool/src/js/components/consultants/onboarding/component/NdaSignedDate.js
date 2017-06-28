/**
 * Created by se90514 on 2017-06-27.
 */
import React from 'react';


export default ({
                    value,
                    disabled,
                    onChangeNdaSignedDate

                }) => (

    <div>
        <label for="ndaSignedDate">Nda signed date</label>
        <div class="input-group input-group-sm">

            <input id="ndaSignedDate" type="date" class="form-control " name="ndaSignedDate"
                   value={value} disabled={disabled} onChange={onChangeNdaSignedDate}/>
            <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
        </div>
    </div>
);
