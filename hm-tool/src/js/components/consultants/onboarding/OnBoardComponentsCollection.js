/**
 * Created by se90514 on 2017-06-20.
 */

/**
 * Created by se90514 on 2017-06-20.
 */

import React from 'react';

import ActualEndDate from './component/ActualEndDate';
import EarlyRollOffInitiatedBy from './component/EarlyRollOffInitiatedBy';
import EarlyRollOffNotificationDate from "./component/EarlyRollOffNotificationDate";
import EarlyRollOffReason from "./component/EarlyRollOffReason";
import EarlyRollOffDate from "./component/EarlyRollOffDate";
import InductionAttendedDate from "./component/InductionAttendedDate";
import OffBoardingCompletionDate from "./component/OffBoardingCompletionDate";
import OnBoardingCompletionDate from "./component/OnBoardingCompletionDate";
import RemovalOfClientDataConfirmed from "./component/RemovalOfClientDataConfirmed";
import SecurityTrainingCompletedDate from "./component/SecurityTrainingCompletedDate";
import TypeOfPeripheralEquipment from "./component/TypeOfPeripheralEquipment";
import TypeOfSeparation from "./component/TypeOfSeparation";
import TypeOfWorkstation from "./component/TypeOfWorkstation";
import NDASentToClient from "./component/NDASentToClient";
import NdaSignedDate from './component/NdaSignedDate';

export default ({
                    ndaSignedDate,
                    ndaSendToClient,
                    onBoardingCompletionDate,
                    typeOfWorkStation,
                    typeOfPeripheralEquipment,
                    inductionAttendedDate,
                    securityTrainingCompletedDate,

                    //ofBoarding
                    earlyRollOffDate,
                    earlyRollOffNotificationDate,
                    actualEndDate,
                    offBoardingCompletionDate,
                    typeOfSeparation,
                    earlyRollOffInitiatedBy,
                    earlyRollOffReason,
                    removalOfClientDataConfirmed,


                }) => (

    <div class="modal-body row">
        {/* left side*/}
        <div class="col-md-6 ">
            <div class="col-md-6">

                {/* id*/}

                <NdaSignedDate {...ndaSignedDate}/>&nbsp;

                <NDASentToClient {...ndaSendToClient} onChange={(e)=> console.log(e)}/>&nbsp;

                <OnBoardingCompletionDate {...onBoardingCompletionDate}/>&nbsp;

                <EarlyRollOffDate {...earlyRollOffDate} />&nbsp;

                <EarlyRollOffNotificationDate {...earlyRollOffNotificationDate}/>&nbsp;

                <ActualEndDate {...actualEndDate}/>&nbsp;

                <OffBoardingCompletionDate {...offBoardingCompletionDate}/>&nbsp;


            </div>
        </div>

        {/*right side*/}
        <div class="col-md-6">
            <div class="col-md-6">

                <InductionAttendedDate {...inductionAttendedDate}/>&nbsp;

                <SecurityTrainingCompletedDate {...securityTrainingCompletedDate}/>&nbsp;

                <TypeOfWorkstation {...typeOfWorkStation}/>&nbsp;

                <TypeOfPeripheralEquipment {...typeOfPeripheralEquipment}/>&nbsp;

                <TypeOfSeparation {...typeOfSeparation} />&nbsp;

                <EarlyRollOffInitiatedBy {...earlyRollOffInitiatedBy}/>&nbsp;

                <EarlyRollOffReason {...earlyRollOffReason}/>&nbsp;

                <RemovalOfClientDataConfirmed {...removalOfClientDataConfirmed}/>&nbsp;



            </div>

        </div>
    </div>
);

