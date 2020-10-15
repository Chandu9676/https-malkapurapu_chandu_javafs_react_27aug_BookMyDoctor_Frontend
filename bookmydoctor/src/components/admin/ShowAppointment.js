import React from 'react'

import './ShowAppointment.css'
const axios = require('axios').default; 


export default class ShowAppointment extends React.Component {

   
    constructor(props) {
        super(props);

        this.state = {
            appointmentId: "",
            appointment: {}
        } 
        
        this.handleInput = this.handleInput.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleInput(e) {
        this.setState({ appointmentId: e.target.value })
    }

    handleClick() {
        axios.get('http://localhost:8080/getappointment', {
            params: {
                appointmentId: this.state.appointmentId
            }
        }
        ).then((response) => {
            this.setState({ appointment: response.data.bean })
        });
    } 
    

    render(){ 
    return (
        <div>
             <div className="card col-md-5">
                 
          <div class="form-group">
          <label className="mt-4">Enter ID to get Appointment</label> 
          <input type="number" id="doctorId" placeholder=" Enter ID"
           class="form-control" 
           value={this.state.appointmentId}
           onChange={this.handleInput}
           required />
          </div>
          <div class="form-group">
            <button  class="btn btn-block " onClick={this.handleClick} style={{background: " rgb(28, 171, 228)"}}
            >Get Appointment</button>
          </div>
        
        </div>
        <div class="col-md-11">

        </div>
            <table className="table table-striped">
            <thead className="thead" style={{background: " rgb(62, 71, 95)"}}>
                    <tr>
                    <th scope="col">Appointment Id</th>
                        <th scope="col">Appointment Date</th>
                        
                        <th scope="col">Patient Name</th>
                        <th scope="col">Mobile No</th>
                        <th scope="col">Doctor Name</th>
                        <th scope="col">Speciality</th>
                        <th scope="col">Hospital Name</th>
                       
                       
                    </tr>
                </thead>
                <tbody>
                <tr> 
                               <th scope="row"> {this.state.appointment.appointmentId}</th>


                                <td>{this.state.appointment.appointmentDate}</td>
                                <td>{this.state.appointment.patientName}</td>
                                <td>{this.state.appointment.mobileNo}</td>
                                <td>{this.state.appointment.doctorName}</td>
                                <td>{this.state.appointment.speciality}</td>
                                <td>{this.state.appointment.hospitalName}</td>
                               
                            </tr>
                </tbody>
            </table>
        </div>
    )
}
 

}