import React, {Component} from 'react';
import {Pie} from 'react-chartjs-2';
import PropTypes from 'prop-types';

class PieChart extends Component{

  constructor(props){
    super(props);
    this.state={
      chartData:props.chartData,
      chartType: props.chartType
   }
 }

static defaultProps={
  displayTitle:true,
  displayLegend:true,
  legendPosition:'right'
}

render(){

  return(
    <div className="chart">
    <Pie
      data={this.state.chartData}
      width={200} height={200}
      options={{
        maintainAspectRatio:false,
        title:{
          display:true,
          text:'Network Share of General Purpose Cards',
          fontSize:25
        },
        legend:{
          display:this.props.displayLegend,
          position:this.props.legendPosition
        }
      }}
      />
      </div>
    );
  }
}

PieChart.propTypes = {
  chartData: PropTypes.object,
  displayTitle: PropTypes.bool,
  displayLegend: PropTypes.bool,
  legendPosition: PropTypes.string
};

export default PieChart;
