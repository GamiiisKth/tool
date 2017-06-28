/**
 * Created by se90514 on 2017-06-27.
 */
import React from 'react';


export default ({
                    value,
                    disabled,
                    onChangeOffBoardingCompletionDate

                }) => (

    <div>
        <label for="offBoardingCompletionDate">OffBoarding Completion date</label>
        <div class="input-group input-group-sm">

            <input id="offBoardingCompletionDate" type="date" class="form-control " name="offBoardingCompletionDate"
                   value={value} disabled={disabled} onChange={onChangeOffBoardingCompletionDate}/>
            <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
        </div>
    </div>
);
