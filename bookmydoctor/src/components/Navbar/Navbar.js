import React from 'react';
import {BrowserRouter as Router, Route, Link,NavLink} from 'react-router-dom'
import Login from '../login/Login';
import './Navbar.css';


export default function Navbar(){ 

    return(
        <div>
             <nav class="navbar navbar-expand-lg navbar-light bg-light">
       <Link class="navbar-brand" href="#"> <i className="fas fa-clinic-medical fa-3x ml-5"></i></Link>
      <h5 className="mt-4" style={{color:"mediumvioletred"}}><b>BOOK<br/>MY DOC</b></h5>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
         </button>
  
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="nav navbar-nav " id=" right">

      <li class="nav-item active ">
      <Link class="nav-link" to="/" >&nbsp;&nbsp;Home</Link>
      </li>

      <li class="nav-item active">
      <NavLink className="nav-link" to="/ContactUs" activeStyle={{ color: "mediumvioletred" }}>Contact</NavLink>
      </li>

      <li class="nav-item ">
      <Link class="nav-link active" to="/AboutUs"  >About Us</Link>
      </li>
      
    </ul>
    </div>
  <div class="collapse navbar-collapse justify-content-end " id="navbarNav">
  <ul class="nav navbar-nav " id=" right">

  <li class="nav-item" data-toggle="modal" data-target="#add">
      <Link class="nav-link active" to="/signup" >Sign Up</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/Login" data-toggle="modal" data-target="#doctorModal" >Sign In</Link>

      </li>
      
      </ul>
    </div>
</nav>      
<div class="modal fade" id="doctorModal" tabindex="-1" aria-labelledby="doctorModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body" id="loginModal">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <Login />
            </div>
          </div>
        </div>
      </div>
    </div>
    )

}