import React from 'react'
import UpdateAppointment from './UpdateAppointment'
import { useState,useEffect } from 'react'


const axios = require('axios').default;
export default function ShowAppointments({match}) {
const [update , setUpdate] = useState(null);
const [deleteAppointment , setDeleteAppointment] = useState(null);
const [appointments ,setAppointments] = useState([]);
const [message , setMessage] = useState("");
const doctorId = match.params.doctorId;

useEffect(() => {

    axios.get('http://localhost:8080/getappointments',{
        params:{
            doctorId : doctorId
        }
    }).then((response) => {
        setAppointments(response.data.list)
    });

    if(deleteAppointment!=null){
        axios.delete('http://localhost:8080/deleteappointment',{
            params:{
                appointmentId : deleteAppointment.appointmentId
            }
        }).then((response)=>{
            // setMessage(response.data.message);
        })
    }
})

if(update!=null){
    return <UpdateAppointment appointment = {update}/>
}


    return (
        <div>

            <table className="table table-striped">
            <thead className="thead" style={{background: " rgb(124, 120, 123)"}}>
                    <tr>
                        <th scope="col">Appointment Id</th>
                        
                        <th scope="col">Patient Id</th>
                        <th scope="col">Patient Name</th>
                        <th scope="col">Appointment Date</th>
                        <th>Actions</th>
                        
                       
                    </tr>
                </thead>
                <tbody>
                {
                        appointments.map(
                            appointment =>
                            <tr key={appointment.id}>
                        <th scope="row"> {appointment.appointmentId}</th>

                        <td> {appointment.patient.patientId}</td>
                        <td> {appointment.patient.patientName}</td>
                        <td> {appointment.appointmentDate}</td>
                        <td>
                            <a className="btn text-primary" >
                                <i className="fas fa-pencil-alt " onClick={()=>{setUpdate(appointment)}}></i>
                            </a>
                       
                            <a className="btn text-danger" >
                                <i className="fas fa-trash-alt" onClick={()=>{setDeleteAppointment(appointment)}}></i>
                            </a>
                        </td>
                    </tr>
                        )
                    }
                </tbody>
            </table>
            
        </div>
    )
}
