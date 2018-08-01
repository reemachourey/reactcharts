import React, { Component } from 'react';
import './App.css';
import Dropdown from './components/Dropdown';
import Chart from './components/Chart';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      chartData:{},
      chartType: 'Bar', //default to bar chart
      isLoaded: false
    };
     this.handleVisualChange = this.handleVisualChange.bind(this);
  }

  componentDidMount(){
    this.getChartData();
  }

  handleVisualChange(userSelection) {
   //logging for testing
   console.log('testing value in App.js: ', userSelection);
   //updating the state to the current selected visual
   this.setState({chartType: userSelection});
 }

  getChartData(){
    //our ajax call
    this.setState({
      chartData:{
           labels:['Visa','MaterCard','Discover','Store Cards','American Express','RuPay'],
           datasets:[
             {
             label:'Cards',
             data:[38,26,13,11,9,3],
             backgroundColor:[
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)'
              ]
           }
         ]
      },
      isLoaded:true
    });
  }
  render() {
    return (
        <div className="App">
          <div className="ChartArea">
            {this.state.isLoaded ? <Chart chartData={this.state.chartData} chartType={this.state.chartType} /> : <div>Loading...</div>}
          </div>
            <Dropdown onVisualChange={this.handleVisualChange} />
        </div>
      );
  }
}

export default App;
