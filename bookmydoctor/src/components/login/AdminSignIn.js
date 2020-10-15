import React, { useState,useEffect } from 'react'
import { Redirect, useHistory } from 'react-router-dom';
import {FaUserTie} from "react-icons/fa"

const axios = require('axios').default;



export default function AdminSignIn() {

  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");

  var [admin, setAdmin] = useState({});


  useEffect(() => {
    axios.get('http://localhost:8080/adminlogin', {
      params: {
        email: email,
        password: password
      }
    }
    ).then((response) => {
      setAdmin(response.data.message)
    });

  }, [email, password])

  
  const history = useHistory();

  const handleSubmit = e=>{
    e.preventDefault();
    if (admin === "Admin login successfull") {
      alert("logged in");
  
    history.push( "/AdminSidebar")

    setTimeout("location.reload(true)");
  }else{
    alert("Invalid credentials")
  }
}

  return (
    <div>

<form onSubmit = {handleSubmit}>
      <div className="inner-container">

        <div className="header">
        <FaUserTie/> Admin Login
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
              placeholder="password"
              pattern="^[A-Za-z]\w{7,14}$"
             title="password should contain minimum 7 - 14 characters"
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