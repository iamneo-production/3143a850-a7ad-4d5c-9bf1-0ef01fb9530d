import React, { useState } from 'react';
import './Registration.css';
import { Link } from 'react-router-dom';
import umb from './imgs/umb1.png';
import bg from './imgs/alert.mp4';

const Register = () => {

  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = {};
   
    if (!email) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = 'Email is invalid';
    }
    if (!location) {
      validationErrors.location = 'Please enter your Location';
    }
    if (!password) {
      validationErrors.password = 'Password is required';
    }
    

    if (Object.keys(validationErrors).length === 0) {

      console.log('Registration data:', { location, email, password });
   
      setEmail('');
      setLocation('');
      setPassword('');
   
      setErrors({});
    } else {
  
      setErrors(validationErrors);
    }
  };

  return (
    <div className='back-grnd'>
        {/* <div className='c1'> */}

{/* <div className='image'>
        <img src={weather} style={{height:'400px',width:'370px'}}></img>
    </div>
         */}
         {/* <div className='c1'> */}
      <div className='cont'>
      <div className="container" >
    <video className='videoTag1' autoPlay loop muted>
    <source src={bg} type='video/mp4' />
    </video>
       
    <form onSubmit={handleSubmit}>
      <div className='content'>
        <div className='head'>
        <h2>Registration</h2>
        </div>
       
      <div className='inputtt'>
        <label><h3>Username:</h3></label>
        <input type="email"  placeholder="Email"  value={email} onChange={(e) => setEmail(e.target.value)} />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div className='inputtt'>
        <label><h3>Location:</h3></label>
        <input type="text"  placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
        {errors.location && <span className="error">{errors.location}</span>}
      </div>
      <div className='inputtt'>
        <label><h3>Password:</h3></label>
        <input type="password"  placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>
      
      <div className='but'>
      <Link to='/Home1'><button type="submit">Register</button></Link>
      </div>
          </div>
          <Link to="/LoginForm"><p>Already have an account, signin!</p></Link>
          <Link to="/home1"><p>Return Back!!</p></Link>
    </form>
    </div>
    </div>
    </div>
  );
};

export default Register;