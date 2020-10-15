
import React from 'react';
import './Signup.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import SignupPatient from './SignupPatient';
import SignupDoctor from './SignupDoctor';
import {FaUserMd,FaUserPlus} from "react-icons/fa";


export default function Signup(){ 

    return(
        <Router>
        <div class="main">
        <div class="row">

            <div class="col-md-5">
            <div class="signup-patient" id="signup-patient">
        
            <h1 id="icon1"><FaUserPlus/></h1>

                <div class="text-one-one">
                <h3>I'm a new Patient</h3>
                </div>
                <div class="text-two-two">
                <p>Find a doctor and book an appointment.<br/>online for free!</p>
                </div>
                <div class="button-one" id="patient-button">
                
                <Link to="/signuppatient"><button id="button-one" data-toggle="modal" data-target="#add"><h>Join now</h></button></Link>
                
                </div>
            </div>
            </div>
            <div class="col-md-1"></div>
            <div class="col-md-5">
            <div class="signup-doctor" id="signup-doctor">
                
                <h1 id="icon2"><FaUserMd/></h1>
                <div class="text-one">
                <h3>I'm a Doctor / heath care provider</h3>
                </div>
                <div class="text-two">
                <p>Quicker way for your patient to schedule an appointment.<br/>online for free!</p>
                </div>
                <div class="button-two" id="doctor-button">
                <Link to="/signupdoctor">
                <button id="button-two" data-toggle="modal" data-target="#addDoctor"><hh>Join now</hh></button><br></br>
                </Link>
                </div>
            </div>
            </div>
        </div>
        <div class="col-md-13" id="bottom bar" style={{backgroundColor:"rgb(201, 23, 135)"}}>
        
        </div>
        
        </div>
        

        <Route exact path = "/signuppatient" component = {SignupPatient}></Route>
        <Route exact path = "/signupdoctor" component = {SignupDoctor}></Route>
        ///
        </Router>
    )
}