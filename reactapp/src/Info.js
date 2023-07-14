import React from 'react';
import './Info.css';
import cloudy from './imgs/cloudy1.png';
import wind from './imgs/windspeed1.png';
import hum from './imgs/humidity1.png';
import pre from './imgs/pre1.png';
import vis from './imgs/visibility1.png';
import { Link } from 'react-router-dom';
import icon from './imgs/c1-removebg-preview.png';


function Info() {
  return (
      <div className='info'>
        <div className="home">
      <nav>
        <img className='i1' src={icon} alt="icon" style={{width:'90px',height:'70px'}}></img>
        <div className='h'>
          <li><Link to='/Home1'>Home</Link></li>
          <li><Link to='/contact'>Report</Link></li>
      </div>
      </nav>
        </div>
        <div className='infi'>
        <div className="inf-bar1">   
        <h2>Start:</h2>   
            <input className='sea' type="text" placeholder="Search..." />
      </div>
        <div className="inf-bar1">     
        <h2>Destination:</h2> 
            <input className='sea' type="text" placeholder="Search..." />
      </div>
           </div><br></br><br></br>

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
            <div className='search-cont'>
            <button className='search-but'>+</button>
            <input type='text' className="in" placeholder='Time'/>
            <button className='search-but'>-</button>
            </div>
        </div><br></br><br></br>

           <div className='inf'>
      <div className='inf1'>
            <div className='inf2'>
                <h3>Coimbatore     27°c</h3>
                {/* <h1>27°c</h1> */}
                <h2>Cloudy    <img className='inf3' src={cloudy} alt='cloudy' style={{width:'40px',height:'40px'}}></img></h2>
                <p>5:00pm</p>
            </div>
        </div>
      <div className='inf1'>
            <div className='inf2'>
                <h3>GandiPuram     27°c</h3>
                {/* <h1>27°c</h1> */}
                <h2>Cloudy    <img className='inf3' src={cloudy} alt='cloudy' style={{width:'40px',height:'40px'}}></img></h2>
                <p>5:00pm</p>
            </div>
        </div>
      <div className='inf1'>
            <div className='inf2'>
                <h3>RS Puram     27°c</h3>
                {/* <h1>27°c</h1> */}
                <h2>Cloudy    <img className='inf3' src={cloudy} alt='cloudy' style={{width:'40px',height:'40px'}}></img></h2>
                <p>5:00pm</p>
            </div>
        </div>
      <div className='inf1'>
            <div className='inf2'>
                <h3>Race Course    27°c</h3>
                {/* <h1>27°c</h1> */}
                <h2>Cloudy    <img className='inf3' src={cloudy} alt='cloudy' style={{width:'40px',height:'40px'}}></img></h2>
                <p>5:00pm</p>
            </div>
        </div>

       
      <div className='inf1'>
            <div className='inf2'>
                <h3>Kunniyamuthur    27°c</h3>
                {/* <h1>27°c</h1> */}
                <h2>Cloudy    <img className='inf3' src={cloudy} alt='cloudy' style={{width:'40px',height:'40px'}}></img></h2>
                <p>5:00pm</p>
            </div>
        </div>
        </div><br></br>
        <br></br>
        <br></br>

        <div className='inf5'>
          <div className='inf9'>
            <div className='inf6'>
                <div className='inf7'>
                    <h1>Windspeed </h1>
                    <h3>11km/hr</h3>
                    <img className='inf7img' src={wind} alt='wind' style={{width:'50px',height:'50px'}}></img>
                </div>
            </div>
            <div className='inf6'>
                <div className='inf7'>
                    <h1>Humidity </h1>
                    <h3>86%</h3>
                    <img className='inf7img' src={hum} alt='hum' style={{width:'50px',height:'50px'}}></img>
                </div>
            </div>
            <div className='inf6'>
                <div className='inf7'>
                    <h1>Visibility</h1>
                    <h3>11km</h3>
                    <img className='inf7img' src={vis} alt='wind' style={{width:'50px',height:'50px'}}></img>
                </div>
            </div>
            <div className='inf6'>
                <div className='inf7'>
                    <h1>Precepitation </h1>
                    <h3>2%</h3>
                    <img className='inf7img' src={pre} alt='wind' style={{width:'50px',height:'50px'}}></img>
                </div>
                </div>
            </div><br></br><br></br>
            < div className='inf9'>
            <div className='inf6'>
                <div className='inf7'>
                    <h1>Windspeed </h1>
                    <h3>11km/hr</h3>
                    <img className='inf7img' src={wind} alt='wind' style={{width:'50px',height:'50px'}}></img>
                </div>
            </div>
            <div className='inf6'>
                <div className='inf7'>
                    <h1>Humidity </h1>
                    <h3>86%</h3>
                    <img className='inf7img' src={hum} alt='hum' style={{width:'50px',height:'50px'}}></img>
                </div>
            </div>
            <div className='inf6'>
                <div className='inf7'>
                    <h1>Visibility</h1>
                    <h3>11km</h3>
                    <img className='inf7img' src={vis} alt='wind' style={{width:'50px',height:'50px'}}></img>
                </div>
            </div>
            <div className='inf6'>
                <div className='inf7'>
                    <h1>Precepitation </h1>
                    <h3>2%</h3>
                    <img className='inf7img' src={pre} alt='wind' style={{width:'50px',height:'50px'}}></img>
                </div>
                </div>
            </div><br></br><br></br>
            <div className='inf9'>
            <div className='inf6'>
                <div className='inf7'>
                    <h1>Windspeed </h1>
                    <h3>11km/hr</h3>
                    <img className='inf7img' src={wind} alt='wind' style={{width:'50px',height:'50px'}}></img>
                </div>
            </div>
            <div className='inf6'>
                <div className='inf7'>
                    <h1>Humidity </h1>
                    <h3>86%</h3>
                    <img className='inf7img' src={hum} alt='hum' style={{width:'50px',height:'50px'}}></img>
                </div>
            </div>
            <div className='inf6'>
                <div className='inf7'>
                    <h1>Visibility</h1>
                    <h3>11km</h3>
                    <img className='inf7img' src={vis} alt='wind' style={{width:'50px',height:'50px'}}></img>
                </div>
            </div>
            {/* <div className='inf9'> */}
            <div className='inf6'>
                <div className='inf7'>
                    <h1>Precepitation </h1>
                    <h3>2%</h3>
                    <img className='inf7img' src={pre} alt='wind' style={{width:'50px',height:'50px'}}></img>
                </div>
                </div>
            </div><br></br><br></br>
            <div className='inf9'>
            <div className='inf6'>
                <div className='inf7'>
                    <h1>Windspeed </h1>
                    <h3>11km/hr</h3>
                    <img className='inf7img' src={wind} alt='wind' style={{width:'50px',height:'50px'}}></img>
                </div>
            </div>
            <div className='inf6'>
                <div className='inf7'>
                    <h1>Humidity </h1>
                    <h3>86%</h3>
                    <img className='inf7img' src={hum} alt='hum' style={{width:'50px',height:'50px'}}></img>
                </div>
            </div>
            <div className='inf6'>
                <div className='inf7'>
                    <h1>Visibility</h1>
                    <h3>11km</h3>
                    <img className='inf7img' src={vis} alt='wind' style={{width:'50px',height:'50px'}}></img>
                </div>
            </div>
            <div className='inf6'>
                <div className='inf7'>
                    <h1>Precepitation </h1>
                    <h3>2%</h3>
                    <img className='inf7img' src={pre} alt='wind' style={{width:'50px',height:'50px'}}></img>
                </div>
            </div>
            </div>
            </div>
        {/* </div> */}
            {/* <div className='sear8'>
                <h1>Weather Current Data</h1>
                <img className='sear9img' src={curricon} alt='wind' style={{width:'200px',height:'200px'}}></img>
            </div> */}

     </div>
  );
}

export default Info;
