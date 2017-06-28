/**
 * Created by se90514 on 2017-06-20.
 */

import React from 'react';
import {render} from 'react-dom';
import {fromJS} from 'immutable';
import ResourceRequestComponentsCollection from './ResourceRequestComponentsCollection';

//import {mockRfs} from './test/Api';

export class ResourcesRequest extends React.Component {

    constructor() {
        super();

    }

    state = {
        data: fromJS({
            resourcesRequestId: {},
            ritm: {},
            title: {},
            type: {},
            division: {},
            role: {},
            primarySkills: {},
            hmLevel: {},
            ibmBand: {},
            requestDate: {},
            contract: {},
            expectedStartDate: {},
            expectedEndDate: {},
            onSiteStartDate: {},
            onSiteEndDate: {},
            offShoreLocation: {},
            onSiteLocation: {},
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
                    .set('resourcesRequestId', fromJS(result.resourcesRequestId))
                    .set('ritm', fromJS(result.ritm))
                    .set('title', fromJS(result.title))
                    .set('division', fromJS(result.division))
                    .set('role', fromJS(result.role))
                    .set('primarySkills', fromJS(result.primarySkills))
                    .set('hmLevel', fromJS(result.hmLevel))
                    .set('ibmBand', fromJS(result.ibmBand))
                    .set('contract', fromJS(result.contract))
                    .set('expectedStartDate', fromJS(result.expectedStartDate))
                    .set('expectedEndDate', fromJS(result.expectedEndDate))
                    .set('onSiteStartDate', fromJS(result.onSiteStartDate))
                    .set('onSiteEndDate', fromJS(result.onSiteEndDate))
                    .set('offShoreLocation', fromJS(result.offShoreLocation))
                    .set('onSiteLocation', fromJS(result.onSiteLocation))
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
            <ResourceRequestComponentsCollection {...this.data.toJS()}/>
        )
    }

}

export let resourcesRequestInstance = new ResourcesRequest();

