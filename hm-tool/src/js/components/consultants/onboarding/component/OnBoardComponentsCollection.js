/**
 * Created by se90514 on 2017-06-20.
 */

/**
 * Created by se90514 on 2017-06-20.
 */

import React from 'react';

import RfsCategory from './component/RfsCategory';
import RfsId from './component/RfsId';
import RfsCreatedDate from "./component/RfsCreatedDate";
import RfsAssignedTo from "./component/RfsAssignedTo";
import RfsBillingValue from "./component/RfsBillingValue";
import RfsStatus from "./component/RfsStatus";
import RfsDueDate from "./component/RfsDueDate";
import PoStartDate from "./component/PoStartDate";
import PoEndDate from "./component/PoEndDate";
import OnSiteStartDate from "./component/OnSiteStartDate";
import OnSiteEndDate from "./component/OnSiteEndDate";
import NewRole from "./component/NewRole";
import NewLevel from "./component/NewLevel";
import LastWorkingDate from "./component/LastWorkingDate";
import Comment from './component/comment';

export default ({
                    rfsId,
                    category,
                    rfsCreatedDate,
                    assignedTo,
                    billingInSek,
                    billingInUsa,
                    rfsStatus,
                    dueDate,
                    poStartDate,
                    poEndDate,
                    onSiteStartDate,
                    onSiteEndDate,
                    backFillFor,
                    newDivision,
                    newRole,
                    newLevel,
                    lastWorkingDate,
                    comments,


                }) => (

    <div class="modal-body row">
        {/* left side*/}
        <div class="col-md-6 ">
            <div class="col-md-6">

                {/* id*/}

                <RfsId {...rfsId}/>&nbsp;

                <RfsCategory {...category} onChange={(e)=> console.log(e)}/>&nbsp;

                <RfsAssignedTo {...assignedTo}/>&nbsp;

                <RfsStatus {...rfsStatus} />&nbsp;

                <PoStartDate {...poStartDate}/>

                <PoEndDate {...poEndDate}/>&nbsp;

                <NewRole {...newRole}/>&nbsp;

                <NewLevel {...newLevel} />&nbsp;


            </div>
        </div>

        {/*right side*/}
        <div class="col-md-6">
            <div class="col-md-6">

                <RfsCreatedDate {...rfsCreatedDate}/>&nbsp;

                <RfsBillingValue billingInSek={billingInSek} billingInUsa={billingInUsa}/>&nbsp;

                <RfsDueDate {...dueDate}/>

                <OnSiteStartDate {...onSiteStartDate}/>

                <OnSiteEndDate {...onSiteEndDate} />&nbsp;

                <LastWorkingDate {...lastWorkingDate}/>&nbsp;

                <Comment {...comments}/>

            </div>

        </div>
    </div>
);

