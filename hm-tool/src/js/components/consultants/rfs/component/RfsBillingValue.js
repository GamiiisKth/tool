/**
 * Created by se90514 on 2017-06-21.
 */

import React from 'react';

const BillingInSek = ({
                          value,
                          onBillingInSekChange,
                          disabled,
                      }) => (
    <div class="input-group input-group-sm">
        <span class="input-group-addon"><i class="glyphicon glyphicon-gbp"></i></span>
        <input id="billingInSek" type="text" class="form-control " name="billingInSek"
               placeholder="Billing in SEK" value={value} disabled={disabled} onChange={onBillingInSekChange}/>
    </div>
);
const BillingInUsa = ({
                          value,
                          onBillingInUsaChange,
                          disabled,
                      }) => (
    <div class="input-group input-group-sm">
        <span class="input-group-addon"><i class="glyphicon glyphicon-usd"></i></span>
        <input id="billingInSek" type="text" class="form-control " name="billingInSek"
               placeholder="Billing in USA" value={value} disabled={disabled} onChange={onBillingInUsaChange}/>
    </div>
);


export default ({
                    billingInSek,
                    billingInUsa,

                }) => (

    <div>
        <BillingInSek {...billingInSek}/>&nbsp;
        <BillingInUsa  {...billingInUsa}/>
    </div>
);