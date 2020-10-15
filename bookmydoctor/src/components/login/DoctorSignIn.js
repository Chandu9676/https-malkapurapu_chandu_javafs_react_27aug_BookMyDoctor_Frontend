import React, { useState, useEffect }  from 'react'
//import SignUp from '../signUp/SignUp'
//import Login from './Login';

import { Redirect, useHistory } from 'react-router-dom';
const axios = require('axios').default;


export default function DoctorSignIn(props) {

  //var [loggedIn, setLoggedIn] = useState(false);
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");

  var [doctor, setDoctor] = useState({});

  const history = useHistory();


  useEffect(() => {
    axios.get('http://localhost:8080/logindoctor', {
      params: {
        email: email,
        password: password
      }
    }
    ).then((response) => {
      setDoctor(response.data.bean)
    });

  }, [email, password])

  const handleSubmit = e => {
    e.preventDefault();

    console.log(doctor);

    if (doctor != null) {
      alert("logged in");

      history.push("/DoctorSidebar",{doctor : doctor})
    
      setTimeout("location.reload(true)");
    } else {
      alert("enter valid credentials")
      // setTimeout("location.reload(true)");
    }


  }

  


  return (
    <div>

<form onSubmit = {handleSubmit}>
      <div className="inner-container">

        <div className="header">
          <i className="fas fa-user-md ml-4 "></i> Doctor Login
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
              required
              />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="login-input"
              pattern="^[A-Za-z]\w{7,14}$"
             title="password should contain minimum 7 - 14 characters"
              placeholder="password"
              onChange={
                e => { setPassword(e.target.value) }
              }
              required />
          </div>

          <button
            type="submit"
            className="login-btn"
            // onClick={handleClick}
            // data-backdrop="static"
          //  data-dismiss="modal" aria-label="Close"
            >Login</button>
        
        </div>
      </div>

      </form>

    </div>







  )
}
