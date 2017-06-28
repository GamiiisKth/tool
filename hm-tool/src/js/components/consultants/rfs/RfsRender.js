/**
 * Created by se90514 on 2017-06-20.
 */

import React from 'react';
import {render} from 'react-dom';
import {fromJS} from 'immutable';
import Rfs from './Rfs';

import {mockRfs} from './test/Api';


export class RfsRender extends React.Component {

    constructor() {
        super();
    }

    state = {
        rfsId: fromJS({}),
        category: fromJS({}),
        rfsCreatedDate: fromJS({}),
        assignedTo: fromJS({}),
        billingInSek: fromJS({}),
        billingInUsa: fromJS({}),
        rfsStatus: fromJS({}),
        dueDate: fromJS({}),
        poStartDate: fromJS({}),
        poEndDate: fromJS({}),
        onSiteStartDate: fromJS({}),
        onSiteEndDate: fromJS({}),
        lastWorkingDate: fromJS({}),
        newRole: fromJS({}),
        newLevel: fromJS({}),
        comments: fromJS({}),
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
                this.category = this.category.set('category', fromJS(result.category));
                this.rfsId = this.rfsId.set('rfsId', fromJS(result.rfsId));
                this.rfsCreatedDate = this.rfsCreatedDate.set('rfsCreatedDate', fromJS(result.rfsCreatedDate));
                this.assignedTo = this.assignedTo.set('assignedTo',fromJS(result.assignedTo));
                this.billingInSek = this.billingInSek.set('billingInSek',fromJS(result.billingInSek));
                this.billingInUsa = this.billingInUsa.set('billingInUsa',fromJS(result.billingInUsa));
                this.rfsStatus = this.rfsStatus.set('rfsStatus',fromJS(result.rfsStatus));
                this.dueDate = this.dueDate.set('dueDate',fromJS(result.dueDate));
                this.poStartDate = this.poStartDate.set('poStartDate',fromJS(result.poStartDate));
                this.poEndDate = this.poEndDate.set('poEndDate',fromJS(result.poEndDate));
                this.onSiteStartDate = this.onSiteStartDate.set('onSiteStartDate',fromJS(result.onSiteStartDate));
                this.onSiteEndDate = this.onSiteEndDate.set('onSiteEndDate',fromJS(result.onSiteEndDate));
                this.lastWorkingDate = this.lastWorkingDate.set('lastWorkingDate',fromJS(result.lastWorkingDate));
                this.newRole = this.newRole.set('newRole',fromJS(result.newRole));
                this.newLevel = this.newLevel.set('newLevel',fromJS(result.newLevel));
                this.comments = this.comments.set('comments',fromJS(result.comments));

            },

            (error) => {
                // When an error occurs, we want to clear
                // the "loading" state and set the "error"
                // state.

                console.log('error');
            }
        );
    }
    render() {
        return (
            <Rfs {...this.rfsId.toJS()} {...this.category.toJS()}
                 {...this.rfsCreatedDate.toJS() }{...this.category.toJS() }

            />
        )
    }


    // Getter for "Immutable.js" state data...
    get rfsId() {
        return this.state.rfsId;
    }

    // Setter for "Immutable.js" state data...
    set rfsId(rfsId) {
        this.setState({rfsId});
    }

    get category() {
        return this.state.category;
    }

    set category(category) {
        this.setState({category});
    }

    get rfsCreatedDate() {
        return this.state.rfsCreatedDate;
    }

    set rfsCreatedDate(rfsCreatedDate) {
        this.setState({rfsCreatedDate});
    }

    get assignedTo() {
        return this.state.assignedTo;
    }

    set assignedTo(assignedTo) {
        this.setState({assignedTo});
    }

    get billingInSek() {
        return this.state.billingInSek;
    }

    set billingInSek(billingInSek) {
        this.setState({billingInSek});
    }

    get billingInUsa() {
        return this.state.billingInUsa;
    }

    set billingInUsa(billingInUsa) {
        this.setState({billingInUsa});
    }

    get rfsStatus() {
        return this.state.rfsStatus;
    }

    set rfsStatus(rfsStatus) {
        this.setState({rfsStatus});
    }

    get dueDate() {
        return this.state.dueDate;
    }

    set dueDate(dueDate) {
        this.setState({dueDate});
    }

    get poStartDate() {
        return this.state.poStartDate;
    }

    set poStartDate(poStartDate) {
        this.setState({poStartDate});
    }

    get poEndDate() {
        return this.state.poEndDate;
    }

    set poEndDate(poEndDate) {
        this.setState({poEndDate});
    }

    get onSiteStartDate() {
        return this.state.onSiteStartDate;
    }

    set onSiteStartDate(onSiteStartDate) {
        this.setState({onSiteStartDate});
    }

    get onSiteEndDate() {
        return this.state.onSiteEndDate;
    }

    set onSiteEndDate(onSiteEndDate) {
        this.setState({onSiteEndDate});
    }

    get lastWorkingDate() {
        return this.state.lastWorkingDate;
    }

    set lastWorkingDate(lastWorkingDate) {
        this.setState({lastWorkingDate});
    }

    get newRole() {
        return this.state.newRole;
    }

    set newRole(newRole) {
        this.setState({newRole});
    }

    get newLevel() {
        return this.state.newLevel;
    }

    set newLevel(newLevel) {
        this.setState({newLevel});
    }

    get comments() {
        return this.state.comments;
    }

    set comments(comments) {
        this.setState({comments});
    }

}



export let rfsRenderInstance = new RfsRender();

