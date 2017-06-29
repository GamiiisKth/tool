/**
 * Created by se90514 on 2017-06-20.
 */

import React from 'react';
import {render} from 'react-dom';
import {fromJS} from 'immutable';
import WorkPermitComponentsCollection from './WorkPermitComponentsCollection';

//import {mockRr} from './test/Api';

export class WorkPermit extends React.Component {

    constructor() {
        super();

    }

    state = {
        data: fromJS({
            category: {},
            startDate: {},
            endDate: {},
            clientRequestedDate: {},
            dmJustificationDate: {},
            initiatedDate: {},
            filedDate: {},
            uTCardReceivedDate: {},
            comments: {},
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
        this.job = mockRr();
        this.job.then(
            (result) => {
                // Populate the "users" state, but also
                // make sure the "error" and "loading"
                // states are cleared.

                this.data = this.data
                    .set('category', fromJS(result.category))
                    .set('startDate', fromJS(result.startDate))
                    .set('endDate', fromJS(result.endDate))
                    .set('clientRequestedDate', fromJS(result.clientRequestedDate))
                    .set('dmJustificationDate', fromJS(result.dmJustificationDate))
                    .set('initiatedDate', fromJS(result.initiatedDate))
                    .set('filedDate', fromJS(result.filedDate))
                    .set('uTCardReceivedDate', fromJS(result.uTCardReceivedDate))
                    .set('comments', fromJS(result.comments))
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
            <WorkPermitComponentsCollection {...this.data.toJS()}/>
        )
    }

}

export let workPermitInstance = new WorkPermit();

