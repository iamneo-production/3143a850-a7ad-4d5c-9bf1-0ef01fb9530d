import React from 'react';
import './Login.css';
import { Link ,useNavigate} from 'react-router-dom';
// import './Login.html';
import weather from './imgs/log.gif';
import bg from './imgs/alert.mp4';
import { useState } from 'react';

import {useSelector} from 'react-redux';
import UserLogout from "./Logout";
import { useDispatch } from 'react-redux';
import {login,logout} from './features/user';

const LoginForm = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const user=useSelector(state => state.user.value)

  return (
    <>
    <div className="top1">
      {/* <div className='c1'> */}
      
      <div className="container" >
    <video className='videoTag' autoPlay loop muted>
    <source src={bg} type='video/mp4' />
</video>
      <form>
      <h1>Login</h1>
     {/* <h3>Username:</h3>
        <input type="text" placeholder="Email" name="username" required />
        <h3>Password:</h3>
        <input type="password" placeholder="Password" name="password" required />
      <Link to='/Home1'><button type="submit">Login</button><break></break>  */}

<h3>Username:</h3>
<input type="text" value={email} placeholder="Email" name="email" required onChange={e=>setEmail(e.target.value)}/>
<h3>Password</h3>
        <input type="password" placeholder="Password" name="password" required onChange={e=>setPassword(e.target.value)}/><br></br><br></br>
        <button onClick={()=> {dispatch(login({email}));navigate("/")}} type="submit">Login</button>


        <Link to="/register"><p>Don't have an account,signup!</p></Link>
        <Link to="/home1"><p>Return Back!!</p></Link>
      </form>
      </div>
      {/* <div className='abc'>
        <img src={weather} style={{height:'400px',width:'370px'}}></img>
        </div> */}
      {/* </div> */}
      {/* <div className="side">
          <p>Weather Forecast </p>
          </div> */}
    </div>
      
    </>
  );
};

export default LoginForm;