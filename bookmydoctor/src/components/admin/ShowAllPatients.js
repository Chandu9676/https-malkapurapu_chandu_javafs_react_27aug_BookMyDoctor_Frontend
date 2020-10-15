import React,{useState,useEffect } from "react";
import ShowPatient from "./ShowPatient";
const axios = require('axios').default;


export default function ShowAllPatients() { 

    const [toGetPatient, setToGetPatient] = useState(false) 
    const [patients, setPatients] = useState([]);
    const [deletePatient , setDeletePatient] = useState(null);

    useEffect(() => {

        axios.get('http://localhost:8080/getallpatients').then((response) => {
            setPatients(response.data.list)
        });
        if(deletePatient != null){
            axios.delete('http://localhost:8080/deletepatient', {
                            params: {
                                 patientId: deletePatient.patientId
                             }
                         }
                         ).then((response) => {
                            
                         });
        }
    })

    if(toGetPatient){
        return <ShowPatient />
    } 

    return (
        <div>
            <div class="col-md-11">
            <div class=" button" >
                                <button type="submit" className="btn buttonFont btn-block"
                                    style={{ backgroundColor: " rgb(62, 189, 248)" }}
                                    onClick={()=>{setToGetPatient(true)}} >Find the Patient</button>
                            </div>
            </div>
            <div class="col-md-11">
            <table className="table table-striped">
            <thead className="thead" style={{background: " rgb(62, 71, 95)"}}>
                    <tr>
                        <th scope="col">Patient Id</th>
                        <th scope="col">Patient Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Blood Group</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Address</th>
                        <th scope="col">Age</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>


                    {
                        patients.map(
                            patient =>
                            <tr key={patient.id}>
                            <th scope="row"> {patient.patientId}</th>
    
                            <td>{patient.patientName}</td>
                            <td>{patient.email}</td>
                            <td>{patient.bloodGroup}</td>
                            <td>{patient.gender}</td>
                            <td>{patient.address}</td>
                            <td>{patient.age}</td>
                            <td>
                            <a className="btn text-danger"  >
                                <i className="fas fa-trash-alt" onClick={()=>{setDeletePatient(patient)}}></i>
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
