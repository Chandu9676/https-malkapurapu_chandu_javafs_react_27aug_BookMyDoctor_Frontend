import React from "react";
const axios = require('axios').default;

export default class ShowPatient extends React.Component { 

    constructor(props) {
        super(props);

        this.state = {
            patientId: "",
            patient: {}
        } 
        
        this.handleInput = this.handleInput.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleInput(e) {
        this.setState({ patientId: e.target.value })
    }

    handleClick() {
        axios.get('http://localhost:8080/getpatient', {
            params: {
                patientId: this.state.patientId
            }
        }
        ).then((response) => {
            this.setState({ patient: response.data.bean })
        });
    } 
    
    render(){

    return (
        <div>
            <div className="card col-md-6">
                 
          <div class="form-group">
          <label className="mt-4">Enter ID to get Patient</label> 
          <input type="number" id="doctorId" placeholder=" Enter Patient ID"
           class="form-control"
           value={this.state.patientId}
           onChange={this.handleInput}
           required />
          </div>
          <div class="form-group">
            <button  class="btn btn-block " onClick={this.handleClick}  style={{background: " rgb(28, 171, 228)"}}
            >Get Patient</button>
          </div>
        </div>
        
            <table className="table table-striped">
            <thead className="thead" style={{background: " rgb(62, 71, 95)"}}>
                    <tr>
                        <th scope="col">Patient Id</th>
                        <th scope="col">Patient Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Blood Group</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Address</th>
                        <th scope="col">Age</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                <th scope="row"> {this.state.patient.patientId}</th>

                 <td>{this.state.patient.patientName}</td>
                 <td>{this.state.patient.email}</td>
                 <td>{this.state.patient.bloodGroup}</td>
                 <td>{this.state.patient.gender}</td>
                 <td>{this.state.patient.address}</td>
                 <td>{this.state.patient.age}</td>

                 </tr>
                </tbody>
            </table>
        </div>
    );
} 

}
