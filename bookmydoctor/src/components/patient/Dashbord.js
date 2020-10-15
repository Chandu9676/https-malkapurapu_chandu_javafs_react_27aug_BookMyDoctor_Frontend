import React,{useState} from 'react';
import './Dashbord.css';

import {BrowserRouter as Router, Route, Link,useHistory,NavLink} from 'react-router-dom'
import ViewProfile from './ViewProfile';
import CheckDoctors from './CheckDoctors';
import ManageAppointments from './ManageAppointments';
import {FaUserEdit} from "react-icons/fa";
import DoctorList from './DoctorList';
import AddAppointment from './AddAppointment';
import ViewDoctors from './ViewDoctors';
import UpdateAppointment from './UpadateAppointment';
import UpdateProfile from './UpdateProfile';

import {FaUserCircle} from "react-icons/fa";
import { GoSignOut } from "react-icons/go";


export default function  Dashbord(props){ 


        const object = props.history.location.state.patient;
 const patient = {
        patientId: object.patientId,
        patientName: object.patientName,
        bloodGroup: object.bloodGroup,
        age: object.age,
        gender: object.gender,
        address: object.address,
        mobileNo: object.mobileNo,
        email: object.email,
        password: object.password
    }
   
 console.log(patient);
    
const history = useHistory();

    // if(state){
    //     <Home />
    // }
    return( 
        <Router>
         <div>
                <header>
                 <div class="container-fluid patient-head py-3 ">
                    <div class="row collapse show no-gutters d-flex h-100 position-relative">

                        <div class=" px-0 w-sidebar navbar-collapse collapse d-none d-md-flex">
                        </div>
                        <div class="col px-3 px-md-0 ">

                            <a data-toggle="collapse" href="#" data-target=".collapse" role="button" class="p-1">
                                <i class="fa fa-bars fa-lg PatientFont "></i>
                            </a>
                            {/* //{patient.patientName} */}
    <h5 className="float-right PatientFont"><FaUserEdit/>&nbsp;&nbsp;Welcome {patient.patientName}</h5>
                        </div>
                    </div>
                </div>
                <div class="container-fluid px-0 h-100">
                    <div class="row vh-100 collapse show no-gutters d-flex h-100 position-relative">
                        <div class="col-3 p-0 vh-100 h-100 text-white w-sidebar navbar-collapse collapse d-none d-md-flex sidebar">
                            <div class="navbar-dark patient-head  h-100 w-sidebar">

                                <h5 class="px-3 pt-3 PatientFont"><FaUserCircle/>&nbsp;&nbsp;Patient Menu</h5>
                                <ul class="nav flex-column flex-nowrap text-truncate">
                                 
                                    <li class="nav-item">
                                        <NavLink className="nav-link PatientFont" to={`/profile/${patient.patientId}`} activeStyle={{  fontWeight: "bold",color: "black" }}>Profile</NavLink>
                                    </li> 
                                    <li class="nav-item">
                                        <NavLink className="nav-link PatientFont" to={`/ViewDoctors/${patient.patientId}`} activeStyle={{  fontWeight: "bold",color: "black" }}>New Appointment</NavLink>
                                    </li>
                                    <li class="nav-item">
                                        <div className="dropdown">

                                            <NavLink className="nav-link PatientFont" to={`/manageAppointments/${patient.patientId}`} activeStyle={{  fontWeight: "bold",color: "black" }}>Manage Appointments</NavLink>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink"> 
                                                <ul class="nav flex-column flex-nowrap text-truncate">
                                                </ul>
                                            </div>
                                        </div>

                                    </li>
                                    <li class="nav-item">
                                        <Link className="nav-link PatientFont" onClick={() => {
                                            history.push('/')
                                        }}><GoSignOut />&nbsp;&nbsp;SignOut</Link>
                                    </li>
                                    
                                </ul>
                            </div> 

                          
                        </div>
                        <div class="col p-3 ">
                        <Route exact path = "/profile/:patientId" component = {ViewProfile}></Route>
                        <Route exact path = "/checkdoctors" component = {CheckDoctors}></Route>
                        <Route exact path = "/manageAppointments/:patientId" component = {ManageAppointments}></Route>
                        <Route exact path = "/DoctorList" component = {DoctorList}></Route>
                        <Route exact path="/AddAppointment" component={AddAppointment} />
                        <Route exact path="/ViewDoctors/:patientId" component={ViewDoctors} />
                        <Route exact path="/UpdateAppointment" component={UpdateAppointment} />
                        <Route exact path="/UpdateProfile" component={UpdateProfile} />
                        

                        </div>
                        
                    </div>
                    
                </div>
                </header>
            </div> 
            

        </Router>


    )



    
}