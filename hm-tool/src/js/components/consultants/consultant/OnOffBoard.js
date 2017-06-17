import React from 'react';
import Select from 'react-select';

import 'react-select/dist/react-select.css';

export default class OnOffBoard extends React.Component {

    state = {
        options: [
            {value: 'Yes', label: 'Yes'},
            {value: 'No', label: 'No'}
        ],
        value: null,
    };


    onChange(value) {
        this.setState({value});
    }


    render() {
        console.log(this.state);
        return (
            <div class="col-sm-3">
                <Select
                    onChange={this.onChange.bind(this)}
                    options={this.state.options}
                    simpleValue
                    value={this.state.value}
                />
            </div>
        );
    }
};

module.exports = OnOffBoard;
