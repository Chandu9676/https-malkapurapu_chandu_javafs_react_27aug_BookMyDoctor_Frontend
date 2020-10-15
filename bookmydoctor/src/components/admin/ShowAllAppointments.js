
import React,{useState,useEffect} from 'react'
import ShowAppointment from './ShowAppointment'
const axios = require('axios').default;

export default function ShowAllAppointments() {

    const [toGetAappointment, setToGetAappointment] = useState(false) 
    const [appointments, setAppointments] = useState([]);
    const [deleteAppointment , setDeleteAppointment] = useState(null); 

    useEffect(() => {
        axios.get('http://localhost:8080/getallappointments').then((response)=>{
              setAppointments(response.data.list)
        });
        if(deleteAppointment != null){   
            axios.delete('http://localhost:8080/deleteappointmentbypatient', {
                            params: {
                                 appointmentId: deleteAppointment.appointmentId
                             }
                         }
                         ).then((response) => {
                            
                         });
        }
    })

   
    if(toGetAappointment){
        return <ShowAppointment />
    } 

    return (
        <div>
            <div class="col-md-11">
            <div class=" button" >
                                <button type="submit" className="btn buttonFont btn-block"
                                    style={{ backgroundColor: " rgb(62, 189, 248)" }} 
                                    onClick={()=>{setToGetAappointment(true)}}>Find the Appointment</button>
                            </div>
            </div>
            <div class="col-md-11">
            <table className="table table-striped">
            <thead className="thead" style={{background: " rgb(62, 71, 95)"}}>
                    <tr>
                    <th scope="col">Appointment Id</th>
                        <th scope="col">Appointment Date</th>
                        <th scope="col">PatientId</th>
                        <th scope="col">Patient Name</th>
                        <th scope="col">Doctor Id</th>
                        <th scope="col">Doctor Name</th>
                        <th scope="col">Hospital Name</th>
                        <th scope="col">Actions</th>
                       
                    </tr>
                </thead>
                <tbody> 
                    {
                        appointments.map( 
                            appointment =>
                            <tr key={appointment.id}>
                             <th scope="row"> {appointment.appointmentId}</th>
                             <td>{appointment.appointmentDate}</td>
                             <td>{appointment.patient.patientId}</td>
                             <td>{appointment.patient.patientName}</td>
                             <td>{appointment.doctor.doctorId}</td> 
                             <td>{appointment.doctor.doctorName}</td>
                             <td>{appointment.doctor.hospitalName}</td>
                            <td>
                            <a className="btn text-danger"  >
                                    <i className="fas fa-trash-alt" onClick={()=>{setDeleteAppointment(appointment)}}></i>
                                </a> 
                               
                                 
                           </td>
                        </tr>
                        )
                    }
                    
                </tbody>
            </table>
        </div>
        </div>
    )
}
