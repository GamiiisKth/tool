/**
 * Created by se90514 on 2017-06-20.
 */

import React from 'react';
import {render} from 'react-dom';
import {fromJS} from 'immutable';
import OnBoardComponentsCollection from './OnBoardComponentsCollection';

import {mockRfs} from './test/Api';

export class OnOffBoard extends React.Component {

    constructor() {
        super();

    }

    state = {
        //OnBoarding
        data: fromJS({

            ndaSignedDate: {},
            ndaSendToClient: {},
            onBoardingCompletionDate: {},
            typeOfWorkStation: {},
            typeOfPeripheralEquipment: {},
            inductionAttendedDate: {},
            securityTrainingCompletedDate: {},

            //ofBoarding
            earlyRollOffDate: {},
            earlyRollOffNotificationDate: {},
            actualEndDate: {},
            offBoardingCompletionDate: {},
            typeOfSeparation: {},
            earlyRollOffInitiatedBy: {},
            earlyRollOffReason: {},
            removalOfClientDataConfirmed: {},
        })
    };


    // Getter for "Immutable.js" state data...
    get data() {

        return this.state.data;
    }


    // Setter for "Immutable.js" state data...
    set data(data) {
        this.setState({data});
    }

    // When component has been rendered, "componentDidMount()"
    // is called. This is where we should perform asynchronous
    // behavior that will change the state of the component.
    // In this case, we're fetching a list of users from
    // the mock API.
    componentDidMount() {
        this.job = mockRfs();
        this.job.then(
            (result) => {
                // Populate the "users" state, but also
                // make sure the "error" and "loading"
                // states are cleared.
                this.data = this.data
                    .set('ndaSignedDate', fromJS(result. ndaSignedDate))
                    .set('ndaSendToClient', fromJS(result.ndaSendToClient))
                    .set('onBoardingCompletionDate', fromJS(result.onBoardingCompletionDate))
                    .set('typeOfWorkStation', fromJS(result.typeOfWorkStation))
                    .set('typeOfPeripheralEquipment', fromJS(result.typeOfPeripheralEquipment))
                    .set('inductionAttendedDate', fromJS(result.inductionAttendedDate))
                    .set('securityTrainingCompletedDate', fromJS(result.securityTrainingCompletedDate))
                    .set('earlyRollOffDate', fromJS(result.earlyRollOffDate))
                    .set('earlyRollOffNotificationDate', fromJS(result.earlyRollOffNotificationDate))
                    .set('actualEndDate', fromJS(result.actualEndDate))
                    .set('offBoardingCompletionDate', fromJS(result.offBoardingCompletionDate))
                    .set('typeOfSeparation', fromJS(result.typeOfSeparation))
                    .set('earlyRollOffInitiatedBy', fromJS(result.earlyRollOffInitiatedBy))
                    .set('earlyRollOffReason', fromJS(result.earlyRollOffReason))
                    .set('removalOfClientDataConfirmed', fromJS(result.removalOfClientDataConfirmed))
                    .set('comments', fromJS(result.comments));
            },
            (error) => {
                // When an error occurs, we want to clear
                // the "loading" state and set the "error"
                // state.

                console.log('error');
            }
        );
    }

    // save the api data to skipp the get the data from api any time the page has been reloaded
   /* componentWillUnmount() {
        this.job.cancel();
    }
*/
    render() {
        return (
            <OnBoardComponentsCollection {...this.data.toJS()}/>
        )
    }

}

export let OnOffBoardInstance= new OnOffBoard();

