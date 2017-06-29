/**
 * Created by se90514 on 2017-06-25.
 */



export function mockRr(fail) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (fail) {
                reject('epic fail');
            } else {
                resolve({
                    resourcesRequestId: {value: '1', disabled: true,},
                    ritm: {value: 'RITM0122876-0001', disabled: true,},

                    title: {value: 'Senior Tester (Controlling)', disabled: true,},

                    type: {
                        options: [
                            {value: 'internal', label: 'Internal'},
                            {value: 'governance', label: 'Governance'},
                            {value: 'client', label: 'Client'}],
                        value: null,
                        placeholder: 'Type'
                    },

                    division: {
                        options: [
                            {value: 'bopo', label: 'BOPO'},
                            {value: 'bsf', label: 'BSF'},
                            {value: 'itLogistic', label: 'IT Logistic'}],
                        value: null,
                        placeholder: 'Division'
                    },

                    role: {
                        options: [
                            {value: 'developer', label: 'Developer'},
                            {value: 'developerNiche', label: 'Developer Niche'},
                            {value: 'tester', label: 'Tester'},
                            {value: 'testerNiche', label: 'Tester Niche'},
                            {value: 'testerLeader', label: 'Test Leader'},
                            ],
                        value: null,
                        placeholder: 'Role'
                    },

                    primarySkills: {
                        options: [
                            {value: 'test', label: 'test'},
                            {value: 'java', label: 'Java'},
                            {value: 'c#', label: 'c#'},
                            {value: 'sap', label: 'SAP'},
                            {value: 'sapDeveloper', label: 'SAP Developer'},
                        ],
                        value: null,
                        placeholder: 'Primary Skills'
                    },

                    hmLevel: {
                        options: [
                            {value: '0', label: '0 (0-23 month)'},
                            {value: '1', label: '1 (24-59 month)'},
                            {value: '2', label: '2 (60-119 month)'},
                            {value: '3', label: '3 (120+ month)'},
                            {value: 'nonDefined', label: 'Non Defined'},
                        ],
                        value: null,
                        placeholder: 'H&M Level'
                    },

                    ibmBand: {
                        options: [
                                {value: '6A', label: '6A'},
                                {value: '6B', label: '6B'},
                                {value: '6C', label: '6C'},
                                {value: '7A', label: '7A'},
                                {value: '7B', label: '7B'},
                                {value: '7C', label: '7C'},
                        ],
                        value: null,
                        placeholder: 'IBM Band'
                    },

                    onSiteLocation: {
                        options: [
                                {value: 'stockholm', label: 'Stockholm'},
                                {value: 'borås', label: 'Borås'},
                                {value: 'other', label: 'Other'},
                        ],
                        value: null,
                        placeholder: 'OnSite Location'
                    } ,

                    offShoreLocation: {
                        options: [
                                {value: 'bangalore', label: 'Bangalore'},
                                {value: 'other', label: 'Other'},
                        ],
                        value: null,
                        placeholder: 'OffShore Location'
                    },



                    requestDate: {value: '2015-08-13', disabled: true,},
                    expectedStartDate: {value: '2015-08-13', disabled: true,},
                    expectedEndDate: {value: '2015-08-13', disabled: true,},
                    onSiteStartDate: {value: '2015-08-13', disabled: true,},
                    onSiteEndDate: {value: '2015-08-13', disabled: true,},


                    //TODO ask kristina about the content
                    contract:{},
                });
            }
        }, 2000);
    });
}
