import React,{useState,useEffect} from 'react'
//import UpdateAppointment from './UpadateAppointment'
import {BrowserRouter as useHistory,Redirect} from 'react-router-dom'
const axios = require('axios').default;


export default function ManageAppointments({match}) { 
 
const [deleteAppointmentbyPatient, setDeleteAppointment] = useState(null);

const [patientAppointments, setPatientAppointments] = useState([]);

const patientId = match.params.patientId;

useEffect(() => {
  axios.get('http://localhost:8080/getallappointmentsofpatient', {
      params: {
        patientId: patientId
      }
  }
  ).then((response) => {
    setPatientAppointments(response.data.list)
  });

  if (deleteAppointmentbyPatient != null) {
    axios.delete('http://localhost:8080/deleteappointmentbypatient', {
        params: {
            appointmentId: deleteAppointmentbyPatient.appointmentId
        }
    }
    ).then((response) => {

    });
}


}, [patientId,deleteAppointmentbyPatient])





    return (
        <div>
        <table className="table table-striped">
        <thead className="thead" style={{background: "rgb(196, 57, 145)"}}>
                   <tr>
                   <th scope="col">Appointment Id</th>
                   <th scope="col">Appointment date</th>
                      
                       <th scope="col">Doctor Name</th>
                       <th scope="col">Speciality</th>
                       <th scope="col">Hospital Name</th>
                       
                       <th scope="col">Actions</th>
                      
                   </tr>
               </thead>
               <tbody>
                    {
                        patientAppointments.map( 
                            patientAppointment =>
                        <tr key={patientAppointment.id}>
                             <th scope="row"> {patientAppointment.appointmentId}</th>
                             <td>{patientAppointment.appointmentDate}</td>
                             
                             
                             <td>{patientAppointment.doctor.doctorName}</td>
                             <td>{patientAppointment.doctor.speciality}</td>
                             <td>{patientAppointment.doctor.hospitalName}</td>
                             <td>
                             
                             <a className="btn text-danger" >
                             <i className="fas fa-trash-alt" onClick={() => { setDeleteAppointment(patientAppointment) }}></i>
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