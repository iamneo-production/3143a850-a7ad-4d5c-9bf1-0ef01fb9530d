import React, { useState } from 'react';
import './Registration.css';
import { Link } from 'react-router-dom';
import weather from './imgs/bc14.jpg';

const Registration = () => {
  const [formData, setFormData] = useState({
    // name: '',
    email: '',
    location: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};

    // if (!formData.name) {
    //   validationErrors.name = 'Please enter your name';
    // }
    
    if (!formData.email) {
        validationErrors.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        validationErrors.email = 'Please enter a valid email';
    }
    if (!formData.location) {
      validationErrors.location = 'Please enter your location';
    }

    if (!formData.password) {
      validationErrors.password = 'Please enter a password';
    } else if (formData.password.length < 6) {
      validationErrors.password = 'Password should be at least 6 characters long';
    }

    // if (formData.password !== formData.confirmPassword) {
    //   validationErrors.confirmPassword = 'Passwords do not match';
    // }

    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', formData);
    } else {
 
      setErrors(validationErrors);
    }
  };

  return (
    <div className='back-grnd'>
        <div className='cont'>
    <form className="registration-form" onSubmit={handleSubmit}>
      <h2>Registration Form</h2>

      {/* <div className="form-group">
        <label htmlFor="name">Name:</label>
        <div className='input'>
        <input
          type="text"
          id="name"
          name="name"
          placeholder='Name'
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      </div> */}

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <div className='input'>
        <input
          type="email"
          id="email"
          name="email"
          placeholder='Email'
          value={formData.email}
          onChange={handleChange}
        />
        </div>
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="location">Location:</label>
        <div className='input'>
        <input
          type="text"
          id="location"
          name="location"
          placeholder='Location'
          value={formData.location}
          onChange={handleChange}
        />
        </div>
        {errors.location && <span className="error">{errors.location}</span>} 
       </div>

      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <div className='input'>
        <input
          type="password"
          id="password"
          name="password"
          placeholder='Password'
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>
      </div>

      {/* <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <div className='input'>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder='ConfirmPassword'
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
      </div>
     </div> */}

      <button type="submit">Register</button>
        <Link to="/"><p>Already have an account, signin!</p></Link>
    </form>
      </div>
      <div className='image-container'>
     <img src={weather} style={{marginLeft:'100px',height:'450px',width:'500px',borderRadius: '30px',border: '2px solid black',opacity:'0.9'}}></img> 
         <div class="text-overlay">
          <h2>Weather Forecast</h2>
        </div>
      </div> 
      {/* <h1>Weather Forecast</h1> */}
      </div>
  );
};

export default Registration;