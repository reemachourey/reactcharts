import React, { Component } from 'react';
import BarChart from './BarChart';
import PieChart from './PieChart';
import PropTypes from 'prop-types';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData,
      chartType: props.chartType
    }
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.chartType !== this.state.chartType) {
      this.setState({chartType: nextProps.chartType})
    }
  }

  render() {
    let chartToBeDisplayed = null;
    switch(this.state.chartType) {
      case 'Bar':
        chartToBeDisplayed = <BarChart chartData={this.state.chartData} />;
        break;
      case 'Pie':
        chartToBeDisplayed = <PieChart chartData={this.state.chartData} />;
        break;
      case 'All':
        chartToBeDisplayed = <div className="all">
                               <BarChart chartData={this.state.chartData} />
                               <PieChart chartData={this.state.chartData} />

                             </div>;
        break;
      default:
        console.log('Something went wrong...');
    }
    return (
      <div className="Chart">
              {chartToBeDisplayed}
        </div>
    );
  }
}

Chart.propTypes={
  chartData: PropTypes.object,
  chartType: PropTypes.string
}
export default Chart;
