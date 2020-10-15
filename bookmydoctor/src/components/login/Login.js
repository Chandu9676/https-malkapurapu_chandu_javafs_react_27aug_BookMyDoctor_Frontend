import React, { useState } from 'react'
import PatientSignIn from './PatientSignIn';
import DoctorSignIn from './DoctorSignIn';
import AdminSignIn from './AdminSignIn';
import "./Login.css" 
import {FaUserTie,FaUserCircle} from "react-icons/fa"

import { BiUserCircle } from "react-icons/bi";


export default function Login() {

    var [doctorLogin, setDoctorLogin] = useState(false);
    var [patientLogin, setPatientLogin] = useState(false);
    var [adminLogin, setAdminLogin] = useState(true);

    var setDoctor = () => {
        setDoctorLogin(true);
        setPatientLogin(false);
        setAdminLogin(false);
        
    }

    var setPatient = () => {
        setPatientLogin(true);
        setDoctorLogin(false);
        setAdminLogin(false);
    }
    var setAdmin = () => {
        setAdminLogin(true);
        setDoctorLogin(false);
        setPatientLogin(false);
    }
    return (

        <div>
            <div className="root-container ">

                <div className="box-controller">
                    <div
                        className={"controller " + (doctorLogin
                            ? "selected-controller"
                            : "")}
                        onClick={setDoctor}>
                         <b><BiUserCircle/>&nbsp;Doctor</b>
</div>
                    <div
                        className={"controller " + (patientLogin
                            ? "selected-controller"
                            : "")}
                        onClick={setPatient}>
                        <b><FaUserCircle/>&nbsp;Patient</b>
</div>
<div
                        className={"controller " + (adminLogin
                            ? "selected-controller"
                            : "")}
                        onClick={setAdmin}>
                      <b><FaUserTie/>&nbsp;Admin</b>
                     
</div>

                </div>
                <div className="box-container">
                    {doctorLogin && <DoctorSignIn />}
                    {patientLogin && <PatientSignIn />}
                    {adminLogin && <AdminSignIn />}

                </div>


            </div>
        </div>

    )
}
