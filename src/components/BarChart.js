import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Bar} from 'react-chartjs-2';

class BarChart extends Component{

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
    <Bar
      data={this.state.chartData}
      options={{
        title:{
          display:true,
          text:'Network Share of Generl Purpose Cards',
          fontSize:25,
          width:400,
          height:400
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

BarChart.propTypes = {
  chartData: PropTypes.object,
  displayTitle: PropTypes.bool,
  displayLegend: PropTypes.bool,
  legendPosition: PropTypes.string
};
export default BarChart;
