import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import icon from './imgs/c1-removebg-preview.png'; 
// import search from './imgs/search1.png';
import cloudy from './imgs/cloudy1.png';
// import gif from './imgs/cloudg.gif';
import radar from './imgs/radar.gif';

const Home = () => {
  return (
    
     <div className='ho'>
    <div className="home">
      <nav>
        <img className='i1' src={icon} alt="icon" style={{width:'90px',height:'70px'}}></img>
        <div className='h'>
          <li><Link to='/Home'>Home</Link></li>
          <li><Link to='/Info'>Info</Link></li>
          <li><Link to='/Contact'>Contact</Link></li>
          <li><Link to='/LoginForm'>Login</Link></li>
        </div>
      </nav>
        </div>
        <div className="search-bar"> 
             {/* {/* <img className='bu' src={search} alt='search' style={{width:'30px',height:'30px'}}></img> */}
            <input className='sea' type="text" placeholder="Search..." />
      </div>
        {/* </div> */}
        {/* <div className='im1'>
            <img src={gif} alt='gif' style={{width:'300px',height:'300px'}}></img>
            </div> */}
        {/* <div className='clo'> */}
<div className='hom6'>
      <div className='hom'>
            <div className='hom1'>
                <h3>Salem</h3>
                <h2>Cloudy</h2>
            </div>
            <div className='hom2'>
                <h1>27°c</h1>
             <img className='hom3' src={cloudy} alt='cloudy' style={{width:'40px',height:'40px'}}></img>
                <p>5:00pm</p>
            </div>
        </div>
        
            <div className='date'>
            <div className='search-cont'>
            <button className='search-but'>+</button>
            <input type='text' className="in" placeholder='date'/>
            <button className='search-but'>-</button>
            </div>
            <div className='search-cont'>
            <button className='search-but'>+</button>
            <input type='text' className="in" placeholder='month'/>
            <button className='search-but'>-</button>
            </div>
            <div className='search-cont'>
            <button className='search-but'>+</button>
            <input type='text' className="in" placeholder='year'/>
            <button className='search-but'>-</button>
            </div>
            </div>
            
            {/* </div> */}
            </div><br></br>
        <div className='air'>
            <h1>Current info</h1>
            <ul>
                <li>Windspeed: 11km/hr</li><br></br>
                <li>Humidity: 89%</li><br></br>
                <li>Visibility: 8km</li><br></br>
                <li>Precipitation: 2%</li><br></br>
                {/* <li>Discription: Covered with Clouds</li><br></br> */}
            </ul>
        </div><br></br>
        
   
         <div className='hour-det'>
            <div className='hourly'>
                <div className='sep'>
                <div className='h_det'>
                    <p>6:00am</p>
                    <p>Sunny</p>
                    <p>30°c</p>
                </div>
                </div>
                <div className='sep'>
                <div className='h_det'>
                    <p>7:00am</p>
                    <p>Sunny</p>
                    <p>30°c</p>
                </div>
                </div>
                <div className='sep'>
                <div className='h_det'>
                    <p>8:00am</p>
                    <p>Sunny</p>
                    <p>30°c</p>
                </div>
                </div>
                <div className='sep'>
                <div className='h_det'>
                    <p>9:00am</p>
                    <p>Sunny</p>
                    <p>30°c</p>
                </div>
                </div>
                <div className='sep'>
                <div className='h_det'>
                    <p>10:00am</p>
                    <p>Sunny</p>
                    <p>30°c</p>
                </div>
                </div>
                <div className='sep'>
                <div className='h_det'>
                    <p>11:00am</p>
                    <p>Sunny</p>
                    <p>30°c</p>
                </div>
                </div>
                <div className='sep'>
                <div className='h_det'>
                    <p>12:00pm</p>
                    <p>Sunny</p>
                    <p>30°c</p>
                </div>
                </div>
                <div className='sep'>
                <div className='h_det'>
                    <p>1:00pm</p>
                    <p>Sunny</p>
                    <p>30°c</p>
                </div>
                </div>
            </div>
        </div>
         <div className='hour-det1'>
            <h3>Daily Forecast</h3>
            <div className='hourly1'>
                <div className='sep'>
                <div className='h_det'>
                    <p>Sun</p>
                    <p>Sunny</p>
                    <p>30°c</p>
                </div>
                </div>
                <div className='sep'>
                <div className='h_det'>
                    <p>Mon</p>
                    <p>Sunny</p>
                    <p>30°c</p>
                </div>
                </div>
                <div className='sep'>
                <div className='h_det'>
                    <p>Tue</p>
                    <p>Sunny</p>
                    <p>30°c</p>
                </div>
                </div>
                <div className='sep'>
                <div className='h_det'>
                    <p>Wed</p>
                    <p>Sunny</p>
                    <p>30°c</p>
                </div>
                </div>
                <div className='sep'>
                <div className='h_det'>
                    <p>Thu</p>
                    <p>Sunny</p>
                    <p>30°c</p>
                </div>
                </div>
                <div className='sep'>
                <div className='h_det'>
                    <p>Fri</p>
                    <p>Sunny</p>
                    <p>30°c</p>
                </div>
                </div>
                <div className='sep'>
                <div className='h_det'>
                    <p>Sat</p>
                    <p>Sunny</p>
                    <p>30°c</p>
                </div>
                </div>
                
            </div>
        </div>

        <div className='rad'>
            <h2>Live Radar</h2>
            <img src={radar} alt='radar' style={{width:'300px',height:'300px'}}></img>

        </div>



        </div>
    //   </div>
  );
}

export default Home;
