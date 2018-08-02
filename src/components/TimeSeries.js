import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import PropTypes from 'prop-types';

class LineExample extends(Component) {

    componentWillMount() {
        let json = getJSONObject();
    }
    render() {
        // console.log ("Labels: " + labelArray);
        return (<div>
            <h2>Line Example</h2>
            <Line data={data} options={options}/>
        </div>);
    }
};

export default TimeSeries;
