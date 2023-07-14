import './App.css';
import React from 'react';

import {BrowserRouter, Route, Routes }from 'react-router-dom';
import LoginForm from './LoginForm';
// import Registration from './Registration';
import Register from './Register';
import NavBar from './NavBar';
// import home from './Home1';
import Home1 from './Home1';
import Contact from './Contact';
import Info from './Info';
import Search from './Search';
// import reportWebVitals from './reportWebVitals';

function App() {
  return (
    <>
    <BrowserRouter>
       <Routes>
         <Route index element={<NavBar/>}/>
         
         <Route path="/Home1" element={<Home1/>}/>
         <Route path="/contact" element={<Contact/>}/>
         <Route path="/info" element={<Info/>}/>
         <Route path="/LoginForm" element={<LoginForm/>}/>
         <Route path="/register" element={<Register/>}/>
         <Route path="/search" element={<Search/>}/>
       </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
