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
      width={300} height={300}
      options={{
        tooltips: {
                enabled: true,
                mode: 'single',
                callbacks: {
        label: function(tooltipItem, data) {
            var indice = tooltipItem.index;
            return  data.labels[indice] +': '+data.datasets[0].data[indice] + '%';
        }
    }
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

PieChart.propTypes = {
  chartData: PropTypes.object,
  displayTitle: PropTypes.bool,
  displayLegend: PropTypes.bool,
  legendPosition: PropTypes.string
};

export default PieChart;
