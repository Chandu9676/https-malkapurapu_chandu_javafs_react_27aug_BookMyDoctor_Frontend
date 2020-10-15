import React,{useState,useEffect} from 'react';
import UpdateProfile from './UpdateProfile';
import './ViewProfile.css'; 
const axios = require('axios').default;

 
export default function ViewProfile({ match }){  
const [profile, setProfile] = useState(false)

var [patientProfile, setPatientProfile] = useState({});


const patientId = match.params.patientId; 


useEffect(() => {
  axios.get('http://localhost:8080/getpatient', {
      params: {
        patientId: patientId
      }
  }
  ).then((response) => {
    setPatientProfile(response.data.bean)
  });
}, [patientId])


console.log(patientProfile);

if(profile){
return <UpdateProfile patient={patientProfile}/>
}
    return(
        <div> 

            <h4><b>&nbsp;&nbsp;&nbsp;Profile</b></h4>
            <a className="btn text-primary float-top" onClick={()=>{setProfile(true)}} >&nbsp;&nbsp;
                <i className="fas fa-pencil-alt"></i>
            </a>
            <div class="col-md-8">
            <div class="card ">
            <div class="card-body">
            
            <form > 

            <div class="form-group">
             <label>Patient Id</label>
             <input type="text" class="form-control" id="patientName"
             value={patientProfile.patientId} disabled/>
            </div>   
            <div class="form-group">
             <label>Full Name</label>
             <input type="text" class="form-control" id="patientName"
             value={patientProfile.patientName} disabled/>
            </div> 

            <div class="form-group">           
             <label >Mobile Number</label>
             <input type="text" class="form-control" id="mobileNo" 
            value={patientProfile.mobileNo} disabled/>
             
            </div> 
            <div class="form-group">
             <label>Email address</label>
             <input type="email" class="form-control" id="email" value={patientProfile.email} disabled / >
            </div>
            <div class="form-group">
             <label >Password</label>
             <input type="password" class="form-control" id="password" 
             value={patientProfile.password} disabled/>
            </div>

            <div class="form-group">
             <label>Gender</label>
             <input type="text" class="form-control"  value={patientProfile.gender} id="check"  disabled/>
            </div>

            <div class="form-group">
             <label>Blood group</label>
             <input type="text" class="form-control"  value={patientProfile.bloodGroup} id="check"  disabled/>
            </div>

            <div class="form-group">
              <label >Age</label>
              <input type="text" class="form-control" id="age" 
              value={patientProfile.age} disabled/>
    
            </div>
            <div class="form-group">
             <label>Address</label><br/>
             <input type="text" id="location" class="form-control" value={patientProfile.address} disabled />
            
               </div>

                </form>
            </div>
            </div>
            </div>
            </div>
        
            )
}       
         
                {/* //        <table className="table table-striped">
                //        <thead className="thead" style={{background: " rgb(189, 20, 127)"}}>
                //            <tr>
                //                <th scope="col" >patientId</th>
                //                <th scope="col" >Patient Name</th>
                //                <th scope="col" >Mobile No</th>
                //                <th scope="col" >Email</th>
                //                <th scope="col">Password</th>
                               
                //                <th scope="col" class="row-color">Gender</th>
                //                <th scope="col" class="row-color">Blood group</th>
                //                <th scope="col" class="row-color">Address</th>
                //                <th scope="col" class="row-color">Actions</th>
                //            </tr>
                //        </thead>
                //        <tbody>
                //            <tr>
                //                <th scope="row"> 1</th>
                //                <td>chandu</td>
                //                <td>9676046060</td>
                //                <td>chandu@123gmail.com</td>
                //                <td>chandu123</td>
                //                <td>Male</td>
                //                <td>A-</td>
                //                <td>Hyderabad</td>
                //                <td>
                //                <a className="btn text-primary" onClick={()=>{ViewProfile(true)}}>
                //                        <i className="fas fa-pencil-alt"></i>
                //                    </a>
                //                </td>
                //            </tr>
                //        </tbody>
                //    </table>  */}
        
   

{/* //<th scope="col">Age</th>
//<td>23</td> */}