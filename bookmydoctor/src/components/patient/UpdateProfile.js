
import React,{useState,useEffect} from 'react';
import './UpdateProfile.css'; 
const axios = require('axios').default;

 
export default function UpdateProfile(props){   

  var [updatePatient, setUpdatePatient] = useState(props.patient);
    var [message, setMessage] = useState("");
    
    const handleInput = (e) => {

        var { name, value } = e.target;
        setUpdatePatient({
            ...updatePatient,
            [name]: value
        })
    }

    useEffect(() => {

      axios.put('http://localhost:8080/updatepatient', updatePatient


      ).then((response) => {
          setMessage(response.data.message);
      });
  })


  const handleSubmit = (e) => {
      e.preventDefault();

      if (message === "Patient Updated succesfully") {

          alert("Updated Successfully");

          // return <DoctorProfile />;
      } else {
          alert("not Updated");
      }
  }
  

    return( 
<div class="container">
<div class="col-md-6"> 
<div class="card">
<div class="card-body" >
<form  onSubmit={handleSubmit}>
<div class="form-group">
             <h5 class="header-color">Update Profile...</h5>
            </div>  

            <div class="form-group">
                    <label>Patient ID</label><br />
                    <input type="text" class="form-control" value="2"
                    id="patientId" 
                    value={updatePatient.patientId}
                    disabled />
                </div>

 <div class="form-group">
  <label>Full Name</label>
  <input type="text" class="form-control" id="patientName" 
  pattern="^[a-zA-Z]{4,15}"
  name="patientName"
  value={updatePatient.patientName}
  title="Only alphabets allowed 4 - 15 letters" 
  onChange={handleInput}
  required/>
 </div> 

 <div class="form-group">         
  <label >Mobile Number</label>
  <input type="text" class="form-control" id="mobileNo" 
   pattern="^[6-9][0-9]{9}"
   name="mobileNo"
   value={updatePatient.mobileNo}
   title="it contain 10 digits start with 6,7,8,9" 
   onChange={handleInput} required />

  
 </div> 
 <div class="form-group">
  <label>Email address</label>
  <input type="email" class="form-control" 
  name="email"
  id="email" 
  value={updatePatient.email}
  onChange={handleInput} required
  />
 </div>


 <div class="form-group">
  <label >Password</label>
  <input type="password" class="form-control" id="password" 
   pattern="^[A-Za-z]\w{7,14}$"
   name="password"
   value={updatePatient.password}
   title="password should contain one special character and minimum 8 characters"
   onChange={handleInput}

   required />
 </div>
 <div class="form-group form-check">
                <label id="check-box">Gender : &nbsp;&nbsp;</label>
                <input type="radio" name="gender" value="Male" id="check"  onChange={handleInput}/>&nbsp;Male&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" name="gender" value="Female" id="check"  onChange={handleInput} />&nbsp;Female
                </div>

              <div class="form-group form-check">
                <label for="checkbox" id="check-box">Blood group : &nbsp;&nbsp;</label>
                <input type="radio" name="bloodGroup" value="A+" id="check1"  onChange={handleInput}/>&nbsp;A+&nbsp;&nbsp;
                <input type="radio" name="bloodGroup" value="A-" id="check1"  onChange={handleInput}/>&nbsp;A-&nbsp;&nbsp;
                <input type="radio" name="bloodGroup" value="B+" id="check1"  onChange={handleInput}/>&nbsp;B+&nbsp;&nbsp;
                <input type="radio" name="bloodGroup" value="B-" id="check1"  onChange={handleInput}/>&nbsp;B-&nbsp;&nbsp;
                <input type="radio" name="bloodGroup" value="O+" id="check1"  onChange={handleInput}/>&nbsp;O+&nbsp;
                <input type="radio" name="bloodGroup" value="O-" id="check1"  onChange={handleInput}/>&nbsp;O-
                </div>

 <div class="form-group">
   <label >Age</label>
   <input type="text" class="form-control" id="age" 
   pattern="[1-9]{1}[0-9]{0,2}" 
   name="age"
   value={updatePatient.age}
   title="Age between 1 to 130" 
   onChange={handleInput}
    required/>

 </div>
 <div class="form-group">
  <label>Address</label><br/>
  <textarea type="text" id="address-box" 
  pattern="^[A-Za-z]{5,100}\w"
  name="address"
  value={updatePatient.address}
  title="Range between 5 to 100 "  
  onChange={handleInput}
  required/>

 
</div>
<div class="button">

 <button class="btn btn-block" style={{backgroundColor:"mediumvioletred"}}>Update</button>
 
</div>
</form> 
</div>
</div>
</div>
</div>
    )
}