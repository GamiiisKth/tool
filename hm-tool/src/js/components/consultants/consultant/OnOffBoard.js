import React from 'react';
import Select from 'react-select';

import 'react-select/dist/react-select.css';
const a=[1,2,3,4,5];
export default class OnOffBoard extends React.Component {

    onChange(e){
        console.log(e);
    }
    render() {
        return (
            <Select
                placeholder="hello"
                onChange={this.onChange.bind(this)}
                options={this.a}
                simpleValue
                value="1"
            />
        )
    }
}