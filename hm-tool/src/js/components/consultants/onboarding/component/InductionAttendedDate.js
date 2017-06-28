/**
 * Created by se90514 on 2017-06-27.
 */
import React from 'react';


export default ({
                    value,
                    disabled,
                    onChangeInductionAttendedDate

                }) => (

    <div>
        <label for="inductionAttendedDate">Induction attended date</label>
        <div class="input-group input-group-sm">

            <input id="inductionAttendedDate" type="date" class="form-control " name="inductionAttendedDate"
                   value={value} disabled={disabled} onChange={onChangeInductionAttendedDate}/>
            <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
        </div>
    </div>
);
