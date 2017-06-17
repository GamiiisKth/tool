/**
 * Created by se90514 on 2017-06-17.
 */

import {render as renderJSX} from 'react-dom';

export function renderEmail() {

    renderJSX  (

        <div class="modal-body row">
            {/* [ \ ]*/}
            <div class="col-md-6">

                {/* [ change the size \ ]*/}
                <div class="col-md-6">
                    <div class="input-group input-group-sm">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                        <input id="email" type="text" class="form-control " name="email"
                               placeholder="Email"/>
                    </div>

                    <div class="input-group input-group-sm">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                        <input id="email" type="text" class="form-control " name="email"
                               placeholder="Email"/>
                    </div>
                </div>
            </div>

        </div>

    );
}


