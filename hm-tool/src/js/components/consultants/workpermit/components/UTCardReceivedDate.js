/**
 * Created by se90514 on 2017-06-27.
 */
import React from 'react';


export default ({
                    value,
                    disabled,
                    onChangeUTCardReceivedDate

                }) => (

    <div>
        <label for="utCardReceivedDate">UT card received date</label>
        <div class="input-group input-group-sm">

            <input id="utCardReceivedDate" type="date" class="form-control " name="utCardReceivedDate"
                   value={value} disabled={disabled} onChange={onChangeUTCardReceivedDate}/>
            <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
        </div>
    </div>
);
