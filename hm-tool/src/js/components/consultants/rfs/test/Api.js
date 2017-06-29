/**
 * Created by se90514 on 2017-06-25.
 */


import {rfsRenderInstance} from './../RfsRender';

export function mockRfs(fail) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (fail) {
                reject('epic fail');
            } else {
                resolve({
                    rfsId: {value: 'RITM0122876-0001', disabled: true,},

                    category: {
                        options: [{value: 'New', label: 'New'},
                            {value: 'onSiteNew', label: 'OnSite New'},
                            {value: 'onSiteChange', label: 'onSite change'},
                            {value: 'earlyTermination', label: 'Early termination'},
                            {value: 'backFill', label:'Back Fill'}],
                        value: null,
                    },

                    rfsCreatedDate: {value: '2017-06-01', disabled: false,},
                    assignedTo: {
                        value: null, placeholder: 'Assigned to',
                        options: [
                            {value: 'gabriel radules', label: 'Gabriel Radules'},
                            {value: 'ali yusha', label: 'Ali Yusha',},]
                    },

                    billingInSek: {value: 1200, disabled: true},
                    billingInUsa: {value: 120, disabled: true},

                    rfsStatus: {
                        value: null, placeholder: 'Status',
                        options: [
                            {value: 'waitingForCf', label: 'Waiting for CF',},
                            {value: 'finalized', label: 'Finalized',}]
                    },
                    dueDate: {value: '2017-07-08', disabled: false},
                    poStartDate: {value: '2017-08-13', disabled: false},
                    poEndDate: {value: '2019-04-30', disabled: false},

                    onSiteStartDate: {},
                    lastWorkingDate: {},
                    newRole: {},
                    newLevel: {},
                    comments: {}
                });
            }
        }, 2000);
    });
}

const onChangeData = (value) => {
    rfsRenderInstance.onChangeCategoryValue(value);
};
