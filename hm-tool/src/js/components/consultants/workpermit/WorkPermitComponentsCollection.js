/**
 * Created by se90514 on 2017-06-20.
 */

import React from 'react';

import Category from './components/Category';
import Comment from './components/Comment';
import ClientRequestedDate from './components/ClientRequestedDate';
import DMJustificationDate from "./components/DMJustificationDate";
import EndDate from "./components/EndDate";
import StartDate from "./components/StartDate";
import FiledDate from "./components/FiledDate";
import InitiatedDate from "./components/InitiatedDate";
import UTCardReceivedDate from "./components/UTCardReceivedDate";

export default ({
                    category,
                    startDate,
                    endDate,
                    clientRequestedDate,
                    dmJustificationDate,
                    initiatedDate,
                    filedDate,
                    uTCardReceivedDate,
                    comments,
                }) => (

    <div class="modal-body row">
        {/* left side*/}
        <div class="col-md-6 ">
            <div class="col-md-6">

                {/* id*/}



                <StartDate {...startDate} />&nbsp;

                <EndDate {...endDate}/>&nbsp;

                <ClientRequestedDate{...clientRequestedDate}/>&nbsp;

                <DMJustificationDate {...dmJustificationDate}/>&nbsp;

            </div>
        </div>

        {/*right side*/}
        <div class="col-md-6">
            <div class="col-md-6">

                <Category {...category}/>&nbsp;

                <FiledDate {...filedDate}/>&nbsp;

                <InitiatedDate {...initiatedDate} />&nbsp;

                <UTCardReceivedDate {...uTCardReceivedDate}/>&nbsp;

                <Comment {...comments} />&nbsp;

            </div>

        </div>
    </div>
);

