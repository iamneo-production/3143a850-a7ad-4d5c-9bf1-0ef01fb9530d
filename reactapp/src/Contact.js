import React from 'react';
import './Contact.css';
import CanvasJSReact from '@canvasjs/react-charts';
import { Link } from 'react-router-dom';
import icon from './imgs/c1-removebg-preview.png';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Contact() {

  const options = {
    animationEnabled: true,
          backgroundColor: ' rgba(80, 83, 85, 0.1)',
          height:250,
          width:400,
          color:"white",
    title: {
      text: "Temperature"
              // fontColor:"white"
    },
    axisY: {
      title: "Temperature (in celsius)",
      suffix: " °C"
    },
    data: [{
      type: "splineArea",
      xValueFormatString: "MMM",
      yValueFormatString: "##0.##°C",
      showInLegend: true,
      // legendText: "",
      dataPoints: [
        { x: new Date(2023, 0), y: 26},
        { x: new Date(2023, 1), y: 27 },
        { x: new Date(2023, 2), y: 28 },
        { x: new Date(2023, 3), y: 30 },
        { x: new Date(2023, 4), y: 31 },
        { x: new Date(2023, 5), y: 32 },
        { x: new Date(2023, 6), y: 33 },
        { x: new Date(2023, 7), y: 34 },
        { x: new Date(2023, 8), y: 35 },
        { x: new Date(2023, 9), y: 35 },
        { x: new Date(2023, 10), y: 35 },
        { x: new Date(2023, 11), y: 35 }
      ]
    }]
  }
  const options1 = {
    animationEnabled: true,
          backgroundColor: ' rgba(80, 83, 85, 0.1)',
          height:250,
          width:400,
          color:"white",
    title: {
      text: "Humidity"
              // fontColor:"white"
    },
    axisY: {
      title: "Humidity (in %)",
      suffix: " %"
    },
    data: [{
      type: "splineArea",
      xValueFormatString: "MMM",
      yValueFormatString: "##0.##°C",
      showInLegend: true,
      // legendText: "",
      dataPoints: [
        { x: new Date(2023, 0), y: 86},
        { x: new Date(2023, 1), y: 87 },
        { x: new Date(2023, 2), y: 88 },
        { x: new Date(2023, 3), y: 80 },
        { x: new Date(2023, 4), y: 81 },
        { x: new Date(2023, 5), y: 82 },
        { x: new Date(2023, 6), y: 83 },
        { x: new Date(2023, 7), y: 84 },
        { x: new Date(2023, 8), y: 85 },
        { x: new Date(2023, 9), y: 85 },
        { x: new Date(2023, 10), y: 85 },
        { x: new Date(2023, 11), y: 85 }
      ]
    }]
  }
  const options2 = {
    animationEnabled: true,
          backgroundColor: ' rgba(80, 83, 85, 0.1)',
          height:250,
          width:400,
          color:"white",
    title: {
      text: "Visibility"
              // fontColor:"white"
    },
    axisY: {
      title: "Visibility (in km)",
      suffix: " km"
    },
    data: [{
      type: "splineArea",
      xValueFormatString: "MMM",
      yValueFormatString: "##0.##°C",
      showInLegend: true,
      // legendText: "",
      dataPoints: [
        { x: new Date(2023, 0), y: 6},
        { x: new Date(2023, 1), y: 7 },
        { x: new Date(2023, 2), y: 8 },
        { x: new Date(2023, 3), y: 10 },
        { x: new Date(2023, 4), y: 11 },
        { x: new Date(2023, 5), y: 12 },
        { x: new Date(2023, 6), y: 7 },
        { x: new Date(2023, 7), y: 6 },
        { x: new Date(2023, 8), y: 11 },
        { x: new Date(2023, 9), y: 9 },
        { x: new Date(2023, 10), y:8 },
        { x: new Date(2023, 11), y:8 }
      ]
    }]
  }
  const options3 = {
    animationEnabled: true,
          backgroundColor: ' rgba(80, 83, 85, 0.1)',
          height:250,
          width:400,
          color:"white",
    title: {
      text: "Windspeed"
              // fontColor:"white"
    },
    axisY: {
      title: "Windspeed  (in km/hr)",
      suffix: " km/hr"
    },
    data: [{
      type: "splineArea",
      xValueFormatString: "MMM",
      yValueFormatString: "##0.##°C",
      showInLegend: true,
      // legendText: "",
      dataPoints: [
        { x: new Date(2023, 0), y: 16},
        { x: new Date(2023, 1), y: 17 },
        { x: new Date(2023, 2), y: 18 },
        { x: new Date(2023, 3), y: 10 },
        { x: new Date(2023, 4), y: 11 },
        { x: new Date(2023, 5), y: 12 },
        { x: new Date(2023, 6), y: 13 },
        { x: new Date(2023, 7), y: 14 },
        { x: new Date(2023, 8), y: 13 },
        { x: new Date(2023, 9), y: 15 },
        { x: new Date(2023, 10), y: 14 },
        { x: new Date(2023, 11), y: 18 }
      ]
    }]
  }
  const options4 = {
    animationEnabled: true,
          backgroundColor: ' rgba(80, 83, 85, 0.1)',
          height:250,
          width:400,
          color:"white",
    title: {
      text: "Precipitation"
              // fontColor:"white"
    },
    axisY: {
      title: "Precipitation  (in %)",
      suffix: " %"
    },
    data: [{
      type: "splineArea",
      xValueFormatString: "MMM",
      yValueFormatString: "##0.##°C",
      showInLegend: true,
      // legendText: "",
      dataPoints: [
        { x: new Date(2023, 0), y: 1},
        { x: new Date(2023, 1), y: 4 },
        { x: new Date(2023, 2), y: 2},
        { x: new Date(2023, 3), y: 3 },
        { x: new Date(2023, 4), y: 1 },
        { x: new Date(2023, 5), y: 2 },
        { x: new Date(2023, 6), y: 3 },
        { x: new Date(2023, 7), y: 4 },
        { x: new Date(2023, 8), y: 3 },
        { x: new Date(2023, 9), y: 5 },
        { x: new Date(2023, 10), y: 4 },
        { x: new Date(2023, 11), y: 6 }
      ]
    }]
  }

  return (
    <div className='conc'>

<div className="home">
      <nav>
        <img className='i1' src={icon} alt="icon" style={{width:'90px',height:'70px'}}></img>
        <div className='h'>
          <li><Link to='/Home1'>Home</Link></li>
          <li><Link to='/Info'>Journey</Link></li>
      </div>
      </nav>
        </div>

      <div className='conc1'>
        <h1>Weather Report</h1>  
      </div>
      <div className='conc2'>
    <div className='graph'>
    <CanvasJSChart options = {options}/>
  </div>
  <div className='conc3'>
            <h1>Current info</h1>
            <ul>
                <li>Windspeed: 11km/hr</li><br></br>
                <li>Humidity: 89%</li><br></br>
                <li>Visibility: 8km</li><br></br>
                <li>Precipitation: 2%</li><br></br>
                
            </ul>
            </div>
  </div><br></br><br></br>
  <div className='graph1'>
    <div className='graph2'>
    <CanvasJSChart options = {options1}/>
    </div>
    <div className='graph3'>
    <CanvasJSChart options = {options2}/>
    </div>
  </div><br></br><br></br>
  <div className='graph1'>
    <div className='graph2'>
    <CanvasJSChart options = {options3}/>
    </div>
    <div className='graph3'>
    <CanvasJSChart options = {options4}/>
    </div>
  </div>
   
  </div>
  );
}

export default Contact;
