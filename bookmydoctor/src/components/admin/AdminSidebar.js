import React from 'react';
import "./AdminSidebar.css";
import { BrowserRouter as Router, Route, Link, useHistory,NavLink } from 'react-router-dom';
import ShowDoctor from './ShowDoctor';
import ShowPatient from './ShowPatient';
import ShowAppointment from './ShowAppointment';
import ShowAllDoctors from './ShowAllDoctors';
import ShowAllPatients from './ShowAllPatients';
import ShowAllAppointments from './ShowAllAppointments';
import ShowAllFeedbacks from './ShowAllFeedbacks';
import DeleteDoctor from './DeleteDoctor';
import DeletePatient from './DeletePatient';
import {FaUserTie} from "react-icons/fa"
import { GoSignOut } from "react-icons/go";
import { RiShieldUserFill } from "react-icons/ri";

export default function AdminSidebar() {
    const history = useHistory();
    return (
        <Router>
            <div>
                <div class="container-fluid py-3 adminHead">
                    <div class="row collapse show no-gutters d-flex h-100 position-relative">
                        <div class="px-0 w-sidebar navbar-collapse collapse d-none d-md-flex"></div>
                        <div class="col px-3 px-md-0">
                            <a
                                data-toggle="collapse"
                                href="#"
                                data-target=".collapse"
                                role="button"
                                class="p-1"
                            >
                                <i class="fa fa-bars adminFont  fa-lg"></i>
                            </a>
                            <b className="float-right admin-header"><RiShieldUserFill/>&nbsp;&nbsp;WELCOME ADMIN</b>
                        </div>
                    </div>
                </div>
                <div class="container-fluid px-0 h-100">
                    <div class="row vh-100 collapse show no-gutters d-flex h-100 position-relative">
                        <div class="col-3 p-0 vh-100 h-100 text-white w-sidebar navbar-collapse collapse d-none d-md-flex sidebar">
                            <div class="navbar-dark adminHead h-100 w-sidebar">
                            <h5 class="px-3 pt-3"><FaUserTie/>&nbsp;&nbsp;Admin Menu</h5>
                                <ul class="nav flex-column flex-nowrap text-truncate">

                                    {/* <li class="nav-item">
                                        <Link className="nav-link adminFont" to="/ShowDoctor">
                                            <i>ViewDoctor</i>
                    </Link>
                                    </li> */}
                                    <li class="nav-item">
                                        <NavLink className="nav-link adminFont" to="/ShowAllDoctors" activeStyle={{  fontWeight: "bold",color: "orangered" }}>
                                            <i>Manage Doctors</i>
                    </NavLink>
                                    </li>
                                    {/* <li class="nav-item">
                                        <Link className="nav-link adminFont" to="/ShowPatient">
                                            <i>ViewPatient</i>
                    </Link>
                                    </li> */}

                                    <li class="nav-item">
                                        <NavLink className="nav-link adminFont" to="/ShowAllPatients" activeStyle={{  fontWeight: "bold",color: "orangered" }}>
                                            <i>Manage Patients</i>
                    </NavLink>
                                    </li>

                                    {/* <li class="nav-item">
                                        <Link className="nav-link adminFont" to="/ShowAppointment">
                                            <i>ViewAppointment</i>
                    </Link>
                                    </li> */}

                                    <li class="nav-item">
                                        <NavLink className="nav-link adminFont" to="/ShowAllAppointments" activeStyle={{  fontWeight: "bold",color: "orangered" }}>
                                            <i>Manage Appointments</i>
                    </NavLink>
                                    </li> 

                                    <li class="nav-item">
                                        <NavLink className="nav-link adminFont" to="/ShowAllFeedbacks" activeStyle={{  fontWeight: "bold",color: "orangered" }}>
                                            <i>Manage Feedbacks</i>
                    </NavLink>
                                    </li>

                                    {/* <li class="nav-item">
                                        <Link className="nav-link adminFont" to="/DeleteDoctor">
                                            <i>DeleteDoctor</i>
                    </Link>
                                    </li> */}

                                    {/* <li class="nav-item">
                                        <Link className="nav-link adminFont" to="/DeletePatient">
                                            <i>DeletePatient</i>
                    </Link>
                                    </li> */}
                                   
                                    <li class="nav-item">
                                        <Link className="nav-link adminFont" onClick={() => {
                                            history.push('/')
                                        }}><GoSignOut/>&nbsp;&nbsp;SignOut
                                        </Link>
                                    </li> 
                                    <li>
                                 
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div class="col p-3">
                            <Route exact path="/ShowDoctor" component={ShowDoctor}></Route>
                            <Route exact path="/ShowPatient" component={ShowPatient}></Route>
                            <Route exact path="/ShowAppointment" component={ShowAppointment}></Route>
                            <Route exact path="/ShowAllDoctors" component={ShowAllDoctors}></Route>
                            <Route exact path="/ShowAllPatients" component={ShowAllPatients}></Route>
                            <Route exact path="/ShowAllAppointments" component={ShowAllAppointments}></Route>
                            <Route exact path="/ShowAllFeedbacks" component={ShowAllFeedbacks}></Route>
                            <Route exact path="/DeleteDoctor" component={DeleteDoctor}></Route>
                            <Route exact path="/DeletePatient" component={DeletePatient}></Route>
                            
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    )
}
