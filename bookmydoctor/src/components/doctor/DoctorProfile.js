import React, { useState,useEffect } from 'react'
import "./DoctorProfile.css"
import UpdateDoctor from './UpdateDoctor'

const axios = require('axios').default;

export default function DoctorProfile({match}) {

var [update ,setUpdate] = useState(false);
var [doctor, setDoctor] = useState({});

const doctorId = match.params.doctorId;
useEffect(() => {
    axios.get('http://localhost:8080/getdoctor', {
        params: {
            doctorId: doctorId
        }
    }
    ).then((response) => {
        setDoctor(response.data.bean)
    });
}, [doctorId])



if(update){
    return <UpdateDoctor doctor={doctor} />;
}

    return (

        <div >
            <h4 className="fontColor" ><b style={{color:"rgb(134, 151, 151)"}}>Profile</b></h4>
            <a className="btn text-primary float-top" onClick={()=>{setUpdate(true)}}  >
                <i className="fas fa-pencil-alt"></i>
            </a>

            <div className="card doctorProfile border-top mt-3 ">
                <form className="ml-3 mt-4" action="">

                    <div class="form-group">
                        <label><b>Doctor Id</b></label><br />
                        <input type="text" value={doctor.doctorId}
                            className="col-sm-4"
                            id="doctorId" disabled />
                    </div>
                    <hr />
                    <div class="form-group">
                        <label><b>Name</b></label><br />
                        <input type="text" value={doctor.doctorName}
                            className="col-sm-4"

                            id="doctorName" disabled />
                    </div>
                    <div className="row">

                        <div class="form-group col-sm-2">
                            <label><b>speciality</b></label><br />
                            <input type="text" value={doctor.speciality}
                                className="doctorInput"
                                id="speciality" disabled />
                        </div>
                        <div class="form-group ">
                            <label className="ml-3"><b>Location</b></label><br />
                            <input type="text" value={doctor.location}
                                className="doctorInput ml-3"
                                id="location" disabled />
                        </div>
                    </div>
                        <div className="row">
                    <div class="form-group col-sm-2">
                        <label><b>Hospital name</b></label><br />
                        <input type="text" value={doctor.hospitalName}
                            className="doctorInput"
                            id="hospitalName" disabled />
                    </div>
                    <div class="form-group">
                        <label className="ml-3"><b>Mobile No</b></label><br />
                        <input type="number" value={doctor.mobileNo}
                            className="doctorInput ml-3"
                            id="mobileNo" disabled />

                    </div>
                    </div>
                    <div class="form-group">
                        <label><b></b>Email</label><br />
                        <input type="email" value={doctor.email}
                            className="col-sm-4"
                            id="email" aria-describedby="emailHelp" disabled />

                    </div>
                    <div class="form-group">
                        <label><b>Password*</b></label><br />
                        <input type="password" value={doctor.password} id="password"
                            className="col-sm-4"

                            disabled />
                    </div>
                </form>
            </div>
            
        </div>
    )
}
