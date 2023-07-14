import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import logout  from './imgs/logout1.png';
export default class UserLogout extends Component {
 
 logout = () => {
    localStorage.clear();
    window.location.href = "/home1";
  }
 
  render() {
    return (
      <button style={{backgroundColor:'rgba(80, 83, 85, 0.0)'}} onClick={this.logout}>Logout</button>
    //   <Link to='/'>Logout</Link>
    // < a onclick={this.logout}><img src={logout} alt='logout' style={{width:'30px',height:'30px'}}></img></a>
    )
  }
}