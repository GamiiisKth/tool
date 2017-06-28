/**
 * Created by se90514 on 2017-06-27.
 */
import React from 'react';


export default ({
                    value,
                    disabled,
                    onChangeSecurityTrainingCompletedDate

                }) => (

    <div>
        <label for="securityTrainingCompletedDate">Security training completed date</label>
        <div class="input-group input-group-sm">

            <input id="securityTrainingCompletedDate" type="date" class="form-control " name="securityTrainingCompletedDate"
                   value={value} disabled={disabled} onChange={onChangeSecurityTrainingCompletedDate}/>
            <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
        </div>
    </div>
);
