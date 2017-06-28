/**
 * Created by se90514 on 2017-06-27.
 */
import React from 'react';


export default ({
                    value,
                    disabled,
                    onChangeOnBoardingCompletionDate

                }) => (

    <div>
        <label for="onBoardingCompletionDate">OnBoarding Completion date</label>
        <div class="input-group input-group-sm">

            <input id="onBoardingCompletionDate" type="date" class="form-control " name="onBoardingCompletionDate"
                   value={value} disabled={disabled} onChange={onChangeOnBoardingCompletionDate}/>
            <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
        </div>
    </div>
);
