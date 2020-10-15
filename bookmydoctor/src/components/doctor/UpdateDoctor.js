import React,{useEffect,useState} from 'react'
import {BrowserRouter as Router,useHistory} from 'react-router-dom'
const axios = require('axios').default;

export default function UpdateDoctor(props) {


    var [updateDoctor, setUpdateDoctor] = useState(props.doctor);
    var [message, setMessage] = useState("");
    
    const handleInput = (e) => {

        var { name, value } = e.target;
        setUpdateDoctor({
            ...updateDoctor,
            [name]: value
        })
    }



    useEffect(() => {

        axios.put('http://localhost:8080/editdoctorprofile', updateDoctor


        ).then((response) => {
            setMessage(response.data.message);
        });
    })

    
    const handleSubmit = (e) => {
        e.preventDefault();

        
        if (message === "Profile Edited succesfully") {

            alert("Updated Successfully");

            // return <DoctorProfile />;
        } else {
            alert("not Updated");
        }
    }



    //const history = useHistory();
    
    // const handleSubmit = e =>{
    //     e.preventDefault();
    //   history.push("/DoctorProfile");
    // } 


    return (
        <div>
            <div class="container">
                <div class="col-md-6">
                   <div class="card">
                        <div class="card-body" >
                            <h4 className="fontColor" style={{color:"rgb(10, 166, 194)"}}><b>&nbsp;Update Doctor...</b><br/></h4>
                        <br/>
                        <form className="form" onSubmit={handleSubmit} >

                            <div class="form-group">
                                <label><b>Doctor ID</b></label><br />
                                <input type="text" value={updateDoctor.doctorId}
                                    class="form-control"
                                    id="doctorId" disabled />
                            </div>
                            <hr />
                            <div class="form-group">
                                <label><b>Full Name*</b></label><br />
                                <input type="text" placeholder="name"
                                   class="form-control"
                                   name="doctorName"
                                    pattern="^[a-zA-Z ]{3,20}"
                                    value={updateDoctor.doctorName}
                                    title="Only Alphabets are allowed"
                                    id="doctorName" 
                                        onChange={handleInput}
                                        required />
                            </div>

                            <div class="form-group">
                                <label><b>Speciality*</b></label><br />
                                <input type="text" placeholder="speciality"
                                   class="form-control"
                                   name="speciality"
                                    pattern="^[a-zA-Z ]{3,20}"
                                    value={updateDoctor.speciality}
                                    title="Only Alphabets are allowed"
                                    id="speciality" 
                                   
                                        onChange={handleInput}
                                        required />
                            </div>
                            <div class="form-group">
                                <label><b>Location*</b></label><br />
                                <input type="text" placeholder="location"
                                class="form-control"
                                name="location"
                                    pattern="^[a-zA-Z ]{3,20}"
                                    value={updateDoctor.location}
                                    title="Only Alphabets are allowed"
                                    id="location" 
                                    
                                    onChange={handleInput}
                                    required />
                            </div>
                            <div class="form-group">
                                <label><b>Hospital Name</b></label><br />
                                <input type="text" placeholder="hospital name"
                                   class="form-control"
                                   name="hospitalName"
                                    pattern="^[a-zA-Z ]{3,10}"
                                    value={updateDoctor.hospitalName}
                                    title="Only Alphabets are allowed"
                                    id="hospitalName" 
                                  
                                    onChange={handleInput}
                                     required />
                            </div>
                            <div class="form-group">
                                <label><b>Mobile Number*</b></label><br />
                                <input type="text" placeholder="mobile number"
                                    class="form-control"
                                    name="mobileNO"
                                    pattern="^[6-9][0-9]{9}"
                                    value={updateDoctor.mobileNo}
                                    title="Only Alphabets are allowed"
                                    id="mobileNo" 
                                   
                                    onChange={handleInput}
                                    required />

                            </div>
                            <div class="form-group">
                                <label><b>Email address*</b></label><br />
                                <input type="email" value={updateDoctor.email}
                                   class="form-control"
                                   name="email"
                                    id="email" aria-describedby="emailHelp" 
                                    
                                    onChange={handleInput}
                                    required />
                            </div>
                            <div class="form-group">
                                <label><b>Password*</b></label><br />
                                <input type="password" placeholder="password"
                                    class="form-control"
                                    name="password"
                                    id="password"
                                    value={updateDoctor.password}
                                    pattern="^[A-Za-z]\w{7,14}$"
                                    title="password should contain minimum 7 characters"
                                    
                                    onChange={handleInput}
                                    required />
                            </div>
                            <div class="button">
                                <button type="submit" className="btn buttonFont btn-block"
                                    style={{ backgroundColor: "rgb(82, 203, 224)" }} >Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
