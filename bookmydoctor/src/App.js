import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom'


import Dashbord from './components/patient/Dashbord';
import Signup from './components/registration/Signup';
import Navbar from './components/Navbar/Navbar';
import Home from './components/home/Home';
import AboutUs from './components/aboutus/AboutUs';
import Contact from './components/contactUs/Contact';
import DoctorSidebar from './components/doctor/DoctorSidebar';
import AdminSidebar from './components/admin/AdminSidebar';



function App() {
  return (

    <Router>
       <div className="App">
      
           <Navbar/>
          <Route exact path = "/" component = {Home}></Route>
          <Route path = "/signup" component = {Signup}></Route>
          <Route path = "/Dashbord" component = {Dashbord}></Route>
          <Route path = "/AboutUs" component = {AboutUs}></Route>
          <Route path = "/ContactUs" component = {Contact}></Route>
          <Route path = "/DoctorSidebar" component = {DoctorSidebar}></Route>
          <Route path = "/AdminSidebar" component = {AdminSidebar}></Route>
       </div>
    </Router>

  );
}

export default App;
