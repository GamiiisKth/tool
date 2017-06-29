/**
 * Created by se90514 on 2017-06-20.
 */

import React from 'react';
import {render} from 'react-dom';
import {fromJS} from 'immutable';
import Rfs from './Rfs';

import {mockRfs} from './test/Api';


export  class RfsRender extends React.Component {

    constructor() {
        super();

    }

    state = {
        data: fromJS({
            rfsId: {},
            category: {},
            rfsCreatedDate: {},
            assignedTo: {},
            billingInSek: {},
            billingInUsa: {},
            rfsStatus: {},
            dueDate: {},
            poStartDate: {},
            poEndDate: {},
            onSiteStartDate: {},
            onSiteEndDate: {},
            lastWorkingDate: {},
            newRole: {},
            newLevel: {},
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

    onChangeCategoryValue = (e) => {
        this.category=this.category.set('category',e);
    };

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
                    .set('category', fromJS(result.category))
                    .set('rfsId', fromJS(result.rfsId))
                    .set('rfsCreatedDate', fromJS(result.rfsCreatedDate))
                    .set('assignedTo', fromJS(result.assignedTo))
                    .set('billingInSek', fromJS(result.billingInSek))
                    .set('billingInUsa', fromJS(result.billingInUsa))
                    .set('rfsStatus', fromJS(result.rfsStatus))
                    .set('dueDate', fromJS(result.dueDate))
                    .set('poStartDate', fromJS(result.poStartDate))
                    .set('poEndDate', fromJS(result.poEndDate))
                    .set('onSiteStartDate', fromJS(result.onSiteStartDate))
                    .set('onSiteEndDate', fromJS(result.onSiteEndDate))
                    .set('lastWorkingDate', fromJS(result.lastWorkingDate))
                    .set('newRole', fromJS(result.newRole))
                    .set('newLevel', fromJS(result.newLevel))
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
/**    componentWillUnmount() {
        this.job.cancel();
    }
*/
    render() {
        return (
            <Rfs {...this.data.toJS()}/>
        )
    }

}

export let rfsRenderInstance= new RfsRender();

