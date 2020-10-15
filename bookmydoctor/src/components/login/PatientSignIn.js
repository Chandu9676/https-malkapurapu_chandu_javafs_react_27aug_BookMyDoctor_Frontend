import React,{useState ,useEffect} from 'react'
import { useHistory } from 'react-router-dom';

import {FaUserCircle} from "react-icons/fa"

const axios = require('axios').default;
export default function PatientSignIn(props) { 

  //var [loggedIn, setLoggedIn] = useState(false);
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");

  var [patient, setPatient] = useState({});

const history = useHistory(); 

useEffect(() => {
  axios.get('http://localhost:8080/loginpatient', {
    params: {
      email: email,
      password: password
    }
  }
  ).then((response) => {
    setPatient(response.data.bean)
  });

}, [email, password])


  var handleSubmit = e=>{
    e.preventDefault();

    console.log(patient);

if (patient != null) {
  alert("login successfull");

  history.push("/Dashbord",{patient : patient})

  setTimeout("location.reload(true)");
  
}else{
  alert("Enter valid credentials ")
  
}
   
  }

    return (
      <form onSubmit={handleSubmit}>
        <div className="inner-container">
          <div className="header">
            <i class="fas fa-user-injured mr-2"></i>Patient login
          </div>
          <div className="box">
  
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="login-input"
                placeholder="email"
                onChange={
                  e => { setEmail(e.target.value) }
                }
                required/>
            </div>
  
  
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                pattern="^[A-Za-z]\w{7,14}$"
                title="password should contain minimum 7 - 14 characters"
                className="login-input"
                
                placeholder="password"
                onChange={
                  e => { setPassword(e.target.value) }
                }
                required/>
            </div>
            <button
              type="submit"
              className="login-btn"
              >Login</button> 

              {/* <button
              type="submitt"
              className="login-btn"
              >Change Password</button>  */}
          </div>
        </div>
        </form>
    )
}
