/**
 * Created by se90514 on 2017-06-20.
 */

import React from 'react';

import Contract from './components/Contract';
import Division from './components/Division';
import ExpectedEndDate from './components/ExpectedEndDate';
import ExpectedStartDate from "./components/ExpectedStartDate";
import HmLevel from "./components/HmLevel";
import IbmBand from "./components/IbmBand";
import OffShoreLocation from "./components/OffShoreLocation";
import OnSiteLocation from "./components/OnSiteLocation";
import OnSiteEndDate from "./components/OnSiteEndDate";
import OnSiteStartDate from "./components/OnSiteStartDate";
import ResourceRequestId from "./components/ResourceRequestId";
import RequestDate from "./components/RequestDate";
import Ritm from "./components/Ritm";
import Role from "./components/Role";
import ResourcesRequestTitle from "./components/ResourcesRequestTitle";
import Type from "./components/Type";
import PrimarySkills from "./components/PrimarySkills";

export default ({
                    resourcesRequestId,
                    ritm,
                    title,
                    type,
                    division,
                    role,
                    primarySkills,
                    hmLevel,
                    ibmBand,
                    requestDate,
                    contract,
                    expectedStartDate,
                    expectedEndDate,
                    onSiteStartDate,
                    onSiteEndDate,
                    offShoreLocation,
                    onSiteLocation,
                }) => (

    <div class="modal-body row">
        {/* left side*/}
        <div class="col-md-6 ">
            <div class="col-md-6">

                {/* id*/}

                <ResourceRequestId {...resourcesRequestId}/>&nbsp;

                <RequestDate {...requestDate} />&nbsp;

                <Type {...type}/>&nbsp;

                <Division{...division}/>&nbsp;

                <Role {...role}/>&nbsp;

                <PrimarySkills {...primarySkills}/>&nbsp;

                <HmLevel {...hmLevel} />&nbsp;

                <IbmBand {...ibmBand}/>&nbsp;

            </div>
        </div>

        {/*right side*/}
        <div class="col-md-6">
            <div class="col-md-6">

                <ResourcesRequestTitle {...title} />&nbsp;

                {/*waiting for the content data */}
                <Contract {...contract}/>&nbsp;

                <ExpectedStartDate {...expectedStartDate}/>&nbsp;

                <ExpectedEndDate {...expectedEndDate}/>&nbsp;

                <OnSiteStartDate {...onSiteStartDate}/>&nbsp;

                <OnSiteEndDate {...onSiteEndDate}/>&nbsp;

                <OffShoreLocation {...offShoreLocation}/>&nbsp;

                <OnSiteLocation {...onSiteLocation}/>&nbsp;

            </div>

        </div>
    </div>
);

