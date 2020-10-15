import React from 'react';
//import './SignupPatient.css'; 
import {BrowserRouter as Router,useHistory} from 'react-router-dom'


 
export default function UpdateAppointment(){  
  const history = useHistory();

  const handleSubmit = e =>{
      e.preventDefault();
    history.push("/manageAppointments");
  }
  
   
    return(
        <div class="container">
         
         <div class="col-md-6"> 
         <div class="card">
         <div class="card-body" > 

         <form onSubmit={handleSubmit}>
         <div class="form-group">
             <h5 class="header-color">Update Appointment...</h5>
            </div> 
            <div class="form-group">
             <label>Patient Name</label>
             <input type="text" class="form-control" id="patientName" 
             pattern="^[a-zA-Z]{4,15}"
             title="Only alphabets allowed 4 - 15 letters" required/>
            </div> 
            <div class="form-group">
                        
             <label >Mobile Number</label>
             <input type="text" class="form-control" id="mobileNo" 
             pattern="^[6-9][0-9]{9}"
             title="it contain 10 digits start with 6 7 8 9 " required />
             
            </div> 
            
            <div class="form-group">
             <label>Appointment date</label><br/>

             <input type="date" min="2020-10-01"
             max="2020-10-31"
             name="appointmentDate" required/>
            
            </div>
          <div class="button">
           
            <button type="submit" class="btn btn-block" style={{backgroundColor:"mediumvioletred"}}>Update</button>
            
          </div>
          </form>
          </div>
          </div>
          </div>
     </div>  
    )
    }