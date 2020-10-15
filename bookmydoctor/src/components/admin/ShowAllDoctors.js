import React,{useState,useEffect} from "react";
//import {BrowserRouter as Link,Redirect} from 'react-router-dom'
import ShowDoctor from "./ShowDoctor";
const axios = require('axios').default;

export default function ShowAllDoctors() { 

    const [toGetDoctor, setToGetDoctor] = useState(false) 
    const [doctors, setdoctors] = useState([]);
    const [deleteDoctor, setDeleteDoctor] = useState(null);
    

    useEffect(() => {
        axios.get('http://localhost:8080/getalldoctors').then((response)=>{
            setdoctors(response.data.list)
        }); 

        

        if (deleteDoctor != null) {
            axios.delete('http://localhost:8080/deletedoctor', {
                params: {
                    doctorId: deleteDoctor.doctorId
                }
            }
            ).then((response) => {

            });
        }
    })


       
 


   
if(toGetDoctor){
//return <Redirect to = "/ShowDoctor" />
return <ShowDoctor/>

}  




    return (
        <div>
            <div class="col-md-11">
            <div class=" button" >
                                <button type="submit" className="btn  btn-block" onClick={()=>{setToGetDoctor(true)}}
                                    style={{ backgroundColor: "  rgb(62, 189, 248)" }}>Find the Doctor</button>
                            </div>
            </div>
            <div class="col-md-11">
            <table className="table table-striped">
            <thead className="thead" style={{background: " rgb(62, 71, 95)"}}>
                    <tr>
                    <th scope="col">Doctor Id</th>
                        <th scope="col">Doctor Name</th>
                        <th scope="col">Speciality</th>
                        <th scope="col">Location</th>
                        <th scope="col">Hospital Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Actions</th>
                       
                    </tr>
                </thead>
                <tbody> 
                    { 
                        doctors.map(
                            doctor =>
                            <tr key = {doctor.id}>
                            <th scope="row">{doctor.doctorId}</th>
    
                        <td>{doctor.doctorName}</td>
                        <td>{doctor.speciality}</td>
                        <td>{doctor.location}</td>
                        <td>{doctor.hospitalName}</td>
                        <td>{doctor.email}</td>
                        
                        <td>
                        
                        <a className="btn text-danger" >
                                    <i className="fas fa-trash-alt" onClick={() => { setDeleteDoctor(doctor) }}></i>
                                </a> 
                        </td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
        </div>
    );

    }
