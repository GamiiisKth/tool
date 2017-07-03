/**
 * Created by se90514 on 2017-06-29.
 */

import React from 'react';
import {render} from 'react-dom';

require("./design.css");

import {fromJS} from 'immutable';

export  default class Employee extends React.Component {

    state = {
        data: fromJS({
            employeeName: 'Prathibha Mahadevappa',
            employeeDivision: 'BOPO',
            employeeStatus: 'Active',
        })
    };


    get data() {
        return this.state.data;
    }

    set data(data) {
        this.setState({data});
    }

    render() {
        const {employeeName} = this.data.toJS();
        const {employeeDivision} = this.data.toJS();
        const {employeeStatus} = this.data.toJS();

        return (

            <form class="form-horizontal" role="form" id="wrapper">

                <div class="form-group row">
                    <label for="inputName" class="col-sm-1 control-label">Name </label>
                    <div class="col-sm-3"><input type="text" class="form-control " id="input" placeholder="Name"
                                                 value={employeeName}  disabled={true}/>
                    </div>

                    <label for="inputKey" class="col-sm-1 control-label">Division </label>
                    <div class="col-sm-1"><input  type="text" class="form-control" id="input" placeholder="Key"
                                                 value={employeeDivision} disabled={true}/></div>

                    <label for="inputValue" class="col-sm-1 control-label">Status</label>
                    <div class="col-sm-3">
                        <input type="text" class="form-control" id="input" placeholder="Value" value={employeeStatus} disabled={true}/></div>
                </div>
            </form>

        )
    }

}