import React,{useEffect,useState} from 'react'


const axios = require('axios').default;
export default function UpdateAppointment(props) {

  const [appointment, setAppointment] = useState(props.appointment);
  const [message, setMessage] = useState(""); 


  const handleInput = (e) => {

    var { name, value } = e.target;
    setAppointment({
      ...appointment,
      [name]: value
    })
  } 


  useEffect(() => {
    axios.put('http://localhost:8080/updateappointment', appointment


    ).then((response) => {
      setMessage(response.data.message);
    });
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    if (message === "Appointment Updated succesfully") {

      alert("Updated Successfully");


    } else {
      alert("not Updated");
    }
  }


    
    return (
        <div>
          <div class="container">
                <div class="col-md-6">
                    <div class="card mt-4">
                        <div class="card-body" >
            <h4 className="fontColor" style={{color:"rgb(10, 166, 194)"}}><b>&nbsp;&nbsp;&nbsp;Update Appointment...</b></h4>
            <hr/>
            <form onSubmit={handleSubmit}>
            <div class="form-group">
             <label><b>Appointment ID</b></label><br/>
             <input type="text" className="col-sm-8" id="appointmentId"
             placeholder="Appointment ID"
             name="appointmentId"
             value={appointment.appointmentId}
             disabled
             />
            </div> 
            <div class="form-group">
             <label><b>Doctor Name</b></label><br/>
             <input type="text" className="col-sm-8" id="doctorName"
             placeholder="Doctor Name"
             name="doctorName"
                    value={appointment.doctor.doctorName}
                    disabled
             />
            </div>
            <div class="form-group">
             <label><b>Patient ID</b></label><br/>
             <input type="text" className="col-sm-8" id="patientId"
             placeholder="Patient ID"
             name="patientId"
                    value={appointment.patient.patientId}
             disabled
             />
            </div>  
            <div class="form-group">
             <label><b>Patient Name</b></label><br/>
             <input type="text" className="col-sm-8" id="patientName"
             placeholder="Patient Name"
             value={appointment.patient.patientName}
             placeholder="Patient Name"
             disabled
             />
            </div> 
            
            
            <div class="form-group">
             <label><b>Appointment date</b></label><br/>
             <input type="date" name="appointmentDate" className="col-sm-8"
             value={appointment.appointmentDate}
             onChange={handleInput}
             required/>
             
            </div>
          <div class="button">
            
            <button type="submit" className="btn btn-block buttonFont col-sm-8" style={{backgroundColor:"rgb(82, 203, 224)"}}>Update</button>
            
          </div>
          </form>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}
