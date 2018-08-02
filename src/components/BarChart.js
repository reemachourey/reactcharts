import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import PropTypes from 'prop-types';

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
      width={100} height={200}
      options={{
        tooltips: {
                enabled: true,
                mode: 'single',
                callbacks: {
                    label: function(tooltipItems, data) {
                        return tooltipItems.yLabel + ' %';
                    }
                }
            },
        scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Percentange'
          }
        }]
      },
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

BarChart.propTypes = {
  chartData: PropTypes.object,
  displayTitle: PropTypes.bool,
  displayLegend: PropTypes.bool,
  legendPosition: PropTypes.string
};

export default BarChart;
