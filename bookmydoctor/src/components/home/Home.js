
import React from 'react';
import './Home.css'
import doctorMain from './doctorMain.jpg'
import { FaUserAlt,FaPlusCircle} from "react-icons/fa"; 


// import {BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom'
// import Signup from '../registration/Signup';
// import Dashbord from '../patient/Dashbord';

// import Navbar from './components/patient/navbar';



export default function Home(){ 

    const myFunction = () => {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read more...";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Read less...";
            moreText.style.display = "inline";
        }
    }
   
    return(
        <div class="container" >
            {/* <Router>
             <nav class="navbar navbar-expand-lg navbar-light bg-light">
       <Link class="navbar-brand" href="#"> <i className="fas fa-clinic-medical fa-3x ml-5"></i></Link>
      <h5 className="mt-4" style={{color:"mediumvioletred"}}><b>BOOK<br/>MY DOC</b></h5>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  
  <div class="collapse navbar-collapse" id="navbarNav2" >
    <ul class="navbar-nav">
      <li class="nav-item active ">
      <Link class="nav-link" to="/">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Home</Link>
      </li>
      <li class="nav-item ">
      <Link class="nav-link" to="/">Features</Link>
      </li>
      <li class="nav-item ">
      <Link class="nav-link " to="/">Contact</Link>
      </li>
      
    </ul>
  </div>
  <div class="collapse navbar-collapse justify-content-end " id="navbarNav1">
  <ul class="nav navbar-nav " id=" right">
  <li class="nav-item" data-toggle="modal" data-target="#add">
      <Link class="nav-link " to="/signup">Sign Up</Link>
      </li>
      <li class="nav-item ">
      <Link class="nav-link " to="/">Sign In</Link>
      </li>
      <li class="nav-item ">
      <Link class="nav-link " to="/Dashbord">Patient</Link>
      </li>
      <li class="nav-item ">
      <Link class="nav-link " to="/">About Us</Link>
      </li>
      </ul>
    </div>
</nav>
         <Switch>
          
          <Route exact path = "/signup" component = {Signup}></Route>
          <Route exact path = "/Dashbord" component = {Dashbord}></Route>
          </Switch>
    </Router> */}
           
            <div class="row">
                <div class="col-md-5">
                <div class="text">
                <div class="text1">
                    <h1 id="icon"><FaPlusCircle/></h1>
                    <h5>Keep Your</h5>
                </div>
                <div class="text2">
                    <h3>Family More Healthy</h3>
                    
                </div>
                <div class="text3">
                <p>Find the best Doctors during <b>COVID-19</b> Pandemic to get instant medical advice and second opinion for your health problems.
                                    Consult our doctors online on face-to-face video chat for professional<span id="dots">...</span><span id="more">
                                    advice from the comfort of your home.Share your health
                                    concerns with our medical experts and we will help you find the right Doctor. All the doctors are registered medical practitioners.
                                    Along with qualifying degrees - experience, research and track-record of practice are taken into account before a doctor is credentialed
                                     with 1mg and is given access to answer patient queries.</span></p>
                </div>  
                    <div class ="text4">
                        <p>Reed more...</p>
                    </div>
                </div>
                </div>
                <div class="col-md-1">

                </div>
                <div class="col-md-6">
                <div class="card" id="first-card">
                <div class="card-body">  
                <img class="doctor" src={doctorMain}/>          
                </div>
                </div>
                </div>
            </div>
        </div>
    )
}