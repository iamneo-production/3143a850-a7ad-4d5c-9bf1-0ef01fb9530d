import React from 'react';
import './NavBar.css';
import icon from './imgs/c1-removebg-preview.png';
import {Link} from 'react-router-dom'; 
import {useSelector} from 'react-redux';
import UserLogout from "./Logout";

function NavBar() {
  const user=useSelector(state => state.user.value)
  return (
    <div className='na'>
    <div className="App">
      <nav>
        <img src={icon} alt="icon" style={{width:'90px',height:'70px'}}></img>
        <div className='ele'>
          <li><Link to='/Home1'>Home</Link></li>
          <li><Link to='/Info'>Journey</Link></li>
          <li><Link to='/Contact'>Map</Link></li>
          {/* <li><Link to='/LoginForm'>Login</Link></li> */}
        </div>
          <div className='log'>
          {!user.email?
          <Link to='/LoginForm'>Login/SignUp</Link>  :
          <h4 style={{color:'white'}}>{user.email}<UserLogout/></h4>
        }
        </div>

      </nav>
      <header>
        <h1>Weather Forecast</h1>
        {/* <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Travel On")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Welcomes You!!!")
                        .deleteAll()
                        .typeString("Start You Journey")
                        .deleteAll()
                        .typeString("Life is short, and the world is wide!!!")
                        .start();
                }}
            /> */}
      </header>
      <div className='noti'>
        <p>Allow the application to access your device location</p>
        <Link to='/Home1'><button className='bu1' onClick  id='l1' type="submit">Allow</button></Link><br></br><br></br>
        <Link to='/Home1'><button className='bu1' id='l2' type="submit">cancel</button></Link>
    </div>

    </div>
    </div>
  );
}

export default NavBar;
