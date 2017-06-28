/**
 * Created by se90514 on 2017-06-27.
 */
import React from 'react';


export default ({
                    value,
                    disabled,
                    onChangeNdaSendToClient

                }) => (

    <div>
        <label for="ndaSendToClient">Nda send to client</label>
        <div class="input-group input-group-sm">

            <input id="ndaSendToClient" type="date" class="form-control " name="ndaSendToClient"
                   value={value} disabled={disabled} onChange={onChangeNdaSendToClient}/>
            <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
        </div>
    </div>
);
