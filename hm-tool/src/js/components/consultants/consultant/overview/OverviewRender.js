import React from "react";
import Select from 'react-select';
import {fromJS} from 'immutable';

import 'react-select/dist/react-select.css';

export default class OverviewRender extends React.Component {

    state = {
            band: fromJS({
            bandOptions: [
                {value: '6A', label: '6A'},
                {value: '6B', label: '6B'},
                {value: '6C', label: '6C'},
                {value: '7A', label: '7A'},
                {value: '7B', label: '7B'},
                {value: '7C', label: '7C'},

            ],
            bandValue: null,

        }),
        division: fromJS({
            divisionOptions: [
                {value: '6A', label: '6A'},
                {value: '6B', label: '6B'},
                {value: '6C', label: '6C'},
                {value: '7A', label: '7A'},
                {value: '7B', label: '7B'},
                {value: '7C', label: '7C'},

            ],
            divisionValue: null,
        }),
        fulFillment: fromJS({
            fulFillmentOptions: [
                {value: 'Hiring', label: 'hiring'},
                {value: 'SSP', label: 'ssp'},
                {value: 'Mobilization', label: 'mobilization'},
                {value: 'Internal RollOff', label: 'internalRollOff'},
                {value: 'Out Rotation', label: 'outRotation'},
                {value: 'Graduate Hire', label: 'graduateHire'},
                {value: 'N/A', label: 'NA'},
                {value: 'Not known', label: 'notKnown'},

            ],
            fulFillmentValue: null

        })

    };
    // If this method returns false, the component
    // will not render. Since we're using an Immutable.js
    // data structure, we simply need to check for equality.
    // If "state {band, division, fulFillmnet}" is the same, then there's no need to
    // render because nothing has changed since the last
    // render.
    shouldComponentUpdate(props, state) {
        return this.state !== state;
    }


    get band() {
        return this.state.band;
    }

    set band(band) {
        this.setState({band});
    }

    get division() {
        return this.state.division;
    }

    set division(division) {
        return this.setState({division});
    }

    get fulFillment() {
        return this.state.fulFillment;
    }

    set fulFillment(fulFillment) {
        return this.setState({fulFillment});
    }


    onChangeDivision = (e) => {
        this.division = this.division.set('divisionValue', e);
    };

    onChangeBand = (e) => {
        this.band = this.band.set('bandValue', e);
    };

    onChangeFulFillment = (e) => {
        this.fulFillment = this.fulFillment.set('fulFillmentValue', e);
    };

    render() {

        const {bandOptions, bandValue,} = this.band.toJS();
        const {divisionOptions, divisionValue} = this.division.toJS();
        const {fulFillmentOptions, fulFillmentValue} = this.fulFillment.toJS();

        return (

            <div class="modal-body row">
                {/* [ \ ]*/}
                <div class="col-md-6 ">


                    <div class="col-md-7">

                        &nbsp;
                        <div class="input-group input-group-sm">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                            <input id="employeeNumber" type="text" class="form-control " name="employeeNumber"
                                   placeholder="Employee number"/>
                        </div>
                        &nbsp;

                        <div class="input-group input-group-sm">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                            <input id="employeeName" type="text" class="form-control " name="employeeName"
                                   placeholder="Employee Name"/>
                        </div>
                        &nbsp;

                        <div class="input-group input-group-sm">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
                            <input id="email" type="text" class="form-control " name="email" placeholder="Email"/>
                        </div>
                        &nbsp;


                        <div class="input-group input-group-sm">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-usd"></i></span>
                            <input id="offShoreCostRate" type="text" class="form-control " name="offShoreCostRate"
                                   placeholder="Offshore Cost Rate"/>
                        </div>
                        &nbsp;

                        <Select
                            placeholder="Band"
                            onChange={this.onChangeBand.bind(this)}
                            options={bandOptions}
                            simpleValue
                            value={bandValue}/>&nbsp;

                        <Select
                            placeholder="Division"
                            onChange={this.onChangeDivision.bind(this)}
                            options={divisionOptions}
                            simpleValue
                            value={divisionValue}/>&nbsp;


                        {/*the side left form*/}

                    </div>
                </div>
                {/*the right side form*/}
                <div class="col-md-6">
                    <div class="col-md-7">

                        {/*availabilityDate*/}
                        <div>
                            <label for="availabilityDate">Availability Date</label>
                            <div class="input-group input-group-sm">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
                                <input id="availabilityDate" type="date" class="form-control " name="availabilityDate"/>
                            </div>
                        </div>
                        &nbsp;

                        <div class="input-group input-group-sm">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-dashboard"></i></span>
                            <input id="monthOfExperienceAtStart" type="text" class="form-control "
                                   name="monthOfExperienceAtStart"
                                   placeholder="Month of experience at start"/>
                        </div>
                        &nbsp;

                        <div class="input-group input-group-sm">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-dashboard"></i></span>
                            <input id="currentMonthsOfExperience" type="text" class="form-control "
                                   name="currentMonthsOfExperience"
                                   placeholder="Current month of experience"/>
                        </div>

                        <div>
                            <label for="availabilityDate">Locking start</label>
                            <div class="input-group input-group-sm">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
                                <input id="lockingStart" type="date" class="form-control " name="lockingStart"/>
                            </div>
                        </div>

                        <div>
                            <label for="availabilityDate">Locking end</label>
                            <div class="input-group input-group-sm">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
                                <input id="lockingEnd" type="date" class="form-control " name="lockingEnd"/>
                            </div>
                        </div>
                        &nbsp;

                        <Select
                            placeholder="FulFillm Source"
                            onChange={this.onChangeFulFillment.bind(this)}
                            options={fulFillmentOptions}
                            simpleValue
                            value={fulFillmentValue}/>&nbsp;

                    </div>


                </div>


            </div>
        )
    }
}
