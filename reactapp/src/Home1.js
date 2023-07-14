import React, { Component } from 'react';
import './Home1.css';
import { Link } from 'react-router-dom';
import icon from './imgs/c1-removebg-preview.png'; 
import search from './imgs/search1.png';
import cloudy from './imgs/cloudg.gif';
import gif from './imgs/rainy.gif';
import sunny from './imgs/sunny1.png';


import {useSelector} from 'react-redux';
import UserLogout from "./Logout";
 


function Home1 () {
   
		const user=useSelector(state => state.user.value)
	
  return (
    
     <div className='ho'>
    <div className="home">
      <nav>
        <img className='i1' src={icon} alt="icon" style={{width:'90px',height:'70px'}}></img>
        <div className='h'>
          <li><Link to='/Home1'>Home</Link></li>
          <li><Link to='/Info'>Journey</Link></li>
          <li><Link to='/Contact'>Report</Link></li>
          {/* <li><Link to='/LoginForm'>Login</Link></li> */}
       
          </div>
              <div className=' s'><li> <Link to='/search'> <img className='bu' src={search} alt='search' style={{width:'20px',height:'20px'}}></img></Link></li></div>
          <div className='log'>
         <li> {!user.email?
          <Link to='/LoginForm'>Login/SignUp</Link>  :
          <h4 style={{color:'white'}}>{user.email}<UserLogout/></h4>
        }</li><br></br><br></br>
        </div>
      </nav>
        </div>
       
      <div className='d'>
      <div className='hom6'>
      <div className='hom'>
            <div className='hom1'>
                <h3>Salem</h3>
                <h2>Cloudy</h2>
            </div>
            <div className='hom2'>
                <h1>27°c</h1>
             <img className='hom3' src={cloudy} alt='gif' style={{width:'100px',height:'100px'}}></img>
                <p>5:00pm</p>
            </div>
        </div>
        </div>

            </div><br></br>
<div className='d1'>
            <div className='air'>
            <h1>Current info</h1>
            <ul>
                <li>Windspeed: 11km/hr</li><br></br>
                <li>Humidity: 89%</li><br></br>
                <li>Visibility: 8km</li><br></br>
                <li>Precipitation: 2%</li><br></br>
                
            </ul>
            </div>
            <div className='cloud'>
            <img src={cloudy} alt='gif' style={{width:'30px',height:'30px'}}></img>
            </div>
        </div><br></br>

        <div className='hour-det'>
            <h3>Hourly Forecast</h3>
            <div className='hourly'>
                <div className='sep'>
                <div className='h_det'>
                    <p>6:00am</p>
                    <p>cloudy</p>
                    <img src={cloudy} alt='gif' style={{width:'30px',height:'30px'}}></img>
                    <p>30°c</p>
                </div>
                </div>
                <div className='sep'>
                <div className='h_det'>
                    <p>7:00am</p>
                    <p>cloudy</p>
                    <img src={cloudy} alt='gif' style={{width:'30px',height:'30px'}}></img>
                    <p>30°c</p>
                </div>
                </div>
                <div className='sep'>
                <div className='h_det'>
                    <p>8:00am</p>
                    <p>Rainy</p>
                    <img src={gif} alt='gif' style={{width:'30px',height:'30px'}}></img>
                    <p>30°c</p>
                </div>
                </div>
                <div className='sep'>
                <div className='h_det'>
                    <p>9:00am</p>
                    <p>Sunny</p>
                    <img src={sunny} alt='gif' style={{width:'30px',height:'30px'}}></img>
                    <p>30°c</p>
                </div>
                </div>
                <div className='sep'>
                <div className='h_det'>
                    <p>10:00am</p>
                    <p>Sunny</p>
                    <img src={sunny} alt='gif' style={{width:'30px',height:'30px'}}></img>
                    <p>30°c</p>
                </div>
                </div>
                <div className='sep'>
                <div className='h_det'>
                    <p>11:00am</p>
                    <p>cloudy</p>
                    <img src={cloudy} alt='gif' style={{width:'30px',height:'30px'}}></img>
                    <p>30°c</p>
                </div>
                </div>
                <div className='sep'>
                <div className='h_det'>
                    <p>12:00pm</p>
                    <p>Sunny</p>
                    <img src={sunny} alt='gif' style={{width:'30px',height:'30px'}}></img>
                    <p>30°c</p>
                </div>
                </div>
                <div className='sep'>
                <div className='h_det'>
                    <p>1:00pm</p>
                    <p>Rainy</p>
                    <img src={gif} alt='gif' style={{width:'30px',height:'30px'}}></img>
                    <p>30°c</p>
                </div>
                </div>
            </div>
        </div><br></br>
        <br></br>
         <div className='hour-det1'>
            <h3>Daily Forecast</h3>
            <div className='hourly1'>
                <div className='sep'>
                <div className='h_det'>
                    <p>Sun</p>
                    <p>cloudy</p>
                    <img src={cloudy} alt='gif' style={{width:'30px',height:'30px'}}></img>
                    <p>30°c</p>
                </div>
                </div>
                <div className='sep'>
                <div className='h_det'>
                    <p>Mon</p>
                    <p>rainy</p>
                    <img src={gif} alt='gif' style={{width:'30px',height:'30px'}}></img>
                    <p>30°c</p>
                </div>
                </div>
                <div className='sep'>
                <div className='h_det'>
                    <p>Tue</p>
                    <p>cloudy</p>
                    <img src={cloudy} alt='gif' style={{width:'30px',height:'30px'}}></img>
                    <p>30°c</p>
                </div>
                </div>
                <div className='sep'>
                <div className='h_det'>
                    <p>Wed</p>
                    <p>cloudy</p>
                    <img src={cloudy} alt='gif' style={{width:'30px',height:'30px'}}></img>
                    <p>30°c</p>
                </div>
                </div>
                <div className='sep'>
                <div className='h_det'>
                    <p>Thu</p>
                    <p>sunnyy</p>
                    <img src={sunny} alt='gif' style={{width:'30px',height:'30px'}}></img>
                    <p>30°c</p>
                </div>
                </div>
                <div className='sep'>
                <div className='h_det'>
                    <p>Fri</p>
                    <p>sunny</p>
                    <img src={sunny} alt='gif' style={{width:'30px',height:'30px'}}></img>
                    <p>30°c</p>
                </div>
                </div>
                <div className='sep'>
                <div className='h_det'>
                    <p>Sat</p>
                    <p>rainy</p>
                    <img src={gif} alt='gif' style={{width:'30px',height:'30px'}}></img>
                    <p>30°c</p>
                </div>
                </div>
                
            </div>
        </div><br></br>
        <br></br><br></br>
        <br></br>
        <br></br><br></br><br></br>
        
      
        </div>
  );
}
// }

export default Home1;