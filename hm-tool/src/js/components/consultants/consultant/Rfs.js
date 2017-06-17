/**
 * Created by se90514 on 2017-06-13.
 */
import React from "react";

const options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' },
    {
        type: 'group', name: 'group1', items: [
        { value: 'three', label: 'Three' },
        { value: 'four', label: 'Four' }
    ]
    },
    {
        type: 'group', name: 'group2', items: [
        { value: 'five', label: 'Five' },
        { value: 'six', label: 'Six' }
    ]
    }
];
export default class Rfs extends React.Component{


    render(){
        return(
            <div>
                <h4>hej</h4>
            </div>
        )
    }
}
