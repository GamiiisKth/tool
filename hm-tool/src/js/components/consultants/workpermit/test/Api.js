/**
 * Created by se90514 on 2017-06-25.
 */



export function mockRfs(fail) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (fail) {
                reject('epic fail');
            } else {
                resolve({
                    ndaSignedDate: {value: '2015-08-13', disabled: true,},
                    ndaSendToClient: {value: '2015-08-14', disabled: true,},
                    onBoardingCompletionDate: {value: '2015-08-13', disabled: true,},
                    earlyRollOffDate: {value: '2017-08-13', disabled: true,},
                    earlyRollOffNotificationDate: {value: '2017-07-13', disabled: true,},
                    actualEndDate: {value: '2017-08-20', disabled: true,},
                    offBoardingCompletionDate: {value: '2017-08-13', disabled: true,},

                    inductionAttendedDate: {value: '2015-08-10', disabled: true,},
                    securityTrainingCompletedDate: {value: '2015-08-13', disabled: true,},

                    typeOfWorkStation: {
                        options: [{value: 'New', label: 'New'},
                            {value: 'onSiteNew', label: 'OnSite New'},
                            {value: 'onSiteChange', label: 'onSite change'},
                            {value: 'earlyTermination', label: 'Early termination'},
                            {value: 'backFill', label: 'Back Fill'}],
                        value: null,
                        placeholder:'Type of workstation'
                    },

                    typeOfPeripheralEquipment: {
                        options: [{value: 'New', label: 'New'},
                            {value: 'onSiteNew', label: 'OnSite New'},
                            {value: 'onSiteChange', label: 'onSite change'},
                            {value: 'earlyTermination', label: 'Early termination'},
                            {value: 'backFill', label: 'Back Fill'}],
                        value: null,
                        placeholder:'Type of peripheral equipment'
                    },

                    typeOfSeparation: {
                        options: [{value: 'New', label: 'New'},
                            {value: 'onSiteNew', label: 'OnSite New'},
                            {value: 'onSiteChange', label: 'onSite change'},
                            {value: 'earlyTermination', label: 'Early termination'},
                            {value: 'backFill', label: 'Back Fill'}],
                        value: null,
                        placeholder: 'Type of separation'
                    },
                    earlyRollOffInitiatedBy: {
                        options: [{value: 'New', label: 'New'},
                            {value: 'onSiteNew', label: 'OnSite New'},
                            {value: 'onSiteChange', label: 'onSite change'},
                            {value: 'earlyTermination', label: 'Early termination'},
                            {value: 'backFill', label: 'Back Fill'}],
                        value: null,
                        placeholder: 'Early roll off initiated  by'
                    },
                    earlyRollOffReason: {
                        options: [{value: 'New', label: 'New'},
                            {value: 'onSiteNew', label: 'OnSite New'},
                            {value: 'onSiteChange', label: 'onSite change'},
                            {value: 'earlyTermination', label: 'Early termination'},
                            {value: 'backFill', label: 'Back Fill'}],
                        value: null,
                        placeholder: 'Early roll off reason'
                    },
                    removalOfClientDataConfirmed: {
                        options: [{value: 'New', label: 'New'},
                            {value: 'onSiteNew', label: 'OnSite New'},
                            {value: 'onSiteChange', label: 'onSite change'},
                            {value: 'earlyTermination', label: 'Early termination'},
                            {value: 'backFill', label: 'Back Fill'}],
                        value: null,
                        placeholder: 'Removal of client data confirmed'
                    },


                });
            }
        }, 2000);
    });
}
